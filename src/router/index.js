import { createRouter, createWebHashHistory } from 'vue-router'
import CreateProduct from '@/views/CreateProduct.vue'
import ListProducts from '@/views/ListProducts.vue'
import SearchProductPdv from '@/views/SearchProductPdv.vue'
import CreateUsers from '@/views/CreateUsers.vue'
const routes = [
  {
    path: '/',
    name: 'reateProduct',
    component: CreateProduct
  },
  {
    path: '/CreateProduct',
    name: 'CreateProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cadastroProducts" */ '../views/CreateProduct.vue')
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
    path: '/ListProducts',
    name: 'ListProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ListProducts" */ '../views/ListProducts.vue')
  },
  {
    path: '/SearchProductPdv',
    name: 'SearchProductPdv',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SearchProductPdv" */ '../views/SearchProductPdv.vue')
  },
  {
    path: '/CreateUsers',
    name: 'CreateUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CreateUsers" */ '../views/CreateUsers.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
