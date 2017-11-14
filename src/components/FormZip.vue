<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-zip',
    extends: FormField,
    data () {
      return {
        fieldId: 'zip',
        fieldName: 'zip',
        fieldLabel: 'Zip',
        fieldValidation: 'required|validZip',
        fieldType: 'number',
        fieldRole: 'input'
      }
    }
  }
</script>
