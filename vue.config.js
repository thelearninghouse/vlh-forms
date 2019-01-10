module.exports = {
  lintOnSave: true,
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
