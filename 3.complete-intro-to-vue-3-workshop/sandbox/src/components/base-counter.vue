<script>
export default {
  data: () => ({
    counter: 10,
    counterTitle: 'Counter Standard',
    incrementAmount: 8
  }),
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
  },
  methods: {
    /*
        When use v-model then dont need this code.
          // changeIncrementAmount(event) {
          //   this.incrementAmount =Number(event.target.value);
          // },
        */
    incrementCount(newAmount, event) {
      console.log(newAmount)
      console.log(event)
      this.counter += this.incrementAmount
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ displayTitle }}</h1>
    <P :data-increment-by="incrementCount">{{ counter }}</P>
    <button v-on:click="incrementCount">Increment Count</button>
    <h1>{{ incrementAmount }}</h1>
    <p>{{ optimizedIncrementAmount }}</p>
    <div>
      <label for="incrementCount">Increment By : </label>
      <!--v-bind:value="incrementAmount" //v-on:input="changeIncrementAmount" -->
      <input type="text" v-model="incrementAmount" />
    </div>
  </div>
</template>