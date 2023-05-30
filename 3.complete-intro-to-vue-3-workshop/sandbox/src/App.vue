<script>
export default {
  data() {
    return {
      counter: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 10,
      message: `Hello vue from frontend masters i'm working`,
      listOfNumber: [
        { name: 1, id: 'c092b104 - ec8d - 4283 - a1ed - b007d25eedca', list: [1, 2, 3] },
        { name: 2, id: '15dcfa23- d6eb - 49f9 - a546 - 1ca1a6ed1e7b', list: [1, 2, 3] },
        { name: 3, id: '831e0c3e- 8843 - 440c - 806e-1a39bbf22502', list: [1, 2, 3] },
        { name: 4, id: 'd287aa0b - 37d9- 4df5 - b840 - 60f6272b99a5', list: [1, 2, 3] },
        { name: 5, id: '690abbad - 1b33 - 477a - b11a - 42db5deb2b06', list: [1, 2, 3] },
        { name: 6, id: 'c78b2844 - 1d56 - 4a8f - 8e32 - da5c620d6fdb', list: [1, 2, 3] }
      ]
    }
  },
  computed: {
    displayTitle() {
      if (this.counter > 20) {
        return 'Counter Standard Too Long'
      } else {
        return 'Counter Standard'
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount
    }
  },
  methods: {
    /*
        When use v-model then dont need this code.
          // changeIncrementAmount(event) {
          //   this.incrementAmount =Number(event.target.value);
          // },
        */
    incrementCount() {
      this.counter += this.incrementAmount
    }
  },
  watch: {
    counter(newCharacter) {
      if (newCharacter > 20) {
        this.counterTitle += ' Too Long'
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ displayTitle }}</h1>
    <P>{{ counter }}</P>
    <button v-on:click="incrementCount">Increment Count</button>
    <h1>{{ incrementAmount }}</h1>
    <p>{{ optimizedIncrementAmount }}</p>
    <div>
      <label for="incrementCount">Increment By : </label>
      <!--v-bind:value="incrementAmount" //v-on:input="changeIncrementAmount" -->
      <input type="number" v-model="incrementAmount" />
    </div>
    <hr />
    <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
    <p v-else>Odd :{{ message }}</p>
    <p>Length: {{ message.length }}</p>
    <ul v-for="(item, index) in listOfNumber" :key="`item-${index}`">
      <li>
        {{ item.id }}
        <ul>
          <li v-for="(number, index) in item.list" :key="`number-${index}`">
            {{ number }} 
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


