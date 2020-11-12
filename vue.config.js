module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/styles/_variables.scss";
            `,
      },
    },
  },
};
