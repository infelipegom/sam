import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ADD_TO_CART = 'addToCart'
export const SET_BUSINESS = 'setBusiness'

export default new Vuex.Store({
  state: {
    business: {},
    cart: []
  },
  getters: {
    business: function(state) {
      return state.business
    },
    cart: function(state) {
      return state.cart
    },
    totalPrice: function(state) {
      return state.cart.reduce(
        (totalPrice, item) => item.price * item.quantity + totalPrice,
        0
      )
    }
  },
  actions: {
    [ADD_TO_CART]: function(context, itemToAdd) {
      context.commit(ADD_TO_CART, itemToAdd)
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
    [ADD_TO_CART]: function(state, itemToAdd) {
      const foundItem = state.cart.find(function(currentItem) {
        return currentItem.id === itemToAdd.id
      })

      if (foundItem) {
        foundItem.quantity = itemToAdd.quantity
      } else {
        state.cart.push(itemToAdd)
      }
    },
    [SET_BUSINESS]: function(state, fetchedBusiness) {
      state.business = fetchedBusiness
    }
  }
})
