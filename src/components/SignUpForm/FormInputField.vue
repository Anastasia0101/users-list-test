<template>
  <label :for="id">{{ labelText }}</label>

  <Input 
    :id="id"
    :type="type"
    :name="name"
    :value="inputedValue"
    @input="handleChange"
    :placeholder="placeholder"
    class="input"
  />

  <p> {{ errorMessage }} </p>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../UI/Input.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  labelText: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    default: 'Write here...'
  }
});

const name = toRef(props, 'name');

const {
  value: inputedValue,
  handleChange,
  errorMessage
} = useField(name, undefined);
</script>

<style lang="sass" scoped>

</style>