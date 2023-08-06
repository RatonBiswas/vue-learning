<template>
  <div>
    <li>
      {{ userName }}
    </li>
    <button>View Projects</button>
  </div>
</template>

<script>
export default {
  props: ['id', 'userName']
}
</script>


<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>
