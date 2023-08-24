import axios from 'axios'
export default {
    async fetchTodos(context){
        const responseData = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        console.log(responseData.data);
        context.commit('getTodos', responseData.data)
    }
}