<template>
  <div id="main" class="flex justify-center align-center">
    <Button
      class="p-button-text"
      v-if="$root"
      @click="store.setLocale('en')"
      :disabled="store.locale === 'en'"
      :class="{ active: !(store.locale === 'en') }"
    >
      EN
    </Button>
    <span />
    <Button
      class="p-button-text"
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

<style lang="scss" scoped>
#main {
  width: 120px;
}

span {
  border: 1px solid white;
  height: 30px;
}

.active {
  color: white !important;
  text-decoration: underline;
}
</style>
