<template>
  <section class="section">
    <Title :title="'Working with POST request'" class="section__title" />
    <SignUpForm class="section__form" />
  </section>
</template>

<script setup>
import SignUpForm from '../../components/SignUpForm/SignUpForm.vue';
import Title from '../../components/Title.vue';
</script>

<style lang="sass" scoped>
.section__title
  margin-bottom: 50px

.section__form
  max-width: 380px
  width: 100%
  margin: 0 auto
</style>