<template>
    <div :class="buttonsWrapperClasses">
        <slot/>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    wrapperClasses: {
      type: String
      //   default:
    },
    splitButtons: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    buttonsWrapperClasses() {
      return {
        "form-buttons-wrapper": true,
        "split-buttons": this.splitButtons === false ? false : true
      };
    }
  }
};
</script>

<style scoped lang="scss">
.form-buttons-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;

  // Setting width: 100% allows buttons inside to be pushed to one side using `margin: auto;`
  width: 100%;

  &.split-buttons {
    justify-content: space-between;
  }
}
</style>
