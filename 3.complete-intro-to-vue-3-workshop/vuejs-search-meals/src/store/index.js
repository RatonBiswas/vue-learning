import { createStore } from 'vuex'
import state from '@/store/state'
import * as action from '@/store/actions'
import * as mutations from '@/store/mutations'
import * as getters from '@/store/getters'

const store = createStore({
  state,
  action,
  mutations
  //   getters
})

export default store
