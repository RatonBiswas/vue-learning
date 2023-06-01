<script>
export default {
  data(){
    return{
    counterTitle: 'Counter Standard',
    newCharacter: {
      name: ''
    },
    characterList: [
      {
        name: 'Raton',
        element: ['Air', 'Earth', 'Dragon', 'Water', 'Fire']
      },
      {
        name: 'Mithila',
        element: ['Air']
      },
      {
        name: 'Nondita',
        element: ['Earth']
      },
      {
        name: 'Emon',
        element: ['Fire']
      },
      {
        name: 'Farhan',
        element: ['Water']
      }
    ],
    favcharacterList: []
  }},
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
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = {
        name: ''
      }
    },
    favouriteCharacter(character) {
      this.favcharacterList.push(character)
      console.log(this.favcharacterList)
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ counterTitle }}</h1>
    <h2>Statistics</h2>
    <ul>
      <li v-for="(stat, type) in benderStatistics" :key="`bender-${stat}-${type}`">
        {{ type }}:{{ stat }}
      </li>
    </ul>
    <h2>Characters</h2>
    <p v-if="characterList.length === 0">there is no character</p>
    <ul v-else>
      <li v-for="(character, index) in characterList" :key="`even-character-${index}`">
        <p>{{ character.name }}</p>
        <button @click="favouriteCharacter(character)">⭐ Favourite</button>
      </li>
    </ul>
    <h2>Favourite Character</h2>
    <ul v-if="favcharacterList.length > 0">
      <li v-for="(character, index) in favcharacterList" :key="`odd-character-${index}`">
        {{ character.name }}
      </li>
    </ul>
    <p v-else>There is no Favourite Character</p>
    <h2>New Character</h2>
    <pre>{{ newCharacter }}</pre>
    <label for="character-name">Name</label>
    <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
    <p>
      <span v-for="(character, index) in characterList" :key="`comma-list-character-${index}`">
        {{ character.name }} {{ index === characterList.length - 1 ? '' : ',' }}
      </span>
    </p>
  </div>
</template>
