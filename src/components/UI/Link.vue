<template>
  <router-link :to="`/${path}`">{{ linkName }}</router-link>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true
  },
  linkName: {
    type: String,
    required: true
  }
});
</script>
