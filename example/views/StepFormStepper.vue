<template lang="html">
  <div class="example stepForm formStepper">
    <h2>Step: {{currentStep}}</h2>
    <hr>
    <form-stepper :steps="steps">

      <div :slot="1" v-if="currentStep == 1">
        <h3>Slot 1</h3>
      </div>

      <div :slot="2" v-if="currentStep == 2">
        <h3>Slot 2 - Another use</h3>
      </div>
      <div :slot="3" v-if="currentStep == 3">
        <h3>Slot 3</h3>
      </div>
    </form-stepper>
    <div class="stepFormControls">
      <button v-if="currentStep > 1"
        @click.prevent="handlePreviousStep"
        @key.enter="handlePreviousStep">
        Previous
      </button>
      <button v-if="currentStep < totalSteps"
        @click.stop.prevent="handleNextStep"
        @key.enter="handleNextStep">
        Next
      </button>
      <form-submit v-if="currentStep == totalSteps" text="Get Info"></form-submit>
      <form-legal-text></form-legal-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          id: 1,
          title: "Step 1"
        },
        {
          id: 2,
          title: "Step 2"
        },
        {
          id: 3,
          title: "Step 3"
        }
      ]
    };
  }
};
</script>
