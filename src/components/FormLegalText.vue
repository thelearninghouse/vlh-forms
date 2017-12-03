<template>
    <p class="legal-text" :style="legalStyles">By requesting information, I am providing express consent for {{schoolName}} to contact me by email, phone and text, including my wireless phone number, regarding degree and enrollment information using automated technology. Standard message and data rates may apply to text messages. There is no obligation to enroll.</p>
  </div>
</template>

<script>
export default {
  name: 'form-legal-text',
  props: {
    school: {
      type: String,
      default: 'UPDATE ME IN WORDPRESS VIA FORM SETTINGS PAGE'
    },
    textColor: {
      type: String,
      default: '#222'
    },
    fontSize: {
      type: String,
      default: '12px'
    },
    padding: {
      type: String,
      default: '0px'
    },
    disableStyles: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    schoolName () {
      return this.$parent.schoolDisplayName || this.school
    }
  },

  data () {
    return {
      defaultStyles: {
        color: this.textColor,
        fontSize: this.fontSize,
        padding: this.padding
      },
      legalStyles: this.disableStyles ? {} : {
        color: this.textColor,
        fontSize: this.fontSize,
        padding: this.padding
      }
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
