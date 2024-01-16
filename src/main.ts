import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)

app.use(router)

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'

addIcons(FaFlag, RiZhihuFill)

app.component('v-icon', OhVueIcon)

app.mount('#app')
