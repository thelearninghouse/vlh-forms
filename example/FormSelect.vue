<template>
  <div class="form-item">
    <label :for="fieldName">{{fieldLabel}}</label>
    <select
      v-model="selectedOption"
      @change="onChange($event.target.value)"
      class="form-select"
      v-validate="fieldValidation"
      :id="fieldId"
      :name="fieldName"
      :ref="fieldName"
      :aria-describedby="fieldId + '_help'"
      :data-vv-as="fieldLabel"
      :placeholder="fieldPlaceholder"
    >
      <option key="initial" value="" v-text="defaultText"></option>
      <option :key="option.id" v-for="option in options" :value="option.id">{{ option.name }}</option>
    </select>

    <transition name="fade">
      <div
        :id="fieldName + '_help'"
        v-if="showHelp"
        class="help hasError"
        :style="helpStyles"
        v-text="errors.first(fieldName)">
      </div>
    </transition>

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
    defaultText: {
      type: String,
      default: 'Select'
    },
    placeholder: String,
    validation: {
      type: [String, Object],
    },
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hasFocus: false,
      selectedOption: '',
      fieldName: this.name ? this.name : 'formSelect',
      fieldPlaceholder: this.placeholder ? this.placeholder : '',
      helpStyles: {
        color: '#ca0000'
      }
    }
  },
  inject: ['$validator'],

  mounted () {
    this.selectedOption = this.value
    this.focusListener()
  },

  computed: {
    fieldId () {
      return this.id ? this.id : this.fieldName
    },

    fieldValidation () {
      return this.optional ? { rules: { required: false} } : this.validation || 'required'
    },

    fieldLabel () {
      return this.label ? this.label : ''
    },

    showHelp () {
      return this.errors.has(this.fieldName)
    }
  },

  methods: {
    focusListener () {
      this.$bus.$on('set-focus', fieldName => {
        if (this.$refs[fieldName]) {
          this.$refs[fieldName].focus()
        }
      });
    },

    onChange(value) {
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
