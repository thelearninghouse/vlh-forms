<template>
  <div id="app">
    <h1>Forms Test</h1>

    <div class="stepsWrapper">
        <transition name="slide-fade" mode="out-in" appear>
          <form-step :stepID="1" v-if="currentStep == 1" key="1">
            <form-field name="testname" label="Test Required" v-model="submit.firstName"></form-field>
            <!-- <form-field optional name="testname" label="Test Required" v-model="submit.firstName"></form-field>
            <form-select name="degreeLevel" label="Degree Level Options" v-model="selectedDegreeLevel" :options="levels" defaultText="Select Degree Level"></form-select>

            <form-select name="program" :label="selectedDegreeLevel + ' Programs'" defaultText="Select a Program"  v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>

            <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip> -->
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
  <button type="button" name="button" @click="showMore = !showMore">Show More</button>


  </div>
</template>

<script>
import axios from 'axios'
import {programs, levels} from './programsSample.js'

const x = 'my param'
import smoothHeight from 'vue-smooth-height';
console.log(smoothHeight);

export default {
  mixins:[smoothHeight],
  data () {
    return {
      showMore: true,
      selectedDegreeLevel: '',
      formItemsTransition: 'vertical-slide',
      programSelectionTranstion: 'vertical-slide',
      schoolDisplayName: 'School University Name Here',
      levels: levels,
      testModel: 'some text',
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
    },
    programOptions () {
      return this.$FindProgramsByLevel()
    }
  },
  mounted () {
    // this.$nextTick(function () {
    //   this.$registerElement({
    //       el: this.$refs.tlhform,
    //   })
    //   // console.log(this.$el.textContent) // => 'updated'
    // })


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
        return []
      }
    }
  }
}
</script>

<style lang="scss">
/*import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
import 'https://unpkg.com/purecss@1.0.0/build/pure-min.css'*/
@import './example.scss';
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
.form-transtiion-group {
  // display: flex;
}
.form-item {
  // transition: all .52s;
  transition: all .4s;
  display: inline-block;
  margin-right: 10px;
  width: 100%;
  top: 0;
}
.test-transition-enter, .test-transition-leave-to
/* .test-transition-leave-active below version 2.1.8 */ {
  opacity: 0;

  transform: translateY(-10px);
  // transform: translateY(-10px);

}
.test-transition-leave-active {
  position: absolute;
  // transition: all .2s;

}
.testTranstitionWrapper {
  position: relative;
}
.test-transition-move {
  // transition: all 1s;
}
</style>
