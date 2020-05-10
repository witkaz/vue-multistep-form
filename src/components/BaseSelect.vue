<template>
  <div class="input-wrapper">
    <label class="label">
      <div class="pb-1 pl-1">{{ label }}</div>
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>

<style></style>
