<template>
  <div class="h-screen grid place-items-center px-4">
    <div
      class="rounded bg-white max-w-sm w-full p-4 flex flex-col items-center"
    >
      <div class="flex w-full justify-evenly p-10">
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

      <Button
        @click="startChat"
        :loading="loading"
        icon="pi pi-comments"
        iconPos="right"
        :label="t('start-chat-btn')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
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

if (!crypto?.randomUUID) {
  toast.add({
    severity: 'error',
    summary: t('chat-unsupported'),
    life: 3000,
  });
  router.replace('/');
}

async function startChat() {
  loading.value = true;
  const res = await useFetch<{ chatId: string }>(`${httpBaseUrl}/start-chat`)
    .post({
      chatId: crypto.randomUUID(),
      eventType: 'ChatStartedEvent',
    })
    .json();
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
    router.push(`/chat/${res.data.value?.chatId}`);
  }
}
</script>

<i18n lang="json">
{
  "en": {
    "chat-unsupported": "Your browser does not support chatting with me 😭",
    "start-chat-btn": "Start a chat with me!",
    "cannot-create-chat": "Unable to start a chat, try again later 💬"
  },
  "sv": {
    "chat-unsupported": "Din webbläsare har inte support för att chatta med mig 😭",
    "start-chat-btn": "Starta en chatt med mig!",
    "cannot-create-chat": "Kunde inte starta en chatt, testa igen senare 💬"
  }
}
</i18n>
