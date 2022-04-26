<template>
  <div>
    <About />
    <div class="slanted-container-left"></div>
    <Projects />
    <div class="slanted-container-right"></div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Projects from '@/components/Projects.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
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
