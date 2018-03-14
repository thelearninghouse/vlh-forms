<template>
  <div class="form-submit">
    <input
      class="submit"
      type="submit"
      :disabled="disableHandler || formSubmissionActive"
      :value="text"/>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  name: 'form-submit-button',
  props: {
    text: {
      type: String,
      default: 'Request Info'
    },
    disableOnErrors: {
      type: Boolean,
      default: true,
    }
  },

  data: () => ({
    formSubmissionActive: false,
  }),

  created () {
    this.$bus.$on('is-submitting', (submitState) => {
      this.formSubmissionActive = submitState
    })
  },

  computed: {
    disableHandler () {
      if (this.disableOnErrors == false) {
        return false
      } else {
        return this.errors.any()
      }
    }
  }
}
</script>

<style lang="scss">
  input[type="submit"]:disabled {
    cursor: not-allowed;
  }

  .submit {
    cursor: pointer;
    padding: .5em 1em;
    font-size: inherit;
  }
</style>
