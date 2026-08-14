<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { locale } from '../i18n.js'

const activeFilter = ref('all')
const activeProjectPage = ref(0)
const showAllProjects = ref(false)
let projectRotationTimer

const content = {
  tr: {
    kicker: 'PROJELER & REFERANSLAR',
    title: 'FİKİRDEN ETKİYE,\nPROJEDEN GELECEĞE.',
    description: 'Ulusal ve uluslararası ölçekte geliştirdiğimiz projeler ve iş birlikleriyle sürdürülebilir, yenilikçi ve ölçülebilir çözümler üretiyoruz.',
    stats: [
      { icon: '💼', value: '20+', label: 'Tamamlanan Proje' },
      { icon: '🤝', value: '30+', label: 'Uluslararası İş Birliği' },
      { icon: '🌍', value: '25+', label: 'Ülke' },
      { icon: '📈', value: '10+', label: 'Yıl Deneyim' }
    ],
    filters: [
      { key: 'all', label: 'TÜMÜ' },
      { key: 'international', label: 'ULUSLARARASI PROJELER' },
      { key: 'urban', label: 'ŞEHİRCİLİK & PLANLAMA' },
      { key: 'digital', label: 'DİJİTAL TEKNOLOJİLER' },
      
    ],
    viewAll: 'TÜM PROJELERİ GÖR',
    partnersTitle: 'İŞ BİRLİĞİ YAPTIĞIMIZ KURUMLAR'
  },
  en: {
    kicker: 'PROJECTS & REFERENCES',
    title: 'FROM IDEA TO IMPACT,\nFROM PROJECT TO FUTURE.',
    description: 'We develop sustainable, innovative, and measurable solutions through projects and partnerships at national and international scale.',
    stats: [
      { icon: '💼', value: '20+', label: 'Completed Projects' },
      { icon: '🤝', value: '30+', label: 'International Partners' },
      { icon: '🌍', value: '25+', label: 'Countries' },
      { icon: '📈', value: '10+', label: 'Years of Experience' }
    ],
    filters: [
      { key: 'all', label: 'ALL' },
      { key: 'international', label: 'INTERNATIONAL PROJECTS' },
      { key: 'urban', label: 'URBAN & PLANNING' },
      { key: 'digital', label: 'DIGITAL TECHNOLOGIES' },
     
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
    description: { tr: 'Çevre Bilinci ve Eylemi için Okyanus Okuryazarlığı', en: 'Ocean Literacy for Environmental Awareness and Action' },
    location: { tr: 'AB Projesi, 9 Ülke', en: 'EU Project, 9 Countries' },
    image: '/images/references/shore.png',
    category: 'international'
  },
  {
    slug: 'cizre',
    route: '/projeler-ve-referanslar/cizre',
    badge: { tr: 'TURİZM PLANLAMASI', en: 'TOURISM PLANNING' },
    title: { tr: 'Cizre Tarih, Kültür,İnanç Turizm Rotalarının Oluşturulması', en: 'Creating Historical, Cultural, and Faith Tourism Routes in Cizre' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Cizre, Şırnak, Türkiye', en: 'Cizre, Şırnak, Turkey' },
    image: '/images/references/cizre.png',
    category: 'urban'
  },
  {
    slug: 'siran',
    route: '/projeler-ve-referanslar/siran1',
    badge: { tr: 'YARATICI KONSEPT TURİZM MASTER PLAN', en: 'CREATIVE CONCEPT TOURISM MASTER PLAN' },
    title: { tr: 'Şiran Kuzey–Güney Koridoru Yaratıcı Turizm Konsept Master Planı', en: 'Şiran North–South Corridor Creative Tourism Concept Master Plan' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Şiran, Gümüşhane, Türkiye', en: 'Şiran, Gümüşhane, Türkiye' },
    image: '/images/references/siran1.png',
    category: 'urban'
  },
  {
    slug: 'siran2',
    route: '/projeler-ve-referanslar/siran2',
    badge: { tr: 'MASTER PLAN MODELLEME VE TAHMİNİ MALİYET', en: 'MASTER PLAN MODELING AND ESTIMATED COST' },
    title: { tr: 'Şiran Kuzey Güney Koridoru Yaratıcı Turizm Konsept Master Planı Modelleme ve Tahmini Maliyet', en: 'Şiran North–South Corridor Creative Tourism Concept Master Plan Modeling and Estimated Cost' },
    description: { tr: 'Modelleme ve Tahmini Maliyet', en: 'Modeling and Estimated Cost' },
    location: { tr: 'Şiran, Gümüşhane, Türkiye', en: 'Şiran, Gümüşhane, Türkiye' },
    image: '/images/references/siran2.png',
    category: 'urban'
  },
  {
    slug: 'artabel-golleri',
    route: '/projeler-ve-referanslar/artabel-golleri',
    badge: { tr: 'YARATICI KONSEPT TURİZM MASTER PLAN', en: 'CREATIVE CONCEPT TOURISM MASTER PLAN' },
    title: { tr: 'Artabel Gölleri Tabiat Parkı Yaratıcı Turizm Konsept Master Planı', en: 'Artabel Lakes Nature Park Creative Tourism Concept Master Plan' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Torul, Gümüşhane, Türkiye', en: 'Torul, Gümüşhane, Türkiye' },
    image: '/images/references/artabel-golleri.png',
    category: 'urban'
  },
  {
    slug: 'surmene',
    route: '/projeler-ve-referanslar/surmene',
    badge: { tr: 'FİZİBİLİTE ÇALIŞMASI', en: 'FEASIBILITY STUDY' },
    title: { tr: 'Sürmene Yeniçam Tersane Alanı Gelişim ve İyileştirme Çalışması', en: 'Sürmene Yeniçam Shipyard Area Development and Improvement Study' },
    description: { tr: 'OSB Geliştirme', en: 'OIZ Development' },
    location: { tr: 'Sürmene, Trabzon, Türkiye', en: 'Sürmene, Trabzon, Türkiye' },
    image: '/images/references/surmene.png',
    category: 'urban'
  },
  {
    slug: 'kapidag',
    route: '/projeler-ve-referanslar/kapidag',
    badge: { tr: 'TEMATİK PLANLAMA', en: 'THEMATIC PLANNING' },
    title: { tr: 'Kapıdağ Yarımadası Tematik Planlama, Bağlamsal Tasarım ve Vizyon Oluşturma Projesi', en: 'Kapıdağ Peninsula Thematic Planning, Contextual Design and Vision Creation Project' },
    description: { tr: 'Tematik Planlama', en: 'Thematic Planning' },
    location: { tr: 'Erdek, Balıkesir, Türkiye', en: 'Erdek, Balıkesir, Türkiye' },
    image: '/images/references/kapidag.png',
    category: 'urban'
  },
  {
    slug: 'kapidag2',
    route: '/projeler-ve-referanslar/kapidag2',
    badge: { tr: 'YARATICI KONSEPT TURİZM MASTER PLAN', en: 'CREATIVE CONCEPT TOURISM MASTER PLAN' },
    title: { tr: 'Kapıdağ Yarımadası Yaratıcı Turizm Konsept Planları', en: 'Kapıdağ Peninsula Creative Tourism Concept Plans' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Erdek, Balıkesir, Türkiye', en: 'Erdek, Balıkesir, Türkiye' },
    image: '/images/references/kapidag2.png',
    category: 'urban'
  },
  {
    slug: 'gelibolu',
    route: '/projeler-ve-referanslar/gelibolu',
    badge: { tr: 'YARATICI KONSEPT TURİZM MASTER PLAN', en: 'CREATIVE CONCEPT TOURISM MASTER PLAN' },
    title: { tr: 'Gelibolu Merkezi Yaratıcı Turizm Konsept Planları', en: 'Gelibolu Center Creative Tourism Concept Plans' },
    description: { tr: 'Turizm Master Planı', en: 'Tourism Master Plan' },
    location: { tr: 'Gelibolu, Çanakkale, Türkiye', en: 'Gelibolu, Çanakkale, Türkiye' },
    image: '/images/references/gelibolu.png',
    category: 'urban'
  },
  {
    slug: 'biga',
    route: '/projeler-ve-referanslar/biga',
    badge: { tr: 'GES PLANLAMA VE SÜRDÜRÜLEBİLİRLİK', en: 'SPP PLANNING AND SUSTAINABILITY' },
    title: { tr: 'Biga Ramazanlar GES Planlama', en: 'Biga Ramazanlar SPP Planning' },
    description: { tr: 'Mekânsal Planlama ve Teknik Danışmanlık', en: 'Spatial Planning and Technical Consulting' },
    location: { tr: 'Biga, Çanakkale, Türkiye', en: 'Biga, Çanakkale, Türkiye' },
    image: '/images/references/biga.png',
    category: 'urban'
  },
  {
    slug: 'storyland',
    route: '/projeler-ve-referanslar/storyland',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'Storyland', en: 'Storyland' },
    description: { tr: 'Yetişkinler İçin Yeni E-Sanatsal İngilizce Öğrenme Yaklaşımı', en: 'New e-Artistic English Learning Approach for Adults' },
    location: { tr: 'AB Projesi, 4 Ülke', en: 'EU Project, 4 Countries' },
    image: '/images/references/storyland.png',
    category: 'international'
  },
  {
    slug: 'e-makers',
    route: '/projeler-ve-referanslar/e-makers',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'E-MAKERS', en: 'E-MAKERS' },
    description: { tr: "Yaratıcı Dil Öğrenimi için Dijital Hikaye Anlatımı", en: 'Digital Storytelling for Creative Language Learning' },
    location: { tr: 'AB Projesi, 4 Ülke', en: 'EU Project, 4 Countries' },
    image: '/images/references/emakers.png',
    category: 'international'
  },
  {
    slug: 's-feds',
    route: '/projeler-ve-referanslar/s-feds',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'S-FEDs', en: 'S-FEDs' },
    description: { tr: 'Daha Güçlü Aile Desteğiyle Kapsayıcı Sporlar', en: 'Inclusive Sports Through Stronger Family Support' },
    location: { tr: 'AB Projesi, 6 Ülke', en: 'EU Project, 6 Countries' },
    image: '/images/references/s-feds.png',
    category: 'international'
  },
  {
    slug: 'women',
    route: '/projeler-ve-referanslar/women',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'Tarım Kooperatiflerinde Kadınların Güçlendirilmesi', en: 'Women Empowerment in Agricultural Cooperatives' },
    description: { tr: 'Sürdürülebilir Tarım Yoluyla Kadınların Güçlendirilmesi', en: 'Women Empowerment Through Sustainable Agriculture' },
    location: { tr: 'AB Projesi, 3 Ülke', en: 'EU Project, 3 Countries' },
    image: '/images/references/women.png',
    category: 'international'
  },
  {
    slug: 'digitrainer',
    route: '/projeler-ve-referanslar/digitrainer',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'DIGITRAINER 4.0', en: 'DIGITRAINER 4.0' },
    description: { tr: 'Eğitim 4.0 için Dijital Beceriler', en: 'Digital Skills for Education 4.0' },
    location: { tr: 'AB Projesi, 5 Ülke', en: 'EU Project, 5 Countries' },
    image: '/images/references/digitrainer.png',
    category: 'international'
  },
   {
    slug: 'water',
    route: '/projeler-ve-referanslar/water',
    badge: { tr: 'ERASMUS+', en: 'ERASMUS+' },
    title: { tr: 'SU', en: 'WATER' },
    description: { tr: 'Sürdürülebilir Bir Gelecek İçin Su Bilinci', en: 'Water Literacy for Sustainable Future' },
    location: { tr: 'AB Projesi, 6 Ülke', en: 'EU Project, 6 Countries' },
    image: '/images/references/water.png',
    category: 'international'
  },
   {
    slug: 'data1',
    route: '/projeler-ve-referanslar/digital',
    badge: { tr: 'DİJİTAL', en: 'DIGITAL' },
    title: { tr: 'DİJİTAL PORTFÖY', en: 'DIGITAL PORTFOLIO' },
    description: { tr: 'Dijital Portföy Yönetim Hizmeti', en: 'Digital Portfolio Management Service' },
    location: { tr: 'Veri Analitiği', en: 'Data Analytics' },
    image: '/images/references/digital.png',
    category: 'digital'
  },
   {
    slug: 'data2',
    route: '/projeler-ve-referanslar/digitalikiz',
    badge: { tr: 'DİJİTAL', en: 'DIGITAL' },
    title: { tr: 'DİJİTAL İKİZ', en: 'DIGITAL TWIN' },
    description: { tr: 'Dijital İkiz Yönetim Hizmeti', en: 'Digital Twin Management Service' },
    location: { tr: 'Veri Analitiği', en: 'Data Analytics' },
    image: '/images/references/digitaltwin.png',
    category: 'digital'
  },
  
]

const institutionGroups = [
  {
    key: 'international',
    title: { tr: '🌐 Uluslararası Kurumlar & Organizasyonlar', en: '🌐 International Institutions & Organizations' },
    folder: 'uluslararası',
    logos: ['adb.png', 'ebrd.png', 'ec.png', 'ef.png', 'eib.png', 'erasmus.png', 'giz.png', 'gtai.png', 'horizon.png', 'icmpd.png', 'isdb.png', 'undp.png', 'ungm.png', 'world-bank.png']
  },
  {
    key: 'public',
    title: { tr: '🏛 Kamu Kurumları', en: '🏛 Public Institutions' },
    folder: 'kamu',
    logos: ['ankara-buyuksehir.png', 'cankaya.png', 'cevre-bakanligi.png', 'cizre.png', 'dika.png', 'doka.png', 'erdek.png', 'gelibolu.png', 'giresun.png', 'gmka.png', 'ilbank.png', 'kara-yollari.png', 'meb.png', 'Ministry of Energy.png', 'portas.png', 'sanayi-bakanligi.png', 'silivri.png', 'siran.png', 'surmene.png', 'tarim-bakanligi.png', 'toki.png', 'torul.png', 'trabzon-buyuksehir.png', 'turizm-bakanligi.png', 'ulastirma-bakanligi.png', 'yildiz-teknik.png']
  },
  {
    key: 'civil',
    title: { tr: '🤝 Sivil Toplum & Mesleki Kuruluşlar', en: '🤝 Civil Society & Professional Organizations' },
    folder: 'siviltoplum',
    logos: ['eurolinks.png', 'naturelder.png', 'sygd.png', 'tossfed.png', 'xul.png']
  },
  {
    key: 'private',
    title: { tr: '◈ Özel Sektör', en: '◈ Private Sector' },
    folder: 'ozel',
    logos: ['acb.png', 'beogo.png', 'bodef.png', 'ecotech.png', 'eupro.png', 'mtg.png', 'rds.png', 'rs.png', 'schwerpunkt.png']
  }
]

const institutions = institutionGroups.flatMap(group => group.logos.map(file => ({ ...group, file })))

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

const visibleProjects = computed(() => {
  if (showAllProjects.value || filteredProjects.value.length <= 6) return filteredProjects.value

  const start = (activeProjectPage.value * 6) % filteredProjects.value.length
  return Array.from({ length: 6 }, (_, index) => filteredProjects.value[(start + index) % filteredProjects.value.length])
})

const hasMoreProjects = computed(() => filteredProjects.value.length > 6)

const resetProjectView = () => {
  activeProjectPage.value = 0
  showAllProjects.value = false
}

const rotateProjects = () => {
  if (!showAllProjects.value && hasMoreProjects.value) activeProjectPage.value += 1
}

watch(activeFilter, resetProjectView)

onMounted(() => {
  projectRotationTimer = window.setInterval(rotateProjects, 10000)
})

onUnmounted(() => {
  window.clearInterval(projectRotationTimer)
})

const getField = (obj) => obj[locale.value] ?? obj.en
const logoPath = (logo) => `/images/reference_institutions/${logo.folder}/${logo.file}`
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
        v-for="project in visibleProjects"
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
    <div v-if="hasMoreProjects" class="projects-view-all-wrap">
      <button type="button" class="projects-view-all-btn" @click="showAllProjects = !showAllProjects">
        {{ showAllProjects ? collapseLabel : localizedContent.viewAll }} →
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
              :src="logoPath(logo)"
              :alt="logo.file.replace(/\.[^.]+$/, '')"
              class="partner-logo-img"
            />
          </div>
        </div>
      </div>

      <!-- Full grid (expanded) -->
      <div v-else class="partners-groups">
        <section v-for="group in institutionGroups" :key="group.key" class="partners-group" :aria-labelledby="`partners-${group.key}`">
          <h3 :id="`partners-${group.key}`" class="partners-group-title">{{ getField(group.title) }}</h3>
          <div class="partners-full-grid">
            <div
              v-for="logo in group.logos.map(file => ({ folder: group.folder, file }))"
              :key="logo.file"
              class="partner-full-card"
            >
              <img
                :src="logoPath(logo)"
                :alt="logo.file.replace(/\.[^.]+$/, '')"
                class="partner-full-img"
              />
            </div>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>
