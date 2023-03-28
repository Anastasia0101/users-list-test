<template>
  <header class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <nav class="header__nav nav">
      <LinkButton :path="'#users'" class="nav__link" :linkName="'Users'"/>
      <LinkButton :path="'#sign-up'" class="nav__link" :linkName="'Sign up'"/>
    </nav>
  </header>
</template>

<script setup>
import Logo from './../assets/images/Logo.svg';
import LinkButton from './LinkButton.vue';
</script>

<style lang="sass" scoped>
@import ./../styles/__main

.header
  max-width: 1170px
  width: 90%
  margin: 0 auto
  display: flex
  justify-content: space-between
  align-items: center

.nav__link
  margin: 13px 0
  &:first-child
    margin-right: 10px
 
</style>