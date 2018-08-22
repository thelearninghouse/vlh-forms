<template>
  <div class="example degreeFiltering">
    <form-select
      name="degreeLevel"
      label="Degree Level Options"
      v-model="selectedDegreeLevel"
      :options="levels"
      defaultText="Select Degree Level">
    </form-select>

    <form-select
      name="program"
      v-show="selectedDegreeLevel"
      :label="selectedDegreeLevel + ' Programs'"
      defaultText="Select a Program"
      v-model="submit.program"
      :options="programsForSelectedDegreeLevel">
    </form-select>


    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required|phone"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-submit text="Get Info"></form-submit>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
