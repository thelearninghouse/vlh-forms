import {programs, levels} from './programsSample.js'

export const MockData = {
  helpTextColor: 'dark',
  showMore: true,
  selectedDegreeLevel: '',
  formItemsTransition: 'vertical-slide',
  programSelectionTranstion: 'vertical-slide',
  schoolDisplayName: 'School University Name Here',
  levels: levels,
  testModel: 'some text',
  currentStep: 1,
  totalSteps: 3,
  isSubmitting: false,
  submit: {
    program: '',
    firstName: '',
    lastName: '',
    field1: '',
    field2: '',
    zip: '',
    email: '',
    phone: '',
    city: null
  },
  programs: programs,
  xverifyEmailURL: 'http://xverifyEmailURL/',
  domain: '',
  newLegalStyles: {
    color: 'blue'
  }
}
