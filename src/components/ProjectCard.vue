<template>
  <Card @click="handleClick(cardInfo.url)" target="_blank" class="rounded">
    <template v-slot:header>
      <img :src="cardInfo.img" :alt="cardInfo.title" class="rounded-t" />
    </template>
    <template v-slot:title>
      {{ cardInfo.title }}
    </template>
    <template v-slot:subtitle>
      {{ cardInfo.language }}
    </template>
    <template v-slot:content>
      {{ cardInfo.description }}
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Card as ICard } from '@/types/uiLabels';
import Card from 'primevue/card';
export default defineComponent({
  setup() {
    const handleClick = (link: string) => {
      window.open(link, '_blank');
    };
    return { handleClick };
  },
  components: {
    Card,
  },
  props: {
    cardInfo: Object as () => ICard,
  },
});
</script>
