<template>
  <div class="burger-icon" @click="handleClick">
    <div :class="open ? 'top-bent' : 'top'"></div>
    <div :class="open ? 'middle-invis' : 'middle'"></div>
    <div :class="open ? 'bottom-bent' : 'bottom'"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerIcon",
  props: {
    open: Boolean
  },
  methods: {
    handleClick() {
      this.$emit("openDrawer");
    }
  }
};
</script>

<style scoped>
.burger-icon {
  width: 40px;
  height: 30px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;
}

.top-bent {
  transform: rotateZ(45deg);
}

.bottom-bent {
  transform: rotateZ(-45deg) translateX(-3.5px);
}
.middle-invis {
  opacity: 0;
}

.top,
.middle,
.bottom,
.top-bent,
.bottom-bent,
.middle-invis {
  transform-origin: 0 0;
  padding: 2px;
  width: 100%;
  background-color: white;
  transition: 0.5s ease-in-out;
}
</style>
