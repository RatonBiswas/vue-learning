export default {
  getTodos(state, responseDataFromAction) {
    state.todos=responseDataFromAction
  },
  postTodos(state, responseDataFAction){
    state.todos.unshift(responseDataFAction)
  }
}
