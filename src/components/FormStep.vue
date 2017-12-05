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
    },
    firstField () {
      let currentStep = this.currentStep
      // console.log('firstName ran: ', );
      let fieldsObject = this.fields

      // console.log(fieldsObject);
      let firstField = Object.keys(this.fields)[0];
      console.log('firstField: ', firstField);
      let value = fieldsObject[firstField]
      return firstField


    }
  },
  created () {
  },
  watch: {
    currentStep (val) {
      console.log('FROM WATCH: ', val);
    }
  },
  updated: function () {
    this.$nextTick(function () {
      let vm = this
      this.$bus.$on('step-updated', stepCount => {

        // if (stepCount == vm.stepID) {
        //   console.log(stepCount, vm.stepID);
        //   let fieldsObject = vm.fields
        //   console.log(fieldsObject);
        //   let firstField = Object.keys(this.fields)[0];
        //   let value = fieldsObject[firstField]
        //
        //   this.$bus.$emit('set-focus', firstField)
        // }
      });
    })
  },
  mounted () {
    this.$bus.$emit('set-focus', this.firstField)
  }
}
</script>

<style lang="css">
.step {
  position: relative;
}
</style>
