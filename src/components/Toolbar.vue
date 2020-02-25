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
      <div class="langbuttons">
        <v-btn
          @click="switchLang('en')"
          depressed
          color="transparent"
          class="clickable"
          :disabled="checkLang('en')"
        >
          <span :class="{ 'white-background': textColor }">EN</span>
        </v-btn>
        <span>|</span>
        <v-btn
          @click="switchLang('sv')"
          depressed
          color="transparent"
          class="clickable"
          :disabled="checkLang('sv')"
        >
          <span :class="{ 'white-background': textColor }">SV</span>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Mobile Mode -->
    <div class="mobile hidden-md-and-up">
      <div class="hamburger-icon">
        <v-btn icon text color="white" @click="openDrawer">
          <v-icon size="50">view_headline</v-icon>
        </v-btn>
      </div>
      <v-navigation-drawer color="rgba(106,13,173,0.5)" fixed v-model="drawer">
        <v-list>
          <v-list-item v-for="(item, name) in header" :key="name">
            <v-btn
              @click="
                scroll(name);
                openDrawer();
              "
              depressed
              color="transparent"
            >
              <span v-if="name === currentPage">|</span>
              <h4 :class="name === currentPage ? 'selected' : 'clickable'">
                {{ item }}
              </h4>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    header: Object,
    currentPage: String,
    lang: String,
    topScroll: Boolean,
    textColor: Boolean
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
    checkLang: function(l) {
      return l === this.lang;
    },
    switchLang: function(lang) {
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

.mobile {
  background-color: transparent !important;
  border-color: transparent !important;
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

.langbuttons {
  color: aqua;
}

.white-background {
  color: black;
}
</style>
