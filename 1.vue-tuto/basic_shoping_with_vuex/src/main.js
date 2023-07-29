import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import store from './components/store/index.js'

const app = createApp(App)

app.component('base-badge', BaseBadge)

app.use(store)
app.use(router)
app.mount('#app')
