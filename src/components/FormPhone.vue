<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-phone',
    extends: FormField,
    props: {
      type: {
        default: 'tel'
      },
      validation: {
        default: 'required|validPhone'
      }
    },
    data() {
      return {
        fieldName: 'phone',
        fieldLabel: 'Phone Number',
      }
    }
  }
</script>
