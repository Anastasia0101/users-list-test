<template>
  <Text level="2" class="title">
    {{ title }}
  </Text>
</template>

<script setup>
import Text from './UI/Text.vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style lang="sass" scoped>
@import './../styles/__main'

.title
  @include heading-text
  text-align: center
  
</style>