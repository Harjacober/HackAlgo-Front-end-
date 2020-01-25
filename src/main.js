import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Toaster from './components/Toaster';
import Modal from './components/Modals/Modal';
import ProgressBar from './components/Progress';
import store from './store';
import './assets/css/tailwind.css';


// use it
Vue.use(Modal);

Vue.use(Toaster);

Vue.use(ProgressBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
