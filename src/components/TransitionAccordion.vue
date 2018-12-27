<template>
  <transition
    name="accordion"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    appear
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>

<script>
/**
 * The transition component that is used to animate the height smoothly.
 * Used inside the `form-help` component
 */
export default {
  name: "transition-accordion",
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
.accordion-enter-active,
.accordion-leave-active {
  // transition: all 0.3s ease-in-out;
  transition: all 250ms ease-out;
  // transition: height 0.3s ease-out, transform 0.3s ease-out;
  overflow: hidden;
}
</style>

<style scoped>
* {
  will-change: height, transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
