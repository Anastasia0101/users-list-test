<template>
  <Title 
    :title="'Test assignment for front - end developer'"
    :level="1"
    class="section__title" 
  />
  <SubTitle :text="subtitle"/>
  <LinkButton :path="'#sign-up'" :link-name="'Sign up'"/>
</template>

<script setup>
import Title from './../../components/Title.vue';
import SubTitle from '../../components/SubTitle.vue';
import LinkButton from '../../components/LinkButton.vue';

const subtitle = `
  What defines a good front-end developer is one that has skilled  
  knowledge of HTML, CSS, JS with a vast understanding of User design
  thinking as they'll be building web interfaces with accessibility in mind. 
  They should also be excited to learn, as the world of Front - End Development 
  keeps evolving.
`;
</script>