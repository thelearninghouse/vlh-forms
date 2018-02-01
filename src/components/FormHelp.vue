<template>
  <transition name="accordion" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeLeave" v-on:leave="leave">
    <div :id="id" class="help hasError" v-show="visible">
      <div class="help-inner" v-text="helpText"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'form-help',
  props: [
    'id',
    'helpText',
    'visible'
  ],

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
