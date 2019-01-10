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
      required: true
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
    }
  }
};
