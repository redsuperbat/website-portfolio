<template>
  <div class="h-24"></div>
  <div class="grid place-items-center h-screen">
    <div class="max-w-lg w-full chat-grid h-full sm:h-[60vh] overflow-y-scroll">
      <div class="message-list">
        <MessageList :messages="messages" :is-typing="isTyping" />
      </div>
      <div class="sticky bottom-0 left-0">
        <span class="p-input-icon-right w-full">
          <i
            class="pi pi-send cursor-pointer -translate-y-2 !text-3xl sm:-translate-y-1 sm:!text-xl"
            @click="sendMessage"
          />
          <InputText
            v-model="message"
            @keypress.enter="sendMessage"
            type="text"
            class="w-full h-14 sm:h-10"
          />
        </span>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="showDialog"
    :dismissable-mask="false"
    :close-on-escape="false"
    :show-header="false"
    :auto-z-index="false"
  >
    <div class="pt-6 flex flex-col space-y-3">
      <div class="flex space-x-2 items-center">
        <h1>{{ t('dialog-title') }}</h1>
        <DisclaimerIcon />
      </div>
      <InputText :placeholder="t('name-placeholder')" v-model="memberName" />
      <Button
        @click="joinChat"
        :label="t('join-chat-btn')"
        :loading="loading"
      />
    </div>
  </Dialog>
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
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import DisclaimerIcon from '@/components/DisclaimerIcon.vue';
import { useToast } from '@/composables/use-toast';

import MessageList from './components/MessageList.vue';

import { GetChatDto, Member } from './types/get-chat.dto';
import { Message } from './types/message';
import { Event } from './types/events';
import { LocalStorageKey } from './constants';

const route = useRoute();
const toast = useToast();
const { t } = useI18n();

const chatId = route.params.id as string;
let senderId = localStorage.getItem(LocalStorageKey.SenderId);

const messages = ref<Message[]>([]);
const isTyping = ref(false);
const showDialog = ref(false);
const message = ref('');
const memberName = ref('');
const loading = ref(false);

const members = new Map<string, Member>();

if (!senderId) {
  showDialog.value = true;
}

async function joinChat() {
  loading.value = true;
  await useFetch(`${httpBaseUrl}/join-chat`)
    .post({
      chatId,
      name: memberName.value,
    })
    .json<{ senderId: string }>()
    .then((res) => {
      const senderId = res.data.value?.senderId;
      if (!senderId) {
        toast('Something went wrong!');
        return;
      }
      localStorage.setItem(LocalStorageKey.SenderId, senderId);
      showDialog.value = false;
    });
  await getChat();
  loading.value = false;
}

async function getChat() {
  await useFetch<GetChatDto>(`${httpBaseUrl}/chats/${chatId}`)
    .json()
    .then((res: UseFetchReturn<GetChatDto>) => {
      const data = res.data.value;
      if (!data) return;
      messages.value = data.messages.map((message) => ({
        belongsTo: message.senderId === senderId ? 'sender' : 'receiver',
        text: message.content,
        senderName:
          data.members.find((member) => member.id === message.senderId)?.name ??
          '',
      }));
      data.members.forEach((member) => {
        members.set(member.id, member);
      });
    });
}

onMounted(() => {
  getChat();
});

const { data } = useWebSocket(
  `${wsBaseUrl}/chat-room/${chatId}?senderId=${localStorage.getItem(
    LocalStorageKey.SenderId,
  )}`,
  {
    autoReconnect: true,
  },
);

watch(data, (data) => {
  const parsedData: Event = JSON.parse(data);
  switch (parsedData.eventType) {
    case 'ChatMessageSentEvent': {
      messages.value.push({
        belongsTo: parsedData.senderId === senderId ? 'sender' : 'receiver',
        text: parsedData.content,
        senderName: members.get(parsedData.senderId)?.name ?? '',
      });
      isTyping.value = false;
      break;
    }

    case 'ChatMessageStartedEvent': {
      if (
        parsedData.senderId !== localStorage.getItem(LocalStorageKey.SenderId)
      ) {
        isTyping.value = true;
      }
      break;
    }

    case 'ChatMessageStoppedEvent': {
      if (
        parsedData.senderId !== localStorage.getItem(LocalStorageKey.SenderId)
      ) {
        isTyping.value = false;
      }
      break;
    }

    case 'ChatJoinedEvent': {
      toast(`${parsedData.name} joined the chat! 🤘`, 'info');
      break;
    }
  }
});

const { pause, resume } = watchPausable(message, async (msg) => {
  if (msg.length > 1) {
    await useFetch(`${httpBaseUrl}/start-typing`).post({
      senderId,
      chatId,
      eventType: 'ChatMessageStartedEvent',
    });
    pause();
  }
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
  if (message.value) {
    const text = message.value;
    message.value = '';
    await useFetch(`${httpBaseUrl}/send-chat-message`)
      .post({
        chatId,
        content: text,
        senderId: localStorage.getItem(LocalStorageKey.SenderId),
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
    "dialog-title": "Please enter your name in this chat",
    "name-placeholder": "Chat name",
    "join-chat-btn": "Join chat!"
  },
  "sv": {
    "dialog-title": "Skriv ditt namn för denna chatt.",
    "name-placeholder": "Chattnamn",
    "join-chat-btn": "Anslut till chatten!"
  }
}
</i18n>
