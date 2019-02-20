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

// const uniqueArray = originalArray => [...new Set(originalArray)];

// const createTagsList = postsArray => {
//   const tagsArray = [];
//   postsArray.forEach(post => {
//     if (post.tagNames.length) {
//       post.tagNames.forEach(tag => tagsArray.push(tag));
//     }
//   });
//   return uniqueArray(tagsArray);
// };

// const getPostsFromTag = (posts, tag) =>
//   posts.filter(post => post.tagNames.includes(tag));

export default {
  extends: BaseSelect,
  name: "FormSelectOptgroups",
  props: {
    optionGroups: Array
  }
  // computed: {
  //   programsGroups() {
  //     if (!this.programs) return [];
  //     return this.createProgramsGroupsArray(this.$root.programs);
  //   }
  // },
  // methods: {
  //   createProgramsGroupsArray(programsArray) {
  //     console.log("RAN FROM createProgramsGroupsArray");

  //     const programsGroups = [];
  //     const tagList = createTagsList(programsArray);

  //     tagList.forEach(tag => {
  //       const programsForTag = getPostsFromTag(programsArray, tag);
  //       programsGroups.push({
  //         label: tag,
  //         programs: programsForTag
  //       });
  //     });
  //     return programsGroups;
  //   }
  // }
};
</script>
