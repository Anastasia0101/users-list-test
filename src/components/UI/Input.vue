<template>
  <input 
    :id="id" 
    :type="type" 
    :name="name" 
    :placeholder="placeholder" 
  />
</template>

<script setup>

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
  placeholder: {
    type: String,
    default: 'Write here...'
  }
});
</script>
