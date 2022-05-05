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
          v-for="{ display, name } in routes"
          :key="name"
          height="70"
          @click="route(name)"
        >
          <h1 class="text-white">
            {{ display }}
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

const showButtons = ref(false);

const emit = defineEmits(['open', 'route']);
defineProps<{
  routes: { display: string; name: string }[];
}>();

function openDrawer() {
  emit('open');
  showButtons.value = !showButtons.value;
}

function route(name: string) {
  emit('route', name);
  showButtons.value = false;
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
