<template>
  <Header />
  <div class="main">
    <Suspense>
      <template #default>
        <UsersList id="users" />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <Title :title="'Working with POST request'" />
    <SignUpForm id="sign-up" />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import UsersList from './../components/UsersList/UsersList.vue';
import SignUpForm from './../components/SignUpForm/SignUpForm.vue';
import Title from './../components/Title.vue';
</script>

<style lang="sass" scoped>
@import './../styles/__main'
.main
  background-color: $backgroundColor
</style>