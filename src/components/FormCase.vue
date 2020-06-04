<template>
  <div>
    <form @input="submit" class="form-group">
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
          v-model="formCase.followUpDate"
          :class="{
            'input-invalid': $v.formCase.followUpDate.$error,
            'input-valid': !$v.formCase.followUpDate.$invalid
          }"
        />
        <font-awesome-icon
          v-if="!$v.formCase.followUpDate.$invalid"
          class="pl-2 icon-valid"
          :icon="['fas', 'check-circle']"
        />
        <font-awesome-icon
          v-if="$v.formCase.followUpDate.$error"
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
          v-model="formCase.description"
          class="input"
          rows="5"
          cols="100"
          placeholder="What the task is about?"
        ></textarea>
      </div>
    </form>
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
  props: {
    multiStepFormData: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      formCase: {
        followUpDate: null,
        description: null
      },

      selectOptions: ["Test 1", "Test 2", "Test 3"]
    };
  },
  validations: {
    formCase: {
      followUpDate: {
        required
      }
    }
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          formCase: {
            followUpDate: this.formCase.followUpDate,
            description: this.formCase.description
          }
        },
        valid: !this.$v.$invalid
      });
    }
  }
};
</script>

<style></style>
