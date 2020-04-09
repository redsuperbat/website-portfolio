<template>
  <div class="langbuttons">
    <v-btn
      @click="$emit('switchLang', 'en')"
      text
      class="clickable"
      :disabled="checkLang('en')"
    >
      <span :class="{ 'white-background': textColor }">EN</span>
    </v-btn>
    <span>|</span>
    <v-btn
      @click="$emit('switchLang', 'sv')"
      text
      class="clickable"
      :disabled="checkLang('sv')"
    >
      <span :class="{ 'white-background': textColor }">SV</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    lang: String,
    textColor: Boolean
  },
  methods: {
    checkLang: function(l) {
      return l === this.lang;
    }
  }
};
</script>

<style></style>
