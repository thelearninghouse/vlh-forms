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

<style lang="scss" scoped>
.form-item-country {
  margin: 0.5em 0 0.5em 2%;
  flex: 0 1 58%;
}
</style>
