<template>
  <transition name="expand" :style="style">
    <slot />
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    const style = computed(() => ({ '--max-height': props.maxHeight }));
    return { style };
  },
  props: {
    maxHeight: Number,
  },
});
</script>

<style lang="scss" scoped>
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  transition: ease 0.5s;
}

.expand-enter-to,
.expand-leave-from {
  max-height: var(--max-height);
  transition: ease 0.5s;
}
</style>
