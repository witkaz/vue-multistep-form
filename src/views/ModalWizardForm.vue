<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <ModalHeader></ModalHeader>
            <div class="modal-body px-2">
              <div class="modal-sidebar py-2">
                <ul class="sidebar-menu">
                  <li class="pt-4">
                    Case
                    <font-awesome-icon
                      style="position: absolute"
                      class="icon-valid pl-2"
                      :icon="['fas', 'check']"
                    />
                  </li>
                  <li class="pt-4 sidebar-link-active">Vendor</li>
                  <li class="pt-4">Requestor</li>
                  <li class="pt-4">Transactions</li>
                  <li class="pt-4">Attachments</li>
                </ul>
                <div class="form-complete-progress">
                  <div class="form-complete-progress-percent">0%</div>
                  <div class="form-complete-progress-bar mt-1"></div>
                </div>
              </div>
              <div class="modal-main-content p-2">
                <keep-alive>
                  <component
                    ref="currentStep"
                    :is="currentFormStep"
                    @update="processStep"
                    :multiStepFormData="dataForm"
                  ></component>
                </keep-alive>
                <div class="modal-footer p-3">
                  <button class="btn btn-link" style="margin-left: 1.25rem">
                    Reset to default form
                  </button>
                  <button
                    class="btn btn-link"
                    style="margin-left: auto"
                    @click="$emit('close')"
                  >
                    Cancel
                  </button>
                  <button
                    @click="goBack"
                    v-if="currentStepNumber > 1"
                    class="btn mr-1"
                  >
                    Back
                  </button>
                  <button @click="nextButtonAction" class="btn">
                    {{ isLastStep ? "Save" : "Next" }}
                  </button>
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
import ModalHeader from "@/components/modal-elements/ModalHeader";
import FormCase from "@/components/FormCase";
import FormVendor from "@/components/FormVendor";
import FormRequestor from "@/components/FormRequestor";
import FormTransactions from "@/components/FormTransactions";
import FormAttachments from "@/components/FormAttachments";

export default {
  name: "ModalWizardForm",
  components: {
    ModalHeader,
    FormCase,
    FormVendor,
    FormRequestor,
    FormTransactions,
    FormAttachments
  },
  data() {
    return {
      canGoNext: false,
      currentStepNumber: 1,
      asyncState: null,
      steps: [
        "FormCase",
        "FormVendor",
        "FormRequestor",
        "FormTransactions",
        "FormAttachments"
      ],
      dataForm: {
        formCase: {
          followUpDate: null,
          description: null
        },
        formVendor: {
          email: null
        }
      }
    };
  },
  computed: {
    length() {
      return this.steps.length;
    },
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
    currentFormStep() {
      return this.steps[this.currentStepNumber - 1];
    },
    isLastStep() {
      return this.currentStepNumber === this.length;
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length;
    }
  },
  methods: {
    processStep(step) {
      Object.assign(this.dataForm, step.data);
      this.canGoNext = step.valid;
    },
    goBack() {
      this.currentStepNumber--;
      this.canGoNext = true;
    },
    goNext() {
      this.currentStepNumber++;

      // this.canGoNext = false
      // nextTick accepts a callback to be executed after the next DOM update cycle
      this.$nextTick(() => {
        this.canGoNext = !this.$refs.currentStep.$v.$invalid;
      });
    },
    submitOrder() {
      console.log(this.dataForm, "form has been sent!");
    },
    nextButtonAction() {
      if (this.isLastStep) {
        this.submitOrder();
      } else {
        this.goNext();
        console.log("next form");
      }
    }
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
  width: 855px;
  height: 720px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
}

.modal-container {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  display: grid;
  grid-template-columns: 20% 80%;

  .modal-sidebar {
    border-right: 2px solid #cecece;
    justify-content: center;
    display: flex;

    .sidebar-menu {
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
          left: 46px;
          top: 6px;
        }
      }
    }
    .form-complete-progress {
      align-self: flex-end;
      color: $text-color;
      font-size: $font-size-s;
      margin-bottom: 1.5rem;
      &-bar {
        border: 1px solid $primary-gray;
        width: 120px;
        background-color: $primary-gray;
        position: absolute;
        left: 25px;
      }
    }
  }
}

.modal-footer {
  display: flex;
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
