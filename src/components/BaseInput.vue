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
        @keydown.enter="enterToTab"
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
    />
  </div>
</template>

<script>
import BaseMixin from "./../mixins/BaseMixin";

/**
 * The base component for all inputs
 *
 * ```html
 * <base-input id="text" v-model="submit.formField" label="Form Field Example"/>
 * ```
 * @mixin
 */
export default {
  mixins: [BaseMixin],
  props: {
    /**
     * The type of text field
     */
    type: {
      type: String,
      default: "text"
    },

    /**
     * Allows field to be optional.
     *
     * ```vue
     * <form-zip v-model="submit.zip" optional />
     * ```
     */
    optional: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String
    },

    /**
     * Role attribute (Could be used for accessibility)
     */
    role: {
      type: String
    },

    pattern: {
      type: String
    }
  },

  computed: {
    inputName() {
      return this.$attrs.name || this.id;
    },

    inputClasses() {
      return {
        input: true,
        valid: this.fieldValidity,
        invalid: this.errors.has(this.id)
      };
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
