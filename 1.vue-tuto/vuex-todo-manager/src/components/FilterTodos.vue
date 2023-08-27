<template>
  <div>
    <label>Filter Todos : </label>
    <select @change="filterTodo($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    filterTodo(e) {
      this.$store.dispatch('todos/filterTodo', e)
    }
  }
}
</script>

<style scoped>
select {
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #41b883;
}
</style>