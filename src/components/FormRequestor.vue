<template>
  <div>
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
        class="input"
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
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "FormRequestor",
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

<style></style>
