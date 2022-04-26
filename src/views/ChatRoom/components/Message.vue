<template>
  <div
    :class="{
      'ml-auto': belongsTo === 'sender',
      'mr-auto': belongsTo === 'receiver',
    }"
    ref="messageEl"
  >
    <Chip
      :class="{
        '!bg-blue-400': belongsTo === 'sender',
        '!bg-green-400': belongsTo === 'receiver',
      }"
    >
      {{ text }}
    </Chip>
  </div>
</template>

<script lang="ts" setup>
import Chip from 'primevue/chip';
import { onMounted, ref } from 'vue';
const messageEl = ref<HTMLDivElement>();
onMounted(() => {
  if (messageEl.value) {
    messageEl.value.scrollIntoView({ behavior: 'smooth' });
  }
});

defineProps<{
  text: string;
  belongsTo: 'sender' | 'receiver';
}>();
</script>
