import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Popular from '../views/Popular.vue'
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
})

export default router