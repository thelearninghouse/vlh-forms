<template>
  <!-- <div class="form-item form-item-checkbox"> -->
  <div :class="[formItemClasses, `form-item-${id}`, 'form-item-checkbox']">
    <input
      :id="id"
      :checked="checked"
      type="checkbox"
      :name="id"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="id" v-text="label"></label>

    <!-- <span class="checkmark"></span> -->
  </div>
</template>

<script>
import BaseMixin from "./../mixins/BaseMixin";
export default {
  mixins: [BaseMixin],
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    isChecked() {
      return this.checked;
    }
  },
  methods: {
    onChange() {
      console.log("TCL: onChange -> onChange");
      return this.$emit("change", !this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item-checkbox {
  display: flex;
  align-items: center;
  flex: 0 1 40%;
  justify-content: space-between;
  margin-left: 0;
  label {
    pointer-events: auto;
    cursor: pointer;
    display: block;
    flex: 0 1 80%;
    margin-left: 2%;
  }
  input {
    cursor: pointer;
    flex: 0 1 15%;
    zoom: 0.55;
  }
}
</style>
