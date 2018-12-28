<template>
  <div class="step">
    <slot />
  </div>
</template>

<script>
/**
 * Used in step-forms.
 *
 * ```html
 * <form-step :active-step="currentStep" v-if="currentStep == 1" :key="1">
 *  <form-first-name v-model="submit.firstName"/>
 *  <form-last-name v-model="submit.lastName"/>
 * </form-step>
 * ```
 */
export default {
  name: "form-step",

  inject: ["$validator"],

  props: {
    activeStep: {
      type: [Number, String],
      required: false
    }
  },

  computed: {
    firstField() {
      return Object.keys(this.fields)[0];
    },
    
    lastField() {
      let fieldsInStep = Object.keys(this.fields);
      return fieldsInStep[fieldsInStep.length - 1];
    },

    stepId() {
      return this.$vnode.data.key;
    },

    currentFormStep() {
      return this.$root.currentStep
    },

    isActive() {
      return this.$root.currentStep == this.stepId
    }
  },

  mounted() {
    if (this.$root.currentStep > 1 && this.$root.currentStep == this.stepId) {
      this.$bus.$emit("set-focus", this.firstField);
    }
  }
};
</script>

<style lang="scss">
.step {
  position: relative;
  min-height: 100px;
}
</style>
