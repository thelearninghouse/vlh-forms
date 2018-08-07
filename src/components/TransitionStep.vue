<template>
  <transition mode="out-in" appear name="transition-step" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <slot/>
  </transition>
</template>

<script>
/**
 * The form component for showing error messages
 *
 */
export default {
  name: "transition-step",
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      this.$nextTick(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    }
  }
};
</script>

<style lang="scss">
</style>
