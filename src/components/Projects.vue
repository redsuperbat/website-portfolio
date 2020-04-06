<template>
  <div ref="main">
    <h1 class="display-2" style="margin-top:45px">{{ projectPage.title }}</h1>
    <v-container id="main">
      <ProjectCard
        class="ProjectCard"
        v-for="(card, name) in projectPage.cards"
        :key="name"
        :cardInfo="card"
      />
    </v-container>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    ProjectCard
  },
  mounted: function() {
    var offset = this.$refs.main.offsetTop;
    this.$emit("setPortfolioOffset", offset);
  },
  props: {
    projectPage: Object
  }
};
</script>

<style scoped>
#main {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
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
