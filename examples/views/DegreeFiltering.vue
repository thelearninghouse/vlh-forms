<template>
  <form
    id="tlh-form"
    class="example degreeFiltering"
    @submit.prevent="handleFormSubmission"
  >
    <form-select
      id="degreeLevel"
      label="Select Degree Level"
      v-model="selectedDegreeLevel"
      :options="levels"
    />

    <form-select
      v-show="selectedDegreeLevel"
      id="program"
      label="Select a Program"
      v-model="submit.program"
      :options="programsForSelectedDegreeLevel"
    />

    <form-first-name v-model="submit.firstName" />
    <form-last-name v-model="submit.lastName" />
    <form-zip v-model="submit.zip" />
    <form-phone v-model="submit.phone" validation="required" />
    <form-email v-model="submit.email" validation="required|email" />
    <form-submit text="Get Info" />
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
