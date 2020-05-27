<template>
  <div>
    <div class="form-group">
      <div class="d-flex">
        <div class="input-wrapper">
          <label class="label pb-1 pl-1">Number</label>
          <input class="input input-xs mr-1" v-model="form.number" />
        </div>
        <div class="input-wrapper">
          <label class="label pb-1 pl-1">Due date</label>
          <input class="input input-xs mr-1" v-model="form.date" />
        </div>
        <div class="input-wrapper">
          <label class="label pb-1 pl-1">Buyer name</label>
          <input class="input input-xs mr-1" />
        </div>
        <div class="input-wrapper">
          <label class="label pb-1 pl-1">Bank account number</label>
          <input class="input input-sm mr-1" />
        </div>
      </div>
      <button class="btn btn-secondary float-right mt-2 mr-3">Search</button>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "FormTransactions",
  data: function() {
    return {
      form: {
        number: null,
        date: null
      }
    };
  },
  validations: {
    form: {
      number: {
        required
      }
    }
  }
};
</script>

<style></style>
