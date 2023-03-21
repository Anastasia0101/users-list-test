<template>
    <BaseButton type="'submit'" :isDisabled="isDisabled">
      {{ buttonText }}
    </BaseButton>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';

defineProps({
  buttonText: {
    type: String,
    required: false
  },
  isDisabled: {
    type: Boolean,
    required: false
  }
});
</script>