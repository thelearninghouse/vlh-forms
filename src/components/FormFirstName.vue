<script>
import BaseInput from "./BaseInput";

/**
 * The form component for first names
 * ```html
 * <form-first-name v-model="submit.firstName"/>
 * ```
 */
export default {
  extends: BaseInput,
  props: {
    id: {
      default: "firstName"
    },

    label: {
      default: "First Name"
    },
    autocomplete: {
      default: "given-name"
    }
  }
};
</script>
