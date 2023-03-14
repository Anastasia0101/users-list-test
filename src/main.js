import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'sass-reset'
import './styles/_main.sass'

import * as VeeValidate from 'vee-validate'

const app = createApp(App)

app.use(router, VeeValidate)

app.mount('#app')
