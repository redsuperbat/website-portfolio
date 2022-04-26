<template>
  <div class="flex justify-center align-center">
    <Button
      @click="store.setLocale('en')"
      :disabled="store.locale === 'en'"
      :class="{ active: !(store.locale === 'en') }"
    >
      EN
    </Button>
    <Button
      @click="store.setLocale('sv')"
      :disabled="store.locale === 'sv'"
      :class="{ active: !(store.locale === 'sv') }"
    >
      SV
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app-store';
import Button from 'primevue/button';
const store = useAppStore();
</script>
