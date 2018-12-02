<template>
  <transition-accordion>
    <div :id="id" class="help hasError" v-show="visible">
      <div class="help-inner" v-text="helpText"></div>
    </div>
  </transition-accordion>
</template>

<script>
/**
 * The form component for showing error messages
 *
 */
export default {
  name: "form-help",
  props: {
    id: {
      type: String
    },
    helpText: {
      type: String
    },
    visible: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss"></style>
