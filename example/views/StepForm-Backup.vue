<template lang="html">
  <div class="example stepForm">
    <div class="stepsWrapper">
         <transition name="slide-fade" mode="out-in" appear>
           <form-step :stepID="1" v-if="currentStep == 1" key="1">

             <form-select name="degreeLevel" label="Degree Level Options" v-model="selectedDegreeLevel" :options="levels" defaultText="Select Degree Level"></form-select>

             <transition name="slide-fade">
               <form-select v-show="selectedDegreeLevel" focusOnEnter name="program" :label="selectedDegreeLevel + ' Programs'" defaultText="Select a Program"  v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
             </transition>

             <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
           </form-step>

           <form-step :stepID="2" v-if="currentStep == 2" key="2">
             <form-first-name v-model="submit.firstName"></form-first-name>
             <form-last-name v-model="submit.lastName"></form-last-name>
           </form-step>

           <form-step :stepID="3" v-if="currentStep == 3" key="3">
             <form-phone v-model="submit.phone" validation="required"></form-phone>
             <form-email v-model="submit.email" validation="required|email"></form-email>
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
       <form-submit v-if="currentStep == totalSteps" text="Get Info"></form-submit>
       <form-legal-text></form-legal-text>
     </div>
  </div>
</template>

<script>
export default {}
</script>
