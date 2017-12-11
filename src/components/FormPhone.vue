<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-phone',
    extends: FormField,
    props: {
      validation: {
        default: 'required|validPhone'
      }
    },
    data() {
      return {
        fieldName: 'phone',
        fieldType: 'tel',
        fieldLabel: 'Phone Number',
      }
    }
  }
</script>
