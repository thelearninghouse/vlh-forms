import VeeValidate from 'vee-validate'
import VlhForms from '../../src/lib.js'
// import VlhForms from '../../dist/vlh-forms2.comm.js'
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    const ValidationConfig = {
        classes: true
      };
      Vue.use(VeeValidate, ValidationConfig);
      Vue.use(VlhForms);

      Vue.mixin({
        data: () => ({
            submit: {
              firstName: '',
              lastName: '',
              email: ''
            }
          })          
      })
  }