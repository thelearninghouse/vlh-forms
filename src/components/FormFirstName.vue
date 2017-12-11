<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-first-name',
    extends: FormField,
    // props: {
    //   name: {
    //     type: String,
    //     default: 'firstName'
    //   },
    //   label: {
    //     type: String,
    //     default: 'First Name'
    //   }
    // }
    // computed: {
    //   fieldName () {
    //     return 'firstName'
    //   }
    // },
    data( ) {
      return {
        // fieldId: 'firstName',
        fieldName: 'firstName',
        fieldLabel: 'First Name'
      }
    }
  }
</script>
