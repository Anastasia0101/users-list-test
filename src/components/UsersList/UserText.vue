<template>
  <Text class="text">
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

<style lang="sass" scoped>
@import './../../styles/__main'

.text
  @include base-text
  text-align: center

</style>