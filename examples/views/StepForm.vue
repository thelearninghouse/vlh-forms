<template lang="html">
  <div class="form-wrapper">
    <h2>Content ABOVE the form</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio accusamus eveniet eligendi? Maxime voluptate quis, fuga natus architecto, labore error deleniti sapiente facere iste, modi nobis pariatur quo tempora fugiat ab. Nihil temporibus atque quibusdam, animi itaque fugiat quas odit?</p>
    <p>Voluptatem, cumque in. Fugiat voluptatum nobis molestias ipsum eius iure, consectetur expedita doloremque voluptatem cumque maiores quidem, libero quasi natus dicta! Voluptas explicabo, minima numquam hic tenetur vero rem magnam amet labore saepe corrupti omnis atque inventore, dignissimos, quia architecto.</p>
    <p>Libero, expedita repellendus! Qui iure fugit, quae molestias numquam maxime cupiditate impedit ex! Porro omnis a, eaque deserunt quaerat amet tenetur, cupiditate nesciunt quibusdam libero soluta natus perspiciatis, consequatur dolorem atque nulla fuga mollitia pariatur culpa itaque numquam reprehenderit iste.</p>
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
          
          <form-buttons-wrapper>
            <next-step-button text="Continue" @next-step="handleNextStep"/>
          </form-buttons-wrapper>                
        </form-step>

        <form-step v-if="$root.currentStep == 2" :key="2">
          <form-email v-model="submit.email" validation="required|email"/>
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

      <!-- :key="$root.currentStep" -->
    <!-- <step-form-controls
      @previous-step="handlePreviousStep"
      @next-step="handleNextStep"
      submitBtnText="BtnText From Prop"
    /> -->
    <!-- <form-legal-text /> -->
  </form>
    <!-- <h2>Content BELOW the form</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio accusamus eveniet eligendi? Maxime voluptate quis, fuga natus architecto, labore error deleniti sapiente facere iste, modi nobis pariatur quo tempora fugiat ab. Nihil temporibus atque quibusdam, animi itaque fugiat quas odit?</p>
    <p>Voluptatem, cumque in. Fugiat voluptatum nobis molestias ipsum eius iure, consectetur expedita doloremque voluptatem cumque maiores quidem, libero quasi natus dicta! Voluptas explicabo, minima numquam hic tenetur vero rem magnam amet labore saepe corrupti omnis atque inventore, dignissimos, quia architecto.</p>
    <p>Libero, expedita repellendus! Qui iure fugit, quae molestias numquam maxime cupiditate impedit ex! Porro omnis a, eaque deserunt quaerat amet tenetur, cupiditate nesciunt quibusdam libero soluta natus perspiciatis, consequatur dolorem atque nulla fuga mollitia pariatur culpa itaque numquam reprehenderit iste.</p>   -->
  </div>
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
