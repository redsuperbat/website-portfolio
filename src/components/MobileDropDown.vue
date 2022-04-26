<template>
  <div class="flex flex-col justify-evenly w-full fixed z-10 drawer">
    <div class="flex justify-between p-2">
      <HamburgerMenu @click="openDrawer" :open="showButtons" />
      <LangButtons />
    </div>
    <div
      class="flex flex-col items-center transition-height"
      v-show="showButtons"
    >
      <Button
        class="p-button-text w-full flex justify-center"
        v-for="item in routes"
        :key="item.name"
        height="70"
        @click="$router.push(item)"
      >
        <h1 class="text-white">
          {{ item.meta?.title }}
        </h1>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HamburgerMenu from './HamburgerMenu.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { RouteRecordRaw } from 'vue-router';

const showButtons = ref(false);
const emit = defineEmits(['open']);
defineProps<{
  routes: RouteRecordRaw[];
}>();
function openDrawer() {
  emit('open');

  showButtons.value = !showButtons.value;
}
</script>

<style scoped>
.drawer {
  background-color: rgb(106, 13, 173, 0.7);
}
</style>
