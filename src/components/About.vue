<template>
  <div id="main">
    <img src="@/assets/images/about-test.png" alt="Programming" />
    <div class="flex-column align-center">
      <h1>
        {{ aboutPage.title }}
      </h1>
      <p>{{ aboutPage.paragraph1 }}</p>

      <p>{{ aboutPage.paragraph2 }}</p>

      <p>{{ aboutPage.paragraph3 }}</p>
      <Button
        href="https://drive.google.com/file/d/1HWIkQeoJBltslr3E5vWIDSHCf-g-s8Wb/view?usp=sharing"
        target="_blank"
        class="p-button-outlined"
      >
        {{ aboutPage.resume }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { useLang } from '@/hooks/useLang';
import { computed, defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  name: 'About',
  setup() {
    const { uiLabels } = useLang();
    const aboutPage = computed(() => uiLabels.value.aboutPage);
    return { aboutPage };
  },
  components: {
    Button,
  },
});
</script>

<style scoped lang="scss">
#main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
  background: white;
  gap: 20px;
  padding: 10px;
}

p {
  color: $primary-color;
  text-align: justify;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
div.flex-column {
  padding: 10px;
  max-width: 450px;
}
h1 {
  text-align: center;
  color: $primary-color;
}
</style>
