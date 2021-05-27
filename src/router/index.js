import { createRouter, createWebHashHistory } from 'vue-router'

import dashBoard from '../pages/dashBoard.vue'
import ambienteDispensacao from '../pages/ambienteDispensacao'

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: dashBoard,
    // redirect:'/batata',
  },
  {
    path: '/AmbienteDispensacao',
    name: 'AmbienteDispensacao',
    component: ambienteDispensacao,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../pages/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
