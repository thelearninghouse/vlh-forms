<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-email',
    extends: FormField,
    props: {
      type: {
        default: 'email'
      },
      validation: {
        default: 'required|email|validEmail'
      }
    },
    data () {
      return {
        fieldName: 'email',
        fieldLabel: 'Email'
      }
    }
  }
</script>
