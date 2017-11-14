import Vue from 'vue'
import App from './App.vue'
// import Forms from '../dist/VlhForms.js'
// import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Forms from '../src/index.js'

Vue.use(VeeValidate)
Vue.use(Forms)
new Vue({
  el: '#app',
  render: h => h(App)
})
