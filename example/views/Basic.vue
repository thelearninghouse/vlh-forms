<template lang="html">
  <form ref="form1" id="tlh-form" class="example basic flex-rw" @submit.prevent="handleFormSubmission">
    <form-select ref="firstField" name="program" label="Select a Program" v-model="submit.program" :options="programs">
    </form-select>
    <form-select
      
      v-if="showQualifier"
      name="qualifier"
      label="Do you currently have your RN License?"
      validationName="License Question"
      v-model="qualifierAnswer"
      :options="qualifierOptions"
    >
    </form-select>
    <form-submit :disableOnErrors="true" text="Get New"></form-submit>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
  </form>
</template>

<script>
export default {
  created() {},
  mounted() {
    console.log(this.$refs)    
    this.$nextTick(function() {
      this.addClass();
    });
  },
  methods: {
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
