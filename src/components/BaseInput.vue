<template>
  <div class="form-item">
    <label :for="id" v-text="label"></label>
    <input
      :id="id"
      :type="type"
      :name="id"
      :value="value"
      v-bind="$attrs"
      v-on="inputListeners"
      v-validate="validation"
      :data-vv-as="label"
      :data-vv-name="id"
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

    validation: {
      type: String,
      default: "required"
    },

    optional: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String
    },

    pattern: {
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
