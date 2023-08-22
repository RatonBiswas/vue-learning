<template>
  <div class="container">
    <Todos/>
  </div>
</template>

<script setup>
import Todos from './components/TodosTemplate.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

body {
  margin: 0;
  font-family: "Franklin Gothic Medium","Arial Narrow", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
</style>