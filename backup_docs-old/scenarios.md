# Customization Examples

This is for easy understanding of scenarios such as customizing text, a label, ect.

--------------------------------------------------------------------------------

## Override the default validation

```html
<form-field validation="required"></form-field>
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
<form-field optional></form-field>
```

--------------------------------------------------------------------------------

## Use a placeholder

```html
<form-field placeholder="Some text here"></form-field>
```

--------------------------------------------------------------------------------

## Custom Label

```html
<form-field label="Your Custom Label"></form-field>
```

--------------------------------------------------------------------------------

## Use Normal HTML

```html
<form-first-name v-model="submit.firstName"></form-first-name>

<div class="regular-div">
  <h3>Everything Works</h3>
</div>
```
