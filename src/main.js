import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Toaster from './components/Toaster';
import Dialog from './components/Dialogs/Dialog';
import ProgressBar from './components/Progress';
import store from './store';
import './assets/css/tailwind.css';


// use it
Vue.use(Dialog);

Vue.use(Toaster);

Vue.use(ProgressBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
