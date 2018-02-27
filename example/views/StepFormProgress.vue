<template lang="html">
  <form id="tlh-form" class="example" @submit.prevent="handleFormSubmission">

    <div class="stepsWrapper">
      <step-form-progress
        customProgress
        :steps="totalSteps"
        :active-step="currentStep">
      </step-form-progress>

      <step-form-progress customProgress :steps="totalSteps" :active-step="currentStep">
        <div slot="step1">
          <span>Step 1: Choose A Degree</span>
        </div>
        <div slot="step2">
          <span>Step 2: Your Name</span>
        </div>
        <div slot="step3">
          <span>Step 3: Contact Info</span>
        </div>
      </step-form-progress>

      <transition
        name="slide-fade"
        mode="out-in"
        appear>
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
          <form-first-name v-model="submit.firstName"></form-first-name>
          <form-last-name v-model="submit.lastName"></form-last-name>
        </form-step>

        <form-step :active-step="currentStep" v-if="currentStep == 3" :key="3">
          <form-phone v-model="submit.phone" validation="required"></form-phone>
          <form-email v-model="submit.email" validation="required|email"></form-email>
         <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
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

    <form-legal-text></form-legal-text>
  </form>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      this.addClass()
    })
  },
  methods: {
    addClass () {
      let Form = document.getElementById('tlh-form')
      if (Form && this.helpTextColor ) {
        Form.classList.add(this.helpTextColor);
      }
    },

    setFocusWithJS () {
      var FormItemDiv = document.querySelector(".form-item");
      var El = FormItemDiv.querySelector("input, select, checkbox, textarea");
      El.focus()
    },

    transitionCompleted (el) {
      console.log('After Enter', el);
      this.setFocusWithJS ()
    },

    transitionAfterAppear (el) {
      console.log('After Appear', el);
    }
  }
}
</script>
