<template>
  <Input 
    :id="`position${position.id}`" 
    :type="'radio'" 
    :name="name" 
    @change="handleChange(position.name)"
  />
  <label :for="`${position.id}`">{{ position.name }}</label>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../../UI/Input.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Object,
    required: true
  }
});

const name = toRef(props, "name");

const { handleChange } = useField(name, undefined);
</script>