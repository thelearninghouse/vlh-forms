<template lang="html">
  <div class="example stepForm">

    <div class="stepsWrapper">
      <transition name="slide-fade" mode="out-in" appear>
        <form-step v-if="currentStep == 1" :key="1">
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

        <form-step v-if="currentStep == 2" :key="2">
         <form-first-name v-model="submit.firstName"></form-first-name>
         <form-last-name v-model="submit.lastName"></form-last-name>
        </form-step>

        <form-step v-if="currentStep == 3" :key="3">
         <form-phone v-model="submit.phone" validation="required"></form-phone>
         <form-email v-model="submit.email" validation="required|email"></form-email>
        <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
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
     </div>
    <form-legal-text></form-legal-text>
  </div>
</template>

<script>
export default {
}
</script>
