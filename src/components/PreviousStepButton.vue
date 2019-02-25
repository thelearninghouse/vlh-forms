<template>
  <button
    class="previous-button form-button"
    v-on="$listeners"
    @click.stop.prevent="previousStep"
    @keydown.enter.stop.prevent="previousStep"
  >
    <LeftArrow class="previous-button-icon" />
    <span class="previous-button-text" v-html="text"></span>
  </button>
</template>

<script>
import LeftArrow from "@/assets/images/left-arrow.svg";
export default {
  props: {
    /**
     * The text for the previous button
     */
    text: {
      type: String,
      default: "previous"
    },

    icon: {
      type: String
    },

    iconColor: {
      type: String
    }
  },
  components: { LeftArrow },
  computed: {
    // styleObject: {
    //   fill: 'red',
    //   fontSize: '13px'
    // }
    leftArrowStyles() {
      return {
        fill: this.iconColor
      };
    },
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
    }
  },

  methods: {
    previousStep() {
      // this.$emit("previous-step");
      this.$root.handlePreviousStep();
    }
  }
};
</script>

<style scoped>
.previous-button-icon {
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.5em;

  margin-right: 0.4em;
  position: relative;
  left: -1px;
}
</style>
