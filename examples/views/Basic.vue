<template>
  <div>
    <form
      id="tlh-form"
      class="requestinfo"
      @submit.prevent="handleFormSubmission"
    >
      <!-- <h4>Activities</h4>
      <label
        class="radio is-inline"
        v-for="activity in activities"
        :key="activity"
      >
        <input
          type="radio"
          :value="activity"
          class="radio-input"
          v-validate="'required'"
          name="activity"
        />
        <span class="radio-label">{{ activity }}</span>
      </label>
      <div class="">
        {{ errors.first("activity") }}
      </div> -->
      <!-- <button @click="$delayedAlert(3000)">Test Promise</button> -->
      <modality-group
        v-model="$root.selectedModality"
        id="jhu-modality"
        validation-name=" Class Type"
        :options="selectedTagGroup"
      />
      <!-- <v-radio-group
        v-model="$root.selectedModality"
        id="radio-id"
        validation-name="Class Type"
        :options="selectedTagGroup"
      /> -->
      <!--  -->
      <!-- validation="'required'" -->

      <!-- <form-select
        id="program"
        label="Select a Program"
        v-model="submit.program"
        :options="programs"
        @change="testChange"
      />

      <form-select
        id="qualifier"
        v-if="$root.showQualifier"
        label="Do you currently hold an active RN license?"
        validation-name="License Question"
        v-model="$root.qualifierAnswer"
        :options="$root.qualifierOptions"
      /> -->

      <form-first-name v-model="submit.firstName" />
      <form-last-name v-model="submit.lastName" />

      <!-- <form-email v-model="submit.email" /> -->

      <!-- <form-country-select v-model="submit.country" />

      <form-phone v-model="submit.phone" />
      <form-zip v-model="submit.zip" /> -->

      <base-checkbox
        validation="required"
        label="I confirm I hold a Bachelor's degree."
        id="confirmCheckbox"
        v-model="$root.confirmCheckbox"
        validationName="degree confirmation"
      />

      <!-- <form-appointment-checkbox
        id="appointmentCheckbox"
        v-model="$root.appointmentCheckbox"
      />

      <form-sms-checkbox
        id="okToText"
        help-code="999"
        v-model="submit.okToText"
      /> -->

      <form-submit />
      <!-- <form-legal-text /> -->
    </form>
    <hr />
    <h3>Selected Modality</h3>
    <pre>{{ $root.selectedModality }}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    activities: ["Eat", "Code", "Sleep"]
  }),

  created() {},
  mounted() {
    console.log(this.$refs);
    this.$nextTick(function() {
      this.addClass();
    });
  },
  methods: {
    testChange($event) {
      console.log("testChange -> event", $event);
    },

    testDelay(ms) {
      // return this.delayMethod(ms).then(alert("WORKS FROM METHOD"));
      this.delayMethod(ms).then(() => {
        alert("delay method");
      });
    },

    delayMethod(ms) {
      // eslint-disable-next-line no-unused-vars
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
