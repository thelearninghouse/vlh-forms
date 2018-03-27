import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import VlhForms from '../src/index.js'
import {MockData} from './MockData/index.js'
// import VlhForms from '../dist/vlh-forms.js'
// import '../dist/vlh-forms.css'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const ValidationConfig = {
  classes: true
}
Vue.use(VeeValidate, ValidationConfig);
Vue.use(VlhForms)

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
    selectedDegreeLevelObject () {
      return this.getDegreeLevelObject()
    },

    programList () {
      var _this = this;

      var programs = this.programs.map(function (program) {
        if(program.display_name === null) {
          program.display_name = program.name;
        }
        return program;
      })
      // return programs.sort(function (a, b) {
      //   return a < b ? -1 : 1;
      // });
      return programs.sort(function (a,b) {
        var nameA = a.display_name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.display_name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    },

    programsForSelectedDegreeLevel: function () {
      return this.getProgramsForDegreeLevel()
    },
    programOptions () {
      return this.$FindProgramsByLevel()
    }
  },
  mounted () {
    this.cleanUpProgramsArray()
    this.domain = 'online.test.edu'
    // this.registerZipValidator()
  },
  methods: {
    fakeFormSubmitRequest(ms) {
      new Promise(resolve => setTimeout(resolve, ms));
    },

    setFocusOnFirstFormError () {
      this.$nextTick(function() {
        var TlhForm = document.getElementById('tlh-form');
        var FirstFormError = TlhForm.querySelector("input.invalid, select.invalid");
        FirstFormError.focus()
      })
    },

    handleFormSubmission() {
      const vm = this
      this.$bus.$emit('is-submitting', true)

      this.isSubmitting = true;
      console.log('form is good!');
      delay(1000).then(() => {
        this.isSubmitting = false
        this.$bus.$emit('is-submitting', false)

        console.log('Fake submission done');
      })

      this.$validator.validateAll().then((result) => {
        if (!result) {
          this.setFocusOnFirstFormError()
        } else {
          this.isSubmitting = true;
          console.log('form is good!');
          delay(1000).then(() => {
            this.isSubmitting = false
            console.log('Fake submission done');
          })
        }
      })
    },

    cleanUpProgramsArray() {
      this.checkForDisplayNames()
      this.alphabetizePrograms()
    },

    checkForDisplayNames () {
      var vm = this
      if (vm.programs) {
        vm.programs.map(function (program) {
          if(program.display_name !== null) {
            program.name = program.display_name
          }
        })
      }
    },

    alphabetizePrograms () {
      this.programs.sort(this.compareProgramNames)
    },

    compareProgramNames (programA, programB) {
      // Use toUpperCase() to ignore character casing
      const programNameA = programA.name.toUpperCase();
      const programNameB = programB.name.toUpperCase();

      let comparison = 0;
      if (programNameA > programNameB) {
        comparison = 1;
      } else if (programNameA < programNameB) {
        comparison = -1;
      }
      return comparison;
    },

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
        } else {
          this.setFocusOnFirstFormError();
        }
      });
    },

    handleNextStep () {
      console.log('stopped');
      this.validateStep()
      // let wasCurrentStep = this.currentStep
      // this.$bus.$emit('next-clicked', { pastStep: wasCurrentStep, newStep: this.currentStep + 1})
      // this.currentStep = this.currentStep + 1

    },

    handlePreviousStep () {
      this.currentStep = this.currentStep - 1
      this.$bus.$emit('previous-here')
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
