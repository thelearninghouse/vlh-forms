<template>
  <div class="form-item">
    <label :for="id" v-text="label"></label>
    <div class="form-field-wrapper">
      <input
        :id="id"
        :ref="id"
        :value="value"
        :type="type"
        v-bind="$attrs"
        :name="inputName"
        :class="inputClasses"
        v-on="inputListeners"
        :data-vv-name="id"
        :data-vv-as="inputValidationName"
        v-validate="inputValidation"
        :aria-describedby="helpTextId"
        :autocomplete="autocomplete"
        :pattern="pattern"
      />
      <form-help-icon
        :id="helpIconId"
        :class="{ invalid: errors.has(id), valid: fieldValidity }"
        :icon="currentIcon"
      />
    </div>
    <form-help
      :id="helpTextId"
      :visible="errors.has(id)"
      :helpText="errors.first(id)"
    ></form-help>
  </div>
</template>

<script>
import BaseMixin from '@/mixins/BaseMixin'

export default {
  mixins: [BaseMixin],
  inheritAttrs: false,
  inject: { $validator: "$validator" },
  props: {
    id: {
      type: String,
      required: true
    },
    
    label: String,

    value: [String, Number],

    validationName: {
      type: String
    },

    validation: {
      type: String,
      default: "required"
    },

    type: {
      type: String,
      default: "text"
    },

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
    }
  },

  computed: {
    inputName () {
      return this.$attrs.name || this.id
    },

    inputClasses () {
      return {
        input: true,
        valid: this.fieldValidity,
        invalid: this.errors.has(this.id),
      }
    },

    inputListeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },

    inputValidation () {
      return this.optional
        ? { rules: { required: false } }
        : this.validation || "required";
    },

    inputValidationName () {
      return this.validationName || this.label;
    }
  }
};
</script>

<style lang="scss">
.form-field-wrapper {
  position: relative;
}
.form-item {
  select {
    cursor: pointer;
  }
  label {
    display: block;
  }
}
</style>
