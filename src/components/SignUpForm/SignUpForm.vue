<template>
  <form @submit.prevent="onFormSubmit()" class="form">
    <FormInputField 
      id="name"
      :type="'text'"
      name="name"
      :labelText="'Name'"
      :placeholder="'Your name'"
      class="form__field"
    />

    <FormInputField 
      id="email"
      :type="'email'"
      name="email"
      :labelText="'Email'"
      :placeholder="'Email'"
      class="form__field"
    />

    <FormInputField 
      id="phone"
      :type="'text'"
      name="phone"
      :labelText="'Phone'"
      :input-hint="'+38(XXX)XXX-XX-XX'"
      :placeholder="'Phone'"
      class="form__field"
    />

    <FormPositions name="position"/>

    <FormFileInput name="photo" class="form__field" />

    <ActionButton
      :buttonText="'Sign up'"
      :isDisabled="!meta.valid"
      :type="'submit'"
      class="form__button"
    />
  </form>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import FormInputField from './FormInputField.vue';
import FormPositions from './FormPositions/FormPositions.vue';
import FormFileInput from './FormFileInput.vue';
import ActionButton from './../ActionButton.vue';

const formSchema = yup.object({
  name: yup.string().trim().required().label('Name'),
  email: yup.string().trim().required().email().label('Email'),
  phone: yup.string().trim().required()
    .matches(
      /^[+]{0,1}380([0-9]{2}([0-9]{7}))$/,
      '+38(XXX)XXX-XX-XX')
    .label('Phone'),
  position: yup.string().required(),
  photo: yup.string().required().default()
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

<style lang="sass" scoped>
.form__field
  margin-top: 50px

.form__button
  display: block
  margin: 50px auto 0 
</style>