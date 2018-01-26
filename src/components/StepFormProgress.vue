<template>
  <div class="stepFormProgress">
    <template v-for="(step, index) in steps">
      <div class="stepProgress" :key="index + 1" :class="{ currentStep: activeStep == index + 1, completedStep: activeStep > index + 1 }">Step {{index + 1}}
      </div>
    </template>
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
