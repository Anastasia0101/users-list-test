import { createRouter, createWebHistory } from 'vue-router';

const Page = () => import('./../views/Page/Page.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }
  },
  routes: [ 
    {
      path: '',
      component: Page
    }
   ]
})

export default router
