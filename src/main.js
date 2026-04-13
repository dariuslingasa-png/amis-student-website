import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Academics from './views/Academics.vue'
import Admissions from './views/Admissions.vue'
import Contact from './views/Contact.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/academics', component: Academics },
  { path: '/admissions', component: Admissions },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
