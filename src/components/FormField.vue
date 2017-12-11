<template lang="html">
  <div class="form-item">

     <label v-text="fieldLabel" :for="fieldName"></label>
     <input
       v-validate="fieldValidation"
       @input="onInput($event.target.value)"
       @blur="onBlur($event)"
       @focus="setFocus"
       :name="fieldName"
       :id="fieldId" :type="fieldType"
       :ref="fieldName"
       :placeholder="fieldPlaceholder" :value="value"
       :data-vv-as="fieldLabel"
       :data-vv-delay="500"
       class="form-control"
       :role="fieldRole"
       :aria-describedby="fieldId + '_help'"
       :class="{input: true, hasError: errors.has(fieldName), 'validField': fields[fieldName] && fields[fieldName] && fields[fieldName]['dirty'] && fields[fieldName]['valid'] && fields[fieldName]['validated'] ? true : false }">

     <transition name="fade">
       <div
         :id="fieldId + '_help'"
         v-if="showHelp"
         class="help hasError"
         :style="helpStyles"
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
      type: [String, Object],
    }
  },

  data () {
    return {
      isVisible: false,
      hasFocus: false,
      fieldName: this.name ? this.name : 'formField',
      fieldType: this.type,
      fieldPlaceholder: this.placeholder ? this.placeholder : '',
      fieldLabel: this.label ? this.label : '',
      fieldRole: this.role ? this.role : false,
      fieldValidation: this.validation ? this.validation : 'required',
      helpStyles: {
        color: '#ca0000'
      },

    }
  },
  computed: {
    // fieldName () {
    //   return this.name ? this.name : 'formField'
    // },
    //
    fieldId () {
      return this.id ? this.id : this.fieldName
    },

    showHelp () {
      return this.errors.has(this.fieldName)
      // return this.hasFocus || this.errors.has(this.fieldName)
    }
  },
  mounted () {
    // console.log(this.$refs);
    let vm = this
    let Refs = vm.$refs

    this.$bus.$on('set-focus', fieldName => {
      if (vm.$refs[fieldName]) {
        this.$refs[fieldName].focus()
      }
    });
  },
  methods: {
    setFocus () {
      console.log(`${this.fieldLabel} Field Has Focus`)
      this.hasFocus = true
    },

    onInput (val) {
      console.log('typing');
      this.$emit('input', val)
    },

    onBlur (blurEvent) {
      console.log('Lost focus');
      this.hasFocus = false
      // this.$emit('input', val)
    },

    toggleTransition () {

    }
  },
  inject: ['$validator']
}
</script>

<style lang="css">

</style>
