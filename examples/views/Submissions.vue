<template lang="html">
  <form id="tlh-form" class="example basic flex-rw" @submit.prevent="handleFormSubmission">
    {{isSubmitting}}

    <form-first-name v-model="submit.firstName" class='flex-half'></form-first-name>
    <form-last-name v-model="submit.lastName" class='flex-half'></form-last-name>

    <!-- <form-submit :disableOnErrors="true" text="Get Info"></form-submit> -->
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
  </form>
</template>

<script>
export default {
  created() {},
  mounted() {
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
