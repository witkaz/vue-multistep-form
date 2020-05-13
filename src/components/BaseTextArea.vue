<template>
  <div class="input-wrapper">
    <label class="label">
      <div class="pb-1 pl-1">{{ label }}</div>
      <textarea class="input" :placeholder="placeholder"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    // value: {
    //   type: [String, Number],
    //   default: '',
    // },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
