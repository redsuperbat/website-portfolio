<template>
      <v-app id="main">
        <Toolbar
        :header="uiLabels.header"
        :currentPage="currentPage"
        :lang="lang"
        :topScroll="topScroll"
        :textColor="textColor"
        @switchLang="switchLang"
        @switchPage="switchPage"
        @scroll="scroll"
        />
        <v-content>

          <Home
          v-if="currentPage != 'contact'"
          :uiLabels="uiLabels"
          @setAboutOffset="setAboutOffset"
          @setPortfolioOffset="setPortfolioOffset"
          ></Home>

          <Contact v-if="currentPage === 'contact'"
          :contactPage="uiLabels.contactPage"
          ></Contact>

        </v-content>
        <v-btn
        fixed
        dark
        fab
        right
        v-if="topScroll & $vuetify.breakpoint.mdAndUp"
        color="purple"
        @click="scroll('home'); switchPage('home');"
        style="margin-top:75px; margin-right:25px">
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import shared from './shared'
import Contact from '@/views/Contact'
import Home from '@/views/Home'

import goTo from 'vuetify/es5/services/goto'

export default {
  name: 'App',
  mixins: [shared],
  components: {
    Toolbar,
    Home,
    Contact
  },
  data: () => ({
    theme: 'dark',
    aboutOffset: 0,
    portfolioOffset: 0,
    currentPage: 'home',
    topScroll: false,
    textColor: false
  }),
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    switchPage: function (name) {
      this.currentPage = name
    },
    handleScroll: function () {
      if (window.scrollY >= this.aboutOffset - 80) {
        this.textColor = true
      } else {
        this.textColor = false
      }
      if (window.scrollY >= this.portfolioOffset * 0.4) {
        this.topScroll = true
      } else {
        this.topScroll = false
      }
    },
    setAboutOffset: function (offset) {
      this.aboutOffset = offset
    },
    setPortfolioOffset: function (offset) {
      this.portfolioOffset = offset
    },
    scroll: function (name) {
      switch (name) {
        case 'home':
          goTo(0)
          break
        case 'portfolio':
          goTo(this.portfolioOffset)
          break
        case 'about':
          goTo(this.aboutOffset)
      }
    }
  }
}
</script>

<style scoped>

#main{
background-color: #320032;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23840084' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23840084'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

}

</style>
