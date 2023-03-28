<template>
  <header class="header"></header>
  <div class="main">
    <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <SignUpForm />
  </div>
</template>

<script setup>
import UsersList from './components/UsersList/UsersList.vue';
import SignUpForm from './components/SignUpForm/SignUpForm.vue';
</script>

<style lang="sass" scoped>
@import './styles/__main'
.main
  background-color: $backgroundColor
</style>