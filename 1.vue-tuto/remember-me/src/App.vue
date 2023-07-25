<template>
  <main>
    <TheHeader title="RememberMe" />
    <StoreResource :storeResources="storeResources" />
  </main>
</template>

<script>
import StoreResource from './components/resources/StoreResources.vue'
import TheHeader from './components/layouts/TheHeader.vue'

export default {
  components: {
    StoreResource,
    TheHeader
  },
  data() {
    return {
      storeResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vue.js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google Guide',
          description: 'The official google documentation.',
          link: 'https://google.org/'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>