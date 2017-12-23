<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-first-name',
    extends: FormField,
    data () {
      return {
        fieldName: 'firstName',
        fieldLabel: 'First Name'
      }
    }
  }
</script>
