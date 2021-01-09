import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ty',
    name: 'TinyMCE',
    component: () => import('../views/TinyMCE.vue')
  },
  {
    path: '/yz',
    name: 'Yanzhen',
    component: () => import('../views/Yanzhen.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
