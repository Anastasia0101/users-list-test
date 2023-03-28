<template>
  <p>{{ user.name }}</p>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>