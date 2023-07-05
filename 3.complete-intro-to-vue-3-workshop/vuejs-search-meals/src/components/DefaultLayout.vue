<template>
  <div>
    <navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>