import { registerComponents } from "./helpers";
import "./assets/styles/vlh-forms.scss";

// Register all Vue components in the `component` folder
const VlhFormComponents = require.context("./components", true, /.vue$/);

const VlhForms = {
  install(Vue, options) {
    registerComponents(Vue, VlhFormComponents);
    // Add to Vue properties by exposing a getter for $bus
    var EventBus = new Vue();
    Object.defineProperties(Vue.prototype, {
      $bus: {
        get: function() {
          return EventBus;
        }
      }
    });

    Vue.mixin({
      computed: {
        emailValidationURLTest: function() {
          if (this.xverifyEmailURL && this.domain) {
            return this.xverifyEmailURL + this.domain;
          } else {
            return "dont render here";
          }
        },

        selectedDegreeLevelObjectTest: function() {
          if (this.programs) {
            return this.getDegreeLevelObject();
          }
        }
      }
    });

    Vue.prototype.$myAddedProperty = "Example Property";

    Vue.prototype.$handleNextStep = function(programs, selectedLevel) {
      this.$validator.validateAll().then(result => {
        console.log("Missing fields or errors!");
        console.log(this);
        if (result) {
          console.log("FROM PROTOTYPE: Next Step!");
          this.currentStep = this.currentStep + 1;
        } else {
          console.log("FROM PROTOTYPE: ERRORS");
        }
      });
    };

    Vue.prototype.$FindProgramsByLevel = function(programs, selectedLevel) {
      var vm = this;
      if (vm.selectedDegreeLevelObject) {
        return vm.programs.filter(function(program) {
          return vm.selectedDegreeLevelObject.degreeLevels.includes(
            program.degree_level
          );
        });
      } else {
        return null;
      }
    };

    Vue.prototype.$currentStep = 1;
  }
};

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue && window.VeeValidate) {
  var ValidationConfig = {
    classes: true
  };
  window.Vue.use(VeeValidate, ValidationConfig);
  window.Vue.use(VlhForms);
}

export default VlhForms;
