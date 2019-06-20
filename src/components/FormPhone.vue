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
  },
  computed: {
    handleInternational () {
      return this.$root.usResidentChecked ? false : true;
    },

    inputValidation () {
      if (this.optional) return { rules: { required: false } };
      else if (this.handleInternational) return "required";
      else return this.validation;
    }
  }
};
</script>

<style scoped lang="scss">
.form-item.form-item-phone {
  // width: 60%;
  // margin: 0.5em 0 0.5em 2%;
  // flex: 1 1 58%;
}
</style>
