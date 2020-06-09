<template>
  <div class="v-radio-group">
    <fieldset>
      <legend>How/Where would you like to take classes?</legend>
      <template v-for="option in options">
        <label :key="option.name" class="radio">
          <input
            type="radio"
            :value="option.id"
            :checked="value === option.id"
            @input="$emit('input', $event.target.value)"
          />
          <span>{{ option.name }}</span>
        </label>
      </template>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.v-radio-group {
  fieldset {
    border: none;
    display: flex;
  }
}
</style>
