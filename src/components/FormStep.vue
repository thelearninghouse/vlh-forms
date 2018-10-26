<template>
  <div class="step">
    <slot>
      <p>This should not show up unless theres nothing inside component in parent</p>
    </slot>
  </div>
</template>

<script>

export default {
/**
 * @name form-step A single step within a stepform
 * @type {String}
 */
  name: 'form-step',
  inject: ['$validator'],

  props: {
    activeStep: {
      type: [Number, String],
      required: true
    }
  },

  data () {
    return {
      inputId: ''
    }
  },

  computed: {
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
    if ( this.activeStep > 1 && this.activeStep == this.stepID ) {
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
</style>
