<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  text-decoration: none;
  padding: 0.75rem 1rem;
  font: inherit;
  background-color: #2196F3;;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
}

button:hover,
button:active {
  background-color: #41b883;
  border-color: #5c0556;
}
</style>