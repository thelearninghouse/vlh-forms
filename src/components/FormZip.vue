<script>
import BaseInput from "./BaseInput.vue";

/**
 * The zip component
 *
 * ```html
 * <form-zip v-model="submit.zip"/>
 * ```
 */
export default {
  extends: BaseInput,
  props: {
    id: {
      default: "zip"
    },

    label: {
      default: "Zip"
    },

    role: {
      default: "textbox"
    },

    type: {
      default: "number"
    },

    autocomplete: {
      default: "postal-code"
    },

    pattern: {
      default: "[0-9]*"
    },

    validation: {
      default: "required|validZip"
    }
  },

  computed: {
    handleInternational() {
      return this.$root.usCitizen ? false : true;
    },

    inputValidation() {
      if (this.optional || this.handleInternational)
        return { rules: { required: false } };
      else return this.validation;
    }
  },

  methods: {
    hideElement(el, rootEl) {
      // el.style.height = "0";
      el.style.display = "none";
      rootEl.classList.add("hide-for-international");
    },

    showElement(el, rootEl) {
      rootEl.classList.remove("hide-for-international");
      el.style.display = "block";
      el.style.height = el.scrollHeight + "px";
      el.style.display = "block";

      setTimeout(() => {
        el.style.height = "auto";
      }, 0);
    }
  },

  watch: {
    handleInternational(isInternational) {
      if (isInternational) this.hideElement(this.$el, this.$root.$el);
      else this.showElement(this.$el, this.$root.$el);
    }
  }
};
</script>

<style scoped lang="scss">
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-item-zip {
  // overflow: hidden;
  // transition: height 350ms ease-in-out;
  height: auto;
  margin: 0.5em 0 0.5em 2%;
  flex: 0 1 30%;

  .hide-for-international & {
    display: none;
    // height: 0;
  }
}

/* display: block;
	height: auto; */
</style>
