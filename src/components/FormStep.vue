<template>
  <!-- <transition name="slide-fade" mode="out-in" appear> -->
  <div class="step">
    <!-- <input type="text" v-model="inputId">
    <button @click.prevent="setFocus(inputId)">Set Focus</button> -->
    <slot>
      <p>This should not show up unless theres nothing inside component in parent</p>
    </slot>
  </div>
<!-- </transition> -->
</template>

<script>

export default {
  name: 'form-step',
  inject: ['$validator'],

  data () {
    return {
      inputId: ''
    }
  },

  computed: {
    currentStep () {
      return this.$parent.currentStep
    },
    firstField () {
      return Object.keys(this.fields)[0];
    },
    lastField () {
      let fieldsInStep = Object.keys(this.fields)
      return fieldsInStep[fieldsInStep.length - 1];
    },
    stepID () {
      return this.$vnode.data.key
    }
  },

  mounted () {

    if (this.stepID > 1) {
      console.log(this.stepID);
      this.$nextTick(function() {
        console.log('From FormStep Mounted');
      })

      // this.$nextTick(function () {
      //   this.$bus.$emit('set-focus', this.firstField)
      // })
    }
  },

  methods: {
    setFocus(id) {
      document.getElementById(id).focus();
    },
    setFocusWithJS () {
      console.log('Running in new focus method');
      var FormItemDiv = document.querySelector(".form-item");
      var El = FormItemDiv.querySelector("input, select, checkbox, textarea");
      El.focus()
    }
  }
}
</script>

<style lang="scss">
  .step {
    position: relative;
    min-height: 100px;
  }
</style>
