<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-zip',
    extends: FormField,
    props: {
      role: {
        default: 'textbox'
      },
      type: {
        default: 'number'
      },
      validation: {
        default: 'required|validZip'
      }
    },
    data () {
      return {
        fieldName: 'zip',
        fieldLabel: 'Zip'
      }
    }
  }
</script>

<style media="screen">
input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
