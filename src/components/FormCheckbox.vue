<template>
  <div class="form-item form-item-checkbox">
    <!-- <div :class="[formItemClasses, `form-item-${id}`]"> -->
    <input
      :id="id"
      :checked="checked"
      type="checkbox"
      :name="id"
      @change="$emit('change', $event.target.checked)"
    >
    <label :for="id" v-text="label"></label>

    <!-- <span class="checkmark"></span> -->
  </div>
</template>

<script>
import BaseMixin from "./../mixins/BaseMixin";

export default {
  mixins: [BaseMixin],
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean
    },
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    isChecked() {
      return this.checked;
    }
  },
  methods: {
    onChange() {
      console.log("TCL: onChange -> onChange");
      return this.$emit("change", !this.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item-checkbox {
  display: flex;
  align-items: center;
  flex: 0 1 40%;
  justify-content: space-between;
  margin-left: 0;

  label {
    pointer-events: auto;
    cursor: pointer;
    display: block;
    flex: 0 1 80%;
    margin-left: 2%;
  }

  input {
    cursor: pointer;
    flex: 0 1 15%;
    zoom: 0.55;
  }
}

// .checkbox input[type="checkbox"] {
//   opacity: 0;
// }

// .checkbox label {
//   position: relative;
//   display: inline-block;

//   /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
//   padding-left: 22px;
// }

// .checkbox label::before,
// .checkbox label::after {
//   position: absolute;
//   content: "";

//   /*Needed for the line-height to take effect*/
//   display: inline-block;
// }

// /*Outer box of the fake checkbox*/
// .checkbox label::before {
//   height: 16px;
//   width: 16px;

//   border: 1px solid;
//   left: 0px;

//   /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border

//   top: 3px;
// }

// /*Checkmark of the fake checkbox*/
// .checkbox label::after {
//   height: 5px;
//   width: 9px;
//   border-left: 2px solid;
//   border-bottom: 2px solid;

//   transform: rotate(-45deg);

//   left: 4px;
//   top: 7px;
// }

// /*Hide the checkmark by default*/
// .checkbox input[type="checkbox"] + label::after {
//   content: none;
// }

// /*Unhide on the checked state*/
// .checkbox input[type="checkbox"]:checked + label::after {
//   content: "";
// }
//
</style>
