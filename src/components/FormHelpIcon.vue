<template>
    <component :id="id" class="form-help-icon" :is="icon"></component>
</template>

<script>
import ErrorIcon from '../assets/images/icon-error.svg';
import ValidIcon from '../assets/images/icon-valid.svg';

export default {
  name: 'form-help-icon',
  props: [
    'icon',
    'id'
  ],
  components: { ValidIcon, ErrorIcon },
}
</script>

<style lang="scss">

.form-help-icon {
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
}

.valid {
  & + .form-help-icon {
    display: none;
  }
}
</style>
