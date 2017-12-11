<script>
  import FormField from './FormField.vue'
  export default {
    name: 'form-zip',
    extends: FormField,
    props: {
      validation: {
        default: 'required|validZip'
      }
    },
    data () {
      return {
        fieldName: 'zip',
        fieldLabel: 'Zip',
        fieldType: 'number',
        fieldRole: 'textbox'
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
