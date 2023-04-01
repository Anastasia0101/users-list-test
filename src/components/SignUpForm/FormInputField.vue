<template>
  <div class="field">
    <Input 
      :id="id"
      :type="type"
      :name="name"
      :value="inputedValue"
      @input="handleChange"
      class="field__input"
      :class="{ invalid: !!errorMessage }"
    />

    <label 
      :for="id" 
      class="field__label" 
      :class="{ error: !!errorMessage }"
    >{{ labelText }}</label>

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
  position: relative

.field__label
  @include base-text
  color: #7E7E7E
  line-height: unset
  position: absolute
  top: 14px
  left: 16px
  transition: all .3s ease-in-out

.field__input 
  border: 1px solid $borderInputColor
  border-radius: 4px
  width: 380px
  padding: 14px 16px
  &:focus + .field__label,
  &:not(:placeholder-shown) + .field__label
    top: -7px
    left: 13px
    font-size: 12px
    line-height: 14px
    background-color: $backgroundColor
    padding: 0 4px
    
.field__hint
  margin: 0 16px
  @include base-text
  font-size: 12px
  color: #7E7E7E

.error
  color: #CB3D40

.invalid
  border: 2px solid #CB3D40
  border-radius: 4px 
</style>