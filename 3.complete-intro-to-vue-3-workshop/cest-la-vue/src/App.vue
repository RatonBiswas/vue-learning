<script>

// --Start---------------Vue router can do all stuff of code--------------------

// import HomePage from './views/HomePage.vue'
// import LoginPage from './views/LoginPage.vue'
// import UserPage from './views/UserPage.vue'

// export default {
//   // components: {
//   //   HomePage,
//   //   LoginPage,
//   //   UserPage
//   // },
//   data: () => ({
//     currentPage: 'User'
//   }),
//   computed: {
//     renderPage() {
//       return this.currentPage + 'Page'
//     }
//   },
//   methods: {
//     showHomePage() {
//       this.currentPage = 'Home'
//     },
//     showLoginPage() {
//       this.currentPage = 'Login'
//     },
//     showUserPage() {
//       this.currentPage = 'User'
//     }
//   }
// }

// -----------------Vue router can do all stuff of code---------------End-----

</script>

<template>
  <div>
    <header class="header">
      <span class="logo"> <img src="@/assets/vue-heart.png" width="30" />C'est La Vue </span>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/user">User</router-link>
      </nav>
    </header>
    <Suspense>
      <!-- <component :is="renderPage" :key="renderPage" /> -->
      <router-view/>
      <template v-slot:fallback> Data is loading... </template>
    </Suspense>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>