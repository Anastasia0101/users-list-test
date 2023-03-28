<template>
  <section>
    <Title :title="'Working with GET request'" />
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
import Title from '../../components/Title.vue';
</script>