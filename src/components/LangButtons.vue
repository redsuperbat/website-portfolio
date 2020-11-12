<template>
  <div id="main" class="flex justify-center align-center">
    <Button
      class="p-button-text"
      @click="setLang('en')"
      :disabled="!isSv"
      :class="{ active: !isSv }"
    >
      EN
    </Button>
    <span />
    <Button
      class="p-button-text"
      @click="setLang('sv')"
      :disabled="isSv"
      :class="{ active: isSv }"
    >
      SV
    </Button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useLang } from '@/hooks/useLang';
import Button from 'primevue/button';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const { setLang, currentLang } = useLang();

    const isSv = computed(() => currentLang.value === 'sv');

    return {
      setLang,
      currentLang,
      isSv,
    };
  },
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
#main {
  width: 120px;
}
span {
  border: 1px solid white;
  height: 30px;
}
.active {
  color: white !important;
  text-decoration: underline;
}
</style>
