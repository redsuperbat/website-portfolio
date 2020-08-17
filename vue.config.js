module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/website-portfolio/" : "/"
};
