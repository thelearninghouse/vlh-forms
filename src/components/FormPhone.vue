<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-phone',
    extends: FormField,
    props: {
      name: {
        default: 'phone'
      },
      /**
       * Label for `form-phone`
       * @type {Object}
       */
      label: {
        default: 'Phone Number'
      },
      type: {
        default: 'tel'
      },
      validation: {
        default: 'required|validPhone'
      },
      autocomplete: {
        default: 'tel'
      }
    }
  }
</script>

<docs>

  ```html
  <form-phone v-model="submit.phone"></form-phone>
  ```
</docs>
