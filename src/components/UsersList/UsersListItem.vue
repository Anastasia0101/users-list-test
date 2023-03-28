<template>
  <div class="user">
    <UserPhoto :photo-url="user.photo" alt-text="'User Photo'" class="user__photo" />
    <UserText :text="user.name" class="user__text user__text--separately" />
    <UserText :text="user.position" class="user__text" />
    <UserText :text="user.email" class="user__text" />
    <UserText :text="user.phone" class="user__text" />
  </div>
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

<style lang="sass" scoped>

.user__photo
  display: block
  margin: 0 auto

.user__text--separately
  margin: 20px 0

</style>