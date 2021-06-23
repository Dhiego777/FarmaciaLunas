import { createRouter, createWebHashHistory } from 'vue-router'

//Telas
import dashBoard from '../pages/dashBoard.vue'
import CadastroCliente from '../pages/CadastroCliente.vue'
import Produtos from '../pages/Produtos.vue'
import Clientes from '../pages/Clientes.vue'
import EditarCliente from '../pages/EditarCliente.vue'

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: dashBoard,
    // redirect:'/batata',
  },
  {
    path: '/Clientes',
    name: 'Clientes',
    component: Clientes, 
  },
  {
    path: '/CadastroCliente',
    name: 'CadastroCliente',
    component: CadastroCliente, 
  },
  {
    path: '/Clientes/EditarCliente',
    name: 'EditarCliente',
    component: EditarCliente, 
  },
  {
    path: '/Produtos',
    name: 'Produtos',
    component: Produtos, 
  },
  // {
  //   path: '/AmbienteDispensacao',
  //   name: 'AmbienteDispensacao',
  //   component: ambienteDispensacao,
  // },
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
