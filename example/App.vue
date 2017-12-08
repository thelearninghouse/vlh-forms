<template>
  <div id="app">
    <h1>Forms Test</h1>
    <h2>Using FormStep Component</h2>
    <button @click="setFocus">Set Focus Test</button>
    <button @click="setFocusFN">Set Focus - First Name</button>
    <button @click="setFocusLN">Set Focus - Last Name</button>
    <div class="stepsWrapper">

        <transition name="slide-fade" mode="out-in" appear>
          <form-step :stepID="1" v-if="currentStep == 1" key="1">
            <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
            <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
            <form-zip v-model="submit.zip"></form-zip>
          </form-step>

          <form-step :stepID="2" v-if="currentStep == 2" key="2">
            <form-first-name v-model="submit.firstName"></form-first-name>
            <form-last-name v-model="submit.lastName"></form-last-name>
          </form-step>

          <form-step :stepID="3" v-if="currentStep == 3" key="3">
            <form-phone v-model="submit.phone" validation="required"></form-phone>
            <form-email v-model="submit.email" validation="required|email"></form-email>
          </form-step>
        </transition>
    </div>
    <div class="stepFormControls">
      <button v-if="currentStep > 1"
        @click.prevent="handlePreviousStep"
        @key.enter="handlePreviousStep">
        Previous
      </button>
      <button v-if="currentStep < totalSteps"
        @click.stop.prevent="handleNextStep"
        @key.enter="handleNextStep">
        Next
      </button>
      <form-submit-button v-if="currentStep == totalSteps" text="Get Info"></form-submit-button>
      <form-legal-text></form-legal-text>
    </div>

    <!-- <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
    <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>

    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-submit-button text="Get Info"></form-submit-button>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text> -->

  </div>
</template>

<script>
import axios from 'axios'
import {programs, levels} from './programsSample.js'

const x = 'my param'

export default {
  data () {
    return {
      selectedDegreeLevel: '',
      schoolDisplayName: 'School University Name Here',
      levels: levels,
      currentStep: 1,
      totalSteps: 3,
      submit: {
        program: '',
        firstName: '',
        lastName: '',
        field1: '',
        field2: '',
        zip: '',
        email: '',
        phone: '',
        city: null
      },
      programs: programs,
      xverifyEmailURL: 'http://xverifyEmailURL/',
      domain: '',
      newLegalStyles: {
        color: 'blue'
      }
    }
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
    }
  },
  mounted () {
    this.domain = 'online.test.edu'
    console.log(this.$FindProgramsByLevel(this.programs, 'Master'));
    console.log(this.$myAddedProperty)
    this.registerZipValidator()
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
        return null
      }
    }
  }
}
</script>

<style>
/*import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
import 'https://unpkg.com/purecss@1.0.0/build/pure-min.css'*/
#app {
  max-width: 500px;
}

.stepsWrapper {
  position: relative;
}
.list-complete-leave-active {
  position: absolute;
}

/* NOTE: StepForm */
.stepFormWrapper {
    display: flex;
    flex-flow: row wrap;
}
.stepFormControls {
    flex-basis: 100%;
    display: flex;
    flex-flow: row wrap;
}

</style>
