import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

export const CART = 'Cart'
export const CART_PATH = '/cart'
export const DETAIL = 'Detail'
export const DETAIL_PATH = '/detail'
export const HOME = 'Home'
export const HOME_PATH = '/'

const routes = [
  {
    component: function() {
      return import('@/views/Cart.vue')
    },
    name: CART,
    path: CART_PATH
  },
  {
    component: function() {
      return import('@/views/Detail.vue')
    },
    name: DETAIL,
    path: DETAIL_PATH
  },
  {
    component: Home,
    name: HOME,
    path: HOME_PATH
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to, _from, next) {
  if (!store.state.business.name && to.name !== HOME) {
    next({ name: HOME, replace: true })
  } else {
    next()
  }
})

export default router
