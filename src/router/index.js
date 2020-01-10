import Vue from 'vue';
import VueRouter from 'vue-router';
import { Login, Register, Reset } from '../views/Auth';

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

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;
