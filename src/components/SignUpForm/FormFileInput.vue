<template>
  <Input 
    :id="'fileInput'" 
    :type="'file'" 
    :name="name" 
    :accept="'image/jpg, image/jpeg'"
    @change="handleChange"
  />
</template>

<script setup>
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../UI/Input.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const name = toRef(props, 'name');
const { handleChange } = useField(name, undefined);
</script>