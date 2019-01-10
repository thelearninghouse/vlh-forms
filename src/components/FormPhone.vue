<script>
import BaseInput from "./BaseInput.vue";

/**
 * The form component for emails
 *
 * ```html
 * <form-phone v-model="submit.phone"/>
 * ```
 */
export default {
  extends: BaseInput,
  props: {
    id: {
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
