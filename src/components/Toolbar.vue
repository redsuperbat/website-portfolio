<template>
  <nav class="invisible sm:visible z-10 bg-purple-500 bg-opacity-40">
    <!-- Desktop Mode -->
    <div class="grid items-center w-36">
      <h4>Max <span>Netterberg</span></h4>
    </div>

    <div class="flex align-center">
      <Button
        v-for="item in filteredRoutes"
        :key="item.name"
        class="p-button-text"
        @click="$router.push(item)"
      >
        {{ item.name }}
      </Button>
    </div>

    <LangButtons />
  </nav>

  <!-- Mobile Mode -->
  <MobileDropDown class="visible sm:invisible" />
</template>

<script lang="ts" setup>
import MobileDropDown from './MobileDropDown.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { routes } from '@/router';
const filteredRoutes = routes.filter((route) => route.name);
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
