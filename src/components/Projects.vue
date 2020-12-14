<template>
  <h1 class="text-4xl py-5 text-center text-white">{{ projectPage.title }}</h1>
  <div class="grid-temp-col-350 grid gap-5 px-2 sm:px-5">
    <ProjectCard
      class="ransition transform hover:scale-105 duration-300 cursor-pointer"
      v-for="(card, name) in projectPage.cards"
      :key="name"
      :cardInfo="card"
    />
  </div>
</template>

<script lang="ts">
import { useLang } from '@/hooks/useLang';
import { computed, defineComponent } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
export default defineComponent({
  components: {
    ProjectCard,
  },
  setup() {
    const { uiLabels } = useLang();
    const projectPage = computed(() => uiLabels.value.projectPage);

    return {
      projectPage,
    };
  },
});
</script>
