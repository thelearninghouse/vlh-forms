<script>
import BaseInput from "./BaseInput";
export default {
  extends: BaseInput,
  props: {
    id: {
      default: "firstName"
    },
    label: {
      type: String,
      default: "First Name"
    },
    autocomplete: {
      default: "family-name"
    }
  }
};
</script>
