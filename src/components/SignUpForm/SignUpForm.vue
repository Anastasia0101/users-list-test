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

    <FormPositions name="position"/>

    <FormFileInput name="photo" />
  </form>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import FormInputField from './FormInputField.vue';
import FormPositions from './FormPositions/FormPositions.vue';
import FormFileInput from './FormFileInput.vue';

const formSchema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  phone: yup.string().trim().required().matches(/^[+]{0,1}380([0-9]{9})$/),
  position: yup.string().required(),
  photo: yup.string().required()
});

useForm({
  validationSchema: formSchema
});
</script>