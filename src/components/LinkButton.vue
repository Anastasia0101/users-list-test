<template>
  <Link :path="path" class="link" :linkName="linkName"/>
</template>

<script setup>
import Link from './UI/Link.vue';

defineProps({
  path: {
    type: String,
    required: true
  },
  linkName: {
    type: String,
    required: true
  }
});
</script>

<style lang="sass" scoped>
@import './../styles/__main'

.link
  @extend .button
  @include base-text
  text-align: center
  display: inline-block
  &:hover
    background-color: #FFE302
</style>