module.exports = {
  showUsage: true,
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        },
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    }
  }
};
