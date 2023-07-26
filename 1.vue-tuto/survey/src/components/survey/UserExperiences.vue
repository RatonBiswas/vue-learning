<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSumitted">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <SurveyResult
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
          :id="result.id"
        />
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue'

export default {
  // props: ['results'],
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
    }
  },
  methods: {
    loadSumitted() {
      this.isLoading = true
      fetch('https://sumitted-reviews-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          this.isLoading = false
          console.log('Fetch data Successfully')
          const newResults = []
          for (const newId in data) {
            newResults.push({
              id: newId,
              name: data[newId].name,
              rating: data[newId].rating
            })
          }
          this.results = newResults
        })
    }
  },
  mounted() {
    this.loadSumitted()
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>