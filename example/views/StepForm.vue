<template lang="html">
  <form id="tlh-form" class="example basic" @submit.prevent="handleFormSubmission">

    <div class="stepsWrapper">
      <!-- <transition name="slide-fade" mode="out-in" appear> -->
      <transition name="slide-fade" mode="out-in" appear @after-enter="afterEnter">
        <form-step ref="step1" :active-step="currentStep" v-if="currentStep == 1" :key="1">

          <form-select
            ref="firstField"
            name="program"
            v-model="submit.program"
            transition="vertical-slide"
            label="Select A Program"
            defaultText="Select a Program"
            :options="programs">
          </form-select>
        </form-step>

        <form-step :active-step="currentStep" v-if="currentStep == 2" :key="2">
         <form-first-name ref="firstField" v-model="submit.firstName"></form-first-name>
         <form-last-name v-model="submit.lastName"></form-last-name>
        </form-step>

        <!-- <form-step :active-step="currentStep" v-if="currentStep == 3" :key="3">
          <form-phone v-model="submit.phone" validation="required"></form-phone>
          <form-email v-model="submit.email" validation="required|email"></form-email>
          <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
        </form-step> -->
      </transition>
    </div>

    <step-form-controls
      :steps="totalSteps"
      :active-step="currentStep"
      @previous-step="handlePreviousStep"
      @next-step="handleNextStep"
    >
      <form-submit v-if="currentStep == totalSteps" color="#222" text-color="white" text="Request Info"></form-submit>

    </step-form-controls>
    <form-legal-text></form-legal-text>
  </form>
</template>

<script>
export default {
  mounted() {
  },

  methods: {
    afterEnter(el) {
      console.log('el: ', el)
      this.$refs.firstField.setFocus()
      
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
