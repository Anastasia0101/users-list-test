<template>
  <div class="field">
    <label :for="id" class="field__label">{{ labelText }}</label>

    <Input 
      :id="id"
      :type="type"
      :name="name"
      :value="inputedValue"
      @input="handleChange"
      :placeholder="placeholder"
      class="field__input"
      :class="{ invalid: !!errorMessage }"
    />

    <p 
      class="field__hint"
      :class="{ error: !!errorMessage }"
    > {{ errorMessage ?? inputHint }} </p>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../UI/Input.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  labelText: {
    type: String,
    required: false
  },
  inputHint: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    default: 'Write here...'
  }
});

const name = toRef(props, 'name');

const {
  value: inputedValue,
  handleChange,
  errorMessage
} = useField(name, undefined);
</script>

<style lang="sass" scoped>
@import ../../styles/__main.sass

.field
  display: flex
  flex-direction: column

.field__input 
  border: 1px solid $borderInputColor
  border-radius: 4px
  width: 380px
  padding: 14px 16px
  &::placeholder
    @include base-text

.field__hint
  margin: 0 16px
  @include base-text
  font-size: 12px

.error
  color: #CB3D40

.invalid
  border: 2px solid #CB3D40
  border-radius: 4px 
</style>