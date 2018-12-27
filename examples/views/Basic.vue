<template lang="html">
  <form
    ref="form1"
    id="tlh-form"
    class="example basic flex-rw"
    @submit.prevent="handleFormSubmission"
  >
    <BaseSelect
      id="program1"
      :options="programs"
      label="Select a Program 1"
      v-model="submit.program"
    />

    <BaseSelect
      id="program2"
      :options="programs"
      label="Select a Program 2"
      v-model="submit.program"
    />

    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-phone v-model="submit.phone" validation="required"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip>
    <form-submit :disableOnErrors="true" text="Get New"></form-submit>
    <form-legal-text
      school="Alvernia University"
      fontSize="1.1em"
      textColor="blue"
    ></form-legal-text>
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
