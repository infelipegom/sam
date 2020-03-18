import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ADD_TO_BASKET = 'addToBasket'
export const EMPTY_BASKET = 'emptyBasket'
export const REMOVE_ITEM = 'removeItem'
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
      const items = state.basket.reduce(function(items, category) {
        return [...items, ...category.items]
      }, [])

      const totalPrice = items.reduce(function(totalPrice, item) {
        return item.price * item.quantity + totalPrice
      }, 0)

      return totalPrice
    }
  },
  actions: {
    [ADD_TO_BASKET]: function(context, payload) {
      context.commit(ADD_TO_BASKET, payload)
    },
    [EMPTY_BASKET]: function(context) {
      context.commit(EMPTY_BASKET)
    },
    [REMOVE_ITEM]: function(context, payload) {
      context.commit(REMOVE_ITEM, payload)
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
    [ADD_TO_BASKET]: function(state, payload) {
      const { category, item } = payload

      const foundCategory = state.basket.find(function(currentCategory) {
        return currentCategory.id === category.id
      })

      if (foundCategory) {
        const foundItem = foundCategory.items.find(function(currentItem) {
          return currentItem.id === item.id
        })

        if (foundItem) {
          foundItem.quantity = item.quantity
        } else {
          foundCategory.items.push(item)
        }
      } else {
        state.basket.push({ ...category, items: [item] })
      }
    },
    [EMPTY_BASKET]: function(state) {
      state.basket = []
    },
    [REMOVE_ITEM]: function(state, payload) {
      const { category, item } = payload

      const foundCategory = state.basket.find(function(currentCategory) {
        return currentCategory.id === category.id
      })

      if (foundCategory) {
        const items = foundCategory.items.filter(function(currentItem) {
          return currentItem.id !== item.id
        })

        if (items.length === 0) {
          state.basket = []

          console.log(state.basket)
        } else {
          foundCategory.items = items
        }
      }
    },
    [SET_BUSINESS]: function(state, payload) {
      state.business = payload
    }
  }
})
