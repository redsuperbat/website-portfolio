<template>
  <div class="h-60 flex flex-col justify-center">
    <div class="flex justify-evenly">
      <div v-for="(item, index) in details" :key="index">
        <p class="regular text-white cursor-pointer" @click="handleIcons(item)">
          {{ item.content }}
        </p>
      </div>
    </div>
    <div class="text-center">
      <Button
        v-for="(item, name) in links"
        :key="name"
        @click="handleClick(item[0])"
        :href="item[0]"
        target="_blank"
        class="p-button-rounded p-button-text hover:animate-bounce"
      >
        <i :class="item[1]" class="text-white"></i>
      </Button>
    </div>
    <div>
      <p class="text-white text-center">©Max Netterberg - 2020</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
const details = [
  { icon: 'smartphone', content: '+4670-044 15 66' },
  { icon: 'email', content: 'max.netterberg@gmail.com' },
];
const links = [
  ['https://www.linkedin.com/in/max-netterberg/', 'pi pi-linkedin'],
  ['https://github.com/redsuperbat', 'pi pi-github'],
  ['https://twitter.com/netterbergmax', 'pi pi-twitter'],
];
const handleIcons = (item: typeof details[0]) => {
  if (item.icon === 'smartphone') {
    window.open('tel:' + item.content);
  } else {
    window.location.href = 'mailto:' + item.content;
  }
};
const handleClick = (link: string) => window.open(link, '_blank');
</script>
