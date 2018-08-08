import { registerComponents } from "./helpers";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./assets/styles/vlh-forms.scss";

// or with global options Vue.use(VuePromiseBtn, {})
// Register all Vue components in the `component` folder
const VlhFormComponents = require.context("@/components", true, /.vue$/);

const VlhForms = {
  install(Vue, options) {
    VlhFormComponents.keys().forEach(ComponentFileName => {
      const componentConfig = VlhFormComponents(ComponentFileName);
      // PascalCase name without file extension
      const componentName = upperFirst(
        camelCase(ComponentFileName.replace(/\.\w+$/, ""))
      );
      // Globally register the component
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
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

    Vue.prototype.$handleNextStep = function(programs, selectedLevel) {
      this.$validator.validateAll().then(result => {
        if (result) this.currentStep = this.currentStep + 1;
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
  window.Vue.use(VeeValidate);
  window.Vue.use(VlhForms);
}

export default VlhForms;
