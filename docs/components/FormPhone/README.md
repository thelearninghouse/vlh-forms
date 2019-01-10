
# FormPhone
The form component for emails

```html
<form-phone v-model="submit.phone"/>
```

## Props


- `label` ***String***

  Label for `form-phone`

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

- `type` ***String***

  The type of text field

- `optional` ***Boolean***

  Allows field to be optional.

```vue
<form-zip v-model="submit.zip" optional />
```

- `autocomplete` ***String***

  

- `role` ***String***

  Role attribute (Could be used for accessibility)

- `pattern` ***String***

  







