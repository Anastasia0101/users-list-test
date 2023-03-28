<template>
  <Text>
    {{ text }}
  </Text>
</template>

<script setup>
import Text from './../UI/Text.vue';
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>