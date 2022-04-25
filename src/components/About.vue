<template>
  <div class="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-5 p-8 bg-white">
    <img class="h-full fit-contain" src="@/assets/images/about-test.png" alt="Programming" />
    <div class="max-w-lg text-justify text-primary flex flex-col items-center space-y-5 ">
      <h1 class="text-center text-4xl">
        {{ title }}
      </h1>
      <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
      <Button href="https://drive.google.com/file/d/1HWIkQeoJBltslr3E5vWIDSHCf-g-s8Wb/view?usp=sharing" target="_blank"
        class="p-button-outlined">
        {{ resume }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
defineProps<{
  paragraphs: string[]
  resume: string;
  title: string;
}>()
</script>
