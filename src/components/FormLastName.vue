<script>
import BaseInput from "./BaseInput";

/**
 * The form component for last names
 * ```html
 * <form-last-name v-model="submit.lastName"/>
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
      default: "family-name"
    }
  }
};
</script>
