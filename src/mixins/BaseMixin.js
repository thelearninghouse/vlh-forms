/**
 * @mixin
 */
import FormHelp from "./../components/FormHelp.vue";
import FormHelpIcon from "./../components/FormHelpIcon.vue";

export default {
  inheritAttrs: false,
  inject: ["$validator"],

  components: {
    FormHelp,
    FormHelpIcon
  },
  props: {
    /**
     * Label for form item
     */
    label: {
      type: String,
      required: false
    },

    /**
     * ID attribute
     */
    id: {
      type: String,
      required: false
    },

    /**
     * What the form-field is binding to.
     * Use this like so: `v-model="submit.yourField"`
     * @model
     */
    value: [String, Number],

    /**
     * Used in form help messages.
     * Form help normally uses the label but setting this can overwrite that setting.
     * This is helpful when the label is longer. `:validation-name="license question"
     */
    validationName: {
      type: String
    },

    /**
     * The validation used for the field. Default is just required,
     * but could be something diffenent such as required and must be a number.
     * `:validation="required|num"
     */
    validation: {
      type: String,
      default: "required"
    }
  },

  data: () => ({
    hasFocus: false
  }),

  computed: {
    helpIconId() {
      return `${this.id}-help-icon`;
    },

    helpTextId() {
      return `${this.id}_help`;
    },

    fieldValidity() {
      return this.fields[this.id] == undefined
        ? false
        : this.checkFieldValidity(this.fields[this.id]);
    },

    formItemClasses() {
      return {
        "form-item": true,
        "form-item-active": this.hasFocus,
        "form-item-filled": this.value,
        "using-floating-labels": this.$root.useFloatingLabels
      };
    },

    currentIcon() {
      if (this.errors.has(this.id)) {
        return "ErrorIcon";
      } else if (
        this.fields[this.id] != undefined &&
        this.checkFieldValidity(this.fields[this.id])
      ) {
        return "ValidIcon";
      } else {
        return "";
      }
    }
  },

  methods: {
    /**
     * Checks the validaty for the field
     * @param {field}
     */
    checkFieldValidity(field) {
      return field.dirty && field.valid && field.validated ? true : false;
    },

    /**
     * Handles converting any keyboard events for ENTER key and treats it as if the TAB key was pressed
     * @param {event}
     */
    enterToTab(event) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    },

    handleFocus(event) {
      console.log("handleFocus event");
      this.hasFocus = true;
      this.$emit("focus", event);
    },

    handleBlur(event) {
      console.log("handleBlur event");
      this.hasFocus = false;
      this.$emit("blur", event);
    }
  }
};
