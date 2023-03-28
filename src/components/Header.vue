<template>
  <header class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <nav class="header__nav nav">
      <router-link to="/#users" class="nav__link">Users</router-link>
      <router-link to="/#sign-up" class="nav__link">Sign up</router-link>
    </nav>
  </header>
</template>

<script setup>
import Logo from './../assets/images/Logo.svg';
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
  @include base-text
  @extend .button
  display: inline-block
  text-align: center
  margin: 13px 0
  &:first-child
    margin-right: 10px
  &:hover
    background-color: #FFE302
</style>