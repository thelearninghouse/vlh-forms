<template lang="html">
  <transition name="slide-fade" appear mode="out-in">
    <div class="step" v-if="currentStep == stepID" v-bind="$attrs">
      <h4 v-text="'Step' + stepID"></h4>
      <h5>Current Step:  {{currentStep}}</h5>
      <slot>
        <p>This should not show up unless theres nothing inside component in parent</p>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'form-step',
  // inject: ['currentStep'],
  props: {
    stepID: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentStep () {
      return this.$parent.currentStep
    }
  },
  mounted () {
    console.log(this.$parent);
  }
}
</script>

<style lang="css">
</style>
