<template>
  <section class="section">
    <Title :title="'Working with GET request'" class="section__title" />
    <Suspense>
      <template #default>
        <UsersList :numberOfUsers="numberOfUsers" @gotAllUsers="hideButton" class="section__list" />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <ActionButton
      :buttonText="'Show more'"
      :type="'button'"
      v-show="isDisplayButton"
      @click="increaseUsersNumber"
      class="section__button"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import UsersList from './UsersList/UsersList.vue';
import Title from './../Title.vue';
import ActionButton from './../ActionButton.vue';

const numberOfUsers = ref(6);
const isDisplayButton = ref(true);

const increaseUsersNumber = () => numberOfUsers.value += 6;
const hideButton = () => isDisplayButton.value = false;
</script>

<style lang="sass" scoped>
.section__title
  margin-bottom: 50px

.section__list
  margin-bottom: 50px

.section__button
  display: block
  margin: 0 auto
</style>