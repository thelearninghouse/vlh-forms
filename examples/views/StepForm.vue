<template lang="html">
  <form
    id="tlh-form"
    class="example basic"
    @submit.prevent="handleFormSubmission"
  >
    <div class="stepsWrapper">
      <!-- <transition name="slide-fade" mode="out-in" appear> -->
      <transition
        name="slide-fade"
        mode="out-in"
        appear
        @after-enter="afterEnter"
      >
        <form-step
          ref="step1"
          :active-step="currentStep"
          v-if="currentStep == 1"
          :key="1"
        >
          <form-select
            name="degreeLevel"
            label="Select Degree Level"
            v-model="selectedDegreeLevel"
            :options="levels"
          />

          <transition-dynamic-field>
            <form-select
              v-if="selectedDegreeLevel"
              name="program"
              label="Select a Program"
              v-model="submit.program"
              :options="programsForSelectedDegreeLevel"
            />
          </transition-dynamic-field>
        </form-step>

        <form-step :active-step="currentStep" v-if="currentStep == 2" :key="2">
          <form-first-name ref="firstField" v-model="submit.firstName" />
          <form-last-name v-model="submit.lastName" />
        </form-step>
      </transition>
    </div>

    <step-form-controls
      :steps="totalSteps"
      :active-step="currentStep"
      @previous-step="handlePreviousStep"
      @next-step="handleNextStep"
      submitBtnText="BtnText From Prop"
    >
    </step-form-controls>
    <form-legal-text />
  </form>
</template>

<script>
export default {
  mounted() {},

  methods: {
    afterEnter(el) {
      console.log("el: ", el);
      // this.$refs.firstField.setFocus();

      // this.$nextTick(() => {
      //   this.$refs.firstField.setFocus()
      // })
    }
  }
};
</script>

<style lang="scss">
button.submit {
  background-color: gray;
  min-width: 300px;
  &:disabled {
    cursor: not-allowed;
  }
}
</style>
