<template>
    <button
      class="next-button form-button"
      v-on="$listeners"
      @click.stop.prevent="$emit('next-step')"
      @keydown.enter.stop.prevent="$emit('next-step')"
      v-text="nextBtnText"
    ></button>
</template>

<script>
export default {
  props: {
    /**
     * The text for the next button
     */
    nextBtnText: {
      type: String,
      default: "Next"
    },
    icon: {
      type: Boolean,
      default: true
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
    nextStep() {
      this.$emit("next-step");
    }
  }
};
</script>

<style scoped>
</style>
