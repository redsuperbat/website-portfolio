<template>
    <div id="main" ref="main">
        <img src="@/assets/about-test.png" alt="Programming" height="400" v-if="$vuetify.breakpoint.mdAndUp">
        <div :style="$vuetify.breakpoint.mdAndUP ? 'width:400px' : 'width:350px'">
           <h1 class="display-2" style="margin-bottom:25px" ref="title">{{aboutPage.title}}</h1>
           <div><p>{{aboutPage.paragraph1}}</p></div>
           <div><p>{{aboutPage.paragraph2}}</p></div>
           <div><p>{{aboutPage.paragraph3}}</p></div>
           <div class="cv-btn">
            <v-btn color="#320032" outlined href="https://drive.google.com/file/d/1HWIkQeoJBltslr3E5vWIDSHCf-g-s8Wb/view?usp=sharing" target="_blank">
              <div>{{aboutPage.resume}}</div>
            </v-btn>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    aboutPage: Object
  },
  mounted: function () {
    var offset = this.$refs.main.offsetTop
    this.$emit('titleOffset', offset)
  }
}
</script>

<style scoped>

#main {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
}

p {
  color: #320032;
  text-align: justify;
}

.cv-btn{
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
  color: #320032;
}

</style>
