<template>
  <div id="home">
    <Start />
    <Projects />
    <div class="slanted-container-left"></div>
    <About />
    <div class="slanted-container-right"></div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
export { default as Projects } from '@/components/Projects.vue';
export { default as Start } from '@/components/Start.vue';
export { default as About } from '@/components/About.vue';
export { default as Footer } from '@/components/Footer.vue';
</script>

<style scoped>
.slanted-container-left {
  height: 15vh;
  background: linear-gradient(to left top, white 50%, transparent 51%);
  bottom: 0;
}
.slanted-container-right {
  height: 15vh;
  background: linear-gradient(to right top, transparent 50%, white 51%);
  bottom: 0;
}
</style>
