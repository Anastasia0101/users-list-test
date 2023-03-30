<template>
  <section class="section">
    <div class="section__content content">
      <Title 
        :title="'Test assignment for front-end developer'"
        :level="1"
        class="content__title" 
      />
      <SubTitle :text="subtitle" class="content__subtitle"/>
      <LinkButton :path="'#sign-up'" :link-name="'Sign up'" class="content__button"/>
    </div>
  </section>
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

<style lang="sass" scoped>
@import './../../styles/__main'

.section
  background-image: url("../../assets/images/background.jpg")
  background-repeat: no-repeat
  width: 100%
  height: 650px
  display: flex
  justify-content: center
  align-items: center
  padding: 16px

.section__content
  max-width: 380px
  width: 100%

.content__title
  color: #FFFFFF
  margin-bottom: 21px

.content__subtitle
  margin-bottom: 32px

.content__button
  display: block
  margin: 0 auto

</style>