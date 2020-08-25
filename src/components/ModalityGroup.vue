<template>
  <div class="v-radio-group">
    <fieldset>
      <legend>How/Where would you like to take classes?</legend>
      <template v-for="option in options">
        <label :key="option.name" class="radio">
          <input
            type="radio"
            :value="option.id"
            v-model="radioButtonValue"
            v-validate="'required'"
            @change="$emit('input', $event.target.value)"
            :data-vv-name="id"
            :data-vv-as="inputValidationName"
          />
          <span>{{ option.name }}</span>
        </label>
      </template>
      <form-help
        :id="helpTextId"
        :visible="errors.has(id)"
        :helpText="errors.first(id)"
      />
    </fieldset>
  </div>
</template>

<script>
import BaseMixin from "./../mixins/BaseMixin";

export default {
  mixins: [BaseMixin],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },

  computed: {
    radioButtonValue: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        console.log("e", newValue);
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", newValue);
      }
    },
    inputName() {
      return this.$attrs.name || this.id;
    },

    inputId() {
      return this.$id(this.id);
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
        input: event => this.$emit("input", event.target.value),
        focus: event => this.handleFocus(event),
        blur: event => this.handleBlur(event)
      };
    },

    inputValidation() {
      if (this.optional) return { rules: { required: false } };
      else return this.validation || "required";
    },

    inputValidationName() {
      return this.validationName || this.label;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-radio-group {
  fieldset {
    border: none;
    display: flex;
  }
}
</style>
