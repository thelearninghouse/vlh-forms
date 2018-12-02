---
title: Guide
---
# Overview of our Form System at The Learning House

## Introduction

- All form items must have a `v-model` attribute
- Several custom form components are available
- Templates will be created and stored in the `marketing-forms` repo on github
- Always have form submit handler in templates

```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">
  <!--  Form components here-->
</form>
```

- In regards to class, styling, all inputs and selects render as follows:

```html
// Input
<div class="form-item">
  <label></label>
  <input class="input">
</div>

// Select
<div class="form-item">
  <label></label>
  <select class="select"></select>
</div>

// Submit Button
<div class="form-submit">
  <input type="submit">
</div>
```

- There is also an icon that is displayed when a required field is invalid.

- You can add an class to the `div` element wrapping inputs and selects by doing the following:

```html
// In Template
<form-first-name class="extra-class" v-model="submit.firstName"/>

// Renders
<div class="form-item extra-class"></div>
```

- By default, the submit button will be disabled if an errors exist. This feature can be removed by doing the following:

```html
<form-submit-button :disableOnErrors="false"></form-submit-button>
```

--------------------------------------------------------------------------------

- Regular html syntax with normal inputs, labels, ect can be used in addition to the custom components

  **_Note: This should be rare if at all_**

<!-- - Most forms should be able to build using -->

 - There are several customization options for the custom form field

- By default, all fields are required. Override this by adding the `optional` attribute to any FormField

  -- **_See this scenario for an example (LINK HERE)_**

--------------------------------------------------------------------------------

## Custom Form Components

Since we are continually using the same types of forms across all sites, these reusable components are available to make the process easier and more maintainable longterm.

> The `v-model` for these fields **must** set to specific properties for successful form submission. See [Components](/components#components) for what it should be for each component

All input fields are extended from the `form-field` component. It sets up base functionality that is shared across all inputs. The other custom fields are extended from it by declaring the attributes specific to it.

Below is the contents of the `FormFirstName.vue` file for the `form-first-name` field

Example of Extending `form-field` component:

```html
  <script>
    import FormField from './FormField.vue'

    export default {
      name: 'form-first-name',
      extends: FormField,
      props: {
        name: {
          default: 'firstName'
        },
        label: {
          default: 'First Name'
        }
      }
    }
  </script>
```

--------------------------------------------------------------------------------

### Ajax validations

- By default, the `form-zip` field uses Ajax validation to check for a valid US postal address

- By default, the `form-email` and `form-phone` fields use the xverify services to check for a valid valid email and phone number

  **_See example of overriding these ajax validations (LINK HERE)_**

--------------------------------------------------------------------------------

We are setting the default props which means adding a field for first name is as easy as:

```html
<form-first-name v-model=submit.firstName/>
```

And customizing the first name field is as easy as:

```html
<form-first-name label="New Label" v-model=submit.firstName/>
```

--------------------------------------------------------------------------------

- Our marketing forms repo
- Our custom Vue.js Plugin, **VlhForms**
- Our custom Wordpress plugin, **Tlh Forms Plugin**

Name        | Type   | Default        | Description
----------- | ------ | -------------- | ----------------------------------
id          | String | this.fieldName |
label       | String | -              | The text for the label
placeholder | String | -              | The placeholder text for the input
            |        |                |
            |        |                |
            |        |                |
            |        |                |
            |        |                |
            |        |


# Customization Examples

This is for easy understanding of scenarios such as customizing text, a label, ect.

--------------------------------------------------------------------------------

## Override the default validation

```html
<form-field validation="required"/>
```

--------------------------------------------------------------------------------

## Override the default validation for custom input types

```html
<form-email validation="required|email"></form-email>
<form-phone validation="required"></form-phone>
```

**Email, Phone and Zip components all use ajax validation by default**

--------------------------------------------------------------------------------

## Make a field optional

```html
<form-field optional/>
```

--------------------------------------------------------------------------------

## Use a placeholder

```html
<form-field placeholder="Some text here"/>
```

--------------------------------------------------------------------------------

## Custom Label

```html
<form-field label="Your Custom Label"/>
```

--------------------------------------------------------------------------------

## Use Normal HTML

```html
<form-first-name v-model="submit.firstName"/>

<div class="regular-div">
  <h3>Everything Works</h3>
</div>
```
