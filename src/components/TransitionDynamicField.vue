<template>
  <transition
    name="dynamic-field"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script>
/**
 * The transition component available to wrap form fields that will appear or disappear based on user selection
 * This provides a smooth experience as for this dynamic experience
 *
 * ```html
 * <transition-dynamic-field>
 *   <form-select
 *     v-if="selectedDegreeLevel"
 *     name="program"
 *     label="Select a Program"
 *     v-model="submit.program"
 *     :options="programsForSelectedDegreeLevel"
 *   />
 * </transition-dynamic-field>
 * ```
 */
export default {
  name: "transition-dynamic-field",
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0px";
    },
    enter: function(el) {
      this.$nextTick(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },

    /**
     * Set height back to auto after transition complate.
     * This allows the height of the inner form-field item to grow naturally in cases such as help text/form error messages.
     * Without this, it's height will be maxed by what it was initially on enter.
     */
    afterEnter: function(el) {
      el.style.height = "auto";
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
.dynamic-field-enter-active,
.dynamic-field-leave-active {
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
