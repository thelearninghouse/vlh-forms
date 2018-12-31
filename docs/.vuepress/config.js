const componentsNav = require('./components-nav.json')
const path = require('path')

module.exports = {
  base: '/vlh-forms/',
  title: 'VlhForms',
  description: 'Vue.js component library designed for specific integration with The Learning House Forms System',
  themeConfig: {
    repo: "thelearninghouse/vlh-forms",
    repoLabel: "Github Repo",
    editLinks: true,
    docsDir: "docs",
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Components',
        link: '/components/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      }
    ],
    // sidebar: 'auto'      
    sidebar: [
      '/',
      '/guide/',
      {
        title: 'Components',
        collapsable: false,
        children: componentsNav
      },
      '/examples/'
    ]
  },


  /**
   * Allows the use of using aliases in files for easier importing
   */
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, "../../"),
        '@src': path.resolve(__dirname, "../../src"),
        '@mixins': path.resolve(__dirname, "../../src/mixins"),
        '@utils': path.resolve(__dirname, "../../utils"),
        '@images': './../images'
      }
    }
  },

  /**
   * Prevents errors from using VlhForms library
   */
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
  }


}