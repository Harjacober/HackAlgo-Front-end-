import Vue from 'vue';
import VueRouter from 'vue-router';
import { Login, Register, Recover, ChangePassword } from '@/views/Auth';
import { Contests, ScoreBoard, ContestInformation, ContestDashboard, ContestProblem, Submission } from '@/views/Contest';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Profile from '@/views/Profile/Profile.vue';
import { BasicInformation, ChangePassword as ChangeSettingsPassword } from '@/views/Settings';
import { Problem, ProblemSet } from '@/views/Problem';

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
    path: '/recover-password',
    name: 'recover-password',
    component: Recover,
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePassword,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/settings/basic-information',
    name: 'basic-information',
    component: BasicInformation,
  },
  {
    path: '/settings/change-password',
    name: 'change-settings-password',
    component: ChangeSettingsPassword,
  },
  {
    path: '/settings',
    name: 'settings',
    redirect: '/settings/basic-information',
  },
  {
    path: '/Profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/contests',
    name: 'contests',
    component: Contests,
  },
  {
    path: '/contests/:slug',
    name: 'contest-information',
    component: ContestInformation,
  },
  {
    path: '/contests/:slug/dashboard',
    name: 'contest-dashboard',
    component: ContestDashboard,
  },
  {
    path: '/contests/:slug/dashboard/:problem_slug/solve',
    name: 'contest-problem',
    component: ContestProblem,
  },
  {
    path: '/contests/:slug/submission',
    name: 'contest-submission',
    component: Submission,
  },
  {
    path: '/contests/:slug/scoreboard',
    name: 'contest',
    component: ScoreBoard,
  },
  {
    path: '/problem-set',
    name: 'problem-set',
    component: ProblemSet,
  },
  {
    path: '/problem-set/:slug/solve',
    name: 'problem',
    component: Problem,
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
export default router;
