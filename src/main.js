import Vue from 'vue';
import Axios from 'axios';
import { ValidationObserver } from 'vee-validate';
import Toasted from 'vue-toasted';
//import Paginate from 'vuejs-paginate';
import App from './App.vue';
import router from '../router';

//Vue.component('paginate', Paginate);

// eslint-disable-next-line import/prefer-default-export
export const bus = new Vue();

Vue.use(Toasted, { duration: 1000 });
Vue.config.productionTip = false;
Vue.router = router;
// Vue.$route = router;
Vue.component('ValidationObserver', ValidationObserver);

Axios.defaults.baseURL = 'http://hr-api.local/api/';
const token = localStorage.getItem('token');
if (token) {
  // Axios.defaults.headers.common.Accept = 'application/json';
  Axios.defaults.headers.Authorization = `bearer ${token}`;
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth) && !localStorage.getItem('token')) {
    next({
      path: '/login',
    });
  } else if (!to.matched.some((record) => record.meta.auth) && localStorage.getItem('token') && (localStorage.getItem('admin') === 'false')) {
    next({
      path: '/user',
    });
  } else if (!to.matched.some((record) => (record.meta.admin)) && localStorage.getItem('token') && (localStorage.getItem('admin') === 'true')) {
    next({
      path: '/admin',
    });
  } else {
    next();
  }
});
Axios.interceptors.request.use((a) => {
  if (localStorage.getItem('token') && !a.headers.Authorization) {
    a.headers.common.Authorization = `bearer ${localStorage.getItem('token')}`;
  }
  return a;
}, (error) => Promise.reject(error));

Axios.interceptors.response.use((a) => a, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    Vue.router.push('/login');
  }
  return Promise.reject(error);
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
