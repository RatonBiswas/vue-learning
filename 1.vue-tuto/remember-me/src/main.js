import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue';

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

const app = createApp(App)
app.mount('#app')
