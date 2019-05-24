<script>
import BaseSelect from "./BaseSelect.vue";
import countriesArray from "@/data/countries.json";

export default {
  extends: BaseSelect,
  props: {
    id: {
      default: "country"
    },

    label: {
      type: String,
      default: "Select Your Country"
    },

    options: {
      type: Array,
      default() {
        return countriesArray;
      }
    }
  }
};
</script>
