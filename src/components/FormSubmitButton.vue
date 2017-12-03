<template lang="html">
  <div class="elp_submit">
    <input type="submit" :value="text" />
  </div>
</template>

<script>
export default {
  name: 'form-submit-button',
  props: {
    text: {
      type: String,
      default: 'Request Info'
    }
  }
}
</script>

<style lang="css" scoped>
.submit {
  background: steelblue;
  cursor: pointer;
  border: none;
  color: white;
  padding: .5em 1em;
  font-size: 15px;
}
.requestinfo .legal-text {
 font-size: 10px;
 line-height: 1.2;
 clear: both;
 width: 90%;
 margin: 1em auto !important;
 color: white;
 text-align: left;
 font-weight: normal;
}
.single-grp_pages .legal-text {
 width: 100%;
}
</style>
