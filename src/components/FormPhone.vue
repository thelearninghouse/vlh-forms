<script>
import FormField from "./FormField.vue";

/**
 * The form component for emails
 *
 * ```html
 * <form-phone v-model="submit.phone"/>
 * ```
 */
export default {
  name: "form-phone",
  extends: FormField,
  props: {
    name: {
      default: "phone"
    },
    /**
     * Label for `form-phone`
     */
    label: {
      default: "Phone Number"
    },
    type: {
      default: "tel"
    },
    validation: {
      default: "required|validPhone"
    },
    autocomplete: {
      default: "tel"
    }
  }
};
</script>
