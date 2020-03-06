import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ADD_TO_BASKET = 'addToBasket'
export const EMPTY_BASKET = 'emptyBasket'
export const SET_BUSINESS = 'setBusiness'

export default new Vuex.Store({
  state: {
    basket: [],
    business: {}
  },
  getters: {
    basket: function(state) {
      return state.basket
    },
    business: function(state) {
      return state.business
    },
    totalPrice: function(state) {
      return state.basket.reduce(
        (totalPrice, item) => item.price * item.quantity + totalPrice,
        0
      )
    }
  },
  actions: {
    [ADD_TO_BASKET]: function(context, itemToAdd) {
      context.commit(ADD_TO_BASKET, itemToAdd)
    },
    [EMPTY_BASKET]: function(context) {
      context.commit(EMPTY_BASKET)
    },
    [SET_BUSINESS]: function(context) {
      if (Object.keys(context.state.business).length) {
        return
      }

      fetch('https://api.myjson.com/bins/wn9mi')
        .then(function(data) {
          return data.json()
        })
        .then(function(data) {
          context.commit(SET_BUSINESS, data)
        })
    }
  },
  mutations: {
    [ADD_TO_BASKET]: function(state, itemToAdd) {
      const foundItem = state.basket.find(function(currentItem) {
        return currentItem.id === itemToAdd.id
      })

      if (foundItem) {
        foundItem.quantity = itemToAdd.quantity
      } else {
        state.basket.push(itemToAdd)
      }
    },
    [EMPTY_BASKET]: function(state) {
      state.basket = []
    },
    [SET_BUSINESS]: function(state, fetchedBusiness) {
      state.business = fetchedBusiness
    }
  }
})
