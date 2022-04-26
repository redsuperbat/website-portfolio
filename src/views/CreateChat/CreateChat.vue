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

      <Button @click="startChat" :loading="loading">
        <h1>{{ store.content.createChatPage.startChatBtn }}</h1>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { useFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAppStore } from '@/store/app-store';
import { httpBaseUrl } from '@/api/urls';
const router = useRouter();
const loading = ref(false);
const store = useAppStore();

async function startChat() {
  loading.value = true;
  const res = await useFetch<{ chatId: string }>(`${httpBaseUrl}/start-chat`)
    .post({
      chatId: crypto.randomUUID(),
      eventType: 'ChatStartedEvent',
    })
    .json();
  if (res.statusCode.value && res.statusCode.value > 400) {
    loading.value = false;
    return;
  }
  loading.value = false;
  if (res.data.value?.chatId) {
    router.push(`/chat/${res.data.value?.chatId}`);
  }
}
</script>
