<template>
  <h3 class="title">Select your position</h3>
  <ul class="list">
    <li v-for="position in positions" :key="position.id" class="list__item">
      <FormPositionsItem
        :name="name"
        :position="position"
      />
    </li>
  </ul>
</template>

<script setup>
import FormPositionsItem from './FormPositionsItem.vue';

const urlPositions = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const positions = await fetch(urlPositions)
  .then(response => response.json())
  .then(response => response.positions);
</script>

<style lang="sass" scoped>
@import './../../../styles/__main.sass'

.title
  @include base-text
</style>