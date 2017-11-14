<template lang="html">
  <div class="form-field">
     <label v-text="fieldLabel" :for="fieldName"></label>
     <input
       v-validate="fieldValidation"
       @input="$emit('input', $event.target.value)"
       :id="fieldId" :name="fieldName" :type="fieldType"
       :placeholder="fieldPlaceholder" :value="value"
       :data-vv-as="fieldLabel"
       class="form-control"
       :role="fieldRole"
       :class="{input: true, hasError: errors.has(fieldName), 'validField': fields[fieldName] && fields[fieldName] && fields[fieldName]['dirty'] && fields[fieldName]['valid'] && fields[fieldName]['validated'] ? true : false }">
     <span v-show="errors.has(fieldName)" class="help hasError">{{ errors.first(fieldName) }}</span>
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
      fieldValidation: this.validation ? this.validation : 'required'
    }
  },
  inject: ['$validator']
}
</script>

<style lang="css">
</style>
