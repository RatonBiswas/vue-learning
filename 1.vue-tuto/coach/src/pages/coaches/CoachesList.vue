<template>
    <div>
        <section>
            filter
        </section>
        <section>
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register As Coach</router-link>
            </div>
            <ul v-if="hasCoaches">
                <li v-for="coaches in filteredCoaches" :key="coaches.id">
                    {{ coaches.firstName }}
                </li>
            </ul>
            <h3 v-else>No coaches found</h3>
        </section>
    </div>
</template>

<script>
export default {
   computed:{
    filteredCoaches(){
        return this.$store.getters['coaches/coaches']
    },
    hasCoaches(){
        return this.$store.getters['coaches/hasCoaches']
    }
   }
}
</script>

<style scoped>

</style>