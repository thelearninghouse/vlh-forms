<template>
  <transition :name="transition">
    <div class="form-item">
      <label :for="name">{{label}}</label>
      <select
        v-model="model"
        v-bind="$attrs"
        v-on="$listeners"
        class="select"
        :class="{hasError: errors.has(name), 'validField': fieldValidity }"
        v-validate="fieldValidation"
        :name="name"
        :ref="name"
        :id="fieldId"
        :aria-describedby="fieldId + '_help'"
        :data-vv-as="label">
        <option key="initial" value="" v-text="defaultText"></option>
        <option :key="option.id" v-for="option in options" :value="option.id">{{ option.name }}</option>
      </select>
      <form-help :visible="showHelp" :id="fieldId + '_help'" :helpText="errors.first(name)"></form-help>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'form-select',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    id: String,
    value: '',
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
  inject: ['$validator'],

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
    },

    fieldId () {
      return this.id ? this.id : this.name
    },

    fieldValidation () {
      return this.optional ? { rules: { required: false} } : this.validation || 'required'
    },

    fieldValidity () {
      return this.fields[this.name] == undefined ? false : this.checkFieldValidity(this.fields[this.name])
    },

    showHelp () {
      return this.errors.has(this.name)
    }
  },

  methods: {
    checkFieldValidity (field) {
      return field.dirty && field.valid && field.validated  ? true : false
    },

    focusListener () {
      this.$bus.$on('set-focus', name => {
        if (this.$refs[name]) {
          setTimeout(() => {
            this.$refs[name].focus()
          }, 300);
        }
      })
    },

    setFocus(name) {
      this.$refs[name] ? this.$refs[name].focus() : ''
    },

    handleFocusOnEnter () {
      console.log('handleFocus ran!');
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
