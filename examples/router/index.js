import Vue from "vue";
import VueRouter from "vue-router";
import DegreeFiltering from "../views/DegreeFiltering.vue";
import Dashboard from "../views/Dashboard.vue";
import Basic from "../views/Basic.vue";
import StepForm from "../views/StepForm.vue";
import OptionalField from "../views/OptionalField.vue";
import CustomSelectText from "../views/CustomSelectText.vue";
import StepFormProgress from "../views/StepFormProgress.vue";
import Submission from "../views/Submission.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/basic",
      name: "Basic",
      component: Basic
    },
    {
      path: "/step-form",
      name: "Step Form",
      component: StepForm
    },
    {
      path: "/step-form-progress",
      name: "Step Form - Progress",
      component: StepFormProgress
    },
    {
      path: "/degree-filtering",
      name: "Degree Filtering",
      component: DegreeFiltering
    },
    {
      path: "/optional-field",
      name: "Optional Field",
      component: OptionalField
    },
    {
      path: "/custom-select-text",
      name: "Custom Select Text",
      component: CustomSelectText
    },
    {
      path: "/submission",
      name: "Submission",
      component: Submission
    }
  ]
});
