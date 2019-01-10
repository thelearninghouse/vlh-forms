<script>
import BaseInput from "./BaseInput.vue";

/**
 * The form component for emails
 *
 * ```html
 * <form-email v-model="submit.email"/>
 * ```
 */
export default {
  extends: BaseInput,
  props: {
    id: {
      default: "email"
    },
    label: {
      default: "Email"
    },
    type: {
      default: "email"
    },
    validation: {
      default: "required|email|validEmail"
    },
    autocomplete: {
      default: "email"
    }
  }
};
</script>
