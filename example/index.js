import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import Forms from '../src/index.js'
import {MockData} from './MockData'
// import Forms from '../dist/vlh-forms.js'
// import '../dist/vlh-forms.css'

Vue.use(VeeValidate)
Vue.use(Forms)

Vue.mixin({
  data () {
    return { ...MockData }
  },
  watch: {
    selectedDegreeLevel: function (val) {
      this.submit.program = ''
    },
    currentStep (stepValue) {
      this.$bus.$emit('step-updated', stepValue)
    }
  },

  computed: {
    selectedDegreeLevelObject: function () {
      return this.getDegreeLevelObject()
    },

    programsForSelectedDegreeLevel: function () {
      return this.getProgramsForDegreeLevel()
    },
    programOptions () {
      return this.$FindProgramsByLevel()
    }
  },
  mounted () {

    this.domain = 'online.test.edu'

    // this.registerZipValidator()
  },
  methods: {
    setFocus () {
      this.$bus.$emit('set-focus', 'firstName')
    },

    setFocusFN() {
      this.$bus.$emit('set-focus', 'firstName')
      // this.$refs.formFirstName.$refs.firstName.focus()
    },

    setFocusLN() {
      this.$bus.$emit('set-focus', 'lastName')
      // this.$refs.formLastName.$refs.lastName.focus()
    },
    validateStep() {
      this.$validator.validateAll().then((result) => {
        console.log('Missing fields or errors!');
        if (result) {
          this.currentStep = this.currentStep + 1
          console.log('Next Step!');
        }
      });
    },

    handleNextStep () {
      this.validateStep()
      // let wasCurrentStep = this.currentStep
      // this.$bus.$emit('next-clicked', { pastStep: wasCurrentStep, newStep: this.currentStep + 1})
      // this.currentStep = this.currentStep + 1

    },

    handlePreviousStep () {
      this.currentStep = this.currentStep - 1
    },

    registerZipValidator () {
      var vm = this
      var isZip = (value) => {
        return axios.get(`https://api.zippopotam.us/us/${value}`)
          .then(function(response) {
            let info = response.data.places[0]
            vm.submit.city = info['place name']
            vm.submit.state = info['state']
            return {
              valid: true
            }
          })
          .catch(function(error) {
            return {
              valid: false,
              data: {
                message: `${value} is not valid zip.`
              }
            }
          });
      }
      this.$validator.extend('validZip', {
        validate: isZip,
        getMessage: (field, params, data) => {
          return data.message;
        }
      });
    },
    getDegreeLevelObject: function () {
      var vm = this
      if (vm.selectedDegreeLevel) {
        return vm.levels.find(function(level) {
          return level.id == vm.selectedDegreeLevel
        })
      } else {
        return null
      }
    },

    getProgramsForDegreeLevel: function () {
      var vm = this
      if (vm.selectedDegreeLevelObject) {
        return vm.programs.filter(function (program) {
          return vm.selectedDegreeLevelObject.degreeLevels.includes(program.degree_level)
        })
      } else {
        return []
      }
    }
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
