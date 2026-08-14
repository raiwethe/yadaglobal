<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    breadcrumb: [
      { label: 'Ana Sayfa', to: '/' },
      { label: 'Projeler & Referanslar', to: '/projeler-ve-referanslar' },
      { label: 'Şehir Planlama İşleri', to: '/projeler-ve-referanslar' },
      { label: 'Kapıdağ Yarımadası Turizm Master Planı', to: null }
    ],
    badge: 'ŞEHİR PLANLAMA İŞLERİ',
    title: 'Kapıdağ Yarımadası Turizm Master Planı',
    location: 'Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Turizm Master Planı' },
      { icon: '📍', label: 'LOKASYON', value: 'Erdek, Kapıdağ Yarımadası, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Yerel Paydaşlar & Kamu Kurumları' },
      { icon: '🗺️', label: 'HİZMET ALANLARI', value: 'Turizm Planlaması, Mekansal Analiz, Stratejik Planlama, Katılımcı Süreç Yönetimi' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Kapıdağ Yarımadası\'nın doğal, kültürel ve ekonomik potansiyelini sürdürülebilir turizm ilkeleri çerçevesinde değerlendirmek amacıyla kapsamlı bir Turizm Master Planı hazırlanmıştır.',
      'Plan; dört mevsim turizm vizyonuyla bölgenin rekabet gücünü artırmayı, yerel kalkınmayı desteklemeyi ve doğal mirasın korunmasını hedeflemektedir.'
    ],
    stats: [
      { icon: '👥', value: '40.000+', label: 'Bölge Nüfusu' },
      { icon: '🧳', value: '500.000+', label: 'Yıllık Ziyaretçi Potansiyeli' },
      { icon: '🗺️', value: '12', label: 'Önerilen Tematik Rota' },
      { icon: '📅', value: '4', label: 'Mevsim Turizm Vizyonu' }
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Mevcut durum analizi ve turizm potansiyeli değerlendirmesi',
      '4 mevsim turizm stratejisi ve ürün çeşitlendirmesi',
      'Tematik rota ve deneyim tasarımları',
      'Mekansal gelişim senaryoları ve kullanım kararları',
      'Altyapı, hizmet ve yatırım önceliklendirmesi',
      'Sürdürülebilir turizm yönetim modeli'
    ]
  },
  en: {
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Projects & References', to: '/projeler-ve-referanslar' },
      { label: 'Urban Planning', to: '/projeler-ve-referanslar' },
      { label: 'Kapıdağ Peninsula Tourism Master Plan', to: null }
    ],
    badge: 'URBAN PLANNING',
    title: 'Kapıdağ Peninsula Tourism Master Plan',
    location: 'Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Tourism Master Plan' },
      { icon: '📍', label: 'LOCATION', value: 'Erdek, Kapıdağ Peninsula, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Local Stakeholders & Public Institutions' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Tourism Planning, Spatial Analysis, Strategic Planning, Participatory Process Management' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'A comprehensive Tourism Master Plan was prepared to assess the natural, cultural, and economic potential of the Kapıdağ Peninsula within a framework of sustainable tourism principles.',
      'The plan aims to enhance the region\'s competitiveness through a four-season tourism vision, support local development, and protect its natural heritage.'
    ],
    stats: [
      { icon: '👥', value: '40,000+', label: 'Regional Population' },
      { icon: '🧳', value: '500,000+', label: 'Annual Visitor Potential' },
      { icon: '🗺️', value: '12', label: 'Proposed Thematic Routes' },
      { icon: '📅', value: '4', label: 'Season Tourism Vision' }
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Existing situation analysis and tourism potential assessment',
      '4-season tourism strategy and product diversification',
      'Thematic route and experience design',
      'Spatial development scenarios and land use decisions',
      'Infrastructure, service, and investment prioritisation',
      'Sustainable tourism management model'
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-plan-page">

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

      <!-- Left: Photo hero with bottom overlay -->
      <div class="project-detail-main">
        <div
          class="project-plan-hero"
          :style="{ backgroundImage: 'url(/images/references/kapidag-turizm.jpg)' }"
        >
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <div class="project-plan-location">
              <span>📍</span>
              <span>{{ c.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Meta sidebar -->
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

    <!-- About + Contributions -->
    <div class="project-detail-body">

      <!-- Left: About + Stats -->
      <section class="project-about">
        <h2 class="project-plan-about-title">{{ c.aboutTitle }}</h2>
        <p v-for="para in c.aboutText" :key="para" class="project-about-para">{{ para }}</p>

        <div class="project-stats-grid" style="margin-top: 24px;">
          <div v-for="stat in c.stats" :key="stat.label" class="project-stat-card">
            <span class="project-stat-icon">{{ stat.icon }}</span>
            <span class="project-stat-value">{{ stat.value }}</span>
            <span class="project-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </section>

      <!-- Right: Contributions -->
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
