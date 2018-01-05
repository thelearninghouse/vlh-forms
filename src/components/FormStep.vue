<template lang="html">
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
      this.$bus.$emit('set-focus', this.firstField)
    }
  }
}
</script>

<style lang="scss">
.step {
  position: relative;
  min-height: 100px;
}
.stepFormProgress {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  margin: 1em 0;
  .stepProgress {
    padding: .5em;
    transition: .25s ease;
    position: relative;
    border-bottom: 3px solid transparent;

    &.currentStep {
      border-bottom: 2px solid #444;
    }

    &.completedStep {

      &:after {
        content: "\2713";
        font-size: 1.5em;
        font-weight: 500;
        position: absolute;
        left: 100%;
        bottom: 2px;
        transition: .4s ease;
        color: #444;
      }
    }
  }
}
</style>
