import Vue from 'vue'
import App from './App.vue'
// import Forms from '../dist/VlhForms.js'
import Forms from '../src/index.js'

Vue.use(Forms)
new Vue({
  el: '#app',
  render: h => h(App)
})
