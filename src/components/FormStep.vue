<template lang="html">
  <transition name="slide-fade" appear>
    <div class="step" v-if="currentStep == stepID">
      <h4 v-text="'Step' + stepID"></h4>
      <h5>Current Step:  {{currentStep}}</h5>
      <slot>
        <p>This should not show up unless theres nothing inside component in parent</p>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'form-step',
  props: {
    stepID: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentStep () {
      return this.$parent.currentStep
    }
  },
  mounted () {
    console.log(this.$parent);
  }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0
}

.slide-enter-active, .slide-leave-active {
transition: all .3s ease;
transform: translateX(40px);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
/*opacity: 0*/
transform: translateX(40px);
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
/*position: absolute;*/
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  position: absolute;
  transform: translateX(-40px);
}
.slide-fade-enter {
  transform: translateX(300px);
  /*transition: all .9s ease;*/
  opacity: 0;
}

.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
  transition: all .9s ease;
  opacity: 0;
}
</style>
