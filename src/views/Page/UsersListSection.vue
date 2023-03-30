<template>
  <section class="section">
    <Title :title="'Working with GET request'" class="section__title"/>
    <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <ActionButton
      :buttonText="'Show more'"
      :type="'submit'"
      class="form__button"
    />
  </section>
</template>

<script setup>
import UsersList from '../../components/UsersList/UsersList.vue';
import Title from '../../components/Title.vue';
import ActionButton from './../../components/ActionButton.vue';
</script>

<style lang="sass" scoped>
.section__title
  margin-bottom: 50px
</style>