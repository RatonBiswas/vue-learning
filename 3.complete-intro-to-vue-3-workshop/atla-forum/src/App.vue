<script>
//import BenderStatistic from './components/BenderStatistic.vue'
import CharacterCard from './components/CharacterCard.vue'


export default {
  components:{
    //BenderStatistic,
    CharacterCard
  },
  data:()=>({
    newCharacter: {
      name: '',
      element:[]
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
      }
    ],
    favoriteList: []
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = {
        name: ''
      }
    },
    addFavouriteCharacter(payload){
      this.favoriteList.push(payload)
    }
  }
}
</script>

<template>
  <div>
    <!--<BenderStatistic :characters="characterList"/>-->
    <h2>Characters</h2>
    <p v-if="characterList.length === 0">there are no character</p>
    <ul v-else-if="characterList.length % 2 ===0">
      <li v-for="(character, index) in characterList" :key="`even-character-${index}`">
       <CharacterCard :character="character" @favorite="addFavouriteCharacter"/>
      </li>
    </ul>
    <p v-else>There are Odd Characters!</p>
    <h2>Favourite Character</h2>
    <ul v-if="favoriteList.length > 0">
      <li v-for="(character, index) in favoriteList" :key="`odd-character-${index}`">
        {{ character }}
      </li>
    </ul>
    <p v-else>No Favourite Character Yet!</p>
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
