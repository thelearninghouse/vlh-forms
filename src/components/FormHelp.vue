<template>
  <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <div :id="id" class="help hasError" v-show="visible">
      <div class="help-inner" v-text="helpText"></div>
    </div>
  </transition>
</template>

<script>
/**
 * The form component for showing error messages
 *
 */
export default {
  name: 'form-help',
  props: {
    id: {
      type: String
    },
    helpText: {
      type: String
    },
    visible: {
      type: Boolean
    },
  },
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    }
  }
}
</script>

<style lang="scss">
</style>
