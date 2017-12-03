<template>
  <div id="app">
    <h1>Forms Test</h1>
    <h2>Using FormStep Component</h2>

    <div class="stepsWrapper">
      <form-step :stepID="1">
        <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
        <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
      </form-step>

      <form-step :stepID="2">
        <form-first-name v-model="submit.firstName"></form-first-name>
        <form-last-name v-model="submit.lastName"></form-last-name>
      </form-step>

      <form-step :stepID="3">
        <form-zip v-model="submit.zip"></form-zip>
        <form-phone v-model="submit.phone" validation="required"></form-phone>
        <form-email v-model="submit.email" validation="required|email"></form-email>
      </form-step>
    </div>
    <div class="stepFormControls">
      <button v-if="currentStep > 1" @click="currentStep = currentStep - 1">Previous</button>
      <button v-if="currentStep < formStepsQuantity" @click="currentStep = currentStep + 1">Next</button>
      <form-submit-button v-if="currentStep == formStepsQuantity" text="Get Info"></form-submit-button>
      <form-legal-text school="WVSU University"></form-legal-text>
    </div>
    <hr>
    <div class="stepFormWrapper">
<!--

      <transition name="slide-fade" mode="out-in">
        <div class="step step1" v-if="currentStep == 1">
          <h4>Step 1</h4>
          <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
          <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
        </div>
      </transition>

      <transition name="slide-fade" mode="out-in">
        <div class="step step2" v-if="currentStep == 2">
          <h4>Step 2</h4>
          <form-first-name v-model="submit.firstName"></form-first-name>
          <form-last-name v-model="submit.lastName"></form-last-name>
        </div>
      </transition>
      <transition name="slide-fade" mode="out-in">
        <div class="step step3" v-if="currentStep == 3">
          <h4>Step 3</h4>
          <form-zip v-model="submit.zip"></form-zip>
          <form-phone v-model="submit.phone" validation="required"></form-phone>
          <form-email v-model="submit.email" validation="required|email"></form-email>
        </div>
      </transition> -->

      <!-- <div class="stepFormControls">
        <button v-if="currentStep > 1" @click="currentStep = currentStep - 1">Previous</button>
        <button v-if="currentStep < formStepsQuantity" @click="currentStep = currentStep + 1">Next</button>
        <form-submit-button v-if="currentStep == formStepsQuantity" text="Get Info"></form-submit-button>
      </div> -->
    </div>



    <!-- <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
    <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>

    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-submit-button text="Get Info"></form-submit-button>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
    <form-legal-text school="WVSU University"></form-legal-text> -->
  </div>
</template>

<script>
import axios from 'axios'
import {programs, levels} from './programsSample.js'

export default {
  data () {
    return {
      selectedDegreeLevel: '',
      levels: levels,
      currentStep: 1,
      formStepsQuantity: 3,
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
.fade-enter-active, .fade-leave-active {
transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0
}

.slide-enter-active, .slide-leave-active {
transition: all .3s ease;
transform: translateX(40px);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
/*opacity: 0*/
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    position: absolute;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.list-complete-leave-active {
  position: absolute;
}
.form-item {
  margin: 1em .5em;
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
