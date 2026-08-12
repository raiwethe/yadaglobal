<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    breadcrumb: [
      { label: 'Ana Sayfa', to: '/' },
      { label: 'Projeler & Referanslar', to: '/projeler-ve-referanslar' },
      { label: 'Uluslararası Projeler', to: '/projeler-ve-referanslar' },
      { label: 'SHORE', to: null }
    ],
    badge: 'HORIZON EUROPE',
    title: 'SHORE',
    subtitle: 'Sea enablers for a holistic approach to Ocean literacy in Europe',
    description: 'Okyanus okuryazarlığını Avrupa\'da bütüncül bir yaklaşımla ele almayı amaçlayan yenilikçi bir Horizon Europe projesi.',
    location: 'Avrupa Birliği Projesi',
    metaTitle: 'Proje Detayları',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Horizon Europe' },
      { icon: '📋', label: 'SÜRE', value: '2024-2026 (36 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '9 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Yıldız Teknik Üniversitesi' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Avusturya, Çekya, Estonya, İrlanda, İtalya, Macaristan, Romanya, Polonya, Türkiye' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'İlk ve ortaöğretim öğrencileri, eğitimciler, yerel topluluklar' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Devam Ediyor', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'SHORE (Empower Students as the agents of change) projesi, okyanus okuryazarlığını Avrupa genelinde yaygınlaştırmak amacıyla yürütülen çok ortaklı bir Horizon Europe projesidir.',
      'Proje kapsamında geliştirilecek eğitim materyalleri, dijital araçlar ve farkındalık kampanyaları aracılığıyla deniz ve kıyı ekosistemlerinin korunmasına yönelik eğitim programları hayata geçirilmektedir.',
      'Yada Global, proje konsorsiyumunda teknik iş paketi ortağı olarak yer almakta; CBS tabanlı görselleştirme araçları, çok dilli dijital içerik platformu ve coğrafi veri analitiği konularında doğrudan teknik çıktı sorumluluğu üstlenmektedir.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Avrupa genelinde okyanus okuryazarlığını güçlendirmek',
      'Çevre farkındalığı ve iklim eylemi için yenilikçi eğitim modelleri geliştirmek',
      'AB Okyanus Misyonu’nun hedeflerini desteklemek',
      'Gençleri değişimin öncüleri olmaları için güçlendirmek',
      'Uluslararası iş birliği ve bilgi transferini teşvik etmek',
      'Çok dilli dijital öğrenme platformu oluşturmak'
    ]
  },
  en: {
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Projects & References', to: '/projeler-ve-referanslar' },
      { label: 'International Projects', to: '/projeler-ve-referanslar' },
      { label: 'SHORE', to: null }
    ],
    badge: 'HORIZON EUROPE',
    title: 'SHORE',
    subtitle: 'Sea enablers for a holistic approach to Ocean literacy in Europe',
    description: 'An innovative Horizon Europe project aiming to address ocean literacy in Europe with a holistic approach.',
    location: 'European Union Project',
    metaTitle: 'Project Details',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Horizon Europe' },
      { icon: '📋', label: 'DURATION', value: '2024-2026 (36 months)' },
      { icon: '📍', label: 'SCOPE', value: '9 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Yıldız Technical University' },
      { icon: '🤝', label: 'PARTNERS', value: 'Austria, Czech Republic, Estonia, Ireland, Italy, Hungary, Romania, Poland, Türkiye' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Primary & secondary students, educators, local communities' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Ongoing', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'SHORE (Empower Students as the agents of change) is a multi-partner Horizon Europe project aimed at mainstreaming ocean literacy across Europe.',
      'Through educational materials, digital tools, and awareness campaigns, the project implements training programs for the protection of marine and coastal ecosystems.',
      'Yada Global participates in the project consortium as a technical work package partner, taking direct responsibility for GIS-based visualization tools, multilingual digital content platforms, and geospatial data analytics.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthen ocean literacy across Europe',
      'Develop innovative educational models for environmental awareness and climate action',
      'To support the objectives of the EU Ocean Mission.',
      'Empower young people to be the pioneers of change.',
      'Promote international collaboration and knowledge transfer',
      'Create a multilingual digital learning platform'
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-detail-page">

    <!-- Breadcrumb -->
    <nav class="project-detail-breadcrumb" aria-label="Breadcrumb">
      <template v-for="(crumb, i) in c.breadcrumb" :key="crumb.label">
        <router-link v-if="crumb.to" :to="crumb.to" class="breadcrumb-link">{{ crumb.label }}</router-link>
        <span v-else class="breadcrumb-current">{{ crumb.label }}</span>
        <span v-if="i < c.breadcrumb.length - 1" class="breadcrumb-sep" aria-hidden="true">›</span>
      </template>
    </nav>

    <!-- Hero + Sidebar -->
    <div class="project-detail-layout">

      <!-- Left: Hero card -->
      <div class="project-detail-main">
        <div
          class="project-detail-hero"
          :style="{ backgroundImage: 'url(/images/references/shore.png)' }"
        >
          <div class="project-detail-hero-gradient"></div>
          <div class="project-detail-hero-content">
            <span class="project-detail-badge">{{ c.badge }}</span>
            <h1 class="project-detail-title">{{ c.title }}</h1>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-desc">{{ c.description }}</p>
            <div class="project-detail-location">
              <span>📍</span>
              <span>{{ c.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Meta sidebar -->
      <aside class="project-detail-sidebar">
        <div class="project-detail-meta-card">
          <div
            v-for="item in c.meta"
            :key="item.label"
            class="project-meta-row"
          >
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

    <!-- About + Contributions -->
    <div class="project-detail-body">
      <section class="project-about">
        <h2 class="project-section-title">{{ c.aboutTitle }}</h2>
        <p v-for="para in c.aboutText" :key="para" class="project-about-para">{{ para }}</p>
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
