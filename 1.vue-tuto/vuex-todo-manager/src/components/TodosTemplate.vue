<template>
  <div>
    <base-card>
      <ul>
        <li v-for="todo in allTodos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </base-card>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const allTodos = computed(() => store.getters['todos/todos'])
</script>

<style  scoped>


</style>