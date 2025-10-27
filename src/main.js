import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

// AppCard 를 전역적으로 사용하게 설정
//import AppCard from './components/AppCard.vue'

const app = createApp(App)

// app.component('AppCard', AppCard)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
