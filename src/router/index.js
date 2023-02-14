// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue';
import SignUpView from '@/views/SignUp.vue';
import SearchView from '@/views/Search.vue';
import NotificationsView from '@/views/Notifications.vue';
import AccountView from '@/views/Account.vue';

function guardMyroute(to, from, next) {
  if (localStorage.getItem('publickey')) {
    next();
  } else {
    next('/login');
  }
}

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
        beforeEnter: guardMyroute,
      },
      {
        path: '/login',
        name: 'Login',
        component: LoginView,
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView,
      },
      {
        path: '/logout',
        name: 'Logout',
        beforeEnter(to, from, next) {
          localStorage.removeItem('publickey');
          next('/login');
        }
      },
      {
        path: '/search',
        name: 'Search',
        component: SearchView,
        beforeEnter: guardMyroute,
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: NotificationsView,
        beforeEnter: guardMyroute,
      },
      {
        path: '/account',
        name: 'Account',
        component: AccountView,
        beforeEnter: guardMyroute,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
