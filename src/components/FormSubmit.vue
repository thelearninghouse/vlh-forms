<template>
  <div class="form-submit">
    <form-submit-button
      :animation="animation"
      type="submit"
      class="submit"
      :color="color"
      :text-color="textColor"
      :is-loading="formSubmissionActive"
      :disabled="isDisabled || formSubmissionActive"
      :status="status"
    >
      <span v-text="text"></span>
    </form-submit-button>
  </div>
</template>

<script>
export default {
  name: "form-submit",
  inject: ["$validator"],
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: "Request Info"
    },
    disableOnErrors: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: null
    }
  },
  data: () => ({
    formSubmissionActive: false,
    formSubmitted: false,
    status: ""
  }),

  created() {
    this.$bus.$on("is-submitting", submitState => {
      this.formSubmissionActive = submitState;
    });

    this.$bus.$on("is-submitted", submitState => {
      this.formSubmitted = submitState;
    });
  },

  computed: {
    isDisabled() {
      if (this.disableOnErrors === false) return false;
      else return this.errors.any() ? true : false;
    }
  },

  watch: {
    formSubmitted: function(submissionStatus) {
      if (submissionStatus === true) this.status = true;
      else this.status = "";
    }
  }
};
</script>

<style lang="scss">
.submit {
  cursor: pointer;
  padding: 0.5em 1em;
  font-size: inherit;
  display: flex;
  align-items: center;
  transition: all 0.25s ease-out;
  &:disabled {
    cursor: not-allowed;
  }
}
</style>
