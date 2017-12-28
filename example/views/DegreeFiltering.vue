<template>
  <div class="example degreeFiltering">
    <form-select @option-selected="handleFocus" name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>

    <transition name="slide-fade">
      <form-select focusOnEnter name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
    </transition>

    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required|phone"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-submit-button text="Get Info"></form-submit-button>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
  </div>
</template>

<script>
export default {
  name: 'degree-filtering',
  methods: {
    handleFocus () {
      console.log('SELECTED!!!')
    }
  }
}
</script>
