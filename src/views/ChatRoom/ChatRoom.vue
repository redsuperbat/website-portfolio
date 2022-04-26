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
            class="w-full"
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
  useWebSocket,
  watchDebounced,
  watchPausable,
} from '@vueuse/core';
import InputText from 'primevue/inputtext';
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MessageList from './components/MessageList.vue';
import { Message } from './types/message';

let senderId = localStorage.getItem('portfolio.senderId');
if (!senderId) {
  senderId = crypto.randomUUID();
  localStorage.setItem('portfolio.senderId', senderId);
}
console.log({ senderId });

const isTyping = ref(false);

const message = reactive<Message>({
  text: '',
  belongsTo: 'sender',
});
const messages = ref<Message[]>([]);
const route = useRoute();
const router = useRouter();
const chatId = route.params.id as string;

if (!chatId) {
  router.replace('/chat');
}

const { ws } = useWebSocket(`${wsBaseUrl}/chat-room/${chatId}`, {
  autoReconnect: true,
});

ws.value?.addEventListener('message', (message) => {
  const parsedData = JSON.parse(message.data) as {
    content: string;
    sender: string;
    eventType: string;
  };

  if (parsedData.eventType === 'ChatMessageSentEvent') {
    messages.value.push({
      belongsTo: parsedData.sender === senderId ? 'sender' : 'receiver',
      text: parsedData.content,
    });
  }

  if (
    parsedData.eventType === 'ChatMessageStartedEvent' &&
    parsedData.sender !== senderId
  ) {
    console.log({ sender: parsedData.sender, senderId });

    isTyping.value = true;
  }

  if (
    parsedData.eventType === 'ChatMessageStoppedEvent' &&
    parsedData.sender !== senderId
  ) {
    isTyping.value = false;
  }
});

watch(isTyping, (val) => console.log('Istyping', val));

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
  { debounce: 4000 },
);

async function sendMessage() {
  if (message.text) {
    const text = message.text;
    message.text = '';
    useFetch(`${httpBaseUrl}/send-chat-message`)
      .post({
        chatId,
        eventType: 'ChatMessageSentEvent',
        content: text,
        sender: senderId,
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
