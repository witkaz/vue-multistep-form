<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header px-2">
              <font-awesome-icon class="pr-2" :icon="['fas', 'pen']" />
              <slot name="header">New case</slot>
              <div class="close" @click="$emit('close')"></div>
            </div>

            <div class="modal-body px-2">
              <div class="modal-sidebar py-2">
                <ul class="sidebar">
                  <li class="pt-4 sidebar-link-active">Case</li>
                  <li class="pt-4">Vendor</li>
                  <li class="pt-4">Requestor</li>
                  <li class="pt-4">Transactions</li>
                  <li class="pt-4">Attachments</li>
                </ul>
              </div>
              <div class="modal-main-content p-2">
                <BaseInput
                  v-model="name"
                  @keydown.enter="search"
                  placeholder="Your Name"
                  label="Name"
                ></BaseInput>

                <BaseInput
                  v-model="lastName"
                  @keydown.enter="search"
                  placeholder="Your Last Name"
                  label="Last Name"
                ></BaseInput>

                <BaseInput
                  v-model="lastName"
                  @keydown.enter="search"
                  placeholder="Your Last Name"
                  label="Last Name"
                ></BaseInput>

                <BaseSelect></BaseSelect>

                <div class="modal-footer p-3">
                  <button class="btn btn-link">Reset to default form</button>
                  <button class="btn btn-link" style="margin-left: auto">
                    Cancel
                  </button>
                  <button class="btn">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";

export default {
  name: "BaseModal",
  components: {
    BaseInput,
    BaseSelect
  }
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

  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 850px;
  height: 700px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0px auto;
  top: 10vh;
}

.modal-container {
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
  display: grid;
  grid-template-columns: 20% 80%;

  .modal-sidebar {
    border-right: 2px solid #cecece;
    justify-content: center;
    display: flex;

    .sidebar {
      list-style: none;
      color: $sidebar-link;
      font-weight: $bold;
      font-size: $font-size-m;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0;
      .sidebar-link-active {
        color: $primary;
        &:after {
          content: "";
          width: 2px;
          height: 19px;
          background-color: $primary;
          display: inline-block;
          position: relative;
          left: 37px;
          top: 6px;
        }
      }
    }
  }
}

.modal-footer {
  display: flex;
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
