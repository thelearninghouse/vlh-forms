
# step-form-controls
Controls the flow for a step-form.
It consist of 2 regular HTML button elements for controlling previous and next steps
as well as the custom `form-submit` component

## Props


- `steps` ***Number|string***

  The number of steps that exist for this form

- `activeStep` ***Number|string***

  The current step of the form

- `previousBtnText` ***String***

  The text for the previous button

- `nextBtnText` ***String***

  The text for the next button

- `submitBtnText` ***String***

  The button text to be passed to the `form-submit` component


## Slots
- `default`

        


## Events
- `next-step`

  Emits `next-step` to parent for StepForms's      



