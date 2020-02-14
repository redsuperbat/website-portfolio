<template>
<v-parallax :height="parallaxHeight" :src="require('@/assets/test2.png')"
  alt="Max Netterberg">
    <v-container fluid>
        <v-col cols="12">
          <v-row justify="end" align="end" style="height:20vh; margin-right:1vw">
              <span class="display-2">Max Netterberg <br/></span>
          </v-row>
          <v-row justify="end" align="center" style="height:5vh">
            <div style="width:40vw" class="hidden-sm-and-down">
              <span class="title">{{homePage.description.span1}}</span>
              <span class="display-2" style="color:orange; font-weight:bold">{{homePage.description.span2}}</span>
              <span class="title">{{homePage.description.span3}}</span>
              <span class="display-1" style="color:aquamarine; font-weight:bold">{{homePage.description.span4}}</span>
            </div>
          </v-row>
          <v-row justify="center" align="end" style="height:75vh">
              <v-icon color="white" size="50">keyboard_arrow_down</v-icon>
          </v-row>
        </v-col>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'Start',
  created () {
    this.parallaxHeight = window.innerHeight
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler () {
      this.parallaxHeight = window.innerHeight
    }
  },
  data: function () {
    return {
      parallaxHeight: 0
    }
  },
  props: {
    homePage: Object
  }
}
</script>
