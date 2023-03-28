<template>
    <BaseButton type="'submit'" :isDisabled="isDisabled" class="button">
      {{ buttonText }}
    </BaseButton>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';

defineProps({
  buttonText: {
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
@import './../../styles/__main'

.button
  @include base-text
  @extend .button
  // padding: 4px 22px
  // border-radius: 80px
  // background-color: $primaryColor
  // &:enabled:hover
  //   background-color: #FFE302
  //   cursor: pointer
  // &:disabled
  //   background-color: #B4B4B4
  //   color: #FFFFFF

</style>