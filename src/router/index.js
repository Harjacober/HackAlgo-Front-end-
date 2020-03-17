import Vue from 'vue';
import VueRouter from 'vue-router';
import { Login, Register, Recover, Verify, ResetPassword } from '@/views/Auth';
import { Contests, ScoreBoard, ContestInformation, ContestDashboard, ContestProblem, Submission } from '@/views/Contest';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Profile from '@/views/Profile/Profile.vue';
import { BasicInformation, ChangePassword } from '@/views/Settings';
import { Problem, ProblemSet } from '@/views/Problem';
import { isAuthenticated } from '../helpers/auth';

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
    path: '/verify',
    name: 'verify',
    component: Verify,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/recover-password',
    name: 'recover-password',
    component: Recover,
  },
  {
    path: '/reset-password/:email/:id',
    name: 'reset-password',
    component: ResetPassword,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/basic-information',
    name: 'basic-information',
    component: BasicInformation,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/change-password',
    name: 'change-password',
    component: ChangePassword,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    name: 'settings',
    redirect: '/settings/basic-information',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests',
    name: 'contests',
    component: Contests,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests/:slug',
    name: 'contest-information',
    component: ContestInformation,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests/:slug/dashboard',
    name: 'contest-dashboard',
    component: ContestDashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests/:slug/dashboard/:problem_slug/solve',
    name: 'contest-problem',
    component: ContestProblem,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests/:slug/submission',
    name: 'contest-submission',
    component: Submission,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/contests/:slug/scoreboard',
    name: 'contest',
    component: ScoreBoard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/problem-set',
    name: 'problem-set',
    component: ProblemSet,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/problem-set/:slug/solve',
    name: 'problem',
    component: Problem,
    meta: {
      requiresAuth: true,
    },
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
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = isAuthenticated();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // console.log(currentUser);
  if (requiresAuth && !currentUser) return next('login');
  if (!requiresAuth && currentUser) return next('dashboard');
  return next();
});

export default router;
