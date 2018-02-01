<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-last-name',
    extends: FormField,
    props: {
      name: {
        default: 'lastName'
      },
      label: {
        default: 'Last Name'
      },
      autocomplete: {
        default: 'family-name'
      }
    }
  }
</script>
