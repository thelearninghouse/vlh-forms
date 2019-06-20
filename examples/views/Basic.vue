
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

    <form-phone v-model="submit.phone"/>

    <FormCheckbox
      id="checkbox"
      v-model="$root.usResidentChecked"
      label="I am a United States Resident"
    />
    <!-- <FormCheckbox id="checkbox" v-model="$root.usResidentChecked" label="US Resident"/> -->

    <transition mode="out-in" name="slide-fade">
      <form-zip v-if="$root.usResidentChecked" v-model="submit.zip"/>
      <form-country-select v-else v-model="submit.country"/>
    </transition>

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

<style lang="scss" scoped>
.form-submit {
  margin-top: 1.75em;
}
</style>
