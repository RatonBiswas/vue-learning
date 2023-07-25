<template>
  <ul>
    <LearningResource
      v-for="reso in resources"
      :key="reso.id"
      :title="reso.title"
      :description="reso.description"
      :id="reso.id"
      :link="reso.link"
      
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'
export default {
  /* don't need props because we use provider
    to inject data access anywhere
   */
  inject:['resources'],
  components: {
    LearningResource
  },
  // props: ['resos']  
 
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>