<template>
  <transition
    name="dynamic-field"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div :class="formItemClasses" class="form-select-optgroup">
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
          <option class="select-default-option" key="initial" value v-text="defaultText"></option>
          <optgroup v-for="group in optionGroups" :label="group.label" :key="group.label">
            <option
              v-for="(option, index) in group.programs"
              :selected="option.id === value"
              :value="option.id"
              :key="index"
              :id="option.id"
            >{{ option.name }}
            </option>                  
          </optgroup>
        </select>
      </div>

      <form-help :id="helpTextId" :visible="errors.has(id)" :helpText="errors.first(id)"/>
    </div>
  </transition>
</template>

<script>
import BaseSelect from "./BaseSelect.vue";

export default {
  extends: BaseSelect,
  name: "FormSelectOptgroups",
  props: {
    optionGroups: Array
  }
};
</script>
