<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-name',
    extends: FormField,
    data() {
      return {
        // fieldId: 'name',
        fieldName: 'name',
        fieldLabel: 'Your Name'
      }
    }
  }
</script>
