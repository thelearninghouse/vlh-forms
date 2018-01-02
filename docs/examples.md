# Form Examples

## Basic Example
```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">
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
</form>
```

---

## Filter By Degree Level

```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">
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
  <form-submit-button></form-submit-button>
  <form-legal-text></form-legal-text>
</form>
```

---

## Step Form
```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">

  <transition name="slide-fade" mode="out-in" appear>
    <form-step v-if="currentStep == 1" :key="1">
      <form-select
        name="degreeLevel"
        v-model="selectedDegreeLevel"
        label="Select Degree Level"
        @option-selected="$bus.$emit('set-focus', 'program')"
        :options="levels">
      </form-select>

      <form-select
        name="program"
        v-model="submit.program"
        v-show="selectedDegreeLevel"
        transition="vertical-slide"
        :label="selectedDegreeLevel + ' Programs'"
        defaultText="Select a Program"
        :options="programsForSelectedDegreeLevel">
      </form-select>
    </form-step>

    <form-step v-if="currentStep == 2" :key="2">
     <form-first-name v-model="submit.firstName"></form-first-name>
     <form-last-name v-model="submit.lastName"></form-last-name>
    </form-step>

    <form-step v-if="currentStep == 3" :key="3">
      <form-phone v-model="submit.phone" validation="required"></form-phone>
      <form-email v-model="submit.email" validation="required|email"></form-email>
      <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
    </form-step>
  </transition>

  <step-form-controls
    :steps="totalSteps"
    :active-step="currentStep"
    @previous-step="handlePreviousStep"
    @next-step="handleNextStep"
    submitBtnText="Submit Now">
  </step-form-controls>
  
  <form-legal-text></form-legal-text>
</form>
```

---

## Single Program

```html
<!-- Set the ID for this program with TLHFormsWP in the settings -->

<form id="tlh-form" @submit.prevent="handleFormSubmission">
  <form-first-name v-model="submit.firstName"></form-first-name>
  <form-last-name v-model="submit.lastName"></form-last-name>
  <form-zip v-model="submit.zip"></form-zip>
  <form-phone v-model="submit.phone"></form-phone>
  <form-email v-model="submit.email"></form-email>
  <form-submit-button></form-submit-button>
  <form-legal-text></form-legal-text>
</form>
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
