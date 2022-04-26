<template>
  <div class="flex space-x-2" v-if="loading">
    <div
      v-for="dot in dots"
      class="animate-bounce h-2 w-2 rounded-full bg-primary"
      :class="dot"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const dots = ['', 'animation-delay-100', 'animation-delay-200'];
defineProps<{
  loading: boolean;
}>();
</script>
