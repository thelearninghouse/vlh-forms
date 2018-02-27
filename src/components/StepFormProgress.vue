<template>
  <div class="stepFormProgress">
    <div
      v-for="(step, index) in steps"
      :key="index + 1"
      class="stepProgress"
      :class="{
        currentStep: activeStep == index + 1,
        completedStep: activeStep > index + 1,
        'default-style': customProgress !== true}">

      <slot :name="'step' + (index + 1)">
        <span v-text="'Step ' + (index + 1)"></span>
      </slot>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'step-form-progress',
    props: {
      steps: {
        type: [Number, String],
        required: true
      },
      activeStep: {
        type: [Number, String],
        required: true
      },
      customProgress: {
        type: Boolean,
        required: false
      }
    }
  }
</script>

<style lang="scss">
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

      &.default-style.currentStep {
        border-bottom: 2px solid #444;
      }

      &.default-style.completedStep {

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
