// Use this to install in this environment as well
// import Vue from 'vue'

import FormSelect from './components/FormSelect.vue'
import FormField from './components/FormField.vue'
import FormName from './components/FormName.vue'
import FormFirstName from './components/FormFirstName.vue'
import FormLastName from './components/FormLastName.vue'
import FormZip from './components/FormZip.vue'
import FormEmail from './components/FormEmail.vue'
import FormPhone from './components/FormPhone.vue'

function registerHelpers(vm) {
  if (!vm.$parent && vm.$options) {
    console.log('NO PARENT');
    console.log(vm.$options);
  } else {

  }
  if (typeof vm.$parent === 'undefined' ) {
    console.log('IN MAIN INSTANCE!');

    vm.$options.computed['emailValidationURL'] = function() {
      if (vm.xverifyEmailURL && vm.domain) {
        return vm.xverifyEmailURL + vm.domain
      }
      return 'couldnt find them'
    }
  }
}

const VlhForms = {
  install(Vue, options) {
    Vue.component('form-select', FormSelect);
    Vue.component('form-field', FormField);
    Vue.component('form-name', FormName);
    Vue.component('form-first-name', FormFirstName);
    Vue.component('form-last-name', FormLastName);
    Vue.component('form-phone', FormPhone);
    Vue.component('form-email', FormEmail);
    Vue.component('form-zip', FormZip);

  	Vue.mixin({
      // beforeCreate() {
      //   let vm = this
      //
      //
      //
      //   }
      //   // registerHelpers(this)
      // },
      created() {
        // console.log('created Mixin: ', this.$options.computed);
        // console.log(this);
      },

      computed: {
        emailValidationURLTest: function () {
          if (this.xverifyEmailURL && this.domain) {
            return this.xverifyEmailURL + this.domain
          } else {
            return 'dont render here'
          }
        },

        selectedDegreeLevelObjectTest: function () {
          if (this.programs) {
            return this.getDegreeLevelObject()
          }

        },
      }
    });

    Vue.prototype.$myAddedProperty = 'Example Property'
    Vue.prototype.$FindProgramsByLevel = function (programs, selectedLevel) {
      var vm = this
      if (vm.programs) {
        return vm.programs.filter(function (program) {
          return program.degree_level === selectedLevel
        })
      } else {
        return null
      }
    }
  }
};

// Use this to install in this environment as well
// Vue.use(VeeValidate)
// Vue.use(VlhForms)

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue && window.VeeValidate) {
  window.Vue.use(VeeValidate);
  window.Vue.use(VlhForms)
}

export default VlhForms;

// export {
//   FormSelect,
//   FormField,
//   FormName,
//   FormZip
// }
