<template>
  <UserPhoto :photo-url="user.photo" alt-text="'User Photo'" />
  <UserText :text="user.name" />
  <UserText :text="user.position" />
  <UserText :text="user.email" />
  <UserText :text="user.phone" />
</template>

<script setup>
import UserPhoto from './UserPhoto.vue';
import UserText from './UserText.vue';

defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>