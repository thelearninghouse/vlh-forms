export default {
  created() {
    this.$bus.$on("qualifier-updated", newIdValue => {
      // console.log("on:qualifier-updated ran");
      this.updateSelectedProgramId(newIdValue);
    });
    this.focusListener();
  },

  methods: {
    updateSelectedProgramId(newIdValue) {
      let index = this.options.findIndex(this.findQualifierProgramIndex);
      if (index > -1) {
        this.options[`${index}`].id = newIdValue;
        // this.selectedOption = newIdValue;
        this.$emit("input", newIdValue);
      }
    }
  }
};