<template>
  <transition
    name="dynamic-field"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div :class="[formItemClasses, `form-item-${id}`]">
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
          @keydown.enter.prevent
        >
          <option
            class="select-default-option"
            key="initial"
            value
            v-text="defaultText"
          ></option>
          <option
            v-for="(option, index) in options"
            :selected="option.id === value"
            :value="option.id"
            :key="index"
            :id="option.id"
            >{{ option.name }}</option
          >
        </select>
      </div>

      <form-help
        :id="helpTextId"
        :visible="errors.has(id)"
        :helpText="errors.first(id)"
      />
    </div>
  </transition>
</template>

<script>
import BaseMixin from "./../mixins/BaseMixin";
import DynamicFieldTransitionMixin from "./../mixins/DynamicFieldTransitionMixin";

/**
 * The select menu element used for displaying a list of options
 * such as degree levels or programs
 *
 * ```html
 * <base-select id="program" label="Select a Program" v-model="submit.program" :options="programs"/>
 * ```
 * @mixin
 */
export default {
  mixins: [BaseMixin, DynamicFieldTransitionMixin],

  props: {
    defaultText: {
      type: String,
      default: "Select"
    },

    /**
     * The array of options to choose from
     */
    options: {
      type: Array
    }
  },

  computed: {
    selectName() {
      return this.$attrs.name || this.id;
    },

    selectClasses() {
      return {
        select: true,
        valid: this.fieldValidity,
        invalid: this.errors.has(this.id)
      };
    },

    selectListeners() {
      return {
        ...this.$listeners,
        change: event => this.$emit("input", event.target.value),
        focus: event => this.handleFocus(event),
        blur: event => this.handleBlur(event)
      };
    },

    selectValidation() {
      return this.optional
        ? { rules: { required: false } }
        : this.validation || "required";
    },

    selectValidationName() {
      return this.validationName || this.label;
    }
  },

  created() {
    this.$bus.$on("qualifier-updated", newIdValue => {
      this.handleUpdatedQualifier(newIdValue);
    });
  },

  methods: {
    handleUpdatedQualifier(newIdValue) {
      if (this.$refs["program"]) {
        const programIndex = this.$root.programs.findIndex(
          this.findQualifierProgramIndex
        );

        this.$set(this.$root.programs[programIndex], "id", newIdValue);
        this.$emit("input", newIdValue);
      }

      /**
       * I believe below might be needed to handle `single-program` templates
       */
      this.$root.submit.program = newIdValue;
    },

    findQualifierProgramIndex(option) {
      return option.id === this.value;
    }
  }
};
</script>

<style lang="scss">
.form-item {
  select {
    cursor: pointer;
    word-wrap: break-word; /* old name */
    overflow-wrap: break-word;

    &::-ms-expand {
      display: none;
    }

    // NOTE: POSSIBLE FIX FOR WORD WRAPPING FOR LONG TEXT
    // white-space: normal;
    // line-height: 1.2;
    // height: 100%;
  }
  label {
    display: block;
  }
}

.dynamic-field-enter-active,
.dynamic-field-leave-active {
  transition: all 250ms ease-out;
  overflow: hidden;
}
</style>

<style scoped lang="scss">
* {
  will-change: height, transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.using-floating-labels.form-item {
  select {
    opacity: 0.5;
    color: transparent !important;
  }
  &-active,
  &-filled {
    select {
      opacity: 1;
      color: initial !important;
      transition: all 0.15s ease-in 0.1s;
    }
  }
}
</style>
