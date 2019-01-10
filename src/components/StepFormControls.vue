<template>
  <div class="stepFormControls">
    <button
      class="previous-button"
      v-if="currentFormStep > 1"
      @click.stop.prevent="$emit('previous-step');"
      @keydown.enter.stop.prevent="$emit('previous-step');"
      v-text="previousBtnText"
    >
      <!-- @dblclick.stop.prevent="handleDblClick" -->
    
      Previous
    </button>
    <button
      class="next-button"
      v-if="currentFormStep < totalFormSteps"
      @click.stop.prevent="nextStep($event)"
      @keydown.enter.stop.prevent="nextStep($event)"
      v-text="nextBtnText"
    ></button>
    <form-submit
      v-if="showFormSubmit"
      color="#222"
      text-color="white"
      :text="submitBtnText"
    />
    <slot />
  </div>
</template>

<script>
/**
 * Controls the flow for a step-form.
 * It consist of 2 regular HTML button elements for controlling previous and next steps
 * as well as the custom `form-submit` component
 */
export default {
  name: "step-form-controls",
  props: {
    /**
     * The number of steps that exist for this form
     */
    steps: {
      type: [Number, String],
      required: false
    },

    /**
     * The current step of the form
     */

    activeStep: {
      type: [Number, String],
      required: false
    },

    /**
     * The text for the previous button
     */
    previousBtnText: {
      type: String,
      default: "Previous"
    },

    /**
     * The text for the next button
     */
    nextBtnText: {
      type: String,
      default: "Next"
    },

    /**
     * The button text to be passed to the `form-submit` component
     */
    submitBtnText: {
      type: String
    },

    data() {
      return {
        clickCount: 0,
        clickTimer: null
      };
    }
  },
  computed: {
    /**
     * Uses root `currentStep` property to know where we are in the in the step-form
     */
    currentFormStep() {
      return this.$root.currentStep;
    },

    /**
     * Uses root `currentStep` property to know where we are in the in the step-form
     */
    totalFormSteps() {
      return this.$root.totalSteps;
    },

    /**
     * Uses root `currentStep` property to know where we are in the in the step-form
     */
    lastFormStep() {
      return this.$root.lastStep;
    },
    /**
     * Determines if the includes `form-submit` component should be used.
     */
    showFormSubmit() {
      // const lastStep = this.activeStep == this.steps ? true : false;
      if (this.lastFormStep && this.submitBtnText) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    handleDblClick(event) {
      console.log("FROM DBLCLICK");
      console.log(event);
    },
    handleClick(e) {
      // e.preventDefault();
      console.log(e);

      this.clickCount++;

      if (this.clickCount === 1) {
        this.clickTimer = setTimeout(() => {
          this.clickCount = 0;
          this.$emit("single-click");
        }, this.delay);
      } else if (this.clickCount === 2) {
        clearTimeout(this.clickTimer);
        this.clickCount = 0;
        this.$emit("double-click");
      }
    },
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
