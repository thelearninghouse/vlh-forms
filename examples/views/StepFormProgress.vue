<template lang="html">
  <form id="tlh-form" class="example" @submit.prevent="handleFormSubmission">
    <div class="stepsWrapper">
      <step-form-progress
        customProgress
        :steps="totalSteps"
        :active-step="$root.currentStep"
      >
      </step-form-progress>

      <step-form-progress
        customProgress
        :steps="totalSteps"
        :active-step="$root.currentStep"
      >
        <div slot="step1"><span>Step 1: Choose A Degree</span></div>
        <div slot="step2"><span>Step 2: Your Name</span></div>
        <div slot="step3"><span>Step 3: Contact Info</span></div>
      </step-form-progress>

      <transition name="slide-fade" mode="out-in" appear>
        <form-step v-if="$root.currentStep == 1" :key="1">
          
          <BaseSelect
            id="degreeLevel"
            v-model="selectedDegreeLevel"
            label="Select Degree Level"
            :options="levels"
          />
          
          <FormFieldTransition>
            <BaseSelect
                id="program"
                v-model="submit.program"
                v-show="selectedDegreeLevel"
                :label="selectedDegreeLevel + ' Programs'"
                defaultText="Select a Program"
                :options="programsForSelectedDegreeLevel"
            />
          </FormFieldTransition>          
        </form-step>

        <form-step v-if="$root.currentStep == 2" :key="2">
          <form-first-name v-model="submit.firstName"></form-first-name>
          <form-last-name v-model="submit.lastName"></form-last-name>
        </form-step>

        <form-step v-if="$root.currentStep == 3" :key="3">
          <form-phone v-model="submit.phone" validation="required"></form-phone>
          <form-email
            v-model="submit.email"
            validation="required|email"
          ></form-email>
          <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
        </form-step>
      </transition>
    </div>

    <step-form-controls
      @previous-step="handlePreviousStep"
      @next-step="handleNextStep"
      submitBtnText="Submit Now"
    />
    <form-legal-text></form-legal-text>
  </form>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(function () {
      this.addClass();
    });
  },
  methods: {
    addClass () {
      let Form = document.getElementById("tlh-form");
      if (Form && this.helpTextColor) {
        Form.classList.add(this.helpTextColor);
      }
    },

    setFocusWithJS () {
      var FormItemDiv = document.querySelector(".form-item");
      var El = FormItemDiv.querySelector("input, select, checkbox, textarea");
      El.focus();
    },

    transitionCompleted (el) {
      console.log("After Enter", el);
      this.setFocusWithJS();
    },

    transitionAfterAppear (el) {
      console.log("After Appear", el);
    }
  }
};
</script>
