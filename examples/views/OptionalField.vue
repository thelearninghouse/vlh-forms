<template lang="html">
  <div class="example optionalField">
    <form-first-name v-model="submit.firstName" />
    <form-last-name v-model="submit.lastName" />
    <form-submit />
    <form-legal-text
      school="Alvernia University"
      />
  </div>
</template>

<script>
export default {};
</script>
