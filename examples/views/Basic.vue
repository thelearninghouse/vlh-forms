<template>
  <div>
    <form
      id="tlh-form"
      class="requestinfo"
      @submit.prevent="handleFormSubmission"
    >
      <!-- <button @click="$delayedAlert(3000)">Test Promise</button> -->
      <form-select
        id="program"
        label="Select a Program"
        v-model="submit.program"
        :options="programs"
      />

      <form-select
        id="qualifier"
        v-if="$root.showQualifier"
        label="Do you currently hold an active RN license?"
        validation-name="License Question"
        v-model="$root.qualifierAnswer"
        :options="$root.qualifierOptions"
      />

      <form-first-name v-model="submit.firstName" />
      <form-last-name v-model="submit.lastName" />

      <form-email v-model="submit.email" />

      <form-country-select v-model="submit.country" />

      <form-phone v-model="submit.phone" />
      <form-zip v-model="submit.zip" />

      <base-checkbox
        label="I confirm I hold a Bachelor's degree."
        id="confirmCheckbox"
        v-model="$root.confirmCheckbox"
        validationName="degree confirmation"
      />

      <form-appointment-checkbox
        id="appointmentCheckbox"
        optional
        v-model="$root.appointmentCheckbox"
      />

      <form-sms-checkbox
        optional
        id="okToText"
        help-code="999"
        v-model="submit.okToText"
      />

      <form-submit />
      <!-- <form-legal-text /> -->
    </form>
  </div>
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
    testDelay(ms) {
      // return this.delayMethod(ms).then(alert("WORKS FROM METHOD"));
      this.delayMethod(ms).then(() => {
        alert("delay method");
      });
    },

    delayMethod(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    },
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
