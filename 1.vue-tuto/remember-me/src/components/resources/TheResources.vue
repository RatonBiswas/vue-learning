<template>
  <main>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
      <base-button @click="setSelectedTab('the-form')" :mode="addFormButtonMode">Form</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </main>
</template>

<script>
import StoredResources from './StoreResources.vue'
import AddResource from './AddResource.vue'
import TheForm from '../ui/TheForm.vue'
export default {
  components: {
    StoredResources,
    AddResource,
    TheForm
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
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeItem
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    },
    addFormButtonMode() {
      return this.selectedTab === 'the-form' ? null : 'flat'
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
      this.selectedTab = 'stored-resources'
    },
    removeItem(resId) {
      const newIndex = this.storedResources.findIndex((res) => res.id === resId)
      this.storedResources.splice(newIndex, 1)
    }
  }
}
</script>