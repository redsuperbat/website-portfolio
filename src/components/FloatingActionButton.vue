<template>
  <Button
    :icon="`pi ${icon}`"
    class="p-button-rounded fixed bottom-5 right-5"
    :style="{ height: `${size}px`, width: `${size}px` }"
    @click="$emit('click')"
  >
  </Button>
</template>

<script lang="ts">
import Button from 'primevue/button';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Button,
  },
  props: {
    size: {
      type: Number,
      default: 60,
    },
    icon: {
      type: String,
      default: 'pi-chevron-up',
    },
  },
});
</script>
