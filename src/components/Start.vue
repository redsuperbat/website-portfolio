<template>
  <v-parallax
    :height="parallaxHeight"
    :src="require('@/assets/background.png')"
    alt="Max Netterberg"
  >
    <div class="title-column">
      <div class="desc" style="">
        <span class="display-2">Max Netterberg</span>
        <div class="hidden-sm-and-down">
          <span class="title">{{ homePage.description.span1 }}</span>
          <span class="display-2" style="color:orange; font-weight:bold">{{
            homePage.description.span2
          }}</span>
          <span class="title">{{ homePage.description.span3 }}</span>
          <span class="display-1" style="color:aquamarine; font-weight:bold">{{
            homePage.description.span4
          }}</span>
        </div>
      </div>
      <div class="icon-and-text">
        <v-icon color="white" size="50" class="arrow-icon"
          >keyboard_arrow_down</v-icon
        >
        <h1 class="overline scroll-text">{{ homePage.scroll }}</h1>
      </div>
    </div>
  </v-parallax>
</template>

<script>
export default {
  name: "Start",
  created() {
    this.parallaxHeight = window.innerHeight;
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.parallaxHeight = window.innerHeight;
    }
  },
  data: function() {
    return {
      parallaxHeight: 0
    };
  },
  props: {
    homePage: Object
  }
};
</script>

<style scoped>
.title-column {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 1fr 1fr 0.2fr;
  grid-template-areas:
    ".      info"
    ".      info"
    "footer footer";
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
