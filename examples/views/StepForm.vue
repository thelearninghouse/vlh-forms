<template>
  <form
    id="tlh-form"
    class="example basic"
    @submit.prevent="handleFormSubmission"
  >
    <div class="stepsWrapper">
      <step-form-progress />
      <transition name="slide-fade" mode="out-in" appear @after-enter="handleFormStepTransition">
        <form-step v-if="$root.currentStep == 1" :key="1" >

          <form-select
            id="program"
            :options="programs"
            label="Select a Program"
            v-model="submit.program"
          />
          <form-first-name v-model="submit.firstName" />
          <form-last-name v-model="submit.lastName" />    
          <form-email v-model="submit.email" validation="required|email"/>
          
          <form-buttons-wrapper>
            <next-step-button text="Continue" @next-step="handleNextStep"/>
          </form-buttons-wrapper>                
        </form-step>
        
        <form-step v-if="$root.currentStep == 2" :key="2" >
          <form-country-select v-model="submit.country" />
        
          <form-phone v-model="submit.phone" validation="required"/>
          <form-zip v-model="submit.zip" />
  
          <form-buttons-wrapper>
            <previous-step-button text="Go Back" />
            <form-submit text="Submit Text"/>    
          </form-buttons-wrapper>

          <form-legal-text/>
        </form-step>

      </transition>
    </div>
  </form>

</template>

<script>
export default {
  mounted() {
    console.log("MOUNTED: ", this);
  },

  methods: {
    // afterEnter (el) {
    //   if (this.$root.currentStep > 1) this.setFocusOnFirstField()
    // },
    // setFocusOnFirstField () {
    //   this.$nextTick(() => {
    //     const FirstField = document.getElementById('tlh-form').querySelector('input, select');
    //     FirstField.focus()
    //   });
    // }
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
