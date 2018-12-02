<script>
import FormField from "./FormField.vue";

/**
 * The form component for first names
 * ```html
 * <form-first-name v-model="submit.firstName"/>
 * ```
 */
export default {
  name: "form-first-name",
  extends: FormField,
  props: {
    name: {
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
