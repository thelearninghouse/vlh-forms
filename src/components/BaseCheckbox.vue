<template>
  <div :class="[formItemClasses, `form-item-${id}`, 'form-item-checkbox']">
    <input
      :id="inputId"
      :ref="id"
      :data-vv-as="inputValidationName"
      v-validate="inputValidation"
      :checked="checked"
      type="checkbox"
      :name="id"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="inputId" v-html="labelContent"></label>
    <form-help
      :id="helpTextId"
      :visible="errors.has(id)"
      :helpText="errors.first(id)"
    />
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
    },
    validation: {
      type: String,
      default: ""
    }
  },
  computed: {
    labelContent() {
      return this.label;
    },

    inputId() {
      return this.$id(this.id);
    },

    isChecked() {
      return this.checked;
    },

    inputValidation() {
      // if (this.optional) return { rules: { required: false } };
      return this.validation || { rules: { required: false } };
    },

    inputValidationName() {
      return this.validationName || this.label;
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item {
  &-checkbox {
    label {
      flex: 1 1 0%;
    }

    input {
      flex: 0 1 22px;
    }
  }
}
.form-item-confirmCheckbox label {
  margin-top: 3px;
}
</style>
