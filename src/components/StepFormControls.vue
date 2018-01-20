<template>
  <div class="stepFormControls">
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
  .stepFormControls {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;

    button {
      -webkit-appearance: none;
      -moz-appearance: none;
      background-color: #f9f9f9;
      padding: .25em .5em;

      display: flex;
      overflow: hidden;

      margin: 10px;
      padding: 10px 12px;
      font-size: .9em;
      cursor: pointer;
      user-select: none;
      transition: all 150ms linear;
      text-align: center;
      white-space: nowrap;
      text-decoration: none !important;
      text-transform: none;
      text-transform: capitalize;
      border: 0 none;
      border-radius: 4px;
      line-height: 1.3;

      -webkit-appearance: none;
      -moz-appearance:    none;
      appearance:         none;

      justify-content: center;
      align-items: center;
      flex-basis: 75px;

    }
    .previous-step {
      margin-right: 1.5em;
    }

    .form-submit {
      margin-left: auto;
    }
  }
</style>
