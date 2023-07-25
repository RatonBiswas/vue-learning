<template>
  <ul>
    <LearningResource
      v-for="storeResource in storeResources"
      :key="storeResource.id"
      :title="storeResource.title"
      :description="storeResource.description"
      :id="storeResource.id"
      :link="storeResource.link"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'
export default {
  components: {
    LearningResource
  },
  props: ['storeResources']
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