<template>
  <div>
    <form @input="submit" class="form-group">
      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Name</label>
        <v-select
          class="select-option"
          ref="select"
          placeholder="Select"
        ></v-select>
      </div>

      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Email</label>
        <input
          class="input"
          type="text"
          placeholder="example@email.com"
          v-model="$v.formVendor.email.$model"
          :class="{
            'input-invalid': $v.formVendor.email.$error,
            'input-valid': !$v.formVendor.email.$invalid
          }"
        />

        <!-- <p>
        Invalid: {{ $v.form.email.$invalid }} | Dirty:
        {{ $v.form.email.$dirty }} | Error: {{ $v.form.email.$error }}
      </p> -->
        <font-awesome-icon
          v-if="!$v.formVendor.email.$invalid"
          class="pl-2 icon-valid"
          :icon="['fas', 'check-circle']"
        />
        <font-awesome-icon
          v-if="$v.formVendor.email.$error"
          class="pl-2 icon-invalid"
          :icon="['fas', 'exclamation-circle']"
        />
        <div
          v-if="$v.formVendor.email.$error && !$v.formVendor.email.required"
          class="error-message pt-1"
        >
          Email is required
        </div>
        <div
          v-if="$v.formVendor.email.$error && !$v.formVendor.email.email"
          class="error-message pt-1"
        >
          Check if provided e-mail is correct
        </div>
      </div>

      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Phone</label>
        <input class="input input-md" type="tel" />
      </div>

      <div class="input-wrapper">
        <label class="label pb-1 pl-1">VAT</label>
        <input class="input input-sm" type="tel" />
      </div>

      <div class="input-wrapper">
        <label class="label pb-1 pl-1">Company Code</label>
        <v-select
          class="select-option input-xs"
          ref="select"
          placeholder="Select"
        ></v-select>
      </div>
      <div class="input-group d-flex">
        <div class="input-wrapper">
          <label class="label pb-1 pl-1">Parma</label>
          <input class="input input-xs" type="tel" />
        </div>
        <div class="input-wrapper ml-6">
          <label class="label pb-1 pl-1">Used by</label>
          <input
            class="input input-xs input-disabled"
            placeholder="NAP"
            disabled
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "FormVendor",
  data: function() {
    return {
      formVendor: {
        email: null
      }
    };
  },
  validations: {
    formVendor: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          formVendor: {
            email: this.formVendor.email
          }
        },
        valid: !this.$v.$invalid
      });
    }
  }
};
</script>

<style></style>
