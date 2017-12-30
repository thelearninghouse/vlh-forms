# Customization Examples

This is for easy understanding of scenarios such as customizing text, a label, ect.

---
## Override the default validation
```html
<form-field validation="required"></form-field>
```

---
## Override the default validation for custom input types
```html
<form-email validation="required|email"></form-email>
<form-phone validation="required|phone"></form-phone>
```
**Email, Phone and Zip components all use ajax validation by default**

---
## Make a field optional
```html
<form-field optional></form-field>
```

---
## Use a placeholder
```html
<form-field placeholder="Some text here"></form-field>
```

---
## Custom Label
```html
<form-field label="Your Custom Label"></form-field>
```
