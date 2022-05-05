<template>
  <div class="flex justify-center align-center">
    <Button
      v-for="locale in availableLocales"
      @click="$i18n.locale = locale"
      :disabled="$i18n.locale === locale"
      :class="{ active: !($i18n.locale === locale) }"
    >
      {{ locale.toUpperCase() }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { availableLocales } from '@/i18n/instance';
</script>

<i18n lang="json">
{
  "en": {
    "landing-page": "Landing Page",
    "create-chat-page": "Start a chat with me!",
    "blog-page": "Look at what I have to say..."
  },
  "sv": {
    "landing-page": "Förstasidan",
    "create-chat-page": "Starta en chatt med mig!",
    "blog-page": "Kolla på vad jag har att säga"
  }
}
</i18n>
