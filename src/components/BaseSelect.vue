<template>
  <div class="input-wrapper">
    <label class="label">
      <div class="pb-1 pl-1">{{ label }}</div>
      <BaseBtnSwitcher
        class="mb-2"
        v-if="btnSwitcher === true"
      ></BaseBtnSwitcher>
      <v-select
        class="select-option"
        ref="select"
        :options="options"
        placeholder="Select"
      ></v-select>
    </label>
  </div>
</template>

<script>
import BaseBtnSwitcher from "@/components/BaseBtnSwitcher";

export default {
  name: "BaseSelect",
  components: {
    BaseBtnSwitcher
  },
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
    },
    btnSwitcher: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      options: ["Test 1", "Test 2", "Test 3"]
    };
  },
  mounted() {
    // this.$refs.select.open = true
  }
};
</script>

<style></style>
