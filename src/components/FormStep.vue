<template>
  <!-- <transition name="slide-fade" mode="out-in" appear> -->
  <div class="step">
    <slot>
      <p>This should not show up unless theres nothing inside component in parent</p>
    </slot>
  </div>
<!-- </transition> -->
</template>

<script>

export default {
  name: 'form-step',
  inject: ['$validator'],
  computed: {
    currentStep () {
      return this.$parent.currentStep
    },
    firstField () {
      return Object.keys(this.fields)[0];
    },
    lastField () {
      let fieldsInStep = Object.keys(this.fields)
      return fieldsInStep[fieldsInStep.length - 1];
    },
    stepID () {
      return this.$vnode.data.key
    }
  },

  mounted () {
    if (this.stepID > 1) {
      this.$nextTick(function () {
        this.$bus.$emit('set-focus', this.firstField)
      })
    }
  }
}
</script>

<style lang="scss">
  .step {
    position: relative;
    min-height: 100px;
  }
</style>
