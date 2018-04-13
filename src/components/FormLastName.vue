<script>
  import FormField from './FormField.vue'

  /**
   * The form component for phone numbers
   *
   */
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

<docs>

  ```html
  <form-last-name v-model="submit.lastName"></form-last-name>
  ```
</docs>
