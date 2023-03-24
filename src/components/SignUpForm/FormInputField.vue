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
    />

    <p v-if="isShowHint">{{ phoneHint }}</p>
    <p class="field__error"> {{ errorMessage }} </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../UI/Input.vue';

const phoneHint = '+38(XXX)XXX-XX-XX';

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

const isShowHint = computed(() => name.value === 'phone' ? true : false);
</script>

<style lang="sass" scoped>
@import ../../styles/__main.sass
.field__input 
  border: 1px solid $borderInputColor
  border-radius: 4px
  width: 380px
  padding: 14px 16px
  &::placeholder
    @include base-text
</style>