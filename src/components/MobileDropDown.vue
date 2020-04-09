<template>
  <div :class="open ? 'open-drawer' : 'closed-drawer'">
    <div class="icon-wrapper">
      <HamburgerMenu
        @openDrawer="openDrawer"
        :open="open"
        class="burger-icon"
      />
      <LangButtons
        :lang="lang"
        :textColor="textColor"
        @switchLang="switchLang"
      />
    </div>

    <transition name="fade">
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
    </transition>
  </div>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu";
import LangButtons from "./LangButtons";
export default {
  name: "MobileDropDown",
  data: () => ({
    buttonsAnim: false
  }),
  props: {
    header: Object,
    open: Boolean,
    lang: String,
    textColor: Boolean
  },
  components: {
    HamburgerMenu,
    LangButtons
  },
  methods: {
    switchLang(lang) {
      this.$emit("switchLang", lang);
    },
    openDrawer() {
      this.$emit("openDrawer");
      setTimeout(() => (this.buttonsAnim = !this.buttonsAnim), 100);
    },
    route(name) {
      this.$emit("scroll", name);
      this.openDrawer();
    }
  }
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  opacity: 1;
  height: 210px;
}

.fade-enter-active {
  animation: bookIconAnim 0.5s ease-in-out;
}
.fade-leave-active {
  animation: bookIconAnim 0.5s reverse ease-in-out;
}

@keyframes bookIconAnim {
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    height: 210px;
    opacity: 1;
  }
}

.closed-drawer,
.open-drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100vw;
  position: fixed;
  z-index: 3;
  background-color: rgb(106, 13, 173, 0.2);
  height: 70px;
  transition: ease-in-out 0.5s;
}
.open-drawer {
  height: 400px;
  background-color: rgb(106, 13, 173, 0.7);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
}
.burger-icon {
  margin-right: auto;
  margin-left: 25px;
}
</style>
