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
      <form-legal-text></form-legal-text>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {programs, levels} from './programsSample.js'

export default {
  data () {
    return {
      selectedDegreeLevel: '',
      schoolDisplayName: 'School University Name Here',
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
    // this.registerZipValidator()
  },
  methods: {
    // registerZipValidator () {
    //   var vm = this
    //   var isZip = (value) => {
    //     return axios.get(`https://api.zippopotam.us/us/${value}`)
    //       .then(function(response) {
    //         let info = response.data.places[0]
    //         vm.submit.city = info['place name']
    //         vm.submit.state = info['state']
    //         return {
    //           valid: true
    //         }
    //       })
    //       .catch(function(error) {
    //         return {
    //           valid: false,
    //           data: {
    //             message: `${value} is not valid zip.`
    //           }
    //         }
    //       });
    //   }
    //   this.$validator.extend('validZip', {
    //     validate: isZip,
    //     getMessage: (field, params, data) => {
    //       return data.message;
    //     }
    //   });
    // },
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
#app {
  max-width: 500px;
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
