<template>
  <base-container>
    <h2>Active Users</h2>
    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :userName="user.fullName"
        :id="user.id"
      />
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue'
export default {
  components: {
    UserItem
  },
  props: ['users'],
  data() {
    return {
      sorting: null,
      activeSearchTerm: '',
      enteredSearchTerm: ''
    }
  },
  computed: {
    availableUsers() {
      let availableUsers = []
      if (this.activeSearchTerm) {
        availableUsers = this.users.filter((user) => {
          user.fullName.includes(this.activeSearchTerm)
        })
      } else if (this.users) {
        availableUsers = this.users
      }
      return availableUsers
    },
    displayedUsers() {
      if (!this.sorting) {
        return this.availableUsers
      }
      return this.availableUsers.slice().sort((u1, u2) => {
        if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
          return 1
        } else if (this.sorting === 'asc') {
          return -1
        } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
          return -1
        } else {
          return 1
        }
      })
    }
  }
}
</script>

<style scoped>
</style>