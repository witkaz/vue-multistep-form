<template>
  <div>
    <div class="form-group">
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Form Attachments</label>
        <input class="input input-xs mr-1" v-model="form.attachment" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormAttachments",
  data: function() {
    return {
      form: {
        attachment: null
      }
    };
  },
  validations: {}
};
</script>

<style></style>
