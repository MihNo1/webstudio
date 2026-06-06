import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import revealDirective from './directives/reveal.js'

const app = createApp(App)
app.directive('reveal', revealDirective)
app.mount('#app')
