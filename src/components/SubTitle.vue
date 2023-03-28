<template>
  <Text class="subtitle">
    text
  </Text>
</template>

<script setup>
import Text from './UI/Text.vue';

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="sass" scoped>
@import './../styles/__main'

.subtitle
  @include base-text
  text-align: center
  color: #FFFFFF
</style>