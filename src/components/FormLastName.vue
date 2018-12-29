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
      default: "lastName"
    },

    label: {
      default: "Last Name"
    },
    autocomplete: {
      default: "family-name"
    }
  }
};
</script>
