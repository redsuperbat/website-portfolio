<template>
  <div class="drawer">
    <div class="icon-wrapper">
      <HamburgerMenu @click="openDrawer" :open="showbuttons" />
      <LangButtons
        :lang="lang"
        :textColor="textColor"
        @switchLang="switchLang"
      />
    </div>
    <ExpandTransition maxHeight="400px">
      <div class="button-wrapper" v-if="showbuttons">
        <Button
          class="p-button-text center-children"
          v-for="(item, name) in header"
          :key="item"
          height="70"
          @click="route(name)"
        >
          <h1 class="title white--text">{{ item }}</h1>
        </Button>
      </div>
    </ExpandTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HamburgerMenu from './HamburgerMenu.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import ExpandTransition from '@/components/ExpandTransition.vue';
export default defineComponent({
  name: 'MobileDropDown',
  data: () => ({
    showbuttons: false,
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
    Button,
    ExpandTransition,
  },
  methods: {
    switchLang(lang: string) {
      this.$emit('switchLang', lang);
    },
    openDrawer() {
      this.$emit('openDrawer');
      setTimeout(() => (this.showbuttons = !this.showbuttons), 100);
    },
    route(name: string) {
      this.$emit('scroll', name);
      this.openDrawer();
    },
  },
});
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
