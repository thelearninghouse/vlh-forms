# TLH Forms Plugin for Wordpress

In addition to using the VlhForms Plugin, we need a wordpress plugin to handle aspects for each site.

# Components

---

#### `form-first-name`
Outputs the input for First Name

```html
<form-first-name
  v-model="submit.firstName">
</form-first-name>
```
---

#### `form-last-name`
Outputs the input for First Name

```html
<form-last-name
  v-model="submit.lastName">
</form-last-name>
```
---

#### `form-zip`
Outputs the input for zip

```html
<form-zip
  v-model="submit.zip">
</form-zip>
```
---

#### `form-email`
Outputs the input for email

```html
<form-email
  v-model="submit.email">
</form-email>
```
---

#### `form-phone`
Outputs the input for phone

```html
<form-phone
  v-model="submit.phone">
</form-phone>
```
---
#### `form-legal-text`

Outputs the legal text and dynamically generates the name of the school via the setting in the TLHForms WP Plugin Admin

A few style options are available as well

```html
<form-legal-text
  fontSize="1.1em"
  textColor="blue">
</form-legal-text>
```
---

#### `form-submit-button`

Renders the submit button for the form

```html
<form-submit-button
  text="Get Started">
</form-submit-button>
```
---

#### `form-step`

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
>
<!-- Other form compontents here -->
</form-step>
```
---

<form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
