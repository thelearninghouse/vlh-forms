<script>
import FormField from "./FormField.vue";

/**
 * The zip component
 *
 * ```html
 * <form-zip v-model="submit.zip"/>
 * ```
 */
export default {
  name: "form-zip",
  extends: FormField,
  props: {
    name: {
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
  }
};
</script>

<style media="screen">
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
