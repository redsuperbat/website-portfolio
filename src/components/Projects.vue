<template>
  <h1 class="text-4xl py-5 text-center text-white">
    {{ store.content.projectPage.title }}
  </h1>
  <div class="grid-temp-col-350 grid gap-5 px-2 sm:px-5">
    <ProjectCard
      class="transition transform hover:scale-105 duration-300 cursor-pointer"
      v-for="card in store.content.projectPage.cards"
      :key="card.title"
      :cardInfo="card"
    />
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { useAppStore } from '@/store/app-store';
const store = useAppStore();
</script>
