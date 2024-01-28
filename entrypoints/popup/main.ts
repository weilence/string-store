import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import './style.css'
import 'virtual:uno.css'
import App from './App.vue'

const vuetify = createVuetify()
createApp(App).use(vuetify).mount('#app')
