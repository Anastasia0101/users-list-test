<template>
  <form>
    <FormInputField 
      :id="'name'"
      :type="'text'"
      :name="'name'"
      :labelText="'Name'"
      :errorMessage="'errorMessage'"
      :placeholder="'Write name...'"
    />
  </form>
</template>

<script setup>
import FormInputField from './FormInputField.vue';
</script>