<template>
  <div class="h-screen grid place-items-center px-4">
    <div
      class="rounded bg-white max-w-sm w-full p-4 flex flex-col items-center space-y-4"
    >
      <div class="flex flex-col w-full">
        <i class="pi pi-question-circle ml-auto text-primary" />
        <div class="flex w-full justify-evenly pt-6 px-4">
          <img
            class="object-cover w-14 animate-bounce"
            src="@/assets/chat-1.png"
            alt=""
          />
          <img
            class="object-cover w-14 animate-bounce animation-delay-150"
            src="@/assets/chat-2.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col w-64">
        <label for="name">{{ t('name') }}</label>
        <InputText v-model="name" class="w-full" id="name" type="username" />
      </div>
      <Button
        @click="startChat"
        :disabled="!name"
        :loading="loading"
        :label="t('start-chat-btn')"
        class="w-64"
        icon="pi pi-comments"
        iconPos="right"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import { useFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { httpBaseUrl } from '@/api/urls';
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const toast = useToast();
const { t } = useI18n();

const loading = ref(false);
const name = ref('');

async function startChat() {
  loading.value = true;
  const res = await useFetch(`${httpBaseUrl}/start-chat`)
    .post({
      chosenName: name.value,
    })
    .json<{ chatId: string; senderId: string }>();
  const statusCode = res.statusCode.value ?? Infinity;
  if (statusCode >= 400) {
    toast.add({
      severity: 'error',
      summary: t('cannot-create-chat'),
      life: 3000,
    });
    loading.value = false;
    return;
  }
  loading.value = false;
  if (res.data.value?.chatId) {
    localStorage.setItem('portfolio.senderId', res.data.value.senderId);
    router.push(`/chat/${res.data.value.chatId}`);
  }
}
</script>

<i18n lang="json">
{
  "en": {
    "chat-unsupported": "Your browser does not support chatting with me 😭",
    "start-chat-btn": "Start a chat with me!",
    "cannot-create-chat": "Unable to start a chat, try again later 💬",
    "name": "What is your name?"
  },
  "sv": {
    "chat-unsupported": "Din webbläsare har inte support för att chatta med mig 😭",
    "start-chat-btn": "Starta en chatt med mig!",
    "cannot-create-chat": "Kunde inte starta en chatt, testa igen senare 💬",
    "name": "Vad heter du?"
  }
}
</i18n>
