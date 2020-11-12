<template>
  <Card @click="handleClick(cardInfo.url)" target="_blank" class="card">
    <template v-slot:header>
      <img :src="cardInfo.img" :alt="cardInfo.title" />
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

<style lang="scss" scoped>
.card {
  border-radius: 5px;
}
img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 166px;
  object-fit: cover;
}
</style>
