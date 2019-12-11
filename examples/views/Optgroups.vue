<template lang="html">
  <div class="example">
    <form-select-optgroup
      id="program"
      :option-groups="programsGroups"
      label="Select a Program"
      v-model="submit.program"
    />
    <form-select
      id="qualifier"
      v-if="$root.showQualifier"
      label="Do you currently hold an active RN license?"
      validation-name="License Question"
      v-model="$root.qualifierAnswer"
      :options="$root.qualifierOptions"
    />
    <form-first-name v-model="submit.firstName" />
    <form-last-name v-model="submit.lastName" />
    <form-submit />
    <form-legal-text school="Alvernia University" />
  </div>
</template>

<script>
const uniqueArray = originalArray => [...new Set(originalArray)];

const createTagsList = postsArray => {
  const tagsArray = [];
  postsArray.forEach(post => {
    if (post.tagNames.length) {
      post.tagNames.forEach(tag => tagsArray.push(tag));
    }
  });
  return uniqueArray(tagsArray);
};

const getPostsFromTag = (posts, tag) =>
  posts.filter(post => post.tagNames.includes(tag));

export default {
  computed: {
    programsGroups() {
      if (!this.programs) return [];
      return this.createProgramsGroupsArray(this.$root.programs);
    }
  },
  methods: {
    createCustomProgramList() {
      const customProgramList = this.$root.programs.map(program => {
        if (program.tagNames.includes("Adult Education")) {
          program.degree_level = "Adult Education";
        }
        return program;
      });
      return customProgramList;
    },
    createProgramsGroupsArray(programsArray) {
      console.log("RAN FROM createProgramsGroupsArray");

      const programsGroups = [];
      const tagList = createTagsList(programsArray);

      tagList.forEach(tag => {
        const programsForTag = getPostsFromTag(programsArray, tag);
        programsGroups.push({
          label: tag,
          programs: programsForTag
        });
      });

      programsGroups.push({
        label: "Tag 3 - Empty Test",
        programs: []
      });
      return programsGroups;
    }
  }
};
</script>
