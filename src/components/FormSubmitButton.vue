<template lang="html">
  <div class="elp_submit">
    <!-- <button type="submit" class="submit" v-text="text"></button> -->
    <input type="submit" :value="text" />
    <p class="legal-text">By requesting information, I am providing express consent for Concordia University St. Paul to contact me by email, phone and text, including my wireless phone number, regarding degree and enrollment information using automated technology. Standard message and data rates may apply to text messages. There is no obligation to enroll.</p>
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
