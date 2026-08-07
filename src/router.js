import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactPage from './pages/ContactPage.vue'
import CookiePolicyPage from './pages/CookiePolicyPage.vue'
import DigitalTechnologiesPage from './pages/DigitalTechnologiesPage.vue'
import SmartCitiesPage from './pages/SmartCitiesPage.vue'
import InternationalProjectsPage from './pages/InternationalProjectsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/services', name: 'services', component: ServicesPage },
  {
    path: '/digital-teknolojiler-ve-yazilim-cozumleri',
    name: 'digital-technologies',
    component: DigitalTechnologiesPage
  },
  {
    path: '/digital-technologies-and-software-solutions',
    redirect: '/digital-teknolojiler-ve-yazilim-cozumleri'
  },
  {
    path: '/akilli-kentler-ve-surdurulebilir-sehircilik',
    name: 'smart-cities',
    component: SmartCitiesPage
  },
  {
    path: '/smart-cities-and-sustainable-urbanism',
    redirect: '/akilli-kentler-ve-surdurulebilir-sehircilik'
  },
  {
    path: '/uluslararasi-projeler-ve-stratejik-finansman',
    name: 'international-projects',
    component: InternationalProjectsPage
  },
  {
    path: '/international-projects-and-strategic-finance',
    redirect: '/uluslararasi-projeler-ve-stratejik-finansman'
  },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/cookie-policy', name: 'cookie-policy', component: CookiePolicyPage },
  { path: '/cookie-politikasi', redirect: '/cookie-policy' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
