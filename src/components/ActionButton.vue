<template>
    <BaseButton :type="type" :isDisabled="isDisabled" class="button">
      {{ buttonText }}
    </BaseButton>
</template>

<script setup>
import BaseButton from './UI/BaseButton.vue';

defineProps({
  buttonText: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  isDisabled: {
    type: Boolean,
    required: false
  }
});
</script>

<style lang="sass" scoped>
@import '../styles/__main'

.button
  @include base-text
  @extend .button
</style>