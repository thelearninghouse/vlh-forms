<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-phone',
    extends: FormField,
    data() {
      return {
        fieldName: 'phone',
        fieldType: 'tel',
        fieldLabel: 'Phone Number',
        fieldValidation: this.validation ? this.validation : 'required|validPhone'
      }
    }
  }
</script>
