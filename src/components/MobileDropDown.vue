<template>
  <div class="flex flex-col justify-evenly w-full fixed z-10 drawer">
    <div class="flex justify-between p-2">
      <HamburgerMenu @click="openDrawer" :open="showButtons" />
      <LangButtons />
    </div>
    <Transition>
      <div class="flex flex-col items-center h-24" v-show="showButtons">
        <Button
          class="p-button-text w-full flex justify-center"
          v-for="item in routes"
          :key="item.name"
          height="70"
          @click="route(item)"
        >
          <h1 class="text-white">
            {{ getToolbarText(item.meta?.i18n) }}
          </h1>
        </Button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HamburgerMenu from './HamburgerMenu.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { useAppStore } from '@/store/app-store';
const router = useRouter();
const store = useAppStore();

const showButtons = ref(false);

const emit = defineEmits(['open']);
defineProps<{
  routes: RouteRecordRaw[];
}>();

function openDrawer() {
  emit('open');
  showButtons.value = !showButtons.value;
}

function getToolbarText(key: unknown) {
  if (typeof key !== 'string') return;
  return store.content.toolbar[key];
}

function route(route: RouteRecordRaw) {
  showButtons.value = false;
  router.push(route);
}
</script>

<style scoped>
.drawer {
  background-color: rgb(106, 13, 173, 0.7);
}
/* we will explain what these classes do next! */
.v-enter-active {
  transition: height 0.2s ease, opacity 0.5s ease-in;
}
.v-leave-active {
  transition: opacity 0.2s ease, height 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
}
</style>
