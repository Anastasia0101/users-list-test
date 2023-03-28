<template>
  <Header />
  <main class="main">
    <HomeSection class="main__section" />
    <UsersSection class="main__section" id="users" />
    <SignUpSection class="main__section" id="sign-up"/>
  </main>
</template>

<script setup>
import Header from '../../components/Header.vue';
import UsersSection from './UsersSection.vue';
import SignUpSection from './SignUpSection.vue';
import HomeSection from './HomeSection.vue';
</script>

<style lang="sass" scoped>
@import './../../styles/__main'
.main
  background-color: $backgroundColor

.main__section
  max-width: 1170px
  width: 100%
  margin: 0 auto 140px
</style>