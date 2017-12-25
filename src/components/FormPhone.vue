<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-phone',
    extends: FormField,
    props: {
      name: {
        default: 'phone'
      },
      label: {
        default: 'Phone Number'
      },
      type: {
        default: 'tel'
      },
      validation: {
        default: 'required|validPhone'
      }
    }
  }
</script>
