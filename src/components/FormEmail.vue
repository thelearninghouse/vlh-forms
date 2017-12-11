<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-email',
    extends: FormField,
    props: {
      validation: {
        default: 'required|email|validEmail'
      }
    },
    data () {
      return {
        fieldName: 'email',
        fieldType: 'email',
        fieldLabel: 'Email'
      }
    }
  }
</script>
