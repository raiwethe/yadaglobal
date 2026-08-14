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

// Normalize Turkish casing and accents so i, ı, İ, and I match consistently.
const normalize = (str) =>
  String(str ?? '')
    .replace(/[İIı]/g, 'i')
    .toLocaleLowerCase('en-US')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const projectSearchItems = {
  tr: [
    { title: 'SHORE', subtitle: 'Çevre Bilinci ve Eylemi için Okyanus Okuryazarlığı', to: '/projeler-ve-referanslar/shore', keywords: ['okyanus', 'eğitim', 'iş birliği'] },
    { title: 'Cizre Tarih, Kültür, İnanç Turizm Rotalarının Oluşturulması', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/cizre', keywords: ['cizre', 'turizm', 'rota'] },
    { title: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/siran1', keywords: ['şiran', 'turizm', 'master plan'] },
    { title: 'Artabel Gölleri Tabiat Parkı Yaratıcı Turizm Konsept Master Planı', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/artabel-golleri', keywords: ['artabel', 'doğa', 'turizm'] },
    { title: 'Sürmene Yeniçam Tersane Alanı Gelişim ve İyileştirme Çalışması', subtitle: 'OSB Geliştirme', to: '/projeler-ve-referanslar/surmene', keywords: ['sürmene', 'tersane', 'osb', 'üretim'] },
    { title: 'Kapıdağ Yarımadası Tematik Planlama, Bağlamsal Tasarım ve Vizyon Oluşturma Projesi', subtitle: 'Tematik Planlama', to: '/projeler-ve-referanslar/kapidag', keywords: ['kapıdağ', 'tematik planlama', 'vizyon'] },
    { title: 'Gelibolu Merkezi Yaratıcı Turizm Konsept Planları', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/gelibolu', keywords: ['gelibolu', 'turizm', 'konsept'] },
    { title: 'Çanakkale Biga Ramazanlar Mahallesi GES Planlama ve Sürdürülebilirlik Danışmanlığı', subtitle: 'Mekânsal Planlama ve Teknik Danışmanlık', to: '/projeler-ve-referanslar/biga', keywords: ['biga', 'ges', 'güneş enerjisi', 'sürdürülebilirlik', 'ramazanlar'] },
    { title: 'Dijital Portföy', subtitle: 'Dijital Portföy Yönetim Hizmeti', to: '/projeler-ve-referanslar/digital', keywords: ['dijital', 'portföy', 'veri'] },
    { title: 'Dijital İkiz', subtitle: 'Dijital İkiz Yönetim Hizmeti', to: '/projeler-ve-referanslar/digitalikiz', keywords: ['dijital ikiz', 'veri', 'modelleme'] }
  ],
  en: [
    { title: 'SHORE', subtitle: 'Ocean Literacy for Environmental Awareness and Action', to: '/projeler-ve-referanslar/shore', keywords: ['ocean', 'education', 'collaboration'] },
    { title: 'Creating Historical, Cultural, and Faith Tourism Routes in Cizre', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/cizre', keywords: ['cizre', 'tourism', 'routes'] },
    { title: 'Artabel Lakes Nature Park Creative Tourism Concept Master Plan', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/artabel-golleri', keywords: ['artabel', 'nature', 'tourism'] },
    { title: 'Sürmene Yeniçam Shipyard Area Development and Improvement Study', subtitle: 'OIZ Development', to: '/projeler-ve-referanslar/surmene', keywords: ['sürmene', 'shipyard', 'oiz', 'production'] },
    { title: 'Kapıdağ Peninsula Thematic Planning, Contextual Design and Vision Creation Project', subtitle: 'Thematic Planning', to: '/projeler-ve-referanslar/kapidag', keywords: ['kapidag', 'thematic planning', 'vision'] },
    { title: 'Gelibolu Center Creative Tourism Concept Plans', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/gelibolu', keywords: ['gelibolu', 'tourism', 'concept'] },
    { title: 'Çanakkale Biga Ramazanlar Solar Power Plant Planning and Sustainability Advisory', subtitle: 'Spatial Planning and Technical Advisory', to: '/projeler-ve-referanslar/biga', keywords: ['biga', 'solar power', 'spp', 'sustainability', 'ramazanlar'] },
    { title: 'Digital Portfolio', subtitle: 'Digital Portfolio Management Service', to: '/projeler-ve-referanslar/digital', keywords: ['digital', 'portfolio', 'data'] },
    { title: 'Digital Twin', subtitle: 'Digital Twin Management Service', to: '/projeler-ve-referanslar/digitalikiz', keywords: ['digital twin', 'data', 'modeling'] }
  ]
}

const searchIndex = computed(() => {
  if (locale.value === 'tr') {
    return [
      { title: 'Hizmetlerimiz', subtitle: 'Hizmet sayfası', to: '/services', keywords: ['hizmet', 'servis'] },
      { title: 'İletişim', subtitle: 'İletişim sayfası', to: '/contact', keywords: ['telefon', 'adres', 'email', 'faks', 'harita'] },
      { title: 'Dijital Teknolojiler ve Yazılım Çözümleri', subtitle: 'Ana hizmet sayfası', to: '/digital-teknolojiler-ve-yazilim-cozumleri', keywords: ['dijital', 'yazılım', 'teknoloji'] },
      { title: 'Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği', subtitle: 'Dijital Teknolojiler › CBS / GIS', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'gis', keywords: ['CBS', 'GIS', 'harita', 'uzaktan algılama', 'uydu', 'lokasyon', 'mekansal', 'coğrafi', 'radar', 'analitik', 'mekânsal'] },
      { title: 'Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği', subtitle: 'Dijital Teknolojiler › Yapay Zeka', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'ai', keywords: ['yapay zeka', 'AI', 'yazılım', 'SaaS', 'bulut', 'mobil', 'uygulama', 'LLM', 'IoT', 'API', 'makine öğrenmesi'] },
      { title: 'Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması', subtitle: 'Dijital Teknolojiler › Siber Güvenlik', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'security', keywords: ['siber güvenlik', 'pentest', 'sızma testi', 'güvenlik', 'ISO 27001', 'NIS2', 'zafiyet', 'risk', 'red team'] },
      { title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik', subtitle: 'Ana hizmet sayfası', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', keywords: ['akıllı kent', 'şehircilik', 'kentsel'] },
      { title: 'Şehir Planlama ve Bölgesel Master Planlar', subtitle: 'Akıllı Kentler › Şehir Planlama', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'planning', keywords: ['imar', 'master plan', 'bölge planı', 'kentsel tasarım', 'planlama', 'üst ölçek', 'arazi'] },
      { title: "Akıllı Şehirler, OSB'ler ve Endüstriyel Dijital İkiz Çözümleri", subtitle: 'Akıllı Kentler › Dijital İkiz / OSB', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'digital-twin', keywords: ['OSB', 'dijital ikiz', 'endüstriyel', 'organize sanayi', 'SCADA', 'IoT', 'sensör', 'twin'] },
      { title: 'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri', subtitle: 'Akıllı Kentler › Sürdürülebilirlik', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'sustainability', keywords: ['yeşil dönüşüm', 'çevre', 'SUMP', 'iklim', 'karbon', 'ESG', 'sürdürülebilir', 'emisyon'] },
      { title: 'Uluslararası Projeler ve Stratejik Finansman', subtitle: 'Ana hizmet sayfası', to: '/uluslararasi-projeler-ve-stratejik-finansman', keywords: ['uluslararası', 'proje', 'finansman'] },
      { title: 'Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi', subtitle: 'Uluslararası Projeler › AB / Horizon', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'eu-projects', keywords: ['AB', 'Avrupa', 'Horizon', 'Erasmus', 'konsorsiyum', 'hibe', 'LIFE', 'Interreg', 'DUT', 'CoVE', 'EUREKA'] },
      { title: 'Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi', subtitle: 'Uluslararası Projeler › İhale / Teklif', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'bid-management', keywords: ['ihale', 'teklif', 'World Bank', 'UNDP', 'EBRD', 'GIZ', 'ICMPD', 'bid', 'tender', 'procurement'] },
      { title: 'Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı', subtitle: 'Uluslararası Projeler › Kredi / Yatırım', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'finance', keywords: ['kredi', 'yatırım', 'fizibilite', 'yeşil finansman', 'EIB', 'IsDB', 'NPV', 'IRR', 'ROI', 'green bond', 'ESG'] },
      ...projectSearchItems.tr
    ]
  }

  return [
    { title: 'Services', subtitle: 'Service hub', to: '/services', keywords: ['service'] },
    { title: 'Contact', subtitle: 'Contact page', to: '/contact', keywords: ['phone', 'address', 'email', 'fax', 'map'] },
    { title: 'Digital Technologies and Software Solutions', subtitle: 'Main service page', to: '/digital-teknolojiler-ve-yazilim-cozumleri', keywords: ['digital', 'software', 'technology'] },
    { title: 'Geographic Information Systems and Spatial Analytics', subtitle: 'Digital Technologies › GIS', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'gis', keywords: ['GIS', 'CBS', 'map', 'remote sensing', 'satellite', 'location', 'spatial', 'geospatial', 'radar'] },
    { title: 'Software Development and AI Systems Engineering', subtitle: 'Digital Technologies › AI & Software', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'ai', keywords: ['AI', 'software', 'SaaS', 'cloud', 'mobile', 'app', 'LLM', 'IoT', 'API', 'machine learning'] },
    { title: 'Cybersecurity Audits, Penetration Testing, and Risk Reporting', subtitle: 'Digital Technologies › Cybersecurity', to: '/digital-teknolojiler-ve-yazilim-cozumleri', tab: 'security', keywords: ['cybersecurity', 'pentest', 'penetration', 'security', 'ISO 27001', 'NIS2', 'vulnerability', 'risk', 'red team'] },
    { title: 'Smart Cities and Sustainable Urbanism', subtitle: 'Main service page', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', keywords: ['smart city', 'urbanism', 'urban'] },
    { title: 'Urban Planning and Regional Master Plans', subtitle: 'Smart Cities › Urban Planning', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'planning', keywords: ['zoning', 'master plan', 'regional plan', 'urban design', 'planning', 'land use'] },
    { title: 'Smart Cities, Industrial Zones, and Digital Twin Solutions', subtitle: 'Smart Cities › Digital Twin / OSB', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'digital-twin', keywords: ['OSB', 'digital twin', 'industrial zone', 'SCADA', 'IoT', 'sensor', 'twin'] },
    { title: 'Sustainable Urbanism, Green Transition, and Environmental Strategies', subtitle: 'Smart Cities › Sustainability', to: '/akilli-kentler-ve-surdurulebilir-sehircilik', tab: 'sustainability', keywords: ['green transition', 'environment', 'SUMP', 'climate', 'carbon', 'ESG', 'sustainable', 'emission'] },
    { title: 'International Projects and Strategic Finance', subtitle: 'Main service page', to: '/uluslararasi-projeler-ve-stratejik-finansman', keywords: ['international', 'project', 'finance'] },
    { title: 'EU Projects and Consortium Management', subtitle: 'International Projects › EU / Horizon', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'eu-projects', keywords: ['EU', 'Europe', 'Horizon', 'Erasmus', 'consortium', 'grant', 'LIFE', 'Interreg', 'DUT', 'CoVE', 'EUREKA'] },
    { title: 'International Tenders and Strategic Bid Management', subtitle: 'International Projects › Tenders', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'bid-management', keywords: ['tender', 'bid', 'World Bank', 'UNDP', 'EBRD', 'GIZ', 'ICMPD', 'procurement', 'proposal'] },
    { title: 'International Credit, Financing, and Investment Advisory', subtitle: 'International Projects › Finance', to: '/uluslararasi-projeler-ve-stratejik-finansman', tab: 'finance', keywords: ['credit', 'investment', 'feasibility', 'green finance', 'EIB', 'IsDB', 'NPV', 'IRR', 'ROI', 'green bond', 'ESG'] },
    ...projectSearchItems.en
  ]
})

const searchResults = computed(() => {
  const query = normalize(searchQuery.value.trim())
  if (!query) return []

  return searchIndex.value.filter((item) => {
    const text = normalize([item.title, item.subtitle, ...(item.keywords ?? [])].join(' '))
    return text.includes(query)
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
      services: 'HİZMETLERİMİZ',
      policies: 'KURUMSAL POLİTİKA VE UYUM',
      links: 'İlgili Bağlantılar',
      servicesQuick: 'HİZMETLERİMİZ',
      servicesName: 'Hizmetlerimiz',
      contactQuick: 'İLETİŞİM',
      contactName: 'İletişim',
      follow: 'BİZİ TAKİP EDİN',
      rights: 'Tüm hakları saklıdır.'
    }
  }

  return {
    services: 'SERVICES',
    policies: 'CORPORATE POLICY AND COMPLIANCE',
    links: 'Related Links',
    servicesQuick: 'SERVICES',
    servicesName: 'Services',
    contactQuick: 'CONTACT',
    contactName: 'Contact',
    follow: 'FOLLOW US',
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
  router.push(item.tab ? { path: item.to, query: { tab: item.tab } } : item.to)
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
        <router-link to="/" class="nav-link">{{ translate('nav.home') }}</router-link>
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
        <router-link to="/projeler-ve-referanslar" class="nav-link">{{ translate('nav.projects') }}</router-link>
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
      <div class="site-footer-top-bar" aria-hidden="true"></div>

      <div class="site-footer-grid">
        <section class="footer-brand-col">
          <img src="https://yadaglb.com/wp-content/uploads/2020/12/yada2-2.png" alt="YADA GLOBAL" class="footer-logo" />
          <p>{{ translate('contactPage.description') }}</p>
          <div class="footer-related-links">
            <router-link to="/services" class="footer-related-item">
              <strong>{{ footerLabels.servicesName }}</strong>
            </router-link>
            <router-link to="/contact" class="footer-related-item">
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
