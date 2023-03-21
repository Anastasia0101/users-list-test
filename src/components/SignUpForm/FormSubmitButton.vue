<template>
    <BaseButton :type="submit">
      {{ buttonText }}
    </BaseButton>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';

defineProps({
  buttonText: {
    type: String,
    required: false
  }
});
</script>