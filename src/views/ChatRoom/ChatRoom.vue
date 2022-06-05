<template>
  <div class="h-24"></div>
  <div class="grid place-items-center h-screen">
    <div class="max-w-lg w-full chat-grid h-full sm:h-[60vh] overflow-y-scroll">
      <div class="message-list">
        <MessageList
          :chatting-with="chattingWith"
          :messages="messages"
          :is-typing="isTyping"
        ></MessageList>
      </div>
      <div class="sticky bottom-0 left-0">
        <span class="p-input-icon-right w-full">
          <i
            class="pi pi-send cursor-pointer -translate-y-2 !text-3xl sm:-translate-y-1 sm:!text-xl"
            @click="sendMessage"
          />
          <InputText
            v-model="message.text"
            @keypress.enter="sendMessage"
            type="text"
            class="w-full h-14 sm:h-10"
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
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MessageList from './components/MessageList.vue';
import { GetChatDto } from './types/get-chat.dto';
import { Message } from './types/message';

const route = useRoute();
const router = useRouter();

const chatId = route.params.id as string;
let senderId = localStorage.getItem('portfolio.senderId');

const messages = ref<Message[]>([]);
const isTyping = ref(false);
const chattingWith = ref('');

if (!senderId) {
  router.replace('/chat');
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
    const data = res.data.value;
    if (!data) return;
    chattingWith.value =
      data.senderId === senderId ? data.senderName : 'Max Netterberg';
    messages.value = data.messages.map((message) => ({
      belongsTo: message.senderId === senderId ? 'sender' : 'receiver',
      text: message.content,
    }));
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
    senderId,
    chatId,
    eventType: 'ChatMessageStartedEvent',
  });
  pause();
});

watchDebounced(
  message,
  async () => {
    await useFetch(`${httpBaseUrl}/stop-typing`).post({
      senderId,
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
        content: text,
        senderId,
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

<i18n lang="json">
{
  "en": {
    "toast": "Your browser does not support chatting with me 😭"
  },
  "sv": {
    "toast": "Din webbläsare har inte support för att chatta med mig 😭"
  }
}
</i18n>
