const componentsNav = require('./components-nav.json')

module.exports = {
  base: '/vlh-forms/',
  title: 'VlhForms',
  description: 'Vue.js component library designed for specific integration with The Learning House Forms System',
  // plugins: [
  //   ['@vuepress/register-components', {
  //     componentsDir: ['./docs/.vuepress/components' ]
  //   }]
  // ],
  
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
   * Allows the use of using aliases in markdown
   */
  configureWebpack: {
    resolve: {
      alias: {
        '@root': './../../',
        '@src': './../../src',
        '@images': './../images',
        '@mockData': './../../mockData'
      }
    }
  },
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