<template>
  <div class="grid place-items-center h-screen">
    <div class="max-w-lg w-full chat-grid h-full sm:h-[60vh] overflow-y-scroll">
      <div class="message-list">
        <MessageList :messages="messages" :is-typing="isTyping"></MessageList>
      </div>
      <div class="sticky bottom-0 left-0">
        <span class="p-input-icon-right w-full">
          <i class="pi pi-send cursor-pointer" @click="sendMessage" />
          <InputText
            v-model="message.text"
            type="text"
            class="w-full h-14 sm:h-10"
            @keypress.enter="sendMessage"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { httpBaseUrl, wsBaseUrl } from '@/api/urls';
import {
  useFetch,
  UseFetchReturn,
  useWebSocket,
  watchDebounced,
  watchPausable,
} from '@vueuse/core';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MessageList from './components/MessageList.vue';
import { GetChatDto } from './types/get-chat.dto';
import { Message } from './types/message';
const toast = useToast();
const messages = ref<Message[]>([]);
const route = useRoute();
const router = useRouter();
const chatId = route.params.id as string;
let senderId = localStorage.getItem('portfolio.senderId');
const isTyping = ref(false);

if (!crypto?.randomUUID) {
  toast.add({
    severity: 'error',
    summary: 'Your browser does not support chatting with me 😭',
    life: 3000,
  });
  router.replace('/');
}

if (!senderId) {
  senderId = crypto.randomUUID();
  localStorage.setItem('portfolio.senderId', senderId);
}

const message = reactive<Message>({
  text: '',
  belongsTo: 'sender',
});

if (!chatId) {
  router.replace('/chat');
}

useFetch<GetChatDto>(`${httpBaseUrl}/chats/${chatId}`)
  .json()
  .then((res: UseFetchReturn<GetChatDto>) => {
    messages.value =
      res.data.value?.messages.map((message) => ({
        belongsTo: message.sender === senderId ? 'sender' : 'receiver',
        text: message.content,
      })) ?? [];
  });

const { data } = useWebSocket(
  `${wsBaseUrl}/chat-room/${chatId}?senderId=${senderId}`,
  {
    autoReconnect: true,
  },
);

watch(data, (data) => {
  const parsedData = JSON.parse(data) as {
    content: string;
    sender: string;
    eventType: string;
  };
  if (parsedData.eventType === 'ChatMessageSentEvent') {
    messages.value.push({
      belongsTo: parsedData.sender === senderId ? 'sender' : 'receiver',
      text: parsedData.content,
    });
    isTyping.value = false;
  }

  if (
    parsedData.eventType === 'ChatMessageStartedEvent' &&
    parsedData.sender !== senderId
  ) {
    isTyping.value = true;
  }

  if (
    parsedData.eventType === 'ChatMessageStoppedEvent' &&
    parsedData.sender !== senderId
  ) {
    isTyping.value = false;
  }
});

const { pause, resume } = watchPausable(message, async () => {
  await useFetch(`${httpBaseUrl}/start-typing`).post({
    sender: senderId,
    chatId,
    eventType: 'ChatMessageStartedEvent',
  });
  pause();
});

watchDebounced(
  message,
  async () => {
    await useFetch(`${httpBaseUrl}/stop-typing`).post({
      sender: senderId,
      chatId,
      eventType: 'ChatMessageStoppedEvent',
    });
    resume();
  },
  { debounce: 2000 },
);

async function sendMessage() {
  if (message.text) {
    const text = message.text;
    message.text = '';
    await useFetch(`${httpBaseUrl}/send-chat-message`)
      .post({
        chatId,
        eventType: 'ChatMessageSentEvent',
        content: text,
        sender: senderId,
        messageId: crypto.randomUUID(),
        sentAt: new Date().toISOString(),
      })
      .json();
  }
}
</script>

<style scoped>
.chat-grid {
  display: grid;
  grid-template:
    'message-list' 1fr
    'text-area' auto
    / 1fr;
}

.message-list {
  grid-area: message-list;
}
.text-area {
  grid-area: text-area;
}
</style>
