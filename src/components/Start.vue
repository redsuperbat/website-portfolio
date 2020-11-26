<template>
  <div class="title-column">
    <div class="desc" style="color:white;">
      <h2>Max Netterberg</h2>
      <div>
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
    <div class="icon-and-text">
      <i color="white" size="50" class="arrow-icon">keyboard_arrow_down</i>
      <h1 class="overline scroll-text">{{ homePage.scroll }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { useLang } from '@/hooks/useLang';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { uiLabels } = useLang();
    const homePage = computed(() => uiLabels.value.homePage);
    return { homePage };
  },
});
</script>

<style scoped>
.title-column {
  height: 100vh;
  background-image: url('../assets/images/background.png');
  background-size: cover;
  background-position: fixed;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 1fr 1fr 0.2fr;
  grid-template-areas:
    '.      info'
    '.      info'
    'footer footer';
}

.icon-and-text {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: footer;
  color: transparent;
  animation: bob 1s alternate ease-in-out infinite;
  transition: color 1s;
}

@keyframes bob {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
  }
}

.icon-and-text:hover {
  color: white;
}

.desc {
  margin-top: 10vh;
  grid-area: info;
}
</style>
