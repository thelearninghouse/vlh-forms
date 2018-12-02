/**
 * @mixin
 */
import FormHelp from './../components/FormHelp.vue'
import FormHelpIcon from './../components/FormHelpIcon.vue'

export default {
  inheritAttrs: false,
  inject: ['$validator'],
  props: {
    /**
     * Label for form item
     */
    label: {
      type: String,
      required: true
    },
    /**
     * Name attribute
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * id attribute
     */
    id: String,
  },

  components: {
    FormHelpIcon,
    FormHelp
  },

  computed: {
    fieldId () {
      return this.id ? this.id : this.name
    },

    fieldValidation () {
      return this.optional ? { rules: { required: false} } : this.validation || 'required'
    },

    fieldValidity () {
      return this.fields[this.name] == undefined ? false : this.checkFieldValidity(this.fields[this.name])
    },

    showHelp () {
      return this.errors.has(this.name)
    },

    currentIcon () {
      if ( this.errors.has(this.name) ) {
        return 'ErrorIcon'
      } else if ( this.fields[this.name] != undefined && this.checkFieldValidity(this.fields[this.name]) ) {
        return 'ValidIcon'
      } else {
        return ''
      }
    }
  },

  methods: {
    /**
     * Checks the validaty for the field
     * @param {field}
     */
    checkFieldValidity (field) {
      return field.dirty && field.valid && field.validated  ? true : false
    },
    /**
     * Listens for `set-focus` event and when called,
     * sets focus on appropriate
     * @return {Event} [description]
     */
    focusListener () {
      this.$bus.$on('set-focus', name => {
        if (this.$refs[name]) {
          setTimeout(() => {
            this.$refs[name].focus()
          }, 300);
        }
      })
    },

    focus: function () {
      this.$refs[name].focus()
    },

    // setFocus(name) {
    //   this.$refs[name] ? this.$refs[name].focus() : "";
    // },    
  }
}
