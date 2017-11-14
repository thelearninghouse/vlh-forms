<template>
  <div id="app">
    <h1>test</h1>
    <form-select v-model="selectedDegreeLevel" :options="levels"></form-select>
    <!-- <form-field></form-field> -->
    <form-select v-if="selectedDegreeLevel" v-model="submit.program" :options="programsForSelectedDegreeLevel"></form-select>
  </div>
</template>

<script>

import {programs, levels} from './programsSample.js'
// import FormProgramSelect from '../src/FormProgramSelect.vue'
export default {
  components: {
    // FormProgramSelect
  },
  data() {
    return {
      selectedDegreeLevel: null,
      levels: levels,
      submit: {
        program: null
      },
      programs: programs,
      xverifyEmailURL: 'http://xverifyEmailURL/',
      domain: ''
    }
  },
  watch: {
    selectedDegreeLevel: function (val) {
      this.submit.program = null
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
