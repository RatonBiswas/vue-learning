import { createStore } from 'vuex'
import state from '@/vuexstore/state'
import * as action from '@/vuexstore/action'
import * as mutations from '@/vuexstore/mutations'
import * as getters from '@/vuexstore/getters'

const store = createStore({
  namespaced: true,
  state,
  action,
  mutations
  //   getters
})

export default store
