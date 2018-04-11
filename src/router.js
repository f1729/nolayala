import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';
import Allow from './views/Allow.vue';
import Album from './views/Album.vue';
import Repetidas from './views/Repetidas.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/allow',
      name: 'allow',
      component: Allow,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/repetidas',
      name: 'Repetidas',
      component: Repetidas,
    },
    {
      path: '/album',
      name: 'Album',
      component: Album,
    },
  ],
});
