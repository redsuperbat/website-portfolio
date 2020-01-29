<template>
<div id="home">
  <Start
  :homePage="uiLabels.homePage"
  />
  <Projects
  :projectPage="uiLabels.projectPage"
  @setPortfolioOffset="setPortfolioOffset"
  />
  <div class="slanted-container-left"></div>
  <About
  :aboutPage="uiLabels.aboutPage"
  @titleOffset="setAboutOffset"
  />
  <div class="slanted-container-right"></div>
  <Footer/>
</div>
</template>

<script>
import Projects from '@/components/Projects'
import Start from '@/components/Start'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  methods: {
    setAboutOffset: function (offset) {
      this.$emit('setAboutOffset', offset)
    },
    setPortfolioOffset: function (offset) {
      this.$emit('setPortfolioOffset', offset)
    }
  },
  components: {
    Projects,
    Start,
    About,
    Footer
  },
  props: {
    uiLabels: Object
  }
}
</script>

<style scoped>

.slanted-container-left {
    height: 15vh;
    background: linear-gradient(to left top,white 50%, transparent 51%);
    bottom: 0;
}
.slanted-container-right {
    height: 15vh;
    background: linear-gradient(to right top, transparent 50%,white 51%);
    bottom: 0;
}

</style>
