<template>
  <Text class="subtitle">
    What defines a good front-end developer is one that has skilled 
    knowledge of HTML, CSS, JS with a vast understanding of User design 
    thinking as they'll be building web interfaces with accessibility in mind. 
    They should also be excited to learn, as the world of Front-End Development 
    keeps evolving.
  </Text>
</template>

<script setup>
import Text from './UI/Text.vue';
</script>

<style lang="sass" scoped>
@import './../styles/__main'

.subtitle
  @include base-text
  text-align: center
  color: #FFFFFF
</style>