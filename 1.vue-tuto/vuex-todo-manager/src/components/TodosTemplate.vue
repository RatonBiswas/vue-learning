<template>
  <div>
    <div>
      <AddTodos/>
    </div>
    <base-card>
    <h3>Todos</h3>
      <div class="todos">
        <div v-for="todo in receivedRequests" :key="todo.id" class="todo">
          {{ todo.title }}
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
import AddTodos from './AddTodos.vue'
export default {
  components:{
    AddTodos,
  },
  methods: {
    loadTodos() {
      this.$store.dispatch('todos/fetchTodos')
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
</style>