<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'MASTER PLAN MODELLEME VE TAHMİNİ MALİYET',
    title: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı Modelleme ve Tahmini Maliyet',
    tagline: 'Yaratıcı Turizm Koridorunun Mekânsal Tasarımı ve Uygulama Modeli',
    subtitle: 'Şiran\'ın Turizm Vizyonunu Uygulanabilir Mekânsal Tasarımlara Dönüştürmek',
    description: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı kapsamında belirlenen turizm odaklarının 1/1.000 ölçekli mekânsal modelleme, tasarım ve tahmini maliyet çalışmasını hazırladık.',
    location: 'Şiran, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Yaratıcı Turizm Konsept Master Planı – Modelleme ve Tahmini Maliyet' },
      { icon: '📍', label: 'LOKASYON', value: 'Şiran, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Doğu Karadeniz Kalkınma Ajansı (DOKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Mekânsal Modelleme, Konsept Tasarım, Turizm Planlaması, Maliyet Analizi' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı ile belirlenen turizm odaklarının daha detaylı ve uygulanabilir hale getirilmesi amacıyla 1/1.000 ölçekli modelleme ve tahmini maliyet çalışması hazırlanmıştır.',
      'Çalışmada koridor kapsamında geliştirilen turizm alanlarının mekânsal kurgusu, kullanım kararları ve tasarım yaklaşımları detaylandırılarak konsept önerilerinin uygulanabilir bir proje çerçevesine dönüştürülmesi hedeflenmiştir.',
      'Modelleme çalışmalarına paralel olarak önerilen uygulamalar için tahmini maliyet analizleri oluşturulmuş; böylece planlama kararlarının yatırım ve uygulama süreçlerinde kullanılabilecek daha somut bir altyapıya kavuşturulması sağlanmıştır.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      '1/1.000 ölçekli mekânsal modelleme',
      'Turizm odaklarının detaylı konsept tasarımı',
      'Mekânsal kullanım ve tasarım kararlarının geliştirilmesi',
      'Turizm alanları için uygulanabilir tasarım önerileri',
      'Tahmini yatırım maliyetlerinin belirlenmesi',
      'Proje uygulama sürecine yönelik maliyet altyapısının oluşturulması',
      'Yaratıcı turizm koridorunun mekânsal bütünlüğünün güçlendirilmesi'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🏗️', title: 'MODELLEME', desc: 'Turizm alanlarının detaylı mekânsal kurgusu ve 1/1.000 ölçekli modellemesi' },
      { icon: '✏️', title: 'TASARIM', desc: 'Yaratıcı turizm odakları için konsept ve mekânsal tasarım önerileri' },
      { icon: '⚙️', title: 'UYGULAMA', desc: 'Planlama kararlarının uygulanabilir proje önerilerine dönüştürülmesi' },
      { icon: '💰', title: 'MALİYET', desc: 'Önerilen yatırımlar için tahmini maliyet ve yatırım çerçevesinin oluşturulması' }
    ]
  },
  en: {
    badge: 'MASTER PLAN MODELLING & COST ESTIMATION',
    title: 'Şiran North-South Corridor Creative Tourism Concept Master Plan – Modelling and Cost Estimation',
    tagline: 'Spatial Design and Implementation Model of the Creative Tourism Corridor',
    subtitle: 'Translating Şiran\'s Tourism Vision into Implementable Spatial Designs',
    description: 'We prepared the 1/1,000-scale spatial modelling, design, and estimated cost study for the tourism focuses identified within the Şiran North-South Corridor Creative Tourism Concept Master Plan.',
    location: 'Şiran, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Creative Tourism Concept Master Plan – Modelling and Cost Estimation' },
      { icon: '📍', label: 'LOCATION', value: 'Şiran, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Eastern Black Sea Development Agency (DOKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Spatial Modelling, Concept Design, Tourism Planning, Cost Analysis' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'A 1/1,000-scale modelling and estimated cost study was prepared to further detail and operationalise the tourism focuses identified through the Şiran North-South Corridor Creative Tourism Concept Master Plan.',
      'The study aimed to translate concept proposals into an implementable project framework by detailing the spatial structure, land use decisions, and design approaches for the tourism areas developed within the corridor scope.',
      'Alongside the modelling work, estimated cost analyses were produced for the proposed interventions, providing a more concrete foundation for planning decisions to be used in investment and implementation processes.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      '1/1,000-scale spatial modelling',
      'Detailed concept design of tourism focuses',
      'Development of spatial use and design decisions',
      'Implementable design proposals for tourism areas',
      'Determination of estimated investment costs',
      'Establishment of a cost framework for project implementation',
      'Strengthening of the spatial coherence of the creative tourism corridor'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🏗️', title: 'MODELLING', desc: 'Detailed spatial structure and 1/1,000-scale modelling of tourism areas' },
      { icon: '✏️', title: 'DESIGN', desc: 'Concept and spatial design proposals for creative tourism focuses' },
      { icon: '⚙️', title: 'IMPLEMENTATION', desc: 'Translating planning decisions into implementable project proposals' },
      { icon: '💰', title: 'COST', desc: 'Estimated cost and investment framework for proposed interventions' }
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-plan-page">

    <div class="project-detail-layout">

      <div class="project-detail-main">
        <div
          class="project-plan-hero"
          :style="{ backgroundImage: 'url(/images/references/siran2.webp)' }"
        >
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline" style="color:rgba(210,235,255,0.82)">{{ c.tagline }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <p class="project-detail-desc">{{ c.description }}</p>
            <p class="project-plan-location">
              <span>📍</span>
              <span>{{ c.location }}</span>
            </p>
          </div>
        </div>
      </div>

      <aside class="project-detail-sidebar">
        <div class="project-detail-meta-card">
          <div v-for="item in c.meta" :key="item.label" class="project-meta-row">
            <span class="project-meta-icon" aria-hidden="true">{{ item.icon }}</span>
            <div class="project-meta-content">
              <span class="project-meta-label">{{ item.label }}</span>
              <span
                class="project-meta-value"
                :class="{ 'project-meta-badge-active': item.highlight }"
              >{{ item.value }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <div class="project-detail-body">
      <section class="project-about">
        <h2 class="project-plan-about-title">{{ c.aboutTitle }}</h2>
        <p v-for="para in c.aboutText" :key="para" class="project-about-para">{{ para }}</p>

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
