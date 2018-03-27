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
      },
      autocomplete: {
        default: 'email'
      }
    }
  }
</script>

<docs>

  Always set to `submit.email`

  ```html
  <form-email v-model="submit.email"></form-email>
  ```
</docs>
