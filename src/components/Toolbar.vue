<template>
  <nav v-if="!xs">
    <!-- Desktop Mode -->

    <h4>Max <span>Netterberg</span></h4>

    <div class="flex align-center">
      <Button
        v-for="(item, key) in header"
        :key="item"
        class="p-button-text"
        @click="route(key)"
      >
        {{ item }}
      </Button>
      <div>{{ lg }}</div>
    </div>

    <LangButtons />
  </nav>

  <!-- Mobile Mode -->
  <MobileDropDown
    class="hidden-md-and-up"
    v-else
    :open="drawer"
    @openDrawer="openDrawer"
    @scroll="scroll"
    :header="header"
    :lang="lang"
    :textColor="textColor"
    @switchLang="switchLang"
  />
</template>

<script lang="ts">
import MobileDropDown from './MobileDropDown.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { computed, defineComponent } from 'vue';
import { useLang } from '@/hooks/useLang';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useDimensions } from '@/hooks/useDimensions';
export default defineComponent({
  setup() {
    const { uiLabels } = useLang();
    const header = computed(() => uiLabels.value.header);
    const { xs } = useDimensions();

    const router = useRouter();
    const route = (route: string) => {
      console.log(route);

      if (route === 'contact' || route === 'home') {
        router.push('/' + route);
        return;
      }
    };

    return {
      header,
      route,
      xs,
    };
  },
  name: 'Toolbar',
  components: {
    // MobileDropDown,
    Button,
    LangButtons,
  },
});
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template:
    'icon navigation lang'
    / auto 1fr auto;
  position: fixed;
  width: 100%;
  padding: 0 15px;
}
h4 {
  color: white;
  font-weight: lighter;
  span {
    font-weight: bold;
  }
}
.flex.align-center {
  justify-content: space-evenly;
}
img {
  height: 40px;
  width: auto;
}
</style>
