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
    }
  },

  watch: {
    handleInternational(isInternational) {
      const zipElement = this.$refs[this.id];
      if (isInternational) zipElement.style.display = "none";
      else zipElement.style.display = "block";
    }
  }
};
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
