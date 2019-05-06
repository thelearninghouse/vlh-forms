<script>
import BaseInput from "./BaseInput.vue";

const hideElement = el => {
  const height = el.scrollHeight + "px";
  console.log("hideElement: height", height);
  el.style.height = "0";
  el.style.display = "none";
};

const showElement = el => {
  el.style.display = "block";
  const height = el.scrollHeight + "px";
  console.log("showElement: height", height);

  el.style.height = el.scrollHeight + "px"; // Get it's height
  el.style.display = "block";

  setTimeout(() => {
    el.style.height = "auto";
  }, 350);
};

/**
 * The zip component
 *
 * ```html
 * <form-zip v-model="submit.zip"/>
 * ```
 */
export default {
  extends: BaseInput,
  props: {
    id: {
      default: "zip"
    },

    label: {
      default: "Zip"
    },

    role: {
      default: "textbox"
    },

    type: {
      default: "number"
    },

    autocomplete: {
      default: "postal-code"
    },

    pattern: {
      default: "[0-9]*"
    },

    validation: {
      default: "required|validZip"
    }
  },

  computed: {
    handleInternational() {
      return this.$root.usCitizen ? false : true;
    }
  },

  watch: {
    handleInternational(isInternational) {
      if (isInternational) hideElement(this.$el);
      else showElement(this.$el);
    }
  }
};
</script>

<style scoped lang="scss">
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-item-zip {
  overflow: hidden;
  transition: height 350ms ease-in-out;
  height: auto;
  .is-hidden {
    display: none;
    height: 0;
  }
}

/* display: block;
	height: auto; */
</style>
