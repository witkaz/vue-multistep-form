<template>
  <div>
    <button @click="toggle = !toggle" class="btn-switcher">
      <span :class="{ btnSwitcherActive: !toggle }" class="px-4">Person</span
      ><span :class="{ btnSwitcherActive: toggle }" class="px-4"
        >Business Unit</span
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseBtnSwitcher",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      toggle: false
    };
  }
};
</script>

<style></style>
