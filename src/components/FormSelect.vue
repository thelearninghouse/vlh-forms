<template>
  <transition :name="transition">
    <div class="form-item">
      <label :for="name">{{label}}</label>
      <div class="form-field-wrapper">
        <select
          v-model="model"
          v-bind="$attrs"
          v-on="$listeners"
          @keydown.enter.stop.prevent
          class="select"
          :class="{invalid: errors.has(name), valid: fieldValidity }"
          v-validate="fieldValidation"
          :name="name"
          :ref="name"
          :id="fieldId"
          :aria-describedby="fieldId + '_help'"
          :data-vv-as="label">
          <option key="initial" value="" v-text="defaultText"></option>
          <option :key="option.id" v-for="option in options" :value="option.id">{{ option.name }}</option>
        </select>
        <form-help-icon :icon="currentIcon"></form-help-icon>
      </div>

      <form-help :visible="showHelp" :id="fieldId + '_help'" :helpText="errors.first(name)"></form-help>
    </div>
  </transition>
</template>

<script>
import FormItemMixin from '../mixins/FormItemMixin'

export default {
  name: 'form-select',
  mixins: [FormItemMixin],
  props: {
    value: '',

    /**
     * Array of options for select menu
     */
    options: {
      type: Array,
      required: true
    },
    defaultText: {
      type: String,
      default: 'Select'
    },
    validation: {
      type: [String, Object],
    },
    optional: {
      type: Boolean,
      default: false
    },
    focusOnEnter: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'none'
    }
  },
  data () {
    return {
      selectedOption: '',
    }
  },

  created () {
    this.focusListener()
  },

  mounted () {
    this.selectedOption = this.value
  },

  computed: {
    model: {
      get() {
        return this.selectedOption
      },
      set(val) {
        this.$nextTick(function() {
          this.$emit('input', val);
          val !== '' ? this.$emit('option-selected') : ''
        })
      }
    }
  },

  methods: {
    /**
     * This isn't correct
     * @event focus
     * @type {Event}
     * @param {String} name the description goes here for this method
     */
    setFocus(name) {
      this.$refs[name] ? this.$refs[name].focus() : ''
    },

    handleFocusOnEnter () {
      if (this.focusOnEnter && this.selectedOption != '') {
        this.$refs[this.name].focus()
      }
    }
  },

  watch: {
    value: function (newValue) {
      this.selectedOption = newValue
    }
  }
}
</script>

<style lang="scss">
  select {
    cursor: pointer;
  }
  label {
    display: block;
  }
</style>
