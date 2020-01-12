// USED FOR EXAMPLES

import { programs, levels } from "./programsSample.js";
import countries from "./countries.json";

export const MockData = {
  showQualifier: false,
  qualifierAnswer: "",
  qualifierProgram: {
    campusId: "1111-2222-3333",
    onlineId: "678baf4c-d757-437c-b820-a61800e717c7"
  },
  // qualifierProgram: {
  //   campusId: "258665c9-56ae-4b30-a95b-e451e4cf7bfc",
  //   onlineId: "ac025a94-e2cc-45fa-a8da-0dcba966ddb4"
  // },
  qualifierOptions: [
    {
      id: "yes",
      name: "Yes"
    },
    {
      id: "no",
      name: "No"
    }
  ],
  useFloatingLabels: false,
  helpTextColor: "dark",
  showMore: true,
  selectedDegreeLevel: "",
  formItemsTransition: "vertical-slide",
  programSelectionTranstion: "vertical-slide",
  schoolDisplayName: "University of West Somewhere",
  levels: levels,
  testModel: "some text",
  currentStep: 1,
  totalSteps: 2,
  stepDirection: "positive",
  isSubmitting: false,
  isSubmitted: false,

  submit: {
    checkbox1: false,
    checkbox2: false,
    checkboxValue: false,
    country: "United States of America",
    program: "",
    firstName: "",
    lastName: "",
    field1: "",
    field2: "",
    zip: "",
    email: "",
    phone: "",
    city: null
  },
  programs,
  countries,
  xverifyEmailURL: "http://xverifyEmailURL/",
  domain: "",
  newLegalStyles: {
    color: "blue"
  }
};
