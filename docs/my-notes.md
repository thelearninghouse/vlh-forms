This is a Vue.js component library for the Learning House Marketing Forms.

## 5 Min Overview

### Basic Info

- All form items must have a v-model attribute

- Several custom form components are available

- Regular html syntax with normal inputs, labels, ect can be used in addition to the custom components

  -- **_Note: This should be rare if at all_**

<!-- - Most forms should be able to build using   -->

- There are several customization options for the custom form field

- By default, all fields are required. Override this by adding the `optional` attribute to any FormField

  -- **_See this scenario for an example (LINK HERE)_**

### Ajax validations

- By default, the `form-zip` field uses Ajax validation to check for a valid US postal address

- By default, the `form-email` and `form-phone` fields use the xverify services to check for a valid valid email and phone number

  **_See example of overriding these ajax validations (LINK HERE)_**
---

## Custom Form Components
Since we are continually using the same types of forms across all sites, these reusable components are available to make the process easier and more maintainable longterm.


All input fields are extended from the `form-field` component

It sets up base functionality that is shared across all inputs.

The other custom fields are extended from it by declaring the attributes specific to it.

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


We are setting the default props which means adding a field for first name is as easy as:
```html
<form-first-name v-model=submit.firstName></form-first-name>
```

And customizing the first name field is as easy as:

```html
<form-first-name label="New Label" v-model=submit.firstName></form-first-name>
```
