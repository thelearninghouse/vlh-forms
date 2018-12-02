<template>
  <button
    class="form-submit-button"
    :class="getBackgroundClass"
    :style="getButtonStyles"
  >
    <template v-if="animation">
      <transition name="fade" mode="out-in" appear>
        <div
          v-if="loading"
          key="loading"
          class="form-submit-spinner spinner"
          :style="{ borderTopColor: textColor }"
        ></div>
        <success-icon
          v-if="isSuccess"
          key="success"
          :style="{ fill: textColor, marginRight: '16px' }"
          class="form-submit-success-icon"
        ></success-icon>
      </transition>
    </template>
    <div class="form-submit-button-text" :style="{ color: textColor }">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import SuccessIcon from "../assets/images/checked.svg";

export default {
  name: "form-submit-button",
  props: {
    // disabled: Boolean,
    isLoading: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    },
    status: {
      type: String | Boolean,
      default: ""
    },
    color: String,
    textColor: String
  },
  components: {
    SuccessIcon
  },
  computed: {
    getSpinnerClass() {
      return {
        spinner: this.loading,
        check: !this.emptyStatus && this.isSuccess && !this.loading,
        cross: !this.emptyStatus && !this.isSuccess && !this.loading
      };
    },
    getBackgroundClass() {
      return {
        "form-submit-button-loader-error": !this.emptyStatus && !this.isSuccess,
        "form-submit-button-loader-success": this.isSuccess,
        "is-loading": this.loading
      };
    },
    getButtonStyles() {
      return {
        backgroundColor: this.color,
        color: this.textColor
      };
    },
    getIconColor() {
      return {
        borderTopColor: this.textColor
      };
    },
    loading() {
      return this.isLoading;
    },
    isSuccess() {
      return this.status === "success" || this.status === true;
    },
    emptyStatus() {
      return this.status === "";
    },
    showSlot() {
      return this.loading || (!this.loading && this.emptyStatus);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active,
.fade-leave-to {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
  will-change: opacity;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.form-submit {
  &-button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 2.25em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    position: relative;
    vertical-align: top;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    // background-color: white;
    border: 1px solid #dbdbdb;
    color: #363636;
    cursor: pointer;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;
    transition: 0.3s all ease;
  }

  &-spinner {
    width: 22px;
    height: 22px;
    margin-right: 16px;
    opacity: 1;
    filter: alpha(opacity=100);
    animation: rotation 0.7s infinite linear;
    border-right-color: rgba(0, 0, 0, 0.2);
    border-left-color: rgba(0, 0, 0, 0.2);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-width: 4px;
    border-style: solid;
    // border-top-color: #9e9e9e;
    border-radius: 100%;
    transition: 0.3s all ease;
  }
  &-success-icon {
    width: 22px;
    height: 22px;
    // fill: white;
  }
}

button.form-submit-button-loader-error:not(.is-loading) {
  background-color: #f44336;
}

.form-submit-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/**  Spinner Icon **/

/**
Cross Icon
**/

.cross {
  display: inline-block;
  width: 17px;
  height: 16px;
  position: relative;
}

.cross:after,
.cross:before {
  position: absolute;
  left: 8px;
  content: " ";
  height: 16px;
  width: 2px;
  background-color: #fff;
}

.cross:before {
  transform: rotate(45deg);
  will-change: transform;
}

.cross:after {
  transform: rotate(-45deg);
  will-change: transform;
}

.form-submit-button {
  padding: 1em 0.5em;
  height: initial;
  width: 100%;
}
</style>
