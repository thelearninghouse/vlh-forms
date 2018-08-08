<template>
<div class="form-submit">

  <vue-button-spinner
    type="submit"
    :is-loading="formSubmissionActive"
    :disabled="disableHandler || formSubmissionActive"
    :status="status">
    <span>Submit</span>
  </vue-button-spinner>
</div>
</template>

<script>
import VueButtonSpinner from "vue-button-spinner";
console.log(VueButtonSpinner);

export default {
  name: "form-submit-button",
  inject: ["$validator"],
  props: {
    text: {
      type: String,
      default: "Request Info"
    },
    disableOnErrors: {
      type: Boolean,
      default: true
    }
  },
  components: {
    VueButtonSpinner
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
    disableHandler() {
      if (this.disableOnErrors === false) return false;
      else return this.errors.any();
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
  &-spinner {
    transition: all 0.25s ease-out;
    width: inherit;
    margin-left: 10px;
  }
  &-success {
    transform: scale(0.7);
    margin-left: 10px;
    margin-right: -10px;
  }
}
</style>

<style lang="scss">
.form-submit {
  .vue-btn {
    .spinner {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
