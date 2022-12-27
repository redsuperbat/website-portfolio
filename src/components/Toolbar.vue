<template>
  <nav class="invisible sm:visible z-10 bg-purple-500 bg-opacity-40">
    <!-- Desktop Mode -->
    <div class="grid items-center w-36">
      <h4>Max <span>Netterberg</span></h4>
    </div>

    <div class="flex align-center">
      <Button
        v-for="{ display, name } in filteredRoutes"
        :key="name"
        class="p-button-text"
        :class="{
          underline: $route.name === name,
        }"
        @click="route(name)"
      >
        <span class="text-white">
          {{ display }}
        </span>
      </Button>
    </div>

    <LangButtons />
  </nav>

  <!-- Mobile Mode -->
  <MobileDropDown
    @route="route"
    :routes="filteredRoutes"
    class="visible sm:invisible"
  />
</template>

<script lang="ts" setup>
import MobileDropDown from './MobileDropDown.vue';
import LangButtons from './LangButtons.vue';
import Button from 'primevue/button';
import { router, routes } from '@/router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();

const filteredRoutes = computed(() =>
  routes
    .filter((route) => route.meta?.public)
    .map(({ name, meta }) => ({
      display: t(meta?.i18n as string),
      name: name?.toString() as string,
    })),
);

function route(name: string) {
  // So we can href to another route
  const route = routes.find((it) => it.name === name);
  if (route?.redirect && typeof route.redirect === 'string') {
    window.location.href = route.redirect;
  }
  router.push({ name });
}
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

<i18n lang="json">
{
  "en": {
    "landing-page": "Landing Page",
    "create-chat-page": "Start a chat with me!",
    "blog-page": "Look at what I have to say..."
  },
  "sv": {
    "landing-page": "Förstasidan",
    "create-chat-page": "Starta en chatt med mig!",
    "blog-page": "Kolla på vad jag har att säga"
  }
}
</i18n>
