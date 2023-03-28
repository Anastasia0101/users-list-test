<template>
  <ul class="list">
    <li v-for="user in users" :key="user.id" class="list__item">
      <UsersListItem :user="user" />
    </li>
  </ul>
</template>

<script setup>
import UsersListItem from './UsersListItem.vue';

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?';
const parameters = `page=${1}&count=${6}`;

const users = await fetch(url + parameters)
  .then(response => response.json())
  .then(result => result.users);
</script>

<style lang="sass" scoped>

.list
  display: flex
  justify-content: center
  flex-flow: row wrap
  gap: 29px

.list__item
  max-width: 370px
  width: 33%
  padding: 20px
  flex-grow: 1
  background-color: #FFFFFF
  border-radius: 10px
</style>