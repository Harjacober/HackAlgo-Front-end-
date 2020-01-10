import Vue from 'vue';
import VueRouter from 'vue-router';
import { Login, Register, Reset } from '@/views/Auth';
import Challenges from '@/views/Challenges/Challenges.vue';
import Contests from '@/views/Contests/Contests.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Profile from '@/views/Profile/Profile.vue';
import Settings from '@/views/Settings/Setting.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: Reset,
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFound/NotFound.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;
