import { createRouter, createWebHashHistory } from 'vue-router'

//Telas
import dashBoard from '../pages/dashBoard.vue'
import Clientes from '../pages/User/Clientes.vue'
import CadastroCliente from '../pages/User/CadastroCliente.vue'
import EditarCliente from '../pages/User/EditarCliente.vue'
import Produtos from '../pages/Product/Produtos.vue'
import CadastroProduto from '../pages/Product/CadastroProduto.vue'
import EditarProduto from '../pages/Product/EditarProduto.vue'


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
  {
    path: '/CadastroProduto',
    name: 'CadastroProduto',
    component: CadastroProduto, 
  },
  {
    path: '/Produtos/EditarProduto',
    name: 'EditarProduto',
    component: EditarProduto, 
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
