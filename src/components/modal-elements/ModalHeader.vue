<template>
  <div class="modal-header px-2">
    <font-awesome-icon class="pr-2" :icon="['fas', 'pen']" />
    <slot name="header">New case</slot>
    <div class="close" @click="$emit('close')"></div>
  </div>
</template>

<script>
export default {
  name: "ModalHeader"
};
</script>

<style lang="scss" scoped>
.modal-header {
  background-color: #1d1d1d;
  height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
}

.close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 0;
  align-self: flex-end;
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    display: block;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}
</style>
