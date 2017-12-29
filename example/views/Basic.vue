<template lang="html">
  <div id="tlh-form" class="example basic">
    <form-select
      @option-selected="$bus.$emit('set-focus', 'program')"
      key="1" name="degreeLevel" label="Select Degree Level"
      v-model="selectedDegreeLevel" :options="levels">
    </form-select>

    <transition name="vertical-slide" mode="out-in">
      <form-select key="program" name="program" label="Select a Program" v-show="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
    </transition>

    <form-first-name key="2" v-model="submit.firstName"></form-first-name>
    <form-last-name key="3" v-model="submit.lastName"></form-last-name>
    <form-zip key="4" v-model="submit.zip"></form-zip>
    <form-phone key="5" v-model="submit.phone" validation="required|phone"></form-phone>
    <form-email key="6" v-model="submit.email" validation="required|email"></form-email>
    <form-submit-button key="7" text="Get Info"></form-submit-button>
    <form-legal-text key="8" school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
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
