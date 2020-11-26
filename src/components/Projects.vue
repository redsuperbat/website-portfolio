<template>
  <h1 style="margin-top:45px">{{ projectPage.title }}</h1>
  <div class="card-wrapper">
    <ProjectCard
      class="ProjectCard"
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
  setup() {
    const { uiLabels } = useLang();
    const projectPage = computed(() => uiLabels.value.projectPage);
    return {
      projectPage,
    };
  },
});
</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

h1 {
  text-align: center;
  color: white;
}

.ProjectCard {
  margin: 25px;
  transition: transform 0.5s;
}

.ProjectCard:hover {
  transform: scale(1.06);
  cursor: pointer;
}
</style>
