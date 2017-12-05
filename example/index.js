import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import Forms from '../src/index.js'
// import Forms from '../dist/vlh-forms.js'
// import '../dist/vlh-forms.css'
// import './pure.min.css'
// import url('https://unpkg.com/purecss@1.0.0/build/pure-min.css')
Vue.use(VeeValidate)
Vue.use(Forms)
new Vue({
  el: '#app',
  render: h => h(App)
})
