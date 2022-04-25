<template>
  <div class="drawer">
    <div class="icon-wrapper">
      <HamburgerMenu @click="openDrawer" :open="showButtons" />
      <LangButtons />
    </div>
    <div v-expand:y class="flex flex-col" v-if="showButtons">
      <Button
        class="p-button-text grid place-items-center"
        v-for="item in routes"
        :key="item.name"
        height="70"
        @click="$router.push(item)"
      >
        <h1 class="title white--text">{{ item }}</h1>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HamburgerMenu from './HamburgerMenu.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { routes } from '@/router';

const showButtons = ref(false);
const emit = defineEmits(['open']);
function openDrawer() {
  emit('open');
  setTimeout(() => (showButtons.value = showButtons.value), 100);
}
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
}

.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 3;
  background-color: rgb(106, 13, 173, 0.7);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 0 0 15px;
}
</style>
