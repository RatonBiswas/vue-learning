import axios from 'axios'
export default {
  async fetchTodos(context) {
    const responseData = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    // console.log(responseData.data)
    context.commit('getTodos', responseData.data)
  },
  async addTodo(context, data) {
    const responseData = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      completed: false,
      title: data.title
    })
    console.log(responseData.data)
    context.commit('postTodos', responseData.data)
  },
  async deleteTodo(context, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    context.commit('deleteId', id)
  },
  async filterTodo(context, event) {
    const limit = event.target.value
    const responseData = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    //console.log(responseData);
    context.commit('getTodos', responseData.data)

  }
}
