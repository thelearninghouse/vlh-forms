
<template>
  <form id="tlh-form" class="requestinfo" @submit.prevent="handleFormSubmission">
    <pre>{{usCitizen}}</pre>

    <form-select
      id="program"
      label="Select a Program"
      v-model="submit.program"
      :options="programs"
    />

    <form-first-name v-model="submit.firstName"/>
    <form-last-name v-model="submit.lastName"/>

    <form-email v-model="submit.email"/>
    <form-phone v-model="submit.phone" />

    <form-select
      id="country"
      label="Select a Country"
      v-model="submit.countryTest"
      :options="countries"
    />

    <form-zip v-model="submit.zip"/>
    
    <form-submit text="Request Info"/>
    <form-legal-text/>
  </form>
</template>

<script>
export default {
  created() {},
  mounted() {
    console.log(this.$refs);
    this.$nextTick(function() {
      this.addClass();
    });
  },
  methods: {
    onFocus(formField) {
      console.log("focus: ", formField);
    },

    onChange(formField) {
      console.log("change: ", formField);
    },

    emitQualifier(newValue) {
      // alert("hi");
      console.log(this.$bus);
      this.$bus.$emit("qualifier-updated", newValue);
    },

    handleQualifierSelection(newValue) {
      console.log("WORKED!!! ", newValue);
    },

    handleFocus($event) {
      console.log("Focus Event: ", $event);
    },

    handleChange($event) {
      console.log("Change Event: ", $event);
    },
    addClass() {
      let Form = document.getElementById("tlh-form");
      if (Form && this.helpTextColor) {
        Form.classList.add(this.helpTextColor);
      }
    },

    handleEvent(Event) {
      console.log(Event);
    }
  }
};
</script>
