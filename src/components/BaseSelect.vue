<template>
  <div class="form-item">
    <label :for="id" v-text="label"></label>
    <select
      :id="id"
      :name="$attrs.name || id"
      :value="value"
      v-bind="$attrs"
      v-on="selectListeners"
      v-validate="validation"
      :data-vv-as="label"
      :data-vv-name="id"
      :aria-describedby="helpTextId"
    >
      <option key="initial" value="" v-text="defaultText"></option>
      <option
        v-for="option in options"
        :value="option.id"
        :key="option.id"
        :id="option.id"
        >{{ option.name }}
      </option>
    </select>

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
    label: String,
    defaultText: {
      type: String,
      default: "Select"
    },
    options: {
      type: Array,
      required: true
    },

    validation: {
      type: String,
      default: "required"
    }
  },

  computed: {
    helpTextId() {
      return `${this.id}_help`;
    },

    selectListeners() {
      return {
        ...this.$listeners,
        change: event => this.$emit("input", event.target.value)
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
