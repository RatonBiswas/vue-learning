<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fulName }}</h2>
        <h3>${{ rate }} hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach Out Now!</h2>
          <base-button link :to="contachLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
          <p>{{ description }}</p>
        </base-badge>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style scoped>
</style>