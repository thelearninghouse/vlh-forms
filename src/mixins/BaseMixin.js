/**
 * @mixin
 */
import FormHelp from "@/components/FormHelp.vue";
import FormHelpIcon from "@/components/FormHelpIcon.vue";

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
      required: true
    },

    value: [String, Number],

    validationName: {
      type: String
    },

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
      return this.fields[this.id] == undefined ?
        false :
        this.checkFieldValidity(this.fields[this.id]);
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