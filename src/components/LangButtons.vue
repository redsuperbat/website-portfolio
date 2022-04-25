<template>
  <div id="main" class="flex justify-center align-center">
    <Button
      class="p-button-text"
      v-if="$root"
      @click="setLang('sv')"
      :disabled="$i18n.locale === 'sv'"
      :class="{ active: !isSv }"
    >
      EN
    </Button>
    <span />
    <Button
      class="p-button-text"
      @click="setLang('en')"
      :disabled="$i18n.locale === 'en'"
      :class="{ active: isSv }"
    >
      SV
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const isSv = computed(() => i18n.locale.value === 'sv');
function setLang(lang: string) {
  i18n.locale.value = lang;
}
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
