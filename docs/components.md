# Components

**All form components render the following:**
```html
<div class="form-item">
// Label Here
// Form Item Here (input, select, ect)
</div>
```

## Base Field
`form-field`
All specific input fields are extended from this field. Outputs a field based on your selection.

```html
<form-field
  name="customField"
  v-model="customValue"
  label="My Custom Field">
</form-field>
```
---

## First Name
`form-first-name`
<!-- Outputs the input for First Name -->

```html
<form-first-name
  v-model="submit.firstName">
</form-first-name>
```
---

## Last Name
`form-last-name`
<!-- Outputs the input for First Name -->

```html
<form-last-name
  v-model="submit.lastName">
</form-last-name>
```
---

## Zip
`form-zip`
<!-- Outputs the input for zip -->

```html
<form-zip
  v-model="submit.zip">
</form-zip>
```
---

## Email
`form-email`
<!-- Outputs the input for email -->

```html
<form-email
  v-model="submit.email">
</form-email>
```
---

## Phone
`form-phone`
<!-- Outputs the input for phone -->

```html
<form-phone
  v-model="submit.phone">
</form-phone>
```

---
## Form Select
`form-select`
<!-- Outputs the input for phone -->

```html
<form-select
  name="program"
  v-model="submit.program"
  :options="onlinePrograms">
</form-select>
```

---
## Legal Text
`form-legal-text`

Outputs the legal text and dynamically generates the name of the school via the setting in the TLHForms WP Plugin Admin

A few style options are available as well

```html
<form-legal-text
  fontSize="1.1em"
  textColor="blue">
</form-legal-text>
```
---

## Submit Button
`form-submit-button`

```html
<form-submit-button
  text="Get Started">
</form-submit-button>
```
---

## Step For Step Form
`form-step`

Creates an individual step for a Step Form

```html
<form-step
  v-if="currentStep == 1"
  :stepID="1"
  key="1">
<!-- Other form compontents here -->
</form-step>

<form-step
  v-if="currentStep == 2"
  :stepID="2"
  key="2">
<!-- Other form compontents here -->
</form-step>
```
---

## FormField Options

| Name        | Type           | Default        | Description                  |
| ----------- | -------------- | -------------- | ---------------------------- |
| name        | String         | -              |                              |
| id          | String         | this.fieldName |                              |
| label       | String         | -              | The text for the label       |
| placeholder | String         | -              |                              |
| v-model     | String         | ?              |                              |
| type        | Sring          | text           |                              |
| validation  | String, Object | required       | Overwrite default validation |
