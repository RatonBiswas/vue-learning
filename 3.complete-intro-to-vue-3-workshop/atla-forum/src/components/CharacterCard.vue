<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  emits:['favorite'],
  methods: {
    favouriteCharacter() {
      this.$emit('favorite',this.character)
    }
  }
}
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="favouriteCharacter">⭐ Favourite</button>
  </div>
</template>