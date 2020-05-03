<template>
  <div class="centered">
    <button class="btn btn-primary" @click="showModal = true">
      Add new case
    </button>
    <BaseModal v-if="showModal" @close="showModal = false"></BaseModal>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal";
export default {
  name: "Home",
  components: { BaseModal },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style></style>
