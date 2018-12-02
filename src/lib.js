import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./assets/styles/vlh-forms.scss";

const VlhFormComponents = require.context("./components", true, /.vue$/);

const VlhForms = {
  install: function(Vue, options) {
    VlhFormComponents.keys().forEach(fileName => {
      const componentConfig = VlhFormComponents(fileName);

      const componentName = componentConfig.default.name
        ? componentConfig.default.name
        : upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

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
  }
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(VlhForms);
  if (window.VeeValidate) {
    GlobalVue.use(window.VeeValidate);
  }
}

export default VlhForms;
