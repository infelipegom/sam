import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

export const BASKET = 'Basket'
export const BASKET_PATH = '/basket'
export const CONFIRMATION = 'Confirmation'
export const CONFIRMATION_PATH = '/confirmation'
export const DETAIL = 'Detail'
export const DETAIL_PATH = '/detail'
export const HOME = 'Home'
export const HOME_PATH = '/'

const router = new VueRouter({
  routes: [
    {
      component: function() {
        return import('@/views/Basket.vue')
      },
      name: BASKET,
      path: BASKET_PATH
    },
    {
      component: function() {
        return import('@/views/Confirmation.vue')
      },
      name: CONFIRMATION,
      path: CONFIRMATION_PATH
    },
    {
      component: function() {
        return import('@/views/Detail.vue')
      },
      name: DETAIL,
      path: DETAIL_PATH
    },
    {
      component: function() {
        return import('@/views/Home.vue')
      },
      name: HOME,
      path: HOME_PATH
    }
  ]
})

router.beforeEach(function(to, _from, next) {
  if (!store.state.business.name && to.name !== HOME) {
    next({ name: HOME, replace: true })
  } else {
    next()
  }
})

export default router
