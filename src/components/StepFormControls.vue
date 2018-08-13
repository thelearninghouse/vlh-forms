<template>
  <div class="stepFormControls">
     <button
       class="previous-button"
       v-if="activeStep > 1"
       @click.stop.prevent="$emit('previous-step')"
       @keydown.enter.stop.prevent="$emit('previous-step')"
       v-text="previousBtnText">
       Previous
     </button>
     <button
       class="next-button"
       v-if="activeStep < steps"
       @click.stop.prevent="nextStep($event)"
       @mousedown.stop.prevent="nextStep($event)"
       @keydown.enter.stop.prevent="nextStep($event)"
       v-text="nextBtnText">
     </button>
     <slot/>
   </div>
</template>

<script>
import FormSubmitButton from "./FormSubmitButton.vue";
export default {
  name: "step-form-controls",
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
      default: "Previous"
    },
    nextBtnText: {
      type: String,
      default: "Next"
    },
    submitBtnText: {
      type: String
    }
  },
  computed: {
    currentStepFromParent() {
      return this.$parent.currentStep;
    }
  },
  methods: {
    previousStep($event) {},

    /** Emits `next-step` to parent for StepForms's
     * @event next-step
     * @type {Event}
     */
    nextStep() {
      console.log("FROM NEW NEXT STEP METHOD");
      this.$emit("next-step");
    }
  }
};
</script>

<style lang="scss">
.stepFormControls {
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  button {
    background-color: #f9f9f9;
    // padding: .25em .5em;
    display: flex;
    overflow: hidden;
    margin: 0 5px 5px 5px;
    padding: 4px 8px;
    // font-size: .85em;
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
    // line-height: 1.3;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
