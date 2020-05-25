<template>
  <div>
    <div class="centered">
      <button class="btn btn-primary" @click="showModal = true">
        Add new case
      </button>
      <ModalWizardForm
        v-if="showModal"
        @close="showModal = false"
      ></ModalWizardForm>
    </div>
    <a class="link" href="https://www.behance.net/chejniakpiotr">
      designed by
      <span class="link-active">Piotr Chejniak</span>
    </a>
  </div>
</template>

<script>
import ModalWizardForm from "./ModalWizardForm";
export default {
  name: "Home",
  components: { ModalWizardForm },
  data() {
    return {
      showModal: false
    };
  }
};
</script>
