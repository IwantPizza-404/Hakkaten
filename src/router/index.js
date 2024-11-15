import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/Main.vue';
import NotFound from '../views/404.vue';
import LoginPage from '../views/Login.vue';
import RegisterPage from '../views/Register.vue';
import CreatePost from '../views/CreatePost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: { requiresAuth: true, showUI: true },
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      meta: { guestOnly: true },
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: { guestOnly: true },
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: CreatePost,
      meta: { requiresAuth: true },
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
});

// Навигационный guard для проверки авторизации
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isAuthenticated) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;