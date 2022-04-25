<template>
  <div
    class="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-5 pt-24 p-10"
  >
    <img
      class="w-full object-cover rounded-full max-w-md"
      src="https://pbs.twimg.com/profile_images/1516000008230871043/zpyE4_6e_400x400.jpg"
      alt="Programming"
    />
    <div
      class="max-w-lg text-justify text-white flex flex-col items-center space-y-5"
    >
      <h1 class="text-center text-4xl">
        {{ title }}
      </h1>
      <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
      <Button @click="handleClick">
        <span class="text-white">
          {{ resume }}
        </span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app-store';
import Button from 'primevue/button';
import { computed } from 'vue';
const store = useAppStore();
const paragraphs = computed(() => store.content.aboutPage.paragraphs);
const resume = computed(() => store.content.aboutPage.resume);
const title = computed(() => store.content.aboutPage.title);
const handleClick = () => {
  window.open(
    'https://drive.google.com/file/d/1HWIkQeoJBltslr3E5vWIDSHCf-g-s8Wb/view?usp=sharing',
    '_blank',
  );
};
</script>
