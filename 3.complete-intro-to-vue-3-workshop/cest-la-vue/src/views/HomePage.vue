<script setup>
// import { userList } from "@/composables/useUserStore";
import { useUserStore } from '@/stores/UserStore'

// import { computed } from "vue";

const userList = useUserStore()

// const shortUserList = computed(() => {
//   return userList.value.splice(0, 5);
// });
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc. Whatever your mind
      desires!
    </p>
    <hr />
    <ul>
      <li v-for="user in userList.shortUserList" :key="`user-${user.id}`">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style>
</style>