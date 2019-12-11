<template>
  <button
    class="next-button form-button"
    v-on="$listeners"
    @click.stop.prevent="nextStep"
    @keydown.enter.stop.prevent="nextStep"
  >
    <span class="next-button-text" v-html="text"></span>
    <RightArrow class="next-button-icon" />
  </button>
</template>

<script>
import RightArrow from "@/assets/images/right-arrow.svg";

export default {
  props: {
    /**
     * The text for the next button
     */
    text: {
      type: String,
      default: "Next"
    },
    icon: {
      type: Boolean,
      default: true
    },

    iconColor: {
      type: String
    }
  },

  components: { RightArrow },

  computed: {
    // styleObject: {
    //   fill: 'red',
    //   fontSize: '13px'
    // }
    rightArrowStyles() {
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
    nextStep() {
      this.$emit("next-step");
      // this.$root.handleNextStep();
    }
  }
};
</script>

<style scoped>
/* NOTE: SHOULD WE ADD THIS??? */
.next-button {
  margin-left: auto;
}

.next-button-icon {
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.5em;
  margin-left: 0.4em;
  position: relative;
  right: -1px;
}
</style>
