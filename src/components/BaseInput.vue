<template>
  <div class="input-wrapper">
    <label class="label">
      <div class="pb-1 pl-1">{{ label }}</div>
      <input
        class="input"
        type="text"
        v-bind="$attrs"
        :value="value"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners"
      />
    </label>
    <font-awesome-icon
      class="pl-2 icon-valid"
      :icon="['fas', 'check-circle']"
    />
  </div>
</template>

<script>
const inputTypes = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color"
];

const includesTypes = types => type => types.includes(type);

export default {
  name: "BaseTextInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const isValid = includesTypes(inputTypes)(value);
        if (!isValid) {
          console.warn(`allowed types are ${inputTypes}`);
        }
        return isValid;
      }
    }
  },
  model: {
    prop: "value",
    event: "update"
  }
};
</script>

<style></style>
