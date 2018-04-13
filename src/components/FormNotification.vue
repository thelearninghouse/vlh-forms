<template>
  <transition name="slide-fade">
    <div class="form-notification" v-show="showNotification" role="alert">
      <slot name="content"></slot>
      <h3>Thank you for your interest in our programs. Someone will be contacting you shortly!</h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'form-notification',
  props: {
    showNotification: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.form-notification {
  position: fixed;
  top: 50%;
  background: white;
  z-index: 9999999999;
  padding: .75em 1em 1.5em;
  left: 50%;
  max-width: 750px;
  min-width: 250px;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px rgba(0,0,0,.2), 0px 1px 2px 1px rgba(0,0,0,.1), 0 0 4px #bebebe;
  border-radius: 4px;
  font-size: 1.75em;
  line-height: 1.3;
  text-align: center;
  text-transform: capitalize;
}
</style>
