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
