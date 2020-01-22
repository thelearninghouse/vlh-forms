import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "./assets/styles/vlh-forms.scss";

const VlhFormComponents = require.context("./components", true, /.vue$/);
import UniqueId from "vue-unique-id";
Vue.use(UniqueId);

const VlhForms = {
  install: function(Vue) {
    VlhFormComponents.keys().forEach(fileName => {
      const componentConfig = VlhFormComponents(fileName);

      const componentName = componentConfig.default.name
        ? componentConfig.default.name
        : upperFirst(camelCase(fileName.replace(/\.\w+$/, "")));

      Vue.component(componentName, componentConfig.default || componentConfig);
    });

    Vue.prototype.$delay = function(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    };

    Vue.prototype.$campusPrograms = function() {
      if (!this.$root.programs) return [];
      else {
        let programs = this.$root.programs.filter(
          program => program.modality === "On Campus"
        );
        return programs.sort(this.compareProgramNames);
      }
    };

    Vue.prototype.$delayedAlert = function(ms) {
      this.$delay(ms).then(() => {
        alert("Delayed Alert W/Promise - Updated2");
      });
    };

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
  window.loadAdditionalForm = loadAdditionalForm;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(VlhForms);
  if (window.VeeValidate) {
    GlobalVue.use(window.VeeValidate);
  }
}

function loadAdditionalForm(newFormId, newFormTemplate) {
  var tlhFormScript = document.getElementById("tlh-form-script");
  var tlhFormSrc = tlhFormScript.getAttribute("src");
  var newScript = document.createElement("script");

  if (newFormTemplate !== undefined) {
    var newFormSrc = tlhFormSrc.replace(window.formTemplate, newFormTemplate);
    newScript.src = newFormSrc + "&formid=" + newFormId;
  } else {
    newScript.src = tlhFormSrc + "&formid=" + newFormId;
  }

  document.body.appendChild(newScript);
}
export default VlhForms;
