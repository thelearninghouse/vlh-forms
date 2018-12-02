<template>
  <transition
    :name="transition"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div class="form-item">
      <label :for="name">{{ label }}</label>
      <div class="form-field-wrapper">
        <select
          v-model="model"
          v-bind="$attrs"
          v-on="$listeners"
          @keydown.enter.stop.prevent
          class="select"
          :class="{ invalid: errors.has(name), valid: fieldValidity }"
          v-validate="fieldValidation"
          :name="name"
          :ref="name"
          :id="fieldId"
          :aria-describedby="fieldId + '_help'"
          :data-vv-as="validationName ? validationName : label"
        >
          <option key="initial" value="" v-text="defaultText"></option>
          <option
            :id="option.id"
            :key="option.id"
            v-for="option in options"
            :value="option.id"
            >{{ option.name }}</option
          >
        </select>
        <form-help-icon :icon="currentIcon"></form-help-icon>
      </div>

      <form-help
        :visible="showHelp"
        :id="fieldId + '_help'"
        :helpText="errors.first(name)"
      ></form-help>
    </div>
  </transition>
</template>

<script>
import FormItemMixin from "../mixins/FormItemMixin";

/**
 * The select menu element used for displaying a list of options
 * such as degree levels or programs
 *
 * ```html
 * <form-select name="program" label="Select a Program" v-model="submit.program" :options="programs"/>
 * ```
 */
export default {
  name: "form-select",
  mixins: [FormItemMixin],
  props: {
    /**
     * What the form-field is binding to
     * @model
     */
    value: "", // eslint-disable-line

    /**
     * Array of options for select menu
     */
    options: {
      type: Array,
      required: true
    },

    /**
     * Default text for select menu
     */
    defaultText: {
      type: String,
      default: "Select"
    },
    validation: {
      type: [String, Object]
    },
    validationName: {
      type: String
    },
    optional: {
      type: Boolean,
      default: false
    },
    focusOnEnter: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: "none"
    }
  },
  data() {
    return {
      selectedOption: ""
    };
  },

  created() {
    this.$bus.$on("qualifier-updated", newIdValue => {
      console.log("on:qualifier-updated ran");
      this.updateSelectedProgramId(newIdValue);
    });
    this.focusListener();
  },

  mounted() {
    this.selectedOption = this.value;
  },

  computed: {
    model: {
      get() {
        return this.selectedOption;
      },

      set(val) {
        this.$nextTick(function() {
          this.$emit("input", val);
          val !== "" ? this.$emit("option-selected") : "";
        });
      }
    }
  },

  methods: {
    updateSelectedProgramId(newIdValue) {
      console.log("newIdValue", newIdValue);
      let index = this.options.findIndex(this.findQualifierProgramIndex);
      console.log("index", index);
      if (index > -1) {
        this.options[`${index}`].id = newIdValue;
        this.selectedOption = newIdValue;
        this.$emit("input", newIdValue);
      }
    },

    findQualifierProgramIndex(option) {
      return option.id === this.selectedOption;
    },
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter: function(el) {
      el.style.height = "auto";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    },
    /**
     * This isn't correct
     * @event focus
     * @type {Event}
     */
    setFocus(name) {
      this.$refs[name] ? this.$refs[name].focus() : "";
    },

    handleFocusOnEnter() {
      if (this.focusOnEnter && this.selectedOption != "") {
        this.$refs[this.name].focus();
      }
    }
  },

  watch: {
    /**
     * When v-model is changed:
     *   1. Set the selected option.
     *   2. If it's invalid, validate again.
     */
    value: function(newValue) {
      this.selectedOption = newValue;
    }
  }
};
</script>

<style lang="scss">
select {
  cursor: pointer;
}
label {
  display: block;
}
</style>
