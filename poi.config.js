const path = require("path");

const ResolveFix = {
  extensions: [".js", ".vue"],
  alias: {
    "@": path.resolve(__dirname, "./src")
  }
};
module.exports = {
  webpack(config) {
    config.resolve = ResolveFix;
    return config;
  },

  // Always disable extracting css
  extractCSS: false,
  extendWebpack(config) {
    // Remove exisiting
    config.module.rules.delete("svg");
    // Add your own
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  }
};
