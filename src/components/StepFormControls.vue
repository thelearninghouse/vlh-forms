<template>
  <div class="stepFormControls">
<<<<<<< HEAD
     <button
       v-if="activeStep > 1"
       class="previous-step"
       @click.prevent="$emit('previous-step')"
       @key.enter="$emit('previous-step')"
       v-text="previousBtnText">
       Previous
     </button>
     <button
       v-if="activeStep < steps"
       class="next-step"
       @click.stop.prevent="$emit('next-step')"
       @key.enter.prevent="$emit('next-step')"
=======
     <button v-if="activeStep > 1"
       @click.stop.prevent="$emit('previous-step')"
       @keydown.enter.stop.prevent="$emit('previous-step')"
       v-text="previousBtnText">
       Previous
     </button>
     <button v-if="activeStep < steps"
       @click.stop.prevent="nextStep($event)"
       @mousedown.stop.prevent="nextStepMD($event)"
       @keydown.enter.stop.prevent="nextStep($event)"
>>>>>>> 66b7c6c7e732be7ec90b8f63d505fd7b1ffa5077
       v-text="nextBtnText">
     </button>
     <form-submit-button v-if="activeStep == steps" :text="submitBtnText"></form-submit-button>
   </div>
</template>

<script>
import FormSubmitButton from './FormSubmitButton'
export default {
  name: 'step-form-controls',
  props: {
    steps: {
      type: [Number, String],
      required: true
    },
    activeStep: {
      type: [Number, String],
      required: true
    },
    previousBtnText: {
      type: String,
      default: 'Previous'
    },
    nextBtnText: {
      type: String,
      default: 'Next'
    },
    submitBtnText: {
      type: String
    }
  },
  computed: {
    currentStepFromParent () {
      return this.$parent.currentStep
    }
  },

  methods: {
    previousStep($event) {
    },

    nextStep () {
      console.log('FROM NEW NEXT STEP METHOD');
      this.$emit('next-step')
    },
    nextStepMD () {
      console.log('MD: FROM NEW NEXT STEP METHOD');
      this.$emit('next-step')
    }
  }
}
</script>

<style lang="scss">
  .stepFormControls {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;

    button {
      background-color: #f9f9f9;
<<<<<<< HEAD
      padding: .25em .5em;
=======
      // padding: .25em .5em;
>>>>>>> 66b7c6c7e732be7ec90b8f63d505fd7b1ffa5077
      display: flex;
      overflow: hidden;
      margin: 0 5px 5px 5px;
      padding: 4px 8px;
<<<<<<< HEAD
      font-size: .85em;
=======
      // font-size: .85em;
>>>>>>> 66b7c6c7e732be7ec90b8f63d505fd7b1ffa5077
      cursor: pointer;
      user-select: none;
      transition: all 150ms linear;
      text-align: center;
      white-space: nowrap;
      text-decoration: none !important;
      text-transform: none;
      text-transform: capitalize;
      border: 0 none;
      border-radius: 2px;
<<<<<<< HEAD
      line-height: 1.3;
=======
      // line-height: 1.3;
>>>>>>> 66b7c6c7e732be7ec90b8f63d505fd7b1ffa5077

      -webkit-appearance: none;
      -moz-appearance:    none;
      appearance:         none;

      justify-content: center;
      align-items: center;
      // flex-basis: 75px;
    }
    .previous-step {
      margin-right: 1.5em;
    }

    .form-submit {
      margin-left: auto;
    }
  }
</style>
