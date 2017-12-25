<template lang="html">
  <div id="tlh-form" class="example basic darkHelpText">
    <form-select name="program" label="Select a Program" v-model="submit.program" :options="programs"></form-select>
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
    created () {

    },
    mounted() {
      this.$nextTick(function () {
        this.addClass()
        // console.log(this.$el.textContent) // => 'updated'
      })
    },
    methods: {
      addClass () {
        let Form = document.getElementById('tlh-form')
        console.log(Form);
        if (Form) {
          let colorClass = this.helpTextColor || 'mystyle'
          Form.classList.add(colorClass);
        }
      }
    }
  }
</script>
