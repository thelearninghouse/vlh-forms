# Examples

## Live Demo

<example/>

## Basic Example

```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">
  <form-select
    name="program"
    label="Select a Program"
    v-model="submit.program"
    :options="onlinePrograms">
  </form-select>

  <form-first-name v-model="submit.firstName"/>
  <form-last-name v-model="submit.lastName"/>
  <form-zip v-model="submit.zip"/>
  <form-phone v-model="submit.phone"/>
  <form-email v-model="submit.email"/>
  <form-submit-button/>
  <form-legal-text/>
</form>
```

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

  <form-first-name v-model="submit.firstName"/>
  <form-last-name v-model="submit.lastName"/>
  <form-zip v-model="submit.zip"/>
  <form-phone v-model="submit.phone"/>
  <form-email v-model="submit.email"/>
  <form-submit-button/>
  <form-legal-text/>
</form>
```

## Step Form

```html
<form id="tlh-form" @submit.prevent="handleFormSubmission">

  <step-form-progress
    :steps="totalSteps"
    :active-step="currentStep">
  </step-form-progress>

  <div class="stepsWrapper">
    <transition name="slide-fade" mode="out-in" appear>
      <form-step :active-step="currentStep" v-if="currentStep == 1" :key="1">
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

      <form-step :active-step="currentStep" v-if="currentStep == 2" :key="2">
       <form-first-name v-model="submit.firstName"/>
       <form-last-name v-model="submit.lastName"/>
      </form-step>

      <form-step :active-step="currentStep" v-if="currentStep == 3" :key="3">
        <form-phone v-model="submit.phone"/>
        <form-email v-model="submit.email"/>
        <form-zip v-model="submit.zip"/>
      </form-step>
    </transition>
  </div>

  <step-form-controls
    :steps="totalSteps"
    :active-step="currentStep"
    @previous-step="handlePreviousStep"
    @next-step="handleNextStep"
    submitBtnText="Submit Now">
  </step-form-controls>

  <form-legal-text/>
</form>
```

## Single Program

```html
<!-- Set the ID for this program with TLHFormsWP in the settings -->

<form id="tlh-form" @submit.prevent="handleFormSubmission">
  <form-first-name v-model="submit.firstName"/>
  <form-last-name v-model="submit.lastName"/>
  <form-zip v-model="submit.zip"/>
  <form-phone v-model="submit.phone"/>
  <form-email v-model="submit.email"/>
  <form-submit-button/>
  <form-legal-text/>
</form>
```
