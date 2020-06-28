<template>
  <div>
    <form @input="submit" class="form-group">
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Case Type</label>
        <div class="d-flex align-items-center">
          <v-select
            class="select-option"
            ref="select"
            v-model="formCase.selectedCase"
            :options="selectCaseType"
            placeholder="Select"
            :class="{
              'input-invalid': $v.formCase.selectedCase.$error,
              'input-valid': !$v.formCase.selectedCase.$invalid
            }"
          ></v-select>
          <font-awesome-icon
            v-if="!$v.formCase.selectedCase.$invalid"
            class="pl-2 icon-valid"
            :icon="['fas', 'check-circle']"
          />
        </div>
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
        <div class="d-flex align-items-center">
          <v-select
            class="select-option"
            ref="select"
            v-model="formCase.selectedBusinessUnit"
            :options="selectBusinessUnit"
            placeholder="Select"
            :class="{
              'input-invalid': $v.formCase.selectedBusinessUnit.$error,
              'input-valid': !$v.formCase.selectedBusinessUnit.$invalid
            }"
          ></v-select>
          <font-awesome-icon
            v-if="!$v.formCase.selectedBusinessUnit.$invalid"
            class="pl-2 icon-valid"
            :icon="['fas', 'check-circle']"
          />
        </div>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Status</label>
        <div class="d-flex align-items-center">
          <v-select
            class="select-option"
            ref="select"
            v-model="formCase.selectedStatus"
            :options="selectStatus"
            placeholder="Select"
            :class="{
              'input-invalid': $v.formCase.selectedStatus.$error,
              'input-valid': !$v.formCase.selectedStatus.$invalid
            }"
          ></v-select>
          <font-awesome-icon
            v-if="!$v.formCase.selectedStatus.$invalid"
            class="pl-2 icon-valid"
            :icon="['fas', 'check-circle']"
          />
        </div>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Description</label>
        <div class="d-flex align-items-center">
          <textarea
            v-model="formCase.description"
            class="input"
            rows="5"
            cols="100"
            :class="{
              'input-invalid': $v.formCase.description.$error,
              'input-valid': !$v.formCase.description.$invalid
            }"
            placeholder="What the task is about?"
          ></textarea>
          <font-awesome-icon
            v-if="!$v.formCase.description.$invalid"
            class="pl-2 icon-valid"
            :icon="['fas', 'check-circle']"
          />
        </div>
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
        description: null,
        selectedCase: null,
        selectedStatus: null,
        selectedBusinessUnit: null
      },
      selectCaseType: ["Test 1", "Test 2", "Test 3"],
      selectStatus: ["Active", "Inactive"],
      selectBusinessUnit: ["Test Unit 1", "Test Unit 2", "Test Unit 3"]
    };
  },
  validations: {
    formCase: {
      followUpDate: {
        required
      },
      selectedCase: {
        required
      },
      selectedBusinessUnit: {
        required
      },
      selectedStatus: {
        required
      },
      description: {
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
            description: this.formCase.description,
            selectedCase: this.formCase.selectedCase,
            selectedStatus: this.formCase.selectedStatus,
            selectedBusinessUnit: this.formCase.selectedBusinessUnit
          }
        },
        valid: !this.$v.$invalid
      });
    }
  }
};
</script>

<style></style>
