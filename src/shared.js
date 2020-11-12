'use strict'
const shared = {
  data: function () {
    return {
      lang: 'sv',
      uiLabels: {}
    }
  },

  created: function () {
    this.uiLabels = require('@/assets/ui_' + this.lang + '.json')
  },

  methods: {
    switchLang: function (lang) {
      this.lang = lang
      this.uiLabels = require('@/assets/ui_' + this.lang + '.json')
    }
  }
}

export default shared
