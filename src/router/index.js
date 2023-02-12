// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/login',
        name: 'Login',
        component: LoginView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
