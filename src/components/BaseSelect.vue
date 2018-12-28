<template>
  <div class="form-item">
    <label :for="id" v-text="label"></label>
    <div class="form-field-wrapper">
      <select
        :id="id"
        :ref="id"
        :value="value"
        v-bind="$attrs"
        :name="selectName"
        :class="selectClasses"
        v-on="selectListeners"
        :data-vv-name="id"
        :data-vv-as="selectValidationName"
        v-validate="selectValidation"
        :aria-describedby="helpTextId"
      >
        <option
          key="initial"
          value=""
          v-text="defaultText"
        ></option>
        <option
          v-for="(option, index) in options"
          :selected="option.id === value"
          :value="option.id"
          :key="index"
          :id="option.id"
        >{{ option.name }}
        </option>
      </select>
    </div>

    <form-help
      :id="helpTextId"
      :visible="errors.has(id)"
      :helpText="errors.first(id)"
    ></form-help>
  </div>
</template>

<script>
import BaseMixin from '@/mixins/BaseMixin'

export default {
  mixins: [BaseMixin],
  inheritAttrs: false,
  inject: { $validator: "$validator" },
  props: {
    id: {
      type: String,
      required: true
    },
    
    value: [String, Number],
    
    label: String,

    validationName: {
      type: String
    },

    validation: {
      type: String,
      default: "required"
    },
    
    defaultText: {
      type: String,
      default: "Select"
    },

    options: {
      type: Array,
      required: true
    }
  },

  computed: {
    selectName () {
      return this.$attrs.name || this.id
    },

    selectClasses () {
      return {
        select: true,
        valid: this.fieldValidity,
        invalid: this.errors.has(this.id),
      }
    },

    selectListeners () {
      return {
        ...this.$listeners,
        change: event => this.$emit("input", event.target.value)
      };
    },

    selectValidation () {
      return this.optional
        ? { rules: { required: false } }
        : this.validation || "required";
    },

    selectValidationName () {
      return this.validationName || this.label;
    }
  },

  created () {
    this.$bus.$on("qualifier-updated", newIdValue => {
      console.log("From BaseSelect - on:qualifier-updated ran");
      this.handleUpdatedQualifier(newIdValue);
    });
  },

  methods: {
    handleUpdatedQualifier (newIdValue) {
      let programIndex = this.options.findIndex(this.findQualifierProgramIndex);
      if (programIndex > -1) {
        console.log("element: ", this.$refs[this.id]);
        if (this.$refs["program"]) {
          this.qualifierUpdate(programIndex, newIdValue);
        }
      }
    },

    qualifierUpdate (programIndex, newIdValue) {
      this.$set(this.options[programIndex], "id", newIdValue);
      this.$emit("input", newIdValue);
    },

    findQualifierProgramIndex (option) {
      return option.id === this.value;
    }
  }
};
</script>

<style lang="scss">
.form-item {
  select {
    cursor: pointer;
  }
  label {
    display: block;
  }
}
</style>
