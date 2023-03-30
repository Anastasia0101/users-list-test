<template>
  <section class="section">
    <Title :title="'Working with GET request'" class="section__title"/>
    <Suspense>
      <template #default>
        <UsersList :numberOfUsers="numberOfUsers" @gotAllUsers="disableButton" />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <ActionButton
      :buttonText="'Show more'"
      :type="'button'"
      :isDisabled="isButtonDisabled"
      @click="increaseUsersNumber"
      class="form__button"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import UsersList from './UsersList/UsersList.vue';
import Title from './../Title.vue';
import ActionButton from './../ActionButton.vue';

const numberOfUsers = ref(6);
const isButtonDisabled = ref(false);

const increaseUsersNumber = () => numberOfUsers.value += 6;
const disableButton = () => isButtonDisabled.value = true;
</script>

<style lang="sass" scoped>
.section__title
  margin-bottom: 50px
</style>