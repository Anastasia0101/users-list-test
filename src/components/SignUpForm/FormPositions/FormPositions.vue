<template>
  <Suspense>
    <template #default>
      <FormPositionsList :name="name" />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script setup>
import FormPositionsList from './FormPositionsList.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>