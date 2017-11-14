<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-last-name',
    extends: FormField,
    data() {
      return {
        fieldId: 'lastName',
        fieldName: 'lastName',
        fieldLabel: 'Last Name'
      }
    }
  }
</script>
