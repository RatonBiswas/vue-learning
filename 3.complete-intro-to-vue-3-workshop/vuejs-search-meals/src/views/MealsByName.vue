<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-300 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <div>
      <pre>{{ meals }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from '@vue/reactivity'
import store from '../vuexstore'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}
</script>
