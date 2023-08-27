<template>
  <div>
    <div>
      <AddTodos/>
      <FilterTodos/>
    </div>
    <base-card>
    <h3>Todos</h3>
      <div class="todos">
        <div v-for="todo in receivedRequests" :key="todo.id" class="todo">
          {{ todo.title }} 
          <i @click="deleteTodo(todo.id)" class="gg-remove"></i>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
import AddTodos from './AddTodos.vue'
import FilterTodos from './FilterTodos.vue'
export default {
  components:{
    AddTodos,
    FilterTodos,
  },
  methods: {
    loadTodos() {
      this.$store.dispatch('todos/fetchTodos')
    },
    deleteTodo(id) {
      this.$store.dispatch('todos/deleteTodo',id)
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['todos/allTodos']
    }
  },
  created() {
    this.loadTodos()
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 0.8rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}
.gg-remove {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 22px;
    cursor: pointer;
}

.gg-remove::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
    cursor: pointer;

}
</style>

button,
button:active {
  