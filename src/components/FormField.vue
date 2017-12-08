<template lang="html">
  <div class="form-item">
    <!-- <button @click="setFocus">Set Focus</button>
           :ref="fieldName" -->
     <label v-text="fieldLabel" :for="fieldName"></label>
     <input
       v-validate="fieldValidation"
       @input="$emit('input', $event.target.value)"
       :id="fieldId" :name="fieldName" :type="fieldType"
       :ref="fieldName"
       :placeholder="fieldPlaceholder" :value="value"
       :data-vv-as="fieldLabel"
       class="form-control"
       :role="fieldRole"
       :aria-describedby="fieldId + '_help'"
       :class="{input: true, hasError: errors.has(fieldName), 'validField': fields[fieldName] && fields[fieldName] && fields[fieldName]['dirty'] && fields[fieldName]['valid'] && fields[fieldName]['validated'] ? true : false }">
     <transition name="vertical-slide">
       <span
         :id="fieldName + '_help'"
         v-show="errors.has(fieldName)"
         class="help hasError"
         :style="helpStyles"
       >
       {{ errors.first(fieldName) }}
       </span>
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
    value: String,
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
      fieldName: this.name ? this.name : 'formField',
      fieldType: this.type,
      fieldId: this.id ? this.id : this.fieldName,
      fieldPlaceholder: this.placeholder ? this.placeholder : '',
      fieldLabel: this.label ? this.label : '',
      fieldRole: this.role ? this.role : false,
      fieldValidation: this.validation ? this.validation : 'required',
      helpStyles: {
        color: '#ca0000'
      },

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
  inject: ['$validator']
}
</script>

<style lang="css">

</style>
