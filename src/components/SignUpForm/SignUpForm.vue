<template>
  <form @submit.prevent="onFormSubmit()">
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

    <FormSubmitButton 
      :buttonText="'Sign up'"
      :isDisabled="!meta.valid"
    />
  </form>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import FormInputField from './FormInputField.vue';
import FormPositions from './FormPositions/FormPositions.vue';
import FormFileInput from './FormFileInput.vue';
import FormSubmitButton from './FormSubmitButton.vue';
import DefaultUserImage from './../../assets/images/default-user.jpg';

const formSchema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  phone: yup.string().trim().required().matches(/^[+]{0,1}380([0-9]{9})$/),
  position: yup.string().required(),
  photo: yup.string().required()
});

const { meta, values: formValues } = useForm({
  validationSchema: formSchema
});

const onFormSubmit = () => {
  const formData = new FormData();
  formData.append('name', formValues.name);
  formData.append('email', formValues.email);
  formData.append('phone', formValues.phone);
  formData.append('position_id', formValues.position);
  formData.append('photo', formValues.photo);
  signUpUser(formData);
}

async function signUpUser(formData) {
  const usersUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
  const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

  const token = await fetch(tokenUrl)
    .then(response => response.json())
    .then(result => result.token);
    
  fetch(usersUrl, {
    method: 'POST',
    headers: {
      'Token': token
    },
    body: formData
  }).then(response => console.log(response.json()));
}
</script>