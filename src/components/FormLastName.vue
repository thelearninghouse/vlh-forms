<script>
import FormField from "./FormField.vue";

/**
 * The form component for last names
 * ```html
 * <form-last-name v-model="submit.lastName"/>
 * ```
 */
export default {
  name: "form-last-name",
  extends: FormField,
  props: {
    name: {
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
