<template>
  <form
    id="tlh-form"
    class="example degreeFiltering"
    @submit.prevent="handleFormSubmission"
  >
    <form-select
      @option-selected="$bus.$emit('set-focus', 'program');"
      name="degreeLevel"
      label="Select Degree Level"
      v-model="selectedDegreeLevel"
      :options="levels"
    ></form-select>

    <transition name="slide-fade">
      <form-select
        v-show="selectedDegreeLevel"
        focusOnEnter
        name="program"
        label="Select a Program"
        v-model="submit.program"
        :options="programsForSelectedDegreeLevel"
      ></form-select>
    </transition>

    <form-first-name v-model="submit.firstName"> </form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-submit text="Get Info"></form-submit>
    <form-legal-text
      school="Alvernia University"
      fontSize="1.1em"
      textColor="blue"
    ></form-legal-text>
  </form>
</template>

<script>
export default {
  name: "degree-filtering",
  methods: {
    handleFocus() {
      console.log("SELECTED!!!");
    }
  }
};
</script>
