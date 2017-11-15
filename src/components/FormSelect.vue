<template>
  <div class="form-item">
    <label v-text="fieldLabel" :for="fieldName"></label>
    <select
      v-model="selectedOption"
      @change="onChange($event.target.value)"
      class="form-select"
      v-validate="fieldValidation"
      :id="fieldId"
      :name="fieldName"
      :data-vv-as="fieldLabel"
      :placeholder="fieldPlaceholder"
    >
      <option key="initial" value="">Select</option>
      <option :key="option.id" v-for="option in options" :value="option.id">{{ option.name }}</option>
    </select>
    <span v-show="errors.has(fieldName)" class="help hasError">{{ errors.first(fieldName) }}</span>
  </div>
</template>


<script>

export default {
  name: 'form-select',
  props: {
    label: String,
    id: String,
    name: String,
    value: '',
    options: {
      type: Array,
      required: true
    },
    role: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    validation: {
      type: [String, Object],
    }
  },
  data () {
    return {
      selectedOption: '',
      fieldName: this.name ? this.name : 'formField',
      fieldType: this.type,
      fieldId: this.id ? this.id : this.fieldName,
      fieldPlaceholder: this.placeholder ? this.placeholder : '',
      fieldLabel: this.label ? this.label : '',
      fieldRole: this.role ? this.role : false,
      fieldValidation: this.validation ? this.validation : 'required'
    }
  },
  mounted () {
    this.selectedOption = this.value
  },
  methods: {
    onChange(value) {
    	// if (value === '') {
      // 	value = null;
      // }
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
