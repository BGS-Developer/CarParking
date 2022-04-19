import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import paths from "./paths"

Vue.use(VueRouter)

  const routes = [
  {
    path: paths.home,
    name: 'Home',
    component: Home
  }, {
    path: paths.parkings,
    name: 'Parkings',
    component: () => import('@/views/Parkings')
  }, {
    path: paths.parkingsSpaces,
    name: 'Parkings Spaces',
    component: () => import('@/views/Parkings')
  }, {
    path: paths.leads,
    name: 'Leads',
    component: () => import('@/views/Parkings')
  }, {
    path: paths.customers,
    name: 'Customers',
    component: () => import('@/views/Parkings')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
