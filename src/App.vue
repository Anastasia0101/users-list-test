<template>
  <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  <SignUpForm />
</template>

<script setup>
import UsersList from './components/UsersList/UsersList.vue';
import SignUpForm from './components/SignUpForm/SignUpForm.vue';
</script>