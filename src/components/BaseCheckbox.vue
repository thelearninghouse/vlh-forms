<template>
  <div :class="[formItemClasses, `form-item-${id}`, 'form-item-checkbox']">
    <input
      :id="inputId"
      :ref="id"
      :checked="checked"
      type="checkbox"
      :name="id"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="inputId" v-html="labelContent"></label>
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
    labelContent() {
      return this.label;
    },

    // inputName() {
    //   return this.$attrs.name || this.id;
    // },

    inputId() {
      return this.$id(this.id);
    },

    isChecked() {
      return this.checked;
    }
  },
  methods: {
    onChange() {
      return this.$emit("change", !this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item-checkbox {
}
</style>
