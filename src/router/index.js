import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroProducts from '@/views/CadastroProducts.vue'
import CadastroUsers from '@/views/CadastroUsers.vue'
import ListProducts from '@/views/ListProducts.vue'
const routes = [
  {
    path: '/',
    name: 'CadastroUsers',
    component: CadastroUsers
  },
  {
    path: '/CadastroProducts',
    name: 'CadastroProducts',
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
  },
  {
    path: '/ListProducts',
    name: 'ListProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ListProducts" */ '../views/ListProducts.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
