<template lang="html">
  <div class="form-field">
    <label for="program">Program Selection</label>
    <select
      v-model="selectedOption"
      @input="onChange($event.target.value)"
      class=""
      id="program"
    >
      <option key="initial" :value="null">Select Program</option>
      <option :key="option.id" v-for="option in options" :value="option.id">{{ option.name }}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'form-program-select',
  props: {
    value: null,
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedOption: null
    }
  },
  mounted () {
    this.selectedOption = this.value
  },
  methods: {
    onChange(value) {
    	if (value === '') {
      	value = null;
      }
    	this.$emit('input', value);
    }
  },
  watch: {
    value: function (newValue) {
      this.selectedOption = newValue
    }
  }
}
</script>

<style lang="css">
label {
  display: block;
}
</style>
