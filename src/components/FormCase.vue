<template>
  <div>
    <div class="form-group">
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Case Type</label>
        <v-select
          class="select-option"
          ref="select"
          :options="selectOptions"
          placeholder="Select"
        ></v-select>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Follow-up Date</label>
        <input
          class="input input-md"
          type="text"
          v-model="$v.form.followUp.$model"
          :class="{
            'input-invalid': $v.form.followUp.$error,
            'input-valid': !$v.form.followUp.$invalid
          }"
        />
        <font-awesome-icon
          v-if="!$v.form.followUp.$invalid"
          class="pl-2 icon-valid"
          :icon="['fas', 'check-circle']"
        />
        <font-awesome-icon
          v-if="$v.form.followUp.$error"
          class="pl-2 icon-invalid"
          :icon="['fas', 'exclamation-circle']"
        />
      </div>

      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Assigned to</label>
        <BaseBtnSwitcher class="mb-2">
          <template v-slot:first-option>Person</template>
          <template v-slot:second-option>Business Unit</template>
        </BaseBtnSwitcher>
        <v-select
          class="select-option"
          ref="select"
          :options="selectOptions"
          placeholder="Select"
        ></v-select>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Status</label>
        <v-select
          class="select-option"
          ref="select"
          :options="selectOptions"
          placeholder="Select"
        ></v-select>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Description</label>
        <textarea
          class="input"
          rows="5"
          cols="100"
          placeholder="What the task is about?"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtnSwitcher from "@/components/BaseBtnSwitcher";
import { required } from "vuelidate/lib/validators";

export default {
  name: "FormCase",
  components: {
    BaseBtnSwitcher
  },
  data: function() {
    return {
      form: {
        followUp: null
      },
      selectOptions: ["Test 1", "Test 2", "Test 3"]
    };
  },
  validations: {
    form: {
      followUp: {
        required
      }
    }
  }
};
</script>

<style></style>
