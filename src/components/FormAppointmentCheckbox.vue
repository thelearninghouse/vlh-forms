<script>
import BaseCheckbox from "./BaseCheckbox.vue";

/**
 * The form component schedule an appointment checkbox
 * ```html
 * <form-appointment-checkbox v-model="submit.appointment"/>
 * ```
 */
export default {
  extends: BaseCheckbox,
  props: {
    id: {
      default: "appointment"
    },
    label: {
      default: `
       <span class="label-title">Schedule An Appointment</span>Yes! I'd like to schedule an appointment with a admissions counselor. If this option is not selected, an admission specialist will still contact you at a time of their choosing.`
    }
  }
};
</script>
