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
      title: data.title,
    })
    console.log(responseData.data)
    context.commit('postTodos', responseData.data)
  }
}
