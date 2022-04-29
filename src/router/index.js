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
  }, 
  
  
  {
    path: '/admin',
    name: 'Admin',
    component: Home,
    children: [
      {
        path: `/admin/${paths.parkings}`,
        name: 'My parkings',
        component: () => import('@/views/parkings/index'),
      },
      {
        path: '/:id',
        name: 'Parking',
        meta: {
          categoryName: "Parkings",
          categoryUrl: paths.parkings
        },
        component: {
          default: () => import('@/views/parkings/_id'),
          // content: () => import('@/views/parkings/_id')
        }
      }
    ]
  }, /* {
    path: paths.parking,
    name: 'Parking',
    meta: {
      categoryName: "Parkings",
      categoryUrl: paths.parkings
    },
    component: () => import('@/views/parkings/_id')
  }, */ {
    path: paths.parkingsSpaces,
    name: 'Parkings Spaces',
    component: () => import('@/views/parkings/index')
  }, {
    path: paths.leads,
    name: 'Leads',
    component: () => import('@/views/parkings/index')
  }, {
    path: paths.customers,
    name: 'Customers',
    component: () => import('@/views/parkings/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
