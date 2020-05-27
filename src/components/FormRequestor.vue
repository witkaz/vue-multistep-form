<template>
  <div>
    <div class="form-group">
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Contact Person</label>
        <input class="input" type="tel" placeholder="Name and Surname" />
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Phone</label>
        <input class="input input-md" type="tel" />
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Email</label>
        <input
          class="input input-md"
          type="text"
          placeholder="example@email.com"
          v-model="$v.form.email.$model"
          :class="{
            'input-invalid': $v.form.email.$error,
            'input-valid': !$v.form.email.$invalid
          }"
        />

        <!-- <p>
        Invalid: {{ $v.form.email.$invalid }} | Dirty:
        {{ $v.form.email.$dirty }} | Error: {{ $v.form.email.$error }}
      </p> -->
        <font-awesome-icon
          v-if="!$v.form.email.$invalid"
          class="pl-2 icon-valid"
          :icon="['fas', 'check-circle']"
        />
        <font-awesome-icon
          v-if="$v.form.email.$error"
          class="pl-2 icon-invalid"
          :icon="['fas', 'exclamation-circle']"
        />
        <div
          v-if="$v.form.email.$error && !$v.form.email.required"
          class="error-message pt-1"
        >
          Email is required
        </div>
        <div
          v-if="$v.form.email.$error && !$v.form.email.email"
          class="error-message pt-1"
        >
          Check if provided e-mail is correct
        </div>
        <div class="d-flex">
          <p style="font-size: 12px" class="mt-2 mr-3">Email notification</p>
          <BaseBtnSwitcher>
            <template v-slot:first-option>Yes</template>
            <template v-slot:second-option>No</template>
          </BaseBtnSwitcher>
        </div>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Source</label>
        <v-select
          class="select-option input-md"
          ref="select"
          placeholder="Select"
        ></v-select>
      </div>
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Preffered Language</label>
        <v-select
          class="select-option input-md"
          ref="select"
          placeholder="Select"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBtnSwitcher from "@/components/BaseBtnSwitcher";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "FormRequestor",
  components: {
    BaseBtnSwitcher
  },
  data: function() {
    return {
      form: {
        email: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-switcher {
  margin-top: 10px;
}
</style>
