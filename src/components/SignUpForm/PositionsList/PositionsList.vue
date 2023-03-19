<template>
  <ul>
    <li v-for="position in positions" :key="position.id">
      <PositionItem
        :name="name"
        :position="position"
      />
    </li>
  </ul>
</template>

<script setup>
import PositionItem from './PositionItem.vue';

const positions = [
  { position: 'front-end developer', id: 1 },
  { position: 'QA', id: 2 },
  { position: 'QA', id: 3 }
];

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>