<template lang="html">
  <div class="example stepForm">
    <div class="stepsWrapper">
      <div class="stepFormProgress">


        <template v-for="(step, index) in totalSteps">
          <div class="stepProgress" key="index + 1" :class="{ currentStep: currentStep == index + 1, completedStep: currentStep > index + 1 }">Step {{index + 1}}
          </div>
        </template>

        <!-- </template> -->
      </div>
         <transition name="slide-fade" mode="out-in" appear>
           <form-step :stepID="1" v-if="currentStep == 1" key="1">

             <form-first-name optional v-model="submit.firstName"></form-first-name>
             <form-last-name optional v-model="submit.lastName"></form-last-name>
             <!-- <form-select optional @option-selected="$bus.$emit('set-focus', 'program')" name="degreeLevel" label="Degree Level Options" v-model="selectedDegreeLevel" :options="levels" defaultText="Select Degree Level"></form-select>

             <transition name="slide-fade">
               <form-select v-show="selectedDegreeLevel" focusOnEnter name="program" :label="selectedDegreeLevel + ' Programs'" defaultText="Select a Program"  v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
             </transition> -->


           </form-step>

           <form-step :stepID="2" v-if="currentStep == 2" key="2">
              <form-zip placeholder="Your Zip" optional v-model="submit.zip"></form-zip>
           </form-step>

           <form-step :stepID="3" v-if="currentStep == 3" key="3">
             <form-phone optional v-model="submit.phone" validation="required"></form-phone>
             <form-email optional v-model="submit.email" validation="required|email"></form-email>
           </form-step>
         </transition>
     </div>

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
       <form-submit-button v-if="currentStep == totalSteps" text="Get Info"></form-submit-button>
       <form-legal-text></form-legal-text>
     </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  // .step {
  //   min-height: 100px;
  // }
  // .stepFormProgress {
  //   display: flex;
  //   justify-content: space-around;
  //   flex-flow: row wrap;
  //   margin: 1em;
  //   .stepProgress {
  //     padding: .5em;
  //     transition: .25s ease;
  //     position: relative;
  //     border-bottom: 3px solid transparent;
  //
  //     &.currentStep {
  //       background-color: #565656;
  //       color: white;
  //       border-bottom: 3px solid #8d8d8d;
  //     }
  //
  //     &.completedStep {
  //
  //       &:after {
  //         content: "\2713";
  //         font-size: 1.5em;
  //         font-weight: 500;
  //         position: absolute;
  //         left: 100%;
  //         bottom: 2px;
  //         transition: .4s ease;
  //       }
  //     }
  //
  //   }
  // }
</style>
