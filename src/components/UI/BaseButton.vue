<template>
  <button :type="buttonType" :disabled="isDisabled" class="button">
    <slot />
  </button>
</template>

<script setup>

defineProps({
  buttonType: {
    type: String,
    required: false
  },
  isDisabled: {
    type: Boolean,
    required: false
  }
});

const buttonType = () => type ?? 'button';
</script>

<style lang="sass" scoped>
.button
  &:hover
    cursor: default
</style>