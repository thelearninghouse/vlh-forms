var path = require('path')
// var resolve = require('resolve')
// console.log(path.resolve(__dirname, './src'));
module.exports = {
  plugins: [
    require('rollup-plugin-vue')()
  ],
  exports: 'named',
  alias: {
    // '@': path.resolve(__dirname, 'src')
  }
}

// Alias Doesn' work yet
