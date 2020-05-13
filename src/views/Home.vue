<template>
  <div>
    <div class="centered">
      <button class="btn btn-primary" @click="showModal = true">
        Add new case
      </button>
      <ModalForm v-if="showModal" @close="showModal = false"></ModalForm>
    </div>
    <a class="link" href="https://www.behance.net/chejniakpiotr">
      designed by
      <span class="link-active">Piotr Chejniak</span>
    </a>
  </div>
</template>

<script>
import ModalForm from "./ModalForm";
export default {
  name: "Home",
  components: { ModalForm },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style></style>
