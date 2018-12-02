<template lang="html">
  <div class="example optionalField">
    <form-field optional name="optionalField" label="An Optional Field" v-model="submit.firstName"></form-field>
    <form-first-name v-model="submit.firstName"></form-first-name>
    <form-last-name v-model="submit.lastName"></form-last-name>
    <form-submit text="Get Info"></form-submit>
    <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue"></form-legal-text>
  </div>
</template>

<script>
  export default {}
</script>
