<template>
  <section class="section">
    <Title :title="'Working with POST request'" class="section__title" />
    <SignUpForm />
  </section>
</template>

<script setup>
import SignUpForm from '../../components/SignUpForm/SignUpForm.vue';
import Title from '../../components/Title.vue';
</script>

<style lang="sass" scoped>
.section__title
  margin-bottom: 50px
</style>