<template>
  <div class="form-item">
    <label :for="id" v-text="label"></label>
    <input
      :id="id"
      :name="$attrs.name || id"
      :value="value"
      :type="type"
      v-bind="$attrs"
      v-on="inputListeners"
      v-validate="inputValidation"
      :data-vv-name="id"
      :data-vv-as="inputValidationName"
      :aria-describedby="helpTextId"
      :autocomplete="autocomplete"
      :pattern="pattern"
    />
    <form-help
      :id="helpTextId"
      :visible="errors.has(id)"
      :helpText="errors.first(id)"
    ></form-help>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: { $validator: "$validator" },
  props: {
    id: {
      type: String,
      required: true
    },

    value: [String, Number],

    type: {
      type: String,
      default: "text"
    },

    label: String,

    optional: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String
    },

    role: {
      type: String
    },

    pattern: {
      type: String
    },

    validation: {
      type: String
    },

    validationName: {
      type: String
    }
  },

  computed: {
    helpTextId() {
      return `${this.id}_help`;
    },

    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },

    inputValidation() {
      return this.optional
        ? { rules: { required: false } }
        : this.validation || "required";
    },

    inputValidationName() {
      return this.validationName || this.label;
    }
  }
};
</script>

<style lang="scss">
.form-item {
  select {
    cursor: pointer;
  }
  label {
    display: block;
  }
}
</style>
