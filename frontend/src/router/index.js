import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Postings from '../views/Postings.vue';
import Admin from '../views/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/postings',
    name: 'Postings',
    component: Postings,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  }

];

const router = new VueRouter({
  routes,
});

export default router;
