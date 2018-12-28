<template>
  <div class="form-item">
    <label
      :for="id"
      v-text="label"
    ></label>
    <select
      :id="id"
      :ref="id"
      :value="value"
      v-bind="$attrs"
      :name="selectName"
      :class="selectClasses"
      v-on="selectListeners"
      v-validate="validation"
      :data-vv-name="id"
      :data-vv-as="label"
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
    defaultText: {
      type: String,
      default: "Select"
    },
    options: {
      type: Array,
      required: true
    },

    validation: {
      type: String,
      default: "required"
    }
  },

  computed: {
    selectName () {
      return this.$attrs.name || this.id
    },

    selectClasses () {
      return {
        select: true,
        invalid: this.errors.has(this.id),
        valid: this.fieldValidity
      }
    },

    selectListeners () {
      return {
        ...this.$listeners,
        change: event => this.$emit("input", event.target.value)
      };
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
