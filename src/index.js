// Use this to install in this environment as well
// import Vue from 'vue'

import FormSelect from './components/FormSelect.vue'
import FormField from './components/FormField.vue'


function registerHelpers(vm) {
  // console.log('inside helper:  ', vm);
  // console.log('inside helper, PARENT :  ', );
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
// Vue.use(VlhForms)

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VlhForms)
}

export default VlhForms;

export {
  FormSelect,
  FormField
}
