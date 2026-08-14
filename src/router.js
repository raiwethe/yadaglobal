import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactPage from './pages/ContactPage.vue'
import CookiePolicyPage from './pages/CookiePolicyPage.vue'
import DigitalTechnologiesPage from './pages/DigitalTechnologiesPage.vue'
import SmartCitiesPage from './pages/SmartCitiesPage.vue'
import InternationalProjectsPage from './pages/InternationalProjectsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ProjectDigitalPage from './pages/ProjectDigitalPage.vue'
import ProjectDigitalTwinPage from './pages/ProjectDigitalTwinPage.vue'
import ProjectShorePage from './pages/ProjectShorePage.vue'
import ProjectStorylandPage from './pages/ProjectStorylandPage.vue'
import ProjectEMakersPage from './pages/ProjectEMakersPage.vue'
import ProjectSFedsPage from './pages/ProjectSFedsPage.vue'
import ProjectWomenPage from './pages/ProjectWomenPage.vue'
import ProjectDigitrainerPage from './pages/ProjectDigitrainerPage.vue'
import ProjectWaterPage from './pages/ProjectWaterPage.vue'
import ProjectCizrePage from './pages/ProjectCizrePage.vue'
import ProjectKapidagPage from './pages/ProjectKapidagPage.vue'
import ProjectSiranPage from './pages/ProjectSiranPage.vue'
import ProjectSiran2Page from './pages/ProjectSiran2Page.vue'
import ProjectSurmenePage from './pages/ProjectSurmenePage.vue'
import ProjectArtabelPage from './pages/ProjectArtabelPage.vue'
import ProjectKapidagThematicPage from './pages/ProjectKapidagThematicPage.vue'
import ProjectKapidag2Page from './pages/ProjectKapidag2Page.vue'
import ProjectGelibolouPage from './pages/ProjectGelibolouPage.vue'
import ProjectBigaPage from './pages/ProjectBigaPage.vue'

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
  { path: '/projeler-ve-referanslar', name: 'projects', component: ProjectsPage },
  { path: '/projects-and-references', redirect: '/projeler-ve-referanslar' },
  { path: '/projeler-ve-referanslar/digital', name: 'project-digital', component: ProjectDigitalPage },
  { path: '/projeler-ve-referanslar/digitalikiz', name: 'project-digital-twin', component: ProjectDigitalTwinPage },
  { path: '/projeler-ve-referanslar/shore', name: 'project-shore', component: ProjectShorePage },
  { path: '/projeler-ve-referanslar/storyland', name: 'project-storyland', component: ProjectStorylandPage },
  { path: '/projeler-ve-referanslar/e-makers', name: 'project-emakers', component: ProjectEMakersPage },
  { path: '/projeler-ve-referanslar/s-feds', name: 'project-sfeds', component: ProjectSFedsPage },
  { path: '/projeler-ve-referanslar/women', name: 'project-women', component: ProjectWomenPage },
  { path: '/projeler-ve-referanslar/digitrainer', name: 'project-digitrainer', component: ProjectDigitrainerPage },
  { path: '/projeler-ve-referanslar/water', name: 'project-water', component: ProjectWaterPage },
  { path: '/projeler-ve-referanslar/cizre', name: 'project-cizre', component: ProjectCizrePage },
  { path: '/projeler-ve-referanslar/kapidag-turizm', name: 'project-kapidag', component: ProjectKapidagPage },
  { path: '/projeler-ve-referanslar/siran1', name: 'project-siran', component: ProjectSiranPage },
  { path: '/projeler-ve-referanslar/siran2', name: 'project-siran2', component: ProjectSiran2Page },
  { path: '/projeler-ve-referanslar/surmene', name: 'project-surmene', component: ProjectSurmenePage },
  { path: '/projeler-ve-referanslar/artabel-golleri', name: 'project-artabel', component: ProjectArtabelPage },
  { path: '/projeler-ve-referanslar/kapidag', name: 'project-kapidag-thematic', component: ProjectKapidagThematicPage },
  { path: '/projeler-ve-referanslar/kapidag2', name: 'project-kapidag2', component: ProjectKapidag2Page },
  { path: '/projeler-ve-referanslar/gelibolu', name: 'project-gelibolu', component: ProjectGelibolouPage },
  { path: '/projeler-ve-referanslar/biga', name: 'project-biga', component: ProjectBigaPage },
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
