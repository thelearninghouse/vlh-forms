<template>
  <div id="app">
    <h1>test</h1>
    <form-select name="degreeLevel" label="Select Degree Level" v-model="selectedDegreeLevel" :options="levels"></form-select>
    <form-select name="program" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
    <!-- <transition name="fade" appear>
      <form-select name="degreeLevel" label="Select a Program" v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
    </transition> -->
    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-zip v-model="submit.zip"></form-zip>
    <form-phone v-model="submit.phone" validation="required"></form-phone>
    <form-email v-model="submit.email" validation="required|email"></form-email>
  </div>
</template>

<script>

import {programs, levels} from './programsSample.js'

export default {
  data () {
    return {
      selectedDegreeLevel: '',
      levels: levels,
      submit: {
        program: '',
        firstName: '',
        lastName: '',
        field1: '',
        field2: '',
        zip: '',
        email: '',
        phone: ''
      },
      programs: programs,
      xverifyEmailURL: 'http://xverifyEmailURL/',
      domain: ''
    }
  },
  watch: {
    selectedDegreeLevel: function (val) {
      this.submit.program = ''
    }
  },

  computed: {
    selectedDegreeLevelObject: function () {
      return this.getDegreeLevelObject()
    },

    programsForSelectedDegreeLevel: function () {
      return this.getProgramsForDegreeLevel()
    }
  },
  mounted () {
    this.domain = 'online.test.edu'
    console.log(this.$FindProgramsByLevel(this.programs, 'Master'));
    console.log(this.$myAddedProperty)

  },
  methods: {
    getDegreeLevelObject: function () {
      var vm = this
      if (vm.selectedDegreeLevel) {
        return vm.levels.find(function(level) {
          return level.id == vm.selectedDegreeLevel
        })
      } else {
        return null
      }
    },

    getProgramsForDegreeLevel: function () {
      var vm = this
      if (vm.selectedDegreeLevelObject) {
        return vm.programs.filter(function (program) {
          return vm.selectedDegreeLevelObject.degreeLevels.includes(program.degree_level)
        })
      } else {
        return null
      }
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0
}

.form-item {
  margin: 1em .5em;
}
</style>
