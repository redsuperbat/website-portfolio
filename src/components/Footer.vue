<template>
  <div id="main">
    <div class="contact">
      <div v-for="(item, index) in details" :key="index" class="details">
        <Button
          class="p-button-rounded p-button-text"
          @click="handleIcons(item)"
        >
          <i color="white" size="35">{{ item.icon }}</i>
        </Button>
        <p class="regular">{{ item.content }}</p>
      </div>
    </div>
    <div class="links">
      <Button
        v-for="(item, name) in links"
        :key="name"
        :href="item[0]"
        target="_blank"
        class="p-button-rounded p-button-text"
      >
        <i :class="item[1]"></i>
      </Button>
    </div>
    <div style="text-align:center">
      <p>©Max Netterberg - 2020</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
export { default as Button } from 'primevue/button';
export const details = [
  { icon: 'smartphone', content: '+4670-044 15 66' },
  { icon: 'email', content: 'max.netterberg@gmail.com' },
];
export const links = [
  ['https://www.linkedin.com/in/max-netterberg/', 'fab fa-linkedin fa-2x'],
  ['https://github.com/redsuperbat', 'fab fa-github-square fa-2x'],
];
export const handleIcons = (item: any) => {
  if (item.icon === 'smartphone') {
    window.open('tel:' + item.content);
  } else {
    window.location.href = 'mailto:' + item.content;
  }
};
export default {};
</script>

<style scoped>
#main {
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.details {
  text-align: center;
}

p {
  color: white;
}

.contact {
  display: flex;
  justify-content: space-evenly;
}

i {
  margin: 10px;
  cursor: pointer;
  color: white;
}

.links {
  text-align: center;
}

.icons:hover {
  transform: scale(1.2);
}
</style>
