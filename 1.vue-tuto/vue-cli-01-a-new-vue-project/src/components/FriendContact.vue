<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? 'Favourite' : '' }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavourites">Favourite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ['name', 'phoneNumber', 'emailAddress'],
  emits: ['toggle-favourites'],
  props: {
    id: { type: String },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    // isFavourite: {
    //   type: String,
    //   required: true,
    //   default: '0',
    //   validate: function (value) {
    //     return value === '1' || value === '0'
    //   }
    // }
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourites() {
      this.$emit('toggle-favourites', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>