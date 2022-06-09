<template>
  <i
    class="pi pi-question-circle ml-auto text-primary"
    v-tooltip.right="t('question-tooltip')"
  />
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<i18n lang="json">
{
  "en": {
    "question-tooltip": "The information entered will be saved for 1 week and is not tied to you as a person."
  },
  "sv": {
    "question-tooltip": "Informationen sparas i en vecka och kan inte kopplas till dig som person."
  }
}
</i18n>
