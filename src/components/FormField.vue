<template lang="html">
  <div class="form-item">

     <label v-text="fieldLabel" :for="fieldName"></label>
     <input
       v-validate="fieldValidation"
       :name="fieldName"
       :id="fieldId"
       :ref="fieldName"
       :type="type"
       :placeholder="fieldPlaceholder"
       :value="value"
       :data-vv-as="fieldLabel"
       :data-vv-delay="400"
       class="form-control"
       :role="fieldRole"
       :aria-describedby="fieldId + '_help'"
       :class="{input: true, hasError: errors.has(fieldName), 'validField': fields[fieldName] && fields[fieldName] && fields[fieldName]['dirty'] && fields[fieldName]['valid'] && fields[fieldName]['validated'] ? true : false }"
       @input="onInput($event.target.value)"
       @blur="onBlur($event)"
       @focus="setFocus"
      >

     <transition name="fade">
       <div
         :id="fieldId + '_help'"
         v-if="showHelp"
         class="help hasError"
         v-text="errors.first(fieldName)">
       </div>
     </transition>

   </div>
</template>

<script>

export default {
  name: 'form-field',
  props: {
    label: String,
    id: String,
    name: String,
    value: {
      type: String,
      required: true
    },
    role: String,
    placeholder: String,
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
    }
  },

  data () {
    return {
      hasFocus: false,
      fieldName: this.name ? this.name : 'formField',
      fieldPlaceholder: this.placeholder ? this.placeholder : false,
      fieldLabel: this.label ? this.label : '',
      fieldRole: this.role ? this.role : false,
      helpStyles: {
        color: '#ca0000'
      }
    }
  },
  computed: {
    fieldId () {
      return this.id ? this.id : this.fieldName
    },

    fieldValidation () {
      return this.optional ? { rules: { required: false} } : this.validation || 'required'
    },

    showHelp () {
      return this.errors.has(this.fieldName)
    }
  },
  mounted () {
    let vm = this
    let Refs = vm.$refs

    this.$bus.$on('set-focus', fieldName => {
      if (vm.$refs[fieldName]) {
        this.$refs[fieldName].focus()
      }
    })
  },

  methods: {
    setFocus () {
      this.hasFocus = true
    },

    onInput (val) {
      this.$emit('input', val)
    },

    onBlur (blurEvent) {
      this.hasFocus = false
    }
  },
  inject: ['$validator']
}
</script>
