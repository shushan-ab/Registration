import Vue from 'vue';
import Axios from 'axios';
import { ValidationObserver } from 'vee-validate';
import App from './App.vue';
import router from '../router';

// eslint-disable-next-line import/prefer-default-export
export const bus = new Vue();


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
  console.log('user', (!to.matched.some((record) => record.meta.auth) && localStorage.getItem('token') && !!JSON.stringify(localStorage.getItem('admin'))));
  console.log('admin', (!to.matched.some((record) => (record.meta.admin))));
  console.log('admin', (localStorage.getItem('token')));
  console.log('admin', (JSON.stringify(localStorage.getItem('admin'))));
  if (to.matched.some((record) => record.meta.auth) && !localStorage.getItem('token')) {
    next({
      path: 'login',
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
