# vue-learning


### Vuex terms 
# State 
App-level state/data (it should be posts, token , todos, etc)
# Getters 
Get pieces of state or computed values from state
# Actions 
called from components to commit a mutation
# Mutations
Mutate the state (Update data etc)
# Modules 
Each module can have its own state , getters, actions and mutationas (Auth modules, Posts module, etc)

### Accessing Mutations and Actions
# When accessing mutations and actions, you can simply provide the commit and dispatch method inside the setup hook.
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

     // access a mutation
     const increment = ()=>store.commit('increment'),

      // access an action
      const asyncIncrement = ()=> store.dispatch('asyncIncrement')
    
</script>


### Accessing State and Getters#
# In order to access state and getters, you will want to create computed references to retain reactivity. This is the equivalent of creating computed properties using the Option API.
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

    const store = useStore()

      // access a state in computed function
     const count = computed(() => store.state.count),

      // access a getter in computed function
      const double = computed(() => store.getters.double)
</script>
