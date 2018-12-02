<template lang="html">
  <form id="tlh-form" class="example submission" @submit.prevent="handleFormSubmission">
    {{isSubmitting}}
    <button :disabled="errors.any()">Disable Test</button>
    <form-first-name v-model="submit.firstName"></form-first-name>

    <form-submit color="darkgrey" text-color="blue" text="Get Info"></form-submit>
    <!-- <form-submit :animation="false" color="darkgrey" text-color="blue" text="Get Info"></form-submit> -->
    <form-legal-text school="Alvernia University" font-size="1.1em" text-color="blue"></form-legal-text>
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
    asyncAction() {
      return new Promise((res, rej) => setTimeout(res, 2000));
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
<style lang="scss">

</style>
