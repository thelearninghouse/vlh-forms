export default {
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter: function(el) {
      el.style.height = "auto";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      this.$nextTick(() => {
        el.style.height = "0";
      })
    }
  }
};
