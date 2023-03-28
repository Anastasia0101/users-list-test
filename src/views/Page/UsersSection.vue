<template>
  <section>
    <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import UsersList from '../../components/UsersList/UsersList.vue';
</script>