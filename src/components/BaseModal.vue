<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <font-awesome-icon class="px-2" :icon="['fas', 'pen']" />
              <slot name="header">New case</slot>
              <div class="close" @click="$emit('close')"></div>
            </div>

            <div class="modal-body">
              <slot name="body">default body</slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">default footer</slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseModal"
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  background-color: #1d1d1d;
  height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
}

.modal-body {
  margin: 20px 0;
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
