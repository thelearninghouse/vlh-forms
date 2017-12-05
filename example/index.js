import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import Forms from '../src/index.js'
// import Forms from '../dist/vlh-forms.js'
// import '../dist/vlh-forms.css'
// Register a global custom directive called v-focus

Vue.use(VeeValidate)
Vue.use(Forms)
new Vue({
  el: '#app',
  render: h => h(App)
})
