<template>
  <div class="form-item">
     <label v-text="label" :for="name"></label>
     <input
       v-validate="fieldValidation"
       class="input"
       :name="name"
       :autocomplete="autocomplete"
       :pattern="pattern"
       :id="fieldId"
       :ref="name"
       :type="type"
       v-model="model"
       v-bind="$attrs"
       v-on="$listeners"
       :data-vv-as="label"
       :data-vv-name="name"
       :data-vv-delay="300"
       :role="fieldRole"
       :aria-describedby="fieldId + '_help'"
       :class="{
         hasError: errors.has(name),
         validField: fieldValidity }"
      >  
      <form-help :visible="showHelp" :id="fieldId + '_help'" :helpText="errors.first(name)"></form-help>
   </div>
</template>

<script>
import FormHelp from './FormHelp'
export default {
  name: 'form-field',
  inheritAttrs: false,
  component: { FormHelp },
  props: {
    label: {
      type: String,
      default: 'Form Field'
    },

    name: {
      type: String,
      default: 'formField',
    },

    id: String,

    value: {
      type: String,
      required: true
    },

    role: String,

    type: {
      type: String,
      default: 'text'
    },

    validation: {
      type: [String, Object]
    },

    optional: {
      type: Boolean,
      default: false
    },

    autocomplete: {
      type: String,
    },

    pattern: {
      type: String,
    }
  },

  data () {
    return {
      fieldRole: this.role ? this.role : false
    }
  },

  inject: ['$validator'],

  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$nextTick(function() {
          this.$emit('input', val)
        })
      }
    },

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
    }
  },

  created () {
    this.focusListener()
  },

  methods: {
    checkFieldValidity (field) {
      return field.dirty && field.valid && field.validated  ? true : false
    },

    focusListener () {
      this.$bus.$on('set-focus', name => {
        if (this.$refs[name]) {
          setTimeout(() => {
            this.$refs[name].focus()
          }, 300);
        }
      })
    },

    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    }
  }
}
</script>

<style lang="scss">

</style>
