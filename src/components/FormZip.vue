<script>
  // import {Validator} from 'vee-validate'
  // import axios from 'axios'
  // console.log(Validator);
  import FormField from './FormField.vue'
  export default {
    name: 'form-zip',
    extends: FormField,
    data () {
      return {
        fieldId: 'zip',
        fieldName: 'zip',
        fieldLabel: 'Zip',
        fieldValidation: this.validation ? this.validation : 'required|validZip',
        fieldType: 'number',
        fieldRole: 'textbox'
      }
    },
    mounted () {
      // this.registerZipValidator()
    },
    methods: {
      // registerZipValidator () {
      //   var vm = this
      //   var isZip = (value) => {
      //     return axios.get(`https://api.zippopotam.us/us/${value}`)
      //       .then(function(response) {
      //         console.log('ran from component!!!');
      //         let info = response.data.places[0]
      //         vm.submit.city = info['place name']
      //         vm.submit.state = info['state']
      //         return {
      //           valid: true
      //         }
      //       })
      //       .catch(function(error) {
      //         return {
      //           valid: false,
      //           data: {
      //             message: `${value} is not valid zip.`
      //           }
      //         }
      //       });
      //   }
      //   Validator.extend('validZip', {
      //     validate: isZip,
      //     getMessage: (field, params, data) => {
      //       return data.message;
      //     }
      //   });
      //   // Validator.attach('zip', 'required|validZip');
      //   let validator = new Validator();
      //
      //    validator.attach('zip', 'required|validZip');
      // }
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
