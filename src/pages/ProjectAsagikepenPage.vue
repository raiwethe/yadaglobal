<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'GES PLANLAMA VE SÜRDÜRÜLEBİLİRLİK',
    title: 'Eskişehir İli Sivrihisar İlçesi Aşağıkepen GES İmar Planı Kurum Görüşleri, Analitik Etüdler ve Araştırma Raporu',
    tagline: 'Yenilenebilir Enerji Yatırımları İçin Analitik Planlama ve İmar Altyapısı',
    subtitle: 'Güneş Enerjisi Yatırım Alanını Planlamak ve Uygulanabilir Hale Getirmek',
    description: 'Sivrihisar Aşağıkepen Mahallesi\'nde planlanan güneş enerjisi yatırımı için imar planına esas araştırma ve açıklama raporu hazırladık.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'GES İmar Planı, Analitik Etüdler ve Araştırma Raporu' },
      { icon: '📍', label: 'LOKASYON', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'İmar Planlama, Analitik Etüdler, Kurum Görüşleri, Araştırma ve Değerlendirme, Yenilenebilir Enerji Planlaması' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Çalışma kapsamında Aşağıkepen Mahallesi\'nde yaklaşık 1,9 hektarlık alan için güneş enerjisi santraline yönelik planlama ve araştırma çalışmaları gerçekleştirilmiştir. Alanın mevcut ulaşım durumu, arazi yapısı, bitki örtüsü, iklim özellikleri ve güneşlenme potansiyeli değerlendirilerek GES yatırımına yönelik plan kararları geliştirilmiştir.',
      'Planlama alanında 846 kW gücünde Güneş Enerjisi Santrali kurulması öngörülmüş; güneş panellerinin yerleşimi, teknik yapılar ve ulaşım bağlantıları planlama kararlarına dahil edilmiştir.',
      'Çalışmada ayrıca alanın jeolojik ve hidrojeolojik özellikleri ile yerleşime uygunluk durumu incelenmiş ve plan kararlarının ilgili teknik etütler doğrultusunda geliştirilmesi sağlanmıştır.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Aşağıkepen GES için imar planı altyapısının oluşturulması',
      'Analitik araştırma ve değerlendirme çalışmaları',
      'Arazi ve mevcut durum analizleri',
      'Güneşlenme ve enerji potansiyeli değerlendirmesi',
      'Jeolojik ve hidrojeolojik analizlerin değerlendirilmesi',
      'Ulaşım ve altyapı kararlarının geliştirilmesi',
      '1/5.000 ve 1/1.000 ölçekli planlama çalışmaları',
      '846 kW kapasiteli GES için mekânsal plan kararlarının oluşturulması',
      'Güneş paneli ve teknik yapı yerleşiminin planlanması'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '☀️', title: 'YENİLENEBİLİR ENERJİ', desc: 'Güneş enerjisi potansiyelinin değerlendirilmesi ve temiz enerji üretimine yönelik yatırım alanının planlanması.' },
      { icon: '🗺️', title: 'ANALİTİK PLANLAMA', desc: 'Arazi, iklim, güneşlenme, jeoloji ve mevcut durum verilerinin birlikte değerlendirilmesi.' },
      { icon: '📐', title: 'MEKÂNSAL PLANLAMA', desc: 'GES alanı, güneş panelleri, teknik yapılar ve ulaşım bağlantılarının bütüncül olarak planlanması.' },
      { icon: '⚙️', title: 'TEKNİK ALTYAPI', desc: 'Enerji üretim tesisinin ihtiyaç duyduğu teknik yapı ve altyapı kullanım kararlarının geliştirilmesi.' }
    ],
    stats: [
      { icon: '⚡', value: '846 kW', label: 'GES Kurulu Gücü' },
      { icon: '📐', value: '1,9 ha', label: 'Planlama Alanı' },
      { icon: '☀️', value: '2.188', label: 'Güneş Paneli' }
    ]
  },
  en: {
    badge: 'SPP PLANNING AND SUSTAINABILITY',
    title: 'Aşağıkepen Solar Power Plant Zoning Plan, Institutional Consultations, Analytical Studies, and Research Report',
    tagline: 'Analytical Planning and Zoning Infrastructure for Renewable Energy Investments',
    subtitle: 'Planning a Solar Energy Investment Site and Making It Implementable',
    description: 'We prepared the research and explanatory report forming the basis of the zoning plan for the proposed solar energy investment in Aşağıkepen Neighbourhood, Sivrihisar.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'SPP Zoning Plan, Analytical Studies, and Research Report' },
      { icon: '📍', label: 'LOCATION', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Zoning Planning, Analytical Studies, Institutional Consultations, Research and Assessment, Renewable Energy Planning' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Planning and research studies for a solar power plant were carried out for an area of approximately 1.9 hectares in Aşağıkepen Neighbourhood. Existing access conditions, land structure, vegetation, climate characteristics, and solar exposure potential were assessed to develop planning decisions for the SPP investment.',
      'The installation of an 846 kW Solar Power Plant was envisaged for the planning area. The layout of solar panels, technical structures, and access connections was incorporated into the planning decisions.',
      'The project also examined the site\'s geological and hydrogeological characteristics and its suitability for development, ensuring that planning decisions were developed in line with the relevant technical studies.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Establishment of the zoning-plan foundation for the Aşağıkepen SPP',
      'Analytical research and assessment studies',
      'Land and existing-condition analyses',
      'Assessment of solar exposure and energy potential',
      'Assessment of geological and hydrogeological analyses',
      'Development of transport and infrastructure decisions',
      'Planning studies at 1/5,000 and 1/1,000 scales',
      'Spatial planning decisions for an 846 kW SPP',
      'Planning of solar panel and technical structure layouts'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '☀️', title: 'RENEWABLE ENERGY', desc: 'Assessment of solar energy potential and planning of the investment area for clean energy generation.' },
      { icon: '🗺️', title: 'ANALYTICAL PLANNING', desc: 'Integrated assessment of land, climate, solar exposure, geology, and existing-condition data.' },
      { icon: '📐', title: 'SPATIAL PLANNING', desc: 'Holistic planning of the SPP area, solar panels, technical structures, and access connections.' },
      { icon: '⚙️', title: 'TECHNICAL INFRASTRUCTURE', desc: 'Development of technical structures and infrastructure use decisions required by the energy generation facility.' }
    ],
    stats: [
      { icon: '⚡', value: '846 kW', label: 'Installed SPP Capacity' },
      { icon: '📐', value: '1.9 ha', label: 'Planning Area' },
      { icon: '☀️', value: '2,188', label: 'Solar Panels' }
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-plan-page">
    <div class="project-detail-layout">
      <div class="project-detail-main">
        <div class="project-plan-hero" :style="{ backgroundImage: 'url(/images/references/asagikepen.webp)' }">
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline">{{ c.tagline }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <p class="project-detail-desc">{{ c.description }}</p>
            <p class="project-plan-location"><span>📍</span><span>{{ c.location }}</span></p>
          </div>
        </div>
      </div>

      <aside class="project-detail-sidebar">
        <div class="project-detail-meta-card">
          <div v-for="item in c.meta" :key="item.label" class="project-meta-row">
            <span class="project-meta-icon" aria-hidden="true">{{ item.icon }}</span>
            <div class="project-meta-content">
              <span class="project-meta-label">{{ item.label }}</span>
              <span class="project-meta-value" :class="{ 'project-meta-badge-active': item.highlight }">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <section class="project-stats-grid" :aria-label="locale === 'tr' ? 'Proje verileri' : 'Project data'">
      <article v-for="stat in c.stats" :key="stat.label" class="project-stat-card">
        <span class="project-stat-icon" aria-hidden="true">{{ stat.icon }}</span>
        <strong class="project-stat-value">{{ stat.value }}</strong>
        <span class="project-stat-label">{{ stat.label }}</span>
      </article>
    </section>

    <div class="project-detail-body">
      <section class="project-about">
        <h2 class="project-plan-about-title">{{ c.aboutTitle }}</h2>
        <p v-for="paragraph in c.aboutText" :key="paragraph" class="project-about-para">{{ paragraph }}</p>
        <h2 class="project-section-title">{{ c.focusTitle }}</h2>
        <div class="project-focus-grid" style="margin-top:24px">
          <div v-for="focus in c.focuses" :key="focus.title" class="project-focus-card">
            <span class="project-focus-icon">{{ focus.icon }}</span>
            <strong class="project-focus-title">{{ focus.title }}</strong>
            <p class="project-focus-desc">{{ focus.desc }}</p>
          </div>
        </div>
      </section>

      <aside class="project-contributions">
        <h2 class="project-section-title">{{ c.contributionsTitle }}</h2>
        <ul class="project-contributions-list">
          <li v-for="item in c.contributions" :key="item" class="project-contribution-item">
            <span class="project-contribution-check" aria-hidden="true">✔</span>
            {{ item }}
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>