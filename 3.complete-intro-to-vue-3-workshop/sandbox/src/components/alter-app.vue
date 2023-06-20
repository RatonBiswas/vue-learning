<script>
import BaseCounter from './components/base-counter.vue'
import UserCard from './components/user-card.vue'


export default {
  components:{
    BaseCounter,
    UserCard
  },
  data() {
    return {
      message: `Hello vue from frontend masters i'm working`,
      listOfNumber: [
        { name: 1, id: 'c092b104 - ec8d - 4283 - a1ed - b007d25eedca', list: [1, 2, 3] },
        { name: 2, id: '15dcfa23- d6eb - 49f9 - a546 - 1ca1a6ed1e7b', list: [1, 2, 3] },
        { name: 3, id: '831e0c3e- 8843 - 440c - 806e-1a39bbf22502', list: [1, 2, 3] },
        { name: 4, id: 'd287aa0b - 37d9- 4df5 - b840 - 60f6272b99a5', list: [1, 2, 3] },
        { name: 5, id: '690abbad - 1b33 - 477a - b11a - 42db5deb2b06', list: [1, 2, 3] },
        { name: 6, id: 'c78b2844 - 1d56 - 4a8f - 8e32 - da5c620d6fdb', list: [1, 2, 3] }
      ],
      userData :{
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: 10001
      }
    }
  },
  methods: {
    changeUserName(){
      this.userData.name = 'Jane Doe'
    }
  },
  computed : {
    refinedUserData(){
      return{
        name: this.userData.name,
        age: this.userData.age,
        address: this.userData.address,
        city: this.userData.city,
        state: this.userData.state,
        zip: this.userData.zip
      }
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
    <UserCard :user="refinedUserData" @change-name="changeUserName"/>
    <BaseCounter/>
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


