<template>
  <Image :url="photoUrl" :altText="altText" />
</template>

<script setup>
import Image from './../UI/Image.vue';

defineProps({
  photoUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  }
});
</script>