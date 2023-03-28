import { createRouter, createWebHistory } from 'vue-router';

const Page = () => import('./../views/Page.vue');
const SignUpForm = () => import('./../components/SignUpForm/SignUpForm.vue');
const UsersList = () => import('./../components/UsersList/UsersList.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '',
      component: Page,
      children: [
        {
          path: 'users',
          component: UsersList
        },
        {
          path: 'sign-up',
          component: SignUpForm
        }
      ]
    }
   ]
})

export default router
