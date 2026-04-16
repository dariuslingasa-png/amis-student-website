import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import History from './views/about/History.vue'
import PhilosophyVisionMissionGoals from './views/about/PhilosophyVisionMissionGoals.vue'
import SchoolLogo from './views/about/SchoolLogo.vue'
import CoreValues from './views/about/CoreValues.vue'
import Location from './views/about/Location.vue'
import WhyIslamicSchool from './views/about/WhyIslamicSchool.vue'
import Certifications from './views/about/Certifications.vue'
import Academics from './views/Academics.vue'
import BasicEducation from './views/academics/BasicEducation.vue'
import Admissions from './views/Admissions.vue'
import Contact from './views/Contact.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/about/history', component: History },
  { path: '/about/philosophy-vision-mission-goals', component: PhilosophyVisionMissionGoals },
  { path: '/about/school-logo', component: SchoolLogo },
  { path: '/about/core-values', component: CoreValues },
  { path: '/about/location', component: Location },
  { path: '/about/why-islamic-school', component: WhyIslamicSchool },
  { path: '/about/certifications', component: Certifications },
  { path: '/academics', component: Academics },
  { path: '/academics/basic-education', component: BasicEducation },
  { path: '/admissions', component: Admissions },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }
    // Otherwise, scroll to top
    return { top: 0, behavior: 'smooth' }
  }
})

createApp(App).use(router).mount('#app')
