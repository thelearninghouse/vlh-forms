# Marketing Forms Repo

## Overview

- JSONP for xverify email/phone validation
- Using VeeValidate plugin

#### Xverify and zip validation default the default validation. Use the validation property to override this behavior
( _Ex: international forms_ )

```html
<form-email validation="required|email"></form-email>
```

---
#### For overriding the default validation, you use the `validation` property
```html
<form-field validation="required"></form-field>
```

---
#### Adding a placeholder since none are included by default.
```html
<form-field placeholder="Some text here"></form-field>
```

---

#### Full Example
```html
<form id="tlh-form" @submit.prevent="validateForm">
  <ul>
    <form-program-select v-model="submit.program"></form-program-select>
    <form-first-name v-model.lazy="submit.firstName"></form-first-name>
    <form-last-name v-model.lazy="submit.lastName"></form-last-name>
    <form-email v-model.lazy="submit.email"></form-email>
    <form-zip v-model.lazy="submit.zip"></form-zip>
  </ul>
  <button class="button is-primary" type="submit">Submit</button>
</form>
```

---

#### Using Program Group ID
(_Example: Show only Business Programs for Alvernia_)

To get the full list of programs we use the `account_id` in the URL but when a custom group has been set up in the Admin Portal, we use `program_goup_id` as seen below.

Also, we use the `all-programs` template (_unless there is a special case and another template is needed_)
```html
<script src="https://yirga.qa.learninghouse.com/embed/alvernia/all-programs?program_group_id=ec58ee9f-a435-4c6f-9789-90357ec3f1d2"></script>
```

---

#### Single Program
(_Example: Single Program Form for Alvernia's MBA program_)

To connect a form to a single program we use the `program_id` in the URL. The value of the ID's are found in the [Admin Portal](https://admin.qa.learninghouse.com)

```html
<script src="https://yirga.qa.learninghouse.com/embed/alvernia/single-program?program_id=ad06d660-e719-459b-b950-bcacb1be5e3e"></script>
```

The `program` property for the config object in `single-program.js` must be set as follows:

```js
program: config.data.program.id
```
The `submit.program` value is automatically set by using the program's ID in the URL so we DON'T need to worry about it in the `single-program.vue` template

---


#### To render the HTML for the form template we use
```html
<div id="tlh-form"></div>
```

#### Include the script at the bottom of the page, and the `div#tlh-form` will be replaced with our form content
```html
<script src="https://yirga.qa.learninghouse.com/embed/brenttest/dynamic-variables?account_id=c96dad18-cede-48c8-aaac-094b99b59cdd"></script>
```

---

#### Setting items such as eventID, promotionId, partnershipId are set in the Wordpress templates about calling the script to the form.
```html
<script type='text/javascript'>
  var eventID = 5;
  var modality = "Fully Online";
  var degreeLevel = "Master";
</script>
<script src="https://yirga.qa.learninghouse.com/embed/brenttest/dynamic-variables?account_id=c96dad18-cede-48c8-aaac-094b99b59cdd"></script>
```

---


- JSONP (bower right now)
  - Setting var = JSONP in js file
- VeeValidate
  - Vue.use(VeeValidate) in .js file


### In .js file
_**Needs to go in main js-template.js file but needs to include checks**_
  - JSONP var
  - Tell Vue to use VeeValidate
  - Custom validation rules VeeValidate will use (xverify & zip)
  - Custom form components/child-components/form-fields
  - New Submit method


### To Do
- [ ] Add Phone validation
- [ ] Test actual site
- [ ] Explore using Mixins for common functionalities (_**Ex: Submit Methods**_)
