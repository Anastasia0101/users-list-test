<template>
  <ul>
    <li v-for="user in users" :key="user.id">
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