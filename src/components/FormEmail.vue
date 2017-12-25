<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-email',
    extends: FormField,
    props: {
      name: {
        default: 'email'
      },
      label: {
        default: 'Email'
      },
      type: {
        default: 'email'
      },
      validation: {
        default: 'required|email|validEmail'
      }
    }
  }
</script>
