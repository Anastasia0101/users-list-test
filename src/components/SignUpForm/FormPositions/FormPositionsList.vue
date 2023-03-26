<template>
  <div class="positions-list">
    <h3 class="positions-list__title">Select your position</h3>
    <ul class="positions-list__list list">
      <li v-for="position in positions" :key="position.id" class="list__item">
        <FormPositionsItem
          :name="name"
          :position="position"
        />
      </li>
    </ul>
  </div>
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

.positions-list__title
  @include base-text
  margin-top: 25px

</style>