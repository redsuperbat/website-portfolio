<template>
  <div class="h-screen flex flex-col items-center">
    <div class="flex flex-col justify-center items-center h-full text-white">
      <h1 class="text-5xl">Max Netterberg</h1>
      <div class="text-center px-2 mt-5">
        <span>{{ homePage.description.span1 }}</span>
        <span style="color:orange; font-weight:bold"
          >{{ homePage.description.span2 }}
        </span>
        <span>{{ homePage.description.span3 }}</span>
        <span style="color:aquamarine; font-weight:bold">
          {{ homePage.description.span4 }}
        </span>
      </div>
    </div>
    <div class="h-auto flex flex-col items-center">
      <i class="text-white pi pi-chevron-circle-down mb-5 animate-bounce"></i>
      <h1 class="text-white">{{ homePage.scroll }}</h1>
      {{ hover }}
    </div>
  </div>
</template>

<script lang="ts">
import { useLang } from '@/hooks/useLang';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const { uiLabels } = useLang();
    const homePage = computed(() => uiLabels.value.homePage);
    const hover = ref(false);
    return { homePage, hover };
  },
});
</script>
