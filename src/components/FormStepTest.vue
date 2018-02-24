<template lang="html">
  <!-- <transition name="slide-fade" mode="out-in" appear> -->
  <div class="step">
    <button @click="$bus.$emit('set-focus', 'test')">Focus on Test</button>
    <button @click="$bus.$emit('set-focus', lastField)">Focus on last item</button>
    <form-field optional v-model="testdata" name="test" label="Test Me"></form-field>
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
      testdata: ''
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
      this.$bus.$emit('set-focus', this.firstField)
    }
  },
  methods: {
    setFocus(field) {
      console.log(field);
      console.log(this.$refs);
      // this.$refs[field].focus()
    }
  }
}
</script>

<style lang="scss">
.step {
  position: relative;
  min-height: 100px;
}
.stepFormProgress {
  display: flex;
  justify-content: space-around;
  justify-content: space-between;
  flex-flow: row wrap;
  margin: 1em 0;

  .stepProgress {
    padding: .5em;
    transition: .25s ease;
    position: relative;
    border-bottom: 3px solid transparent;

    &.currentStep {
      border-bottom: 2px solid #444;
    }

    &.completedStep {

      &:after {
        content: "\2713";
        font-size: 1.5em;
        font-weight: 500;
        position: absolute;
        left: 100%;
        bottom: 2px;
        transition: .4s ease;
        color: #444;
      }
    }
  }
}

.light-color-theme {
  .stepFormProgress {
    color: #222 !important;

    .stepProgress {

      &.currentStep {
        border-bottom: 2px solid #222;
      }
      &.completedStep:after {
        color: #222;
      }
    }

  }
}

.dark-color-theme {
  color: #f9f9f9 !important;

  .stepFormProgress {
    color: #f9f9f9 !important;

    .stepProgress {

      &.currentStep {
        border-bottom: 2px solid #f9f9f9;
      }
    }

  }
}
</style>
