<template>
  <nav>
    <!-- Desktop Mode -->
    <v-app-bar
      fixed
      flat
      class="hidden-sm-and-down app-bar"
      color="transparent"
    >
      <v-toolbar-title style="cursor:pointer" class="clickable">
        <div @click="setPage('home')">
          <span
            style="font-weight:lighter"
            :class="{ 'white-background': textColor }"
            >Max</span
          >
          <span :class="{ 'white-background': textColor }">Netterberg</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row v-if="currentPage != 'contact'" justify="space-around">
        <v-btn
          v-for="(item, name) in header"
          :key="name"
          @click="scroll(name)"
          depressed
          color="transparent"
          class="clickable"
        >
          <span v-if="name === currentPage">|</span>
          <h4>{{ item }}</h4>
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>
      <LangButtons
        :lang="lang"
        :textColor="textColor"
        @switchLang="switchLang"
      />
    </v-app-bar>

    <!-- Mobile Mode -->
    <MobileDropDown
      class="hidden-md-and-up"
      :open="drawer"
      @openDrawer="openDrawer"
      @scroll="scroll"
      :header="header"
      :lang="lang"
      :textColor="textColor"
      @switchLang="switchLang"
    />
  </nav>
</template>

<script>
import MobileDropDown from "./MobileDropDown";
import LangButtons from "./LangButtons";
export default {
  name: "Toolbar",
  props: {
    header: Object,
    currentPage: String,
    lang: String,
    topScroll: Boolean,
    textColor: Boolean
  },
  components: {
    MobileDropDown,
    LangButtons
  },
  data: function() {
    return {
      drawer: false
    };
  },
  methods: {
    openDrawer: function() {
      this.drawer = !this.drawer;
    },

    switchLang: function(lang) {
      console.log("Trying to switch to ", lang);
      this.$emit("switchLang", lang);
    },
    setPage: function(name) {
      this.$emit("switchPage", name);
    },
    scroll: function(name) {
      this.setPage(name);
      this.$emit("scroll", name);
    }
  }
};
</script>

<style>
h4 {
  color: white;
  text-shadow: -1px -1px 0 #000;
}

span {
  color: white;
}

.clickable:hover {
  transform: scale(1.15);
  text-decoration: none;
}

.selected {
  font-weight: bold;
  font-size: 120%;
  color: white;
}

.hamburger-icon:hover {
  transform: scale(1.15);
}

.hamburger-icon {
  position: absolute;
  z-index: 10;
  right: 0;
  margin-top: 25px;
  margin-right: 40px;
}

.white-background {
  color: black;
}
</style>
