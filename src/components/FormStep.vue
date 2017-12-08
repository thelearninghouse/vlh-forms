<template lang="html">
  <!-- <transition name="slide-fade" appear mode="out-in"> -->
  <div class="step">
    <h4 v-text="'Step' + stepID"></h4>
    <h5>Current Step:  {{currentStep}}</h5>
    <slot>
      <p>This should not show up unless theres nothing inside component in parent</p>
    </slot>
  </div>
  <!-- </transition> -->
</template>

<script>

export default {
  name: 'form-step',
  props: {
    stepID: {
      type: Number,
      required: true
    }
  },
  inject: ['$validator'],
  
  computed: {
    currentStep () {
      return this.$parent.currentStep
    },
    firstField () {
      return Object.keys(this.fields)[0];
    }
  },

  mounted () {
    this.$bus.$emit('set-focus', this.firstField)
  }
}
</script>

<style lang="css">
.step {
  position: relative;
}
</style>
