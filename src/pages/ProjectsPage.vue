<script setup>
import { ref, computed } from 'vue'
import { locale } from '../i18n.js'

const activeFilter = ref('all')

const content = {
  tr: {
    kicker: 'PROJELER & REFERANSLAR',
    title: 'FİKİRDEN ETKİYE,\nPROJEDEN GELECEĞE.',
    description: 'Ulusal ve uluslararası ölçekte geliştirdiğimiz projeler ve iş birlikleriyle sürdürülebilir, yenilikçi ve ölçülebilir çözümler üretiyoruz.',
    stats: [
      { icon: '💼', value: '50+', label: 'Tamamlanan Proje' },
      { icon: '🤝', value: '30+', label: 'Uluslararası İş Birliği' },
      { icon: '🌍', value: '15+', label: 'Ülke' },
      { icon: '📈', value: '10+', label: 'Yıl Deneyim' }
    ],
    filters: [
      { key: 'all', label: 'TÜMÜ' },
      { key: 'international', label: 'ULUSLARARASI PROJELER' },
      { key: 'urban', label: 'ŞEHİRCİLİK & PLANLAMA' },
      { key: 'digital', label: 'DİJİTAL TEKNOLOJİLER' },
      { key: 'sustainability', label: 'SÜRDÜRÜLEBİLİRLİK' },
      { key: 'education', label: 'EĞİTİM & GENÇLİK' }
    ],
    viewAll: 'TÜM PROJELERİ GÖR',
    partnersTitle: 'İŞ BİRLİĞİ YAPTIĞIMIZ KURUMLAR'
  },
  en: {
    kicker: 'PROJECTS & REFERENCES',
    title: 'FROM IDEA TO IMPACT,\nFROM PROJECT TO FUTURE.',
    description: 'We develop sustainable, innovative, and measurable solutions through projects and partnerships at national and international scale.',
    stats: [
      { icon: '💼', value: '50+', label: 'Completed Projects' },
      { icon: '🤝', value: '30+', label: 'International Partners' },
      { icon: '🌍', value: '15+', label: 'Countries' },
      { icon: '📈', value: '10+', label: 'Years of Experience' }
    ],
    filters: [
      { key: 'all', label: 'ALL' },
      { key: 'international', label: 'INTERNATIONAL PROJECTS' },
      { key: 'urban', label: 'URBAN & PLANNING' },
      { key: 'digital', label: 'DIGITAL TECHNOLOGIES' },
      { key: 'sustainability', label: 'SUSTAINABILITY' },
      { key: 'education', label: 'EDUCATION & YOUTH' }
    ],
    viewAll: 'VIEW ALL PROJECTS',
    partnersTitle: 'PARTNER INSTITUTIONS'
  }
}

const projects = [
  {
    slug: 'shore',
    route: '/projeler-ve-referanslar/shore',
    badge: { tr: 'HORIZON EUROPE', en: 'HORIZON EUROPE' },
    title: { tr: 'SHORE', en: 'SHORE' },
    description: { tr: 'Ocean Literacy for Environmental Awareness and Action', en: 'Ocean Literacy for Environmental Awareness and Action' },
    location: { tr: '9 Ülke', en: '9 Countries' },
    image: '/images/references/shore.png',
    category: 'international'
  },
  {
    slug: 'artabel-golleri',
    route: null,
    badge: { tr: 'TURİZM PLANLAMASI', en: 'TOURISM PLANNING' },
    title: { tr: 'Artabel Gölleri Tabiat Parkı', en: 'Artabel Lakes Nature Park' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Gümüşhane, Türkiye', en: 'Gümüşhane, Türkiye' },
    image: '/images/references/artabel-golleri.jpg',
    category: 'urban'
  },
  {
    slug: 'kapidag-turizm',
    route: null,
    badge: { tr: 'TURİZM PLANLAMASI', en: 'TOURISM PLANNING' },
    title: { tr: 'Kapıdağ Yarımadası Turizm Master Planı', en: 'Kapıdağ Peninsula Tourism Master Plan' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Erdek, Balıkesir, Türkiye', en: 'Erdek, Balıkesir, Türkiye' },
    image: '/images/references/kapidag-turizm.jpg',
    category: 'urban'
  },
  {
    slug: 'blue-economy-innovators',
    route: null,
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'Blue Economy Innovators', en: 'Blue Economy Innovators' },
    description: { tr: 'Gençler için Mavi Ekonomi Yenilikçilik Programı', en: 'Blue Economy Innovation Programme for Youth' },
    location: { tr: 'Avrupa Birliği', en: 'European Union' },
    image: '/images/references/blue-economy-innovators.jpg',
    category: 'international'
  },
  {
    slug: 'o-live',
    route: null,
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'O-LIVE', en: 'O-LIVE' },
    description: { tr: "Zeytin Odaklı Girişimcilik ve NEETler için Eğitim Programı", en: 'Olive-Focused Entrepreneurship & Training for NEETs' },
    location: { tr: 'Avrupa Birliği', en: 'European Union' },
    image: '/images/references/o-live.jpg',
    category: 'international'
  },
  {
    slug: 'eko-uyanus',
    route: null,
    badge: { tr: 'GENÇLİK PROJESİ', en: 'YOUTH PROJECT' },
    title: { tr: 'Eko-Uyanış', en: 'Eco-Awakening' },
    description: { tr: 'İklim Kaygısı ve Gençlerin Ruh Sağlığı Farkındalığı', en: 'Climate Anxiety and Youth Mental Health Awareness' },
    location: { tr: 'Türkiye', en: 'Türkiye' },
    image: '/images/references/eko-uyanus.jpg',
    category: 'education'
  }
]

const institutions = [
  'Ankara Metropolitan Municipality.png',
  'beLogo.png',
  'BODEF.png',
  'Cankaya Municipality.png',
  'Cizre-municipality.png',
  'dikalogo1.png',
  'Dogu_Karadeniz_Kalkinma_Ajansi.png',
  'Ecotech.png',
  'Erdek Municipality.png',
  'EuPro.png',
  'Formacion Academia_Barcelona.png',
  'gelibolu-municipality.png',
  'General Directorate of Highways.png',
  'Giresun Municipality.png',
  'GMKA_Logo.png',
  'Ministry of Agriculture and Forestry.png',
  'Ministry of Culture and Tourism.png',
  'Ministry of Energy.png',
  'Ministry of Environment, Urbanization and Climate Change.png',
  'Ministry of Industry and Technology.png',
  'Ministry of Transport and Infrastructure.png',
  'MinistryofEducation.png',
  'NaturelDer.png',
  'Portas.png',
  'RDS_Holding.png',
  'rs yatay copy.png',
  'SilivriBelediyesi_Logo.png',
  'Siran Municipality.png',
  'Surmene Municipality.png',
  'TOKİ.png',
  'Torul Municipality.png',
  'tossfed_beyaz_zemin_logo.png',
  'Trabzon Metropolitan Municipality.png',
  'xul.png',
  'Yildiz_Teknik_Universitesi_Teknopark.png',
  'İlbank.png'
]

// duplicate for seamless infinite scroll
const sliderLogos = [...institutions, ...institutions]

const showAllPartners = ref(false)

const localizedContent = computed(() => content[locale.value] ?? content.en)

const viewAllLabel = computed(() => locale.value === 'tr' ? 'Tümünü Gör' : 'View All')
const collapseLabel = computed(() => locale.value === 'tr' ? 'Gizle' : 'Collapse')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

const getField = (obj) => obj[locale.value] ?? obj.en
</script>

<template>
  <div class="page-wrapper page-content projects-page">

    <!-- Hero -->
    <header class="projects-hero">
      <div class="projects-hero-overlay"></div>
      <div class="projects-hero-body">
        <div class="projects-hero-copy">
          <p class="projects-kicker">{{ localizedContent.kicker }}</p>
          <h1 class="projects-hero-title">{{ localizedContent.title }}</h1>
          <p class="projects-hero-desc">{{ localizedContent.description }}</p>
        </div>
        <div class="projects-hero-stats">
          <div v-for="stat in localizedContent.stats" :key="stat.label" class="projects-stat">
            <span class="projects-stat-icon">{{ stat.icon }}</span>
            <span class="projects-stat-value">{{ stat.value }}</span>
            <span class="projects-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Filters -->
    <nav class="projects-filters" aria-label="Proje filtreleri">
      <button
        v-for="filter in localizedContent.filters"
        :key="filter.key"
        type="button"
        class="projects-filter-btn"
        :class="{ active: activeFilter === filter.key }"
        @click="activeFilter = filter.key"
      >
        {{ filter.label }}
      </button>
    </nav>

    <!-- Project Grid -->
    <section class="projects-grid" aria-label="Projeler">
      <component
        v-for="project in filteredProjects"
        :key="project.slug"
        :is="project.route ? 'router-link' : 'article'"
        :to="project.route || undefined"
        class="project-card"
        :style="{ backgroundImage: `url(${project.image})` }"
      >
        <div class="project-card-overlay"></div>
        <span class="project-badge">{{ getField(project.badge) }}</span>
        <div class="project-card-body">
          <h3 class="project-title">{{ getField(project.title) }}</h3>
          <p class="project-desc">{{ getField(project.description) }}</p>
          <div class="project-footer">
            <span class="project-location">📍 {{ getField(project.location) }}</span>
            <button type="button" class="project-arrow" aria-label="Detay">→</button>
          </div>
        </div>
      </component>
    </section>

    <!-- View All -->
    <div class="projects-view-all-wrap">
      <button type="button" class="projects-view-all-btn">
        {{ localizedContent.viewAll }} →
      </button>
    </div>

    <!-- Partner Institutions -->
    <section class="projects-partners" aria-labelledby="partners-heading">
      <div class="projects-partners-header">
        <h2 id="partners-heading" class="projects-partners-title">{{ localizedContent.partnersTitle }}</h2>
        <button type="button" class="partners-view-all-btn" @click="showAllPartners = !showAllPartners">
          {{ showAllPartners ? collapseLabel : viewAllLabel }} →
        </button>
      </div>

      <!-- Infinite slider (default) -->
      <div v-if="!showAllPartners" class="partners-slider-track-wrap" aria-hidden="true">
        <div class="partners-slider-track">
          <div
            v-for="(logo, i) in sliderLogos"
            :key="`logo-${i}`"
            class="partner-logo-cell"
          >
            <img
              :src="`/images/reference_institutions/${logo}`"
              :alt="logo.replace(/\.[^.]+$/, '')"
              class="partner-logo-img"
            />
          </div>
        </div>
      </div>

      <!-- Full grid (expanded) -->
      <div v-else class="partners-full-grid">
        <div
          v-for="logo in institutions"
          :key="logo"
          class="partner-full-card"
        >
          <img
            :src="`/images/reference_institutions/${logo}`"
            :alt="logo.replace(/\.[^.]+$/, '')"
            class="partner-full-img"
          />
        </div>
      </div>
    </section>

  </div>
</template>
