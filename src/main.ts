import { createApp } from 'vue'
import router from './router'
import './assets/index.css'
import App from './App.vue'
import { useColorMode } from '@/composibles/useColorMode'

const { initColorMode } = useColorMode()

initColorMode()

const app = createApp(App)
app.use(router)
app.mount('#app')
