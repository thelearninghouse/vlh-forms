<script>
import BaseInput from "./BaseInput";

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
  }
};
</script>
