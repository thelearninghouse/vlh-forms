
# FormSelect
The select menu element used for displaying a list of options
such as degree levels or programs

```html
<base-select id="program" label="Select a Program" v-model="submit.program" :options="programs"/>
```

## Props


- `label` ***String***

  Label for form item

- `id` ***String***

  ID attribute

- `v-model` ***String|number***

  What the form-field is binding to.
Use this like so: `v-model="submit.yourField"`

- `validationName` ***String***

  Used in form help messages.
Form help normally uses the label but setting this can overwrite that setting.
This is helpful when the label is longer. `:validation-name="license question"

- `validation` ***String***

  The validation used for the field. Default is just required,
but could be something diffenent such as required and must be a number.
`:validation="required|num"

- `defaultText` ***String***

  

- `options` ***Array***

  The array of options to choose from







