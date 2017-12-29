<template>
  <!-- <transition name="slide-fade" appear mode="out-in"> -->
  <transition name="slide-fade" appear mode="out-in">
  <div class="steps">
    <!-- <h5>Current Step:  {{currentStep}}</h5> -->
    <!-- <slot name="step"
      v-for="step in steps"
      :text="step.title"
      class="step">
    </slot> -->

    <!-- <transition name="slide-fade" appear mode="out-in"> -->


    <template v-for="(step, index) in steps">
      <!-- <transition name="slide-fade" appear mode="out-in"> -->
        <div v-if="currentStep == step.id" :key="index">
          <span>Formatted Step Count:</span>
          <span :class.num="index + 1">{{index + 1}}</span>
            <slot :name="index + 1">
            <p>Default Slot Content</p>
          </slot>
        </div>
    <!-- </transition> -->
    </template>

    <!-- <div class="step">
      <h4 v-text="'Step' + stepID"></h4>
      <h5>Current Step:  {{currentStep}}</h5>
      <slot>
        <p>This should not show up unless theres nothing inside component in parent</p>
      </slot>
    </div> -->


  </div>
  </transition>
</template>

<script>

export default {
  name: 'form-stepper',
  props: {
    steps: {
      type: Array
    }
    // stepID: {
    //   type: Number,
    //   required: true
    // }
  },
  inject: ['$validator'],

  computed: {
    currentStep () {
      return this.$parent.currentStep
    },
    firstField () {
      return Object.keys(this.fields)[0];
    }
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
