import { createStore } from 'vuex'
import todosModules from './modules/todos/index'

const store = createStore({
  modules: {
    todos: todosModules,
  },
})

export default store
