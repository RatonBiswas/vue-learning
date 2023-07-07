<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-5 px-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <!-- <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There Is no meals
    </div> -->
  </div>
</template>
<script setup>
import MealItem from './Meals.vue'

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array
  }
})
</script>