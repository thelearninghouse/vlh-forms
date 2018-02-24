// import axios from 'axios'
// import Vue from 'vue'
import FormSelect from './components/FormSelect.vue'
import FormField from './components/FormField.vue'
import FormHelp from './components/FormHelp.vue'
import FormHelpIcon from './components/FormHelpIcon.vue'
import FormFirstName from './components/FormFirstName.vue'
import FormLastName from './components/FormLastName.vue'
import FormZip from './components/FormZip.vue'
import FormEmail from './components/FormEmail.vue'
import FormPhone from './components/FormPhone.vue'
import FormSubmitButton from './components/FormSubmitButton.vue'
import FormLegalText from './components/FormLegalText.vue'
import FormStep from './components/FormStep.vue'
import FormStepper from './components/FormStepper.vue'
import StepFormControls from './components/StepFormControls.vue'
import StepFormProgress from './components/StepFormProgress.vue'
import './assets/styles/vlh-forms.scss'

const VlhForms = {
  install(Vue, options) {
    Vue.component(FormSelect.name, FormSelect);
    Vue.component(FormField.name, FormField);
    Vue.component(FormHelp.name, FormHelp);
    Vue.component(FormHelpIcon.name, FormHelpIcon);
    Vue.component(FormFirstName.name, FormFirstName);
    Vue.component(FormLastName.name, FormLastName);
    Vue.component(FormPhone.name, FormPhone);
    Vue.component(FormEmail.name, FormEmail);
    Vue.component(FormZip.name, FormZip);
    Vue.component(FormSubmitButton.name, FormSubmitButton);
    Vue.component(FormLegalText.name, FormLegalText);
    Vue.component(FormStep.name, FormStep);
    Vue.component(FormStepper.name, FormStepper);
    Vue.component(StepFormControls.name, StepFormControls);
    Vue.component(StepFormProgress.name, StepFormProgress);


    // Add to Vue properties by exposing a getter for $bus
    var EventBus = new Vue()
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function () {
                return EventBus;
            }
        }
    })


  	Vue.mixin({
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

        }
      }
    });

    Vue.prototype.$myAddedProperty = 'Example Property'

    // Vue.prototype.$validateStep() = function (programs, selectedLevel) {
    //   this.$validator.validateAll().then((result) => {
    //     console.log('Missing fields or errors!');
    //     if (result) {
    //       this.currentStep = this.currentStep + 1
    //       console.log('Next Step!');
    //     }
    //   });
    // },

    Vue.prototype.$handleNextStep = function (programs, selectedLevel) {
      this.$validator.validateAll().then((result) => {
        console.log('Missing fields or errors!');
        console.log(this);
        if (result) {
          console.log('FROM PROTOTYPE: Next Step!');
          this.currentStep = this.currentStep + 1
        } else {
          console.log('FROM PROTOTYPE: ERRORS');
        }
      });

    }

    Vue.prototype.$FindProgramsByLevel = function (programs, selectedLevel) {
      var vm = this
      if (vm.selectedDegreeLevelObject) {
        return vm.programs.filter(function (program) {
          return vm.selectedDegreeLevelObject.degreeLevels.includes(program.degree_level)
        })
      } else {
        return null
      }

    }

    Vue.prototype.$currentStep = 1
  }
};

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue && window.VeeValidate) {
  window.Vue.use(VeeValidate);
  window.Vue.use(VlhForms)
}

// export axios;
export default VlhForms;

export {
  FormSelect,
  FormField,
  FormFirstName,
  FormLastName,
  FormZip,
  FormEmail,
  FormPhone,
  FormSubmitButton,
  FormLegalText,
  FormStep,
  StepFormControls,
  FormHelp,
  FormHelpIcon
}
