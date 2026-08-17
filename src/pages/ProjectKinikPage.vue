<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'GES PLANLAMA VE SÜRDÜRÜLEBİLİRLİK',
    title: 'Eskişehir İli Sivrihisar İlçesi Kınık GES İmar Planı',
    tagline: 'Yenilenebilir Enerji Yatırımı İçin Analitik ve Mekânsal Planlama',
    subtitle: 'Güneş Enerjisi Potansiyelini Planlı ve Sürdürülebilir Bir Yatırıma Dönüştürmek',
    description: 'Sivrihisar Kınık\'ta 3.900 kW kapasiteli güneş enerjisi santrali yatırımı için analitik etüd, kurum görüşleri ve imar planlama altyapısı hazırladık.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'GES İmar Planı, Analitik Etüdler ve Araştırma Raporu' },
      { icon: '📍', label: 'LOKASYON', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'İmar Planlama, Analitik Etüdler, Kurum Görüşleri, Araştırma ve Değerlendirme, Yenilenebilir Enerji Planlaması' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5.000, 1/1.000' },
      { icon: '✅', label: 'HİZMET DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Çalışma kapsamında Sivrihisar\'da güneş enerjisi santrali yatırımı için gerekli analitik araştırma, kurum görüşleri ve planlama altyapısı hazırlanmıştır. Araştırma sürecinde kamu kurum ve kuruluşlarından alınan görüşler, arazi çalışmaları, jeolojik-jeoteknik etütler ve mevcut planlama verileri birlikte değerlendirilmiştir.',
      'Alanın ulaşım durumu, arazi yapısı, bitki örtüsü, iklim koşulları ve güneşlenme potansiyeli analiz edilerek yenilenebilir enerji yatırımına uygun plan kararları geliştirilmiştir. Plan kapsamında 3.900 kW gücünde GES kurulması öngörülmüştür.',
      'Çalışma sonucunda GES alanı, teknik altyapı, otopark ve ulaşım kullanımlarını içeren mekânsal plan kararları oluşturulmuş; toplam 86.934,23 m² büyüklüğündeki planlama alanının 78.664,58 m²\'si GES alanı olarak belirlenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Kurum görüşlerinin toplanması ve değerlendirilmesi',
      'İmar planına esas analitik etüdlerin hazırlanması',
      'Arazi ve mevcut durum araştırmaları',
      'Jeolojik ve jeoteknik verilerin değerlendirilmesi',
      'Güneş enerjisi potansiyelinin analiz edilmesi',
      'Ulaşım ve altyapı değerlendirmeleri',
      '1/5.000 ve 1/1.000 ölçekli planlama altyapısı',
      '3.900 kW kapasiteli GES için plan kararlarının oluşturulması',
      'GES, teknik altyapı, otopark ve ulaşım alanlarının mekânsal olarak kurgulanması'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '☀️', title: 'YENİLENEBİLİR ENERJİ', desc: 'Güneş enerjisi potansiyelinin değerlendirilmesi ve yenilenebilir enerji yatırım alanının planlanması.' },
      { icon: '🗺️', title: 'ANALİTİK PLANLAMA', desc: 'Arazi, iklim, ulaşım, jeoloji ve mevcut durum verilerinin bütüncül olarak değerlendirilmesi.' },
      { icon: '🏛️', title: 'KURUMSAL KOORDİNASYON', desc: 'İlgili kamu kurumlarından alınan görüşlerin planlama sürecine entegre edilmesi.' },
      { icon: '📐', title: 'MEKÂNSAL PLANLAMA', desc: 'GES, teknik altyapı, otopark ve ulaşım kullanımlarını birlikte ele alan plan kararlarının geliştirilmesi.' }
    ],
    stats: [
      { icon: '⚡', value: '3.900 kW', label: 'GES Kurulu Gücü' },
      { icon: '📐', value: '86.934 m²', label: 'Toplam Planlama Alanı' },
      { icon: '☀️', value: '78.665 m²', label: 'GES Alanı' }
    ]
  },
  en: {
    badge: 'SPP PLANNING AND SUSTAINABILITY',
    title: 'Kınık Solar Power Plant Zoning Plan, Sivrihisar District, Eskişehir Province',
    tagline: 'Analytical and Spatial Planning for a Renewable Energy Investment',
    subtitle: 'Transforming Solar Energy Potential into a Planned and Sustainable Investment',
    description: 'We prepared the analytical studies, institutional consultations, and zoning-plan foundation for a 3,900 kW solar power plant investment in Kınık, Sivrihisar.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'SPP Zoning Plan, Analytical Studies, and Research Report' },
      { icon: '📍', label: 'LOCATION', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Zoning Planning, Analytical Studies, Institutional Consultations, Research and Assessment, Renewable Energy Planning' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5,000, 1/1,000' },
      { icon: '✅', label: 'SERVICE STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'The analytical research, institutional consultations, and planning foundation required for a solar power plant investment in Sivrihisar were prepared within the scope of this project. Opinions received from public institutions and organizations, fieldwork, geological-geotechnical surveys, and existing planning data were assessed together throughout the research process.',
      'Access conditions, land structure, vegetation, climate conditions, and solar exposure potential were analyzed to develop planning decisions suitable for a renewable energy investment. The plan envisages the installation of a 3,900 kW solar power plant.',
      'The resulting spatial planning decisions cover the SPP area, technical infrastructure, parking, and transport uses. Of the total 86,934.23 m² planning area, 78,664.58 m² was designated as the SPP area.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Collection and assessment of institutional opinions',
      'Preparation of analytical studies forming the basis of the zoning plan',
      'Land and existing-condition research',
      'Assessment of geological and geotechnical data',
      'Analysis of solar energy potential',
      'Transport and infrastructure assessments',
      'Planning foundation at 1/5,000 and 1/1,000 scales',
      'Planning decisions for a 3,900 kW SPP',
      'Spatial planning of the SPP, technical infrastructure, parking, and transport areas'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '☀️', title: 'RENEWABLE ENERGY', desc: 'Assessment of solar energy potential and planning of the renewable energy investment site.' },
      { icon: '🗺️', title: 'ANALYTICAL PLANNING', desc: 'Integrated assessment of land, climate, transport, geology, and existing-condition data.' },
      { icon: '🏛️', title: 'INSTITUTIONAL COORDINATION', desc: 'Integration of opinions from relevant public institutions into the planning process.' },
      { icon: '📐', title: 'SPATIAL PLANNING', desc: 'Development of planning decisions that address the SPP, technical infrastructure, parking, and transport uses together.' }
    ],
    stats: [
      { icon: '⚡', value: '3,900 kW', label: 'Installed SPP Capacity' },
      { icon: '📐', value: '86,934 m²', label: 'Total Planning Area' },
      { icon: '☀️', value: '78,665 m²', label: 'SPP Area' }
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-plan-page">
    <div class="project-detail-layout">
      <div class="project-detail-main">
        <div class="project-plan-hero" :style="{ backgroundImage: 'url(/images/references/kinik.png)' }">
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