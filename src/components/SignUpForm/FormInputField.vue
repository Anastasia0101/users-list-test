<template>
  <label :for="id">{{ labelText }}</label>

  <Input 
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    class="input"
  />

  <p> {{ errorMessage }} </p>
</template>

<script setup>
import Input from '../UI/Input.vue';

defineProps({
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
  errorMessage: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    default: 'Write here...'
  }
});
</script>

<style lang="sass" scoped>
// @import '../../styles/_main'
.input
  background-color: $backgroundColor
</style>