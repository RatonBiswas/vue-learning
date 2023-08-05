<script setup>
import { ref } from 'vue'

const count = ref(0)
defineProps({
  msg: String
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
</style>
