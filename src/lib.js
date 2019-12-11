import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./assets/styles/vlh-forms.scss";

const VlhFormComponents = require.context("./components", true, /.vue$/);
import UniqueId from "vue-unique-id";
Vue.use(UniqueId);
const VlhForms = {
  install: function(Vue, options) {
    VlhFormComponents.keys().forEach(fileName => {
      const componentConfig = VlhFormComponents(fileName);

      const componentName = componentConfig.default.name
        ? componentConfig.default.name
        : upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

      Vue.component(componentName, componentConfig.default || componentConfig);
    });

    Vue.prototype.$delay = function(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    };

    Vue.prototype.$delayedAlert = function(ms) {
      this.$delay(ms).then(() => {
        alert("delayedAlert");
      });
      // return this.$delay(ms).then(alert("DELAY FINISHED"));
    };
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
