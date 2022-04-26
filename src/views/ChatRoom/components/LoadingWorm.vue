<template>
  <div class="flex space-x-2" ref="worm">
    <div
      v-for="dot in dots"
      class="animate-bounce h-2 w-2 rounded-full bg-primary"
      :class="dot"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const dots = ['', 'animation-delay-100', 'animation-delay-200'];
const worm = ref<HTMLDivElement>();

onMounted(() => {
  if (worm.value) {
    worm.value.scrollIntoView({ behavior: 'smooth' });
  }
});
</script>
