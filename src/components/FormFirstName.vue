<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-first-name',
    /**
     * @extends FormField
     *
     */
    extends: FormField,
    props: {
      name: {
        default: 'firstName'
      },
      label: {
        default: 'First Name'
      },
      autocomplete: {
        default: 'given-name'
      }
    }
  }
</script>
given-name
