<template>
  <text level="2" class="title">
    {{ title }}
  </text>
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