<script>
import FormField from "./FormField.vue";

/**
 * The form component for phone numbers
 *
 * ```html
 * <form-email v-model="submit.email"/>
 * ```
 */
export default {
  name: "form-email",
  extends: FormField,
  props: {
    name: {
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
