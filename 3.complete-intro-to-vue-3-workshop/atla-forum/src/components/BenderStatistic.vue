<script>
export default {
  computed: {
    benderStatistics() {
      const elements = ['Air', 'Earth', 'Water', 'Fire', 'Dragon']
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
        Dragon: 0
      }

      this.characterList.forEach((character) => {
        console.log(character.name)
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1
          }
        })
      })
      return statistics
    }
  }
}
</script>

<template>
  <div>
    <h2>Statistics</h2>
    <ul>
      <li v-for="(stat, type) in benderStatistics" :key="`bender-${stat}-${type}`">
        {{ type }}:{{ stat }}
      </li>
    </ul>
  </div>
</template>