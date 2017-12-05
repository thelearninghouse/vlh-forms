<template lang="html">
  <!-- <transition name="slide-fade" appear mode="out-in"> -->
  <div class="step">
    <h4 v-text="'Step' + stepID"></h4>
    <h5>Current Step:  {{currentStep}}</h5>
    <slot>
      <p>This should not show up unless theres nothing inside component in parent</p>
    </slot>
  </div>
  <!-- </transition> -->
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
  inject: ['$validator'],
  computed: {
    currentStep () {
      return this.$parent.currentStep
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(function () {
      let vm = this
      this.$bus.$on('step-updated', stepCount => {
        if (stepCount == vm.stepID) {
          let fieldsObject = this.fields
          let firstField = Object.keys(this.fields)[0];
          let value = fieldsObject[firstField]

          this.$bus.$emit('set-focus', firstField)
        }
      });


    })

  }
}
</script>

<style lang="css">
.step {
  position: relative;
}
.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
opacity: 0;
}

.slide-enter-active, .slide-leave-active {
transition: all .3s ease;
transform: translateX(40px);
}
.slide-enter, .slide-leave-to  {
transform: translateX(40px);
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
/*.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  position: absolute;
  transform: translateX(-40px);
}
.slide-fade-enter {
  transform: translateX(300px);

  opacity: 0;
}

.slide-fade-leave-to
{
  transform: translateX(-300px);
  transition: all .9s ease;
  opacity: 0;
}*/

.slither-enter-active, .slither-leave-active {
  transition: transform .5s;
}
.slither-enter {
  transform: translateX(100px);
  position: absolute;
}
.slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}



</style>
