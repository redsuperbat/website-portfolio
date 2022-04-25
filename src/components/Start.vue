<template>
  <div class="h-screen flex flex-col items-center">
    <div class="flex flex-col justify-center items-center h-full text-white">
      <h1 class="text-5xl">Max Netterberg</h1>
      <div class="text-center px-2 mt-5">
        <span>{{ store.content.homePage.description.span1 }}</span>
        <span style="color: orange; font-weight: bold"
          >{{ store.content.homePage.description.span2 }}
        </span>
        <span>{{ store.content.homePage.description.span3 }}</span>
        <span style="color: aquamarine; font-weight: bold">
          {{ store.content.homePage.description.span4 }}
        </span>
      </div>
    </div>
    <div class="h-auto flex flex-col items-center">
      <i class="text-white pi pi-chevron-circle-down mb-5 animate-bounce"></i>
      <h1 class="text-white">{{ store.content.homePage.scroll }}</h1>
      {{ hover }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app-store';
import { ref } from 'vue';

const store = useAppStore();
const hover = ref(false);
</script>
