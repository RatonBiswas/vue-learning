<template>
  <main>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </main>
</template>

<script>
import StoreResources from './StoreResources.vue'
import AddResource from './AddResource.vue'
export default {
  components: {
    StoreResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(newTitle, newDescription, newLink) {
      const newresource = {
        id: new Date().toISOString(),
        title: newTitle,
        description: newDescription,
        link: newLink
      }
      this.storedResources.unshift(newresource)
      this.setSelectedTab = 'stored-resources'
    }
  }
}
</script>