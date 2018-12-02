<template>
  <div class="form-item">
    <label v-text="label" :for="name"></label>
    <div class="form-field-wrapper">
      <input
        v-validate="fieldValidation"
        class="input"
        :name="name"
        :autocomplete="autocomplete"
        :pattern="pattern"
        :id="fieldId"
        :ref="name"
        :type="type"
        v-model.trim="model"
        v-bind="$attrs"
        v-on="$listeners"
        @keydown.enter.stop.prevent
        :data-vv-as="label"
        :data-vv-name="name"
        :data-vv-delay="300"
        :role="fieldRole"
        :aria-describedby="fieldId + '-help'"
      />
      <form-help-icon
        :id="fieldId + '-help-icon'"
        :class="{ invalid: errors.has(name), valid: fieldValidity }"
        :icon="currentIcon"
      >
      </form-help-icon>
    </div>
    <form-help
      :visible="showHelp"
      :id="fieldId + '-help'"
      :helpText="errors.first(name)"
    ></form-help>
  </div>
</template>

<script>
import FormItemMixin from "../mixins/FormItemMixin";

/**
 * The base component for all inputs
 *
 * ```html
 * <form-field id="text" v-model="submit.formField" label="Form Field Example"/>
 * ```
 * @mixin
 */
export default {
  name: "form-field",
  mixins: [FormItemMixin],
  props: {
    /**
     * What the form-field is binding to
     * @model
     */
    value: {
      type: String,
      required: true
    },

    /**
     * Role attribute (Could be used for accessibility)
     */
    role: String,
    /**
     * Input type for the form input
     */
    type: {
      type: String,
      default: "text"
    },

    /**
     * Validation to use
     */
    validation: {
      type: [String, Object]
    },

    /**
     * Whether or not the field is optional
     */
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

  data() {
    return {
      fieldRole: this.role ? this.role : false
    };
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$nextTick(function() {
          this.$emit("input", val);
        });
      }
    }
  },

  created() {
    this.focusListener();
  }
};
</script>

<style lang="scss">
.form-field-wrapper {
  position: relative;
}
</style>
