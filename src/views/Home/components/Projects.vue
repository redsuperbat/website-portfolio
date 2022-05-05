<template>
  <div class="px-2 sm:px-5 py-5 bg-white">
    <h1 class="text-4xl py-5 text-primary">
      {{ t('title') }}
    </h1>
    <div class="grid-temp-col-350 grid gap-5 bg-white">
      <ProjectCard
        class="transition transform hover:scale-105 duration-300 cursor-pointer"
        v-for="card in translatedCards"
        :key="card.title"
        :cardInfo="card"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue';
import { useI18n } from 'vue-i18n';
import { cards } from './constants/cards';
import { computed } from 'vue';
const { t, locale } = useI18n();
const translatedCards = computed(() => {
  return locale.value === 'sv' ? cards.sv : cards.en;
});
</script>

<i18n lang="json" locale="sv">
{
  "title": "Bitar av vad jag håller på med"
}
</i18n>

<i18n lang="json" locale="en">
{
  "title": "Bits and pieces of what I'm up to"
}
</i18n>
