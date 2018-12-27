<script>
import BaseInput from "./BaseInput";
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
