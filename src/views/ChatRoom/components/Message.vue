<template>
  <div
    :class="{
      'ml-auto': belongsTo === 'sender',
      'mr-auto': belongsTo === 'receiver',
    }"
    ref="messageEl"
  >
    <div class="flex flex-col items-start">
      <div>
        <small class="m-1" v-if="belongsTo === 'receiver'">
          {{ senderName }}
        </small>
      </div>
      <div
        class="rounded-full px-2 py-1 text-white strokeme"
        :class="{
          'bg-blue-400': belongsTo === 'sender',
        }"
        :style="{
          'background-color': getColor(),
        }"
      >
        {{ text }}
      </div>
    </div>
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

const props = defineProps<{
  text: string;
  belongsTo: 'sender' | 'receiver';
  senderName: string;
}>();

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i: number) {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - c.length) + c;
}

function getColor() {
  const color =
    props.belongsTo === 'receiver'
      ? `#${intToRGB(hashCode(props.senderName))}`
      : '';
  return color;
}
</script>

<style>
.strokeme {
  color: white;
  text-shadow: -0.25px -0.25px 0 #000, 0.25px -0.25px 0 #000,
    -0.25px 0.25px 0 #000, 0.25px 0.25px 0 #000;
}
</style>
