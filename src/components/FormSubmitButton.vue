<template>
<div class="form-submit">

  <button :class="['submit', {'active-submission': formSubmissionActive}]" type="submit" :disabled="disableHandler || formSubmissionActive">
    <span v-text="text" class="submit-text"></span>
    <transition mode="out-in" name="fade" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <spinner class="submit-spinner" v-if="formSubmissionActive" :status="formSubmissionActive" :color="spinner.color" :size="spinner.size" :depth="spinner.depth" :rotation="spinner.rotation" :speed="spinner.speed"></spinner>
      <check-icon v-if="formSubmitted" class="submit-success"></check-icon>
    </transition>
  </button>


</div>
</template>

<script>
import Spinner from "./Spinner";
import FormSuccess from "../assets/images/form-success.svg";
import CheckIcon from "../assets/images/check-icon.svg";

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
    Spinner,
    CheckIcon,
    FormSuccess
  },
  data: () => ({
    formSubmissionActive: false,
    formSubmitted: false,
    spinner: {
      size: 25,
      status: true,
      color: "#333",
      depth: 3,
      rotation: true,
      speed: 0.8
    }
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
      if (this.disableOnErrors == false) {
        return false;
      } else {
        return this.errors.any();
      }
    }
  },

  methods: {
    beforeEnter: function(el) {},
    enter: function(el) {
      // el.style.height = el.scrollWidth + 20 + "px";
    },
    beforeLeave: function(el) {
      // el.style.height = el.scrollWidth + 20 + "px";
    },
    leave: function(el) {
      // el.style.width = "0";
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
