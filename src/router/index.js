import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroProducts from '@/views/CadastroProducts.vue'
import CadastroUsers from '@/views/CadastroUsers.vue'
const routes = [
  {
    path: '/',
    name: 'CadastroUsers',
    component: CadastroUsers
  },
  {
    path: '/CadastroProducts',
    name: 'cadastroProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cadastroProducts" */ '../views/CadastroProducts.vue')
  },
  {
    path: '/pdv',
    name: 'pdv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pdv.vue')
  },
  {
    path: '/cadastroUsers',
    name: 'cadastroUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cadastroUsers" */ '../views/CadastroUsers.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
