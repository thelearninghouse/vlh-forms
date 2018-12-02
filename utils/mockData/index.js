import { programs, levels } from "./programsSample.js";

export const mockData = {
  showQualifier: false,
  qualifierAnswer: "",
  qualifierProgram: {
    campusId: "111",
    onlineId: "7cf6c854-ec67-42d7-81eb-4556bc539800"
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
