<template>
    <button
      class="previous-button form-button"
      v-on="$listeners"
      @click.stop.prevent="$emit('previous-step')"
      @keydown.enter.stop.prevent="$emit('previous-step')"
      v-text="previousBtnText"
    ></button>
</template>

<script>
export default {
  props: {
    /**
     * The text for the previous button
     */
    previousBtnText: {
      type: String,
      default: "previous"
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
    }
  },

  methods: {
    previousStep() {
      this.$emit("previous-step");
      //   this.$root.handlepreviousStep();
    }
  }
};
</script>

<style scoped>
</style>
