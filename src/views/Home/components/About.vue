<template>
  <div
    class="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-5 pt-24 p-10"
  >
    <div class="relative">
      <img
        class="w-full object-cover rounded-full max-w-md"
        src="https://pbs.twimg.com/profile_images/1516000008230871043/zpyE4_6e_400x400.jpg"
        alt="Programming"
        ref="image"
      />
      <span ref="rocket" class="absolute bottom-0 left-0">🚀</span>
    </div>
    <div
      class="max-w-lg text-justify text-white flex flex-col items-center space-y-5"
    >
      <h1 class="text-center text-4xl">
        {{ t('title') }}
      </h1>

      <p v-for="v in [1, 2, 3]">
        {{ t('paragraph' + v) }}
      </p>

      <Button v-if="false" @click="handleClick">
        <span class="text-white">
          {{ t('resume') }}
        </span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app-store';
import Button from 'primevue/button';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const store = useAppStore();
const { t } = useI18n();

const image = ref<HTMLImageElement>();
const rocket = ref<HTMLSpanElement>();

watch(image, (image) => {
  const height = image?.getBoundingClientRect().width;
  const width = height;
  if (!height) return;
  if (!width) return;
  let start: number;
  let previousPos: number = 0;
  const diagonal = Math.sqrt(height ** 2 + width ** 2);

  const animateRocket = (timestamp: number) => {
    if (!rocket.value) return;
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (previousPos < diagonal) {
      const top = Math.min(0.1 * elapsed, height);
      const left = Math.min(0.1 * elapsed, width);
      previousPos = Math.sqrt(top ** 2 + left ** 2);
      rocket.value.style.bottom = `${top}px`;
      rocket.value.style.left = `${left}px`;
      requestAnimationFrame(animateRocket);
    } else {
      rocket.value.style.display = 'none';
    }
  };
  requestAnimationFrame(animateRocket);
});

const handleClick = () => {
  window.open(
    'https://drive.google.com/file/d/1HWIkQeoJBltslr3E5vWIDSHCf-g-s8Wb/view?usp=sharing',
    '_blank',
  );
};
</script>

<i18n lang="json">
{
  "en": {
    "resume": "Download my CV",
    "title": "Welcome to my corner of the internet!",
    "paragraph1": "This webpage aims to be a living document of what is happening in my tech related life. Here you can find the most of the stuff I'm up to regarding tech. Including projects, news and thoughts.",
    "paragraph2": "If you scroll down here there are projects you can look through from my previous endeavors. If any one of them tickles your fancy grab a ☕️ with me and tell me why.",
    "paragraph3": "🌴 Organically grown 🌴"
  },
  "sv": {
    "resume": "Ladda ner mitt CV",
    "title": "Välkommen till min hörna av internet!",
    "paragraph1": "Den här webbsidan syftar till att vara ett levande dokument om vad som händer i mitt tekniska liv. Här kan du hitta det mesta jag håller på med om teknik. Inklusive projekt, nyheter och tankar.",
    "paragraph2": "Om du scrollar ner här finns projekt du kan titta igenom från mina tidigare äventyr. Om någon av dem får dig att tänka till en extra gång, ta gärna en ☕️ med mig och berätta varför.",
    "paragraph3": "🌴 Ekologiskt odlad 🌴"
  }
}
</i18n>
