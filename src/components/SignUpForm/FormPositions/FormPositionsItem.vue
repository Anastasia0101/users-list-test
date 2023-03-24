<template>
  <div class="radio">
    <Input 
      :id="`position${position.id}`" 
      :type="'radio'" 
      :name="name" 
      @change="handleChange(position.id)"
        class="radio__input"
      />
    <label :for="`position${position.id}`" class="radio__label">{{ position.name }}</label>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { toRef } from 'vue';

import Input from '../../UI/Input.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Object,
    required: true
  }
});

const name = toRef(props, "name");

const { handleChange } = useField(name, undefined);
</script>

<style lang="sass" scoped>
@import './../../../styles/__main'
.radio
  display: block
  text-align: left
  margin-top: 13px

.radio__input
  display: none
  &+.radio__label
    @include base-text
    line-height: 20px
    display: inline-block
    position: relative
    padding-left: 30px
    &:before
      content: ''
      display: block
      position: absolute
      top: 0px
      left: 0px
      border-radius: 50%
      margin-right: 5px
      width: 20px
      height: 20px
      border: 1px solid #00BDD3
    &:after
      content: ''
      display: block
      width: 10px
      height: 10px
      background: #00BDD3
      position: absolute
      border-radius: 50%
      top: 5px
      left: 5px
      opacity: 0
    &:hover
      cursor: pointer
  &:checked+.radio__label:after
    opacity: 1
</style>