export default {
  getTodos(state, responseDataFromAction) {
    state.todos = responseDataFromAction
  },
  postTodos(state, responseDataFAction) {
    state.todos.unshift(responseDataFAction)
  },
  deleteId(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  }
}
