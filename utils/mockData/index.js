// IS NOT USED IN EXAMPLES

import { programs, levels } from "./programsSample.js";

export const mockData = {
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
  helpTextColor: "dark",
  showMore: true,
  selectedDegreeLevel: "",
  formItemsTransition: "vertical-slide",
  programSelectionTranstion: "vertical-slide",
  schoolDisplayName: "School University Name Here",
  levels: levels,
  testModel: "some text",
  currentStep: 1,
  twoTotalSteps: 2,
  totalSteps: 2,
  isSubmitting: false,
  isSubmitted: false,
  submit: {
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
  programs: programs,
  xverifyEmailURL: "http://xverifyEmailURL/",
  domain: "",
  newLegalStyles: {
    color: "blue"
  }
};
