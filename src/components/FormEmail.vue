<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-email',
    extends: FormField,
    data () {
      return {
        fieldId: 'email',
        fieldName: 'email',
        fieldType: 'email',
        fieldLabel: 'Email',
        fieldValidation: this.validation ? this.validation : 'required|email|validEmail'
      }
    }
  }
</script>
