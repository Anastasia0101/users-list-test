<template>
  <img :src="url" :alt="altText">
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  }
});
</script>
