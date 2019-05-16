import Vue from 'vue'
import Router from 'vue-router'

import routeNames from './routeNames';
import Home from '@/views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: routeNames.HOME,
      component: Home
    },
  ]
})