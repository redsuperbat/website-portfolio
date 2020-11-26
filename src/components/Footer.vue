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
        @click="handleClick(item[0])"
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

<script lang="ts">
import Button from 'primevue/button';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const details = [
      { icon: 'smartphone', content: '+4670-044 15 66' },
      { icon: 'email', content: 'max.netterberg@gmail.com' },
    ];
    const links = [
      ['https://www.linkedin.com/in/max-netterberg/', 'fab fa-linkedin fa-2x'],
      ['https://github.com/redsuperbat', 'fab fa-github-square fa-2x'],
    ];
    const handleIcons = (item: any) => {
      if (item.icon === 'smartphone') {
        window.open('tel:' + item.content);
      } else {
        window.location.href = 'mailto:' + item.content;
      }
    };
    const handleClick = (link: string) => window.open(link, '_blank');

    return {
      details,
      links,
      handleIcons,
      handleClick,
    };
  },
});
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
