<template>
    <div id="main">
        <div class="contact">
            <div v-for="(item, index) in details" :key="index" class="details">
                <v-btn icon class="icons" @click="handleIcons(item)">
                    <v-icon color="white" size="35">{{item.icon}}</v-icon>
                </v-btn>
                <p class="regular">{{item.content}}</p>
            </div>
        </div>
        <div class="links">
                <p class="regular"></p>
                <v-btn icon v-for="(item, name) in links" :key="name" :href="item[0]" target="_blank" class="icons">
                  <i :class="item[1]"></i>
                </v-btn>
        </div>
        <div style="text-align:center">
            <p class="overline">©Max Netterberg - 2020</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    handleIcons: function (item) {
      if (item.icon === 'smartphone') {
        window.open('tel:' + item.content)
      } else {
        window.location.href = 'mailto:' + item.content
      }
    }
  },
  data: function () {
    return {
      details: [
        { 'icon': 'smartphone', 'content': '+4670-044 15 66' },
        { 'icon': 'email', 'content': 'max.netterberg@gmail.com' }
      ],
      links: [
        ['https://www.linkedin.com/in/max-netterberg/', 'fab fa-linkedin fa-2x'],
        ['https://github.com/redsuperbat', 'fab fa-github-square fa-2x']
      ]
    }
  }
}
</script>

<style scoped>

#main{
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.details{
    text-align: center;
}

p{
    color: white;
}

.contact{
    display: flex;
    justify-content: space-evenly;
}

i{
    margin:10px;
    cursor:pointer;
    color:white;
}

.links{
    text-align: center;
}

.icons:hover{
    transform: scale(1.2)
}

</style>
