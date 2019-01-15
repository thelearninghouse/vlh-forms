/* eslint-disable prettier/prettier */
<template>
  <form
    ref="form1"
    id="tlh-form"
    class="example basic flex-rw"
    @submit.prevent="handleFormSubmission"
  >
    <form-select
      id="program"
      :options="programs"
      label="Select a Program "
      :default-text="submit.program ? '' : 'Select (TEST)'"
      v-model="submit.program"
      @focus="onFocus('program')"
      @change="onChange('program')"
    />
    <button
      @click.prevent="emitQualifier('7cf6c854-ec67-42d7-81eb-4556bc539800');"
    >
      Emit Real Online Value
    </button>

    <button @click.prevent="emitQualifier('987654321');">
      Emit Mock Campus Value
    </button>

    <form-first-name v-model="submit.firstName" />
    <form-last-name v-model="submit.lastName" />
    <!-- <form-phone v-model="submit.phone" validation="required"/>
    <form-email v-model="submit.email" validation="required|email"></form-email>
    <form-zip placeholder="Your Zip" v-model="submit.zip"></form-zip> -->
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
    onFocus(formField) {
      console.log('focus: ', formField)
    },

    onChange(formField) {
      console.log('change: ', formField)
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
