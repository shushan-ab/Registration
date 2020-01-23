import Vue from 'vue';
import Router from 'vue-router';
import Registration from '../src/components/Registration/index.vue';
import Login from '../src/components/Login/index.vue';
import Home from '../src/components/Home/index.vue';
import User from '../src/components/User/index.vue';
import Order from '../src/components/Order/index.vue';
import Admin from '../src/components/Admin/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
      meta: { guest: true, auth: false, admin: false },
    },
    {
      name: ' Signup',
      path: '/signup',
      component: Registration,
      meta: { guest: true },
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      meta: { guest: true },
    },
    {
      name: 'User',
      path: '/user',
      component: User,
      meta: { auth: true, admin: false },
    },
    {
      name: 'Order',
      path: '/order',
      component: Order,
      meta: { auth: true, admin: false },
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin,
      meta: { auth: false, admin: true },
    },
  ],
  // TODO:props
});
