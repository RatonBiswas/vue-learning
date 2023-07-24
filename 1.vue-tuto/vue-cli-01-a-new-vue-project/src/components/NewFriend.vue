<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name </label>
      <input type="text" placeholder="Name" v-model="newName" />
    </div>
    <div>
      <label>Phone </label>
      <input type="tel" placeholder="Phone Number" v-model="newPhone" />
    </div>
    <div>
      <label>Email </label>
      <input type="email" placeholder="Email" v-model="newEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-new-contact'],
  data() {
    return {
      newName: '',
      newPhone: '',
      newEmail: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('add-new-contact', this.newName, this.newPhone, this.newEmail)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>