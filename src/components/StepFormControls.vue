<template>
  <div class="stepFormControls">
     <button v-if="activeStep > 1"
       @click.prevent="$emit('previous-step')"
       @key.enter="$emit('previous-step')"
       v-text="previousBtnText">
       Previous
     </button>
     <button v-if="activeStep < steps"
       @click.stop.prevent="$emit('next-step')"
       @key.enter.prevent="$emit('next-step')"
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
  }
}
</script>

<style lang="scss">
</style>
