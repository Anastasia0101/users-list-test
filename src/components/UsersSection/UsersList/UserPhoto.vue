<template>
  <Image :url="photoUrl" :altText="altText" class="image" />
</template>

<script setup>
import Image from './../../UI/Image.vue';

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

<style lang="sass" scoped>
.image
  width: 70px
  height: 70px
  border-radius: 50%

</style>