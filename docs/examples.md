# Examples

## Code Examples

### Basic Example
```html
<form-select
  name="program"
  label="Select a Program"
  v-model="submit.program"
  :options="onlinePrograms">
</form-select>

<form-first-name v-model="submit.firstName"></form-first-name>
<form-last-name v-model="submit.lastName"></form-last-name>
<form-zip v-model="submit.zip"></form-zip>
<form-phone v-model="submit.phone"></form-phone>
<form-email v-model="submit.email"></form-email>
<form-submit-button></form-submit-button>
<form-legal-text></form-legal-text>
```

---

### Filter By Degree Level

```html
<form-select
  name="degreeLevel"
  label="Select Degree Level"
  v-model="selectedDegreeLevel"
  :options="levels">
</form-select>

<form-select
  name="program"
  label="Select a Program"
  v-show="selectedDegreeLevel"
  v-model="submit.program"
  :options="programsForSelectedDegreeLevel">
</form-select>

<form-first-name
  v-model="submit.firstName">
</form-first-name>
<form-last-name v-model="submit.lastName"></form-last-name>
<form-zip v-model="submit.zip"></form-zip>
<form-phone v-model="submit.phone"></form-phone>
<form-email v-model="submit.email"></form-email>
<form-submit-button text="Get Info"></form-submit-button>
<form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
```

---

### Step Forms
```html
<form-select
  name="program"
  label="Select a Program"
  v-model="submit.program"
  :options="onlinePrograms">
</form-select>

<form-first-name v-model="submit.firstName"></form-first-name>
<form-last-name v-model="submit.lastName"></form-last-name>
<form-zip v-model="submit.zip"></form-zip>
<form-phone v-model="submit.phone"></form-phone>
<form-email v-model="submit.email"></form-email>
<form-submit-button></form-submit-button>
<form-legal-text></form-legal-text>
```

---

### Single Program

```html
<!-- Set the ID for this program with TLHFormsWP in the settings -->
<form-first-name v-model="submit.firstName"></form-first-name>
<form-last-name v-model="submit.lastName"></form-last-name>
<form-zip v-model="submit.zip"></form-zip>
<form-phone v-model="submit.phone"></form-phone>
<form-email v-model="submit.email"></form-email>
<form-submit-button></form-submit-button>
<form-legal-text></form-legal-text>
```

---


## Scenario Examples

This is for easy understanding of scenarios such as customizing text, a label, ect.

---
### For overriding the default validation, you use the `validation` property
```html
<form-field validation="required"></form-field>
```

---
### Adding a placeholder since none are included by default.
```html
<form-field placeholder="Some text here"></form-field>
```

---

## Live Example
<vuep template="#example"></vuep>

```html
<script v-pre type="text/x-template" id="example">
  <template>
  <form @submit.prevent="submitFormNew" class="requestinfo">
    <form-field label="Test1" name="test1"></form-field>
    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>      
    <el-button type="primary">Primary</el-button>
  </form>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        name: 'Vue',
        submit: {
          program: '',
          firstName: '',
          lastName: '',
          field1: '',
          field2: '',
          zip: '',
          email: '',
          phone: '',
          city: null
        }
      }
    }
  }
  </script>
</script>
