<template>
  <UserPhoto :photo-url="user.photo" alt-text="'User Photo'" />
</template>

<script setup>
import UserPhoto from './UserPhoto.vue';

defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>