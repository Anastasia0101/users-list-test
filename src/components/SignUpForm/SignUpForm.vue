<template>
  <form>
    <FormInputField 
      id="name"
      :type="'text'"
      name="name"
      :labelText="'Name'"
      :placeholder="'Write name...'"
    />

    <FormInputField 
      id="email"
      :type="'email'"
      name="email"
      :labelText="'Email'"
      :placeholder="'Write email...'"
    />

    <FormInputField 
      id="phone"
      :type="'text'"
      name="phone"
      :labelText="'Phone'"
      :placeholder="'Write phone...'"
    />
  </form>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import FormInputField from './FormInputField.vue';

const formSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  position: yup.string().required(),
  photo: yup.string().required()
});

useForm({
  validationSchema: formSchema
});
</script>