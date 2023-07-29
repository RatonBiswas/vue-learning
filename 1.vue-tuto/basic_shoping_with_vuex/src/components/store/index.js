import { createStore } from 'vuex'

import productsModule from './modules/products'
import cartModule from './modules/card'

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLogedIn: false
    }
  },
  mutations: {
    login(state) {
      state.isLogedIn = true
    },
    logout(state) {
      state.isLogedIn = false
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    },

    logout(context) {
      context.commit('logout')
    }
  },
  getters: {
    isAuthenticate(state) {
      return state.isLogedIn
    }
  }
})

export default store
