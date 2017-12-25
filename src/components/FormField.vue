<template lang="html">
  <div class="form-item">

     <label v-text="label" :for="name"></label>
     <input
       v-validate="fieldValidation"
       :name="name"
       :id="fieldId"
       :ref="name"
       :type="type"
       :placeholder="fieldPlaceholder"
       :value="value"
       :data-vv-as="label"
       :data-vv-delay="400"
       class="form-control"
       :role="fieldRole"
       :aria-describedby="fieldId + '_help'"
       :class="{input: true, hasError: errors.has(name), 'validField': fields[name] && fields[name] && fields[name]['dirty'] && fields[name]['valid'] && fields[name]['validated'] ? true : false }"
       @input="onInput($event.target.value)"
       @blur="onBlur($event)"
       @focus="setFocus"
      >

     <transition name="fade">
       <div
         :id="fieldId + '_help'"
         v-if="showHelp"
         class="help hasError"
         v-text="errors.first(name)">
       </div>
     </transition>

   </div>
</template>

<script>

export default {
  name: 'form-field',
  props: {

    label: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true,
    },

    id: String,

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
      fieldPlaceholder: this.placeholder ? this.placeholder : false,
      fieldRole: this.role ? this.role : false,
      helpStyles: {
        color: '#ca0000'
      }
    }
  },
  computed: {
    fieldId () {
      return this.id ? this.id : this.name
    },

    fieldValidation () {
      return this.optional ? { rules: { required: false} } : this.validation || 'required'
    },

    showHelp () {
      return this.errors.has(this.name)
    }
  },
  mounted () {
    let vm = this
    let Refs = vm.$refs

    this.$bus.$on('set-focus', name => {
      if (vm.$refs[name]) {
        this.$refs[name].focus()
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
