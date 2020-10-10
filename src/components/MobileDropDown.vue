<template>
  <div class="drawer">
    <div class="icon-wrapper">
      <HamburgerMenu @openDrawer="openDrawer" :open="open" />
      <LangButtons
        :lang="lang"
        :textColor="textColor"
        @switchLang="switchLang"
      />
    </div>

    <v-expand-transition>
      <div class="button-wrapper" v-if="buttonsAnim">
        <v-btn
          v-for="(item, name) in header"
          :key="item"
          text
          height="70"
          @click="route(name)"
        >
          <h1 class="title white--text">{{ item }}</h1>
        </v-btn>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
import LangButtons from './LangButtons';
export default {
  name: 'MobileDropDown',
  data: () => ({
    buttonsAnim: false,
  }),
  props: {
    header: Object,
    open: Boolean,
    lang: String,
    textColor: Boolean,
  },
  components: {
    HamburgerMenu,
    LangButtons,
  },
  methods: {
    switchLang(lang) {
      this.$emit('switchLang', lang);
    },
    openDrawer() {
      this.$emit('openDrawer');
      setTimeout(() => (this.buttonsAnim = !this.buttonsAnim), 100);
    },
    route(name) {
      this.$emit('scroll', name);
      this.openDrawer();
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
}

.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 3;
  background-color: rgb(106, 13, 173, 0.7);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 0 0 15px;
}
</style>
