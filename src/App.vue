<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { locale, translate, setLocale } from './i18n.js'

const router = useRouter()
const searchOpen = ref(false)
const searchQuery = ref('')
const langOpen = ref(false)
const langDropdownRef = ref(null)
const searchDropdownRef = ref(null)

const currentLang = computed(() => locale.value.toUpperCase())

const searchIndex = computed(() => {
  if (locale.value === 'tr') {
    return [
      { title: 'Hizmetlerimiz', subtitle: 'Hizmet sayfası', to: '/services' },
      { title: 'İletişim', subtitle: 'İletişim sayfası', to: '/contact' },
      { title: 'Dijital Teknolojiler ve Yazılım Çözümleri', subtitle: 'Ana hizmet sayfası', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
      { title: 'Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği', subtitle: 'Dijital Teknolojiler bölümü', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
      { title: 'Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği', subtitle: 'Dijital Teknolojiler bölümü', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
      { title: 'Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması', subtitle: 'Dijital Teknolojiler bölümü', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
      { title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik', subtitle: 'Ana hizmet sayfası', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
      { title: 'Şehir Planlama ve Bölgesel Master Planlar', subtitle: 'Akıllı Kentler bölümü', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
      { title: 'Akıllı Şehirler, OSB’ler ve Endüstriyel Dijital İkiz Çözümleri', subtitle: 'Akıllı Kentler bölümü', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
      { title: 'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri', subtitle: 'Akıllı Kentler bölümü', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
      { title: 'Uluslararası Projeler ve Stratejik Finansman', subtitle: 'Ana hizmet sayfası', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
      { title: 'Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi', subtitle: 'Uluslararası Projeler bölümü', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
      { title: 'Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi', subtitle: 'Uluslararası Projeler bölümü', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
      { title: 'Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı', subtitle: 'Uluslararası Projeler bölümü', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
      { title: 'Kurumsal Politika ve Uyum', subtitle: 'Alt bilgi bölümü', to: '/contact' }
    ]
  }

  return [
    { title: 'Services', subtitle: 'Service hub', to: '/services' },
    { title: 'Contact', subtitle: 'Contact page', to: '/contact' },
    { title: 'Digital Technologies and Software Solutions', subtitle: 'Main service page', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
    { title: 'Geographic Information Systems and Spatial Data Analytics', subtitle: 'Digital Technologies section', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
    { title: 'Software Development and AI Systems Engineering', subtitle: 'Digital Technologies section', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
    { title: 'Cybersecurity Audits, Penetration Testing, and Risk Reporting', subtitle: 'Digital Technologies section', to: '/digital-teknolojiler-ve-yazilim-cozumleri' },
    { title: 'Smart Cities and Sustainable Urbanism', subtitle: 'Main service page', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
    { title: 'Urban Planning and Regional Master Plans', subtitle: 'Smart Cities section', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
    { title: 'Smart Cities, Industrial Zones, and Digital Twin Solutions', subtitle: 'Smart Cities section', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
    { title: 'Sustainable Urbanism, Green Transition, and Environmental Strategies', subtitle: 'Smart Cities section', to: '/akilli-kentler-ve-surdurulebilir-sehircilik' },
    { title: 'International Projects and Strategic Finance', subtitle: 'Main service page', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
    { title: 'EU Projects and Consortium Management', subtitle: 'International Projects section', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
    { title: 'International Tenders and Strategic Bid Management', subtitle: 'International Projects section', to: '/uluslararasi-projeler-ve-stratejik-finansman' },
    { title: 'International Credit, Financing, and Investment Advisory', subtitle: 'International Projects section', to: '/uluslararasi-projeler-ve-stratejik-finansman' }
  ]
})

const searchResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return []

  return searchIndex.value.filter((item) => {
    return item.title.toLowerCase().includes(query) || item.subtitle.toLowerCase().includes(query)
  }).slice(0, 8)
})

const serviceMenuItems = computed(() => {
  if (locale.value === 'tr') {
    return [
      {
        label: 'Dijital Teknolojiler ve Yazılım Çözümleri',
        to: '/digital-teknolojiler-ve-yazilim-cozumleri'
      },
      {
        label: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
        to: '/akilli-kentler-ve-surdurulebilir-sehircilik'
      },
      {
        label: 'Uluslararası Projeler ve Stratejik Finansman',
        to: '/uluslararasi-projeler-ve-stratejik-finansman'
      }
    ]
  }

  return [
    {
      label: 'Digital Technologies and Software Solutions',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri'
    },
    {
      label: 'Smart Cities and Sustainable Urbanism',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik'
    },
    {
      label: 'International Projects and Strategic Finance',
      to: '/uluslararasi-projeler-ve-stratejik-finansman'
    }
  ]
})

const footerServices = computed(() => {
  if (locale.value === 'tr') {
    return [
      {
        title: 'Dijital Teknolojiler ve Yazılım Çözümleri',
        to: '/digital-teknolojiler-ve-yazilim-cozumleri',
        items: [
          'Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği',
          'Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği',
          'Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması'
        ]
      },
      {
        title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
        to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
        items: [
          'Şehir Planlama ve Bölgesel Master Planlar',
          'Akıllı Şehirler, OSBler ve Endüstriyel Dijital İkiz Çözümleri',
          'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri'
        ]
      },
      {
        title: 'Uluslararası Projeler ve Stratejik Finansman',
        to: '/uluslararasi-projeler-ve-stratejik-finansman',
        items: [
          'Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi',
          'Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi',
          'Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı'
        ]
      }
    ]
  }

  return [
    {
      title: 'Digital Technologies and Software Solutions',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      items: [
        'GIS and Spatial Data Analytics',
        'Software Development and AI Systems Engineering',
        'Cybersecurity Audits, Pentesting and Risk Reporting'
      ]
    },
    {
      title: 'Smart Cities and Sustainable Urbanism',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      items: [
        'Urban Planning and Regional Master Plans',
        'Smart Cities, Industrial Zones and Digital Twin Solutions',
        'Sustainable Urbanism, Green Transition and Environmental Strategies'
      ]
    },
    {
      title: 'International Projects and Strategic Finance',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      items: [
        'EU Projects and Consortium Management',
        'International Tenders and Strategic Bid Management',
        'International Credit, Financing and Investment Advisory'
      ]
    }
  ]
})

const policyReports = computed(() => [
  {
    title: translate('policiesPage.cards.kvkk.title'),
    href: translate('policiesPage.links.kvkk'),
    external: true
  },
  {
    title: translate('policiesPage.cards.cookie.title'),
    href: translate('policiesPage.links.cookie'),
    external: false
  },
  {
    title: translate('policiesPage.cards.gep.title'),
    href: translate('policiesPage.links.gep'),
    external: true
  },
  {
    title: translate('policiesPage.cards.dei.title'),
    href: translate('policiesPage.links.dei'),
    external: true
  },
  {
    title: translate('policiesPage.cards.ethics.title'),
    href: translate('policiesPage.links.ethics'),
    external: true
  },
  {
    title: translate('policiesPage.cards.environment.title'),
    href: translate('policiesPage.links.environment'),
    external: true
  }
])

const footerLabels = computed(() => {
  if (locale.value === 'tr') {
    return {
      services: 'Hizmetlerimiz',
      policies: 'Kurumsal Politika ve Uyum',
      links: 'İlgili Bağlantılar',
      servicesQuick: 'HİZMETLERİMİZ',
      servicesName: 'Hizmetlerimiz',
      contactQuick: 'İLETİŞİM',
      contactName: 'İletişim',
      follow: 'Bizi Takip Edin',
      rights: 'Tüm hakları saklıdır.'
    }
  }

  return {
    services: 'Services',
    policies: 'Corporate Policy and Compliance',
    links: 'Related Links',
    servicesQuick: 'SERVICES',
    servicesName: 'Services',
    contactQuick: 'CONTACT',
    contactName: 'Contact',
    follow: 'Follow Us',
    rights: 'All rights reserved.'
  }
})

const openSearch = () => {
  searchOpen.value = true
}

const closeSearch = () => {
  searchOpen.value = false
  searchQuery.value = ''
}

const handleSearchSelect = (item) => {
  if (!item) return
  router.push(item.to)
  closeSearch()
}

const handleDocumentClick = (event) => {
  if (langOpen.value && langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
    langOpen.value = false
  }

  if (searchOpen.value && searchDropdownRef.value && !searchDropdownRef.value.contains(event.target)) {
    searchOpen.value = false
  }
}

const setLanguage = (lang) => {
  setLocale(lang)
  langOpen.value = false
}

const scrollToAbout = (event) => {
  event.preventDefault()
  if (router.currentRoute.value.path === '/') {
    const target = document.getElementById('about-heading')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return
  }

  router.push({ path: '/', hash: '#about-heading' })
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div class="app-shell">
    <header class="page-header">
      <router-link to="/" class="brand-logo">
        <img src="https://yadaglb.com/wp-content/uploads/2020/12/yada2-2.png" alt="YADA GLOBAL" class="brand-logo-image" />
      </router-link>

      <nav class="main-nav" aria-label="Main navigation">
        <button type="button" class="nav-link" @click="scrollToAbout">{{ translate('nav.about') }}</button>
        <div class="nav-dropdown">
          <router-link to="/services" class="nav-link nav-link-dropdown">
            {{ translate('nav.services') }}
            <span aria-hidden="true">▾</span>
          </router-link>
          <div class="nav-dropdown-menu" role="menu" aria-label="Service submenu">
            <router-link
              v-for="item in serviceMenuItems"
              :key="item.to"
              :to="item.to"
              class="nav-dropdown-item"
              role="menuitem"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
        <router-link to="/contact" class="nav-link">{{ translate('nav.contact') }}</router-link>
      </nav>

      <div class="header-tools">
        <div ref="searchDropdownRef" :class="['search-wrapper', { open: searchOpen }]">
          <button @click="openSearch" class="search-icon-btn" aria-label="Search">
            🔍
          </button>
          <input
            type="search"
            class="search-input"
            :placeholder="translate('searchPlaceholder')"
            aria-label="Search"
            v-model="searchQuery"
            :tabindex="searchOpen ? 0 : -1"
            @focus="openSearch"
            @keydown.esc="closeSearch"
            @keydown.enter.prevent="handleSearchSelect(searchResults[0])"
          />
          <div v-if="searchOpen && searchQuery.trim().length" class="search-results" role="listbox" aria-label="Search results">
            <button
              v-for="item in searchResults"
              :key="`${item.to}-${item.title}`"
              type="button"
              class="search-result-item"
              @click="handleSearchSelect(item)"
            >
              <strong>{{ item.title }}</strong>
              <span>{{ item.subtitle }}</span>
            </button>
            <p v-if="searchResults.length === 0" class="search-empty-state">{{ translate('searchNoResults') }}</p>
          </div>
        </div>

        <div class="lang-dropdown" ref="langDropdownRef" @click.stop>
          <button class="lang-switch" type="button" aria-haspopup="listbox" :aria-expanded="langOpen" @click="langOpen = !langOpen">
            {{ currentLang }} ▾
          </button>
          <div v-if="langOpen" class="lang-options" role="listbox">
            <button type="button" class="lang-option" @click="setLanguage('en')">EN</button>
            <button type="button" class="lang-option" @click="setLanguage('tr')">TR</button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="site-footer-grid page-wrapper">
        <section class="footer-brand-col">
          <img src="https://yadaglb.com/wp-content/uploads/2020/12/yada2-2.png" alt="YADA GLOBAL" class="footer-logo" />
          <p>{{ translate('contactPage.description') }}</p>
          <h2>{{ footerLabels.links }}</h2>
          <div class="footer-related-links">
            <router-link to="/services" class="footer-related-item">
              <span>{{ footerLabels.servicesQuick }}</span>
              <strong>{{ footerLabels.servicesName }}</strong>
            </router-link>
            <router-link to="/contact" class="footer-related-item">
              <span>{{ footerLabels.contactQuick }}</span>
              <strong>{{ footerLabels.contactName }}</strong>
            </router-link>
          </div>
          <p class="footer-follow">{{ footerLabels.follow }}</p>
          <div class="footer-social-row">
            <a href="https://www.linkedin.com/company/yadaglobal/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/yadaglobal/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/globalyada" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </section>

        <section class="footer-services-col">
          <h2>{{ footerLabels.services }}</h2>
          <div v-for="service in footerServices" :key="service.title" class="footer-service-group">
            <router-link :to="service.to" class="footer-service-title">{{ service.title }}</router-link>
            <ul>
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>

        <section class="footer-policies-col">
          <h2>{{ footerLabels.policies }}</h2>
          <ul>
            <li v-for="report in policyReports" :key="report.title">
              <a v-if="report.external" :href="report.href" target="_blank" rel="noopener noreferrer">{{ report.title }}</a>
              <router-link v-else :to="report.href">{{ report.title }}</router-link>
            </li>
          </ul>
        </section>
      </div>

      <div class="site-footer-bottom">
        <p>© {{ new Date().getFullYear() }} Yada Global. {{ footerLabels.rights }}</p>
      </div>
    </footer>
  </div>
</template>
