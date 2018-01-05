<template>
  <div class="stepFormControls">
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
</style>
