<template>
  <base-card>
    <h3>Add Todo</h3>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" v-model.trim="title" placeholder="Add Your Todo..." />
      </div>
      <div class="actions">
        <base-button>Add Todos</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (this.title === '') {
        this.formIsValid = false
        return
      }
      this.$store.dispatch('todos/addTodo',{
        title: this.title
      })
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border-radius: 10px;
  padding: 0.1rem;
}

input {
  margin: 0;
  flex: 10;
  border: 1px solid #41b883;
  border-radius: 10px;
  width: 86%;
  padding: 17px;
  float: left;
  font-size: 16px;
}
</style>