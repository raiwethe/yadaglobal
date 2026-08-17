<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'TURİZM PLANLAMA VE FİZİBİLİTE',
    title: 'Cizre Tarih, Kültür, İnanç Turizm Rotalarının Oluşturulması',
    tagline: 'Cizre Tarih, Kültür ve İnanç Turizm Rotası',
    subtitle: 'Tarihi, Kültürel ve İnanç Mirasını Turizme Kazandırmak',
    description: 'Cizre\'nin tarihî, kültürel ve inanç turizmi potansiyelini değerlendirmek amacıyla kapsamlı bir turizm rotası fizibilite çalışması hazırladık.',
    location: 'Cizre, Şırnak, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Turizm Rotası ve Fizibilite Projesi' },
      { icon: '📍', label: 'LOKASYON', value: 'Cizre, Şırnak, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Cizre Belediyesi, DİKA' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Turizm Planlaması, Rota Planlama, Fizibilite Analizi, Altyapı ve Üstyapı Planlaması' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5000, 1/1000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Cizre\'nin tarihî, kültürel ve inanç turizmi potansiyelini değerlendirmek amacıyla kapsamlı bir turizm rotası fizibilite çalışması hazırlanmıştır. Proje kapsamında ilçenin turizm potansiyelinin geliştirilmesi, ziyaretçi deneyiminin iyileştirilmesi ve turizm altyapısının güçlendirilmesi hedeflenmiştir.',
      'Çalışma kapsamında tarihî ve kültürel değerleri birbirine bağlayan 14 noktadan oluşan bir turizm rotası oluşturulmuş; rota üzerindeki ulaşım, yaya erişimi, yol ve kaldırım düzenlemeleri ile yapı ve cephelerin iyileştirilmesine yönelik öneriler geliştirilmiştir.',
      'Proje aynı zamanda Cizre\'nin konaklama, yeme-içme, alışveriş ve diğer turizm hizmetlerinin geliştirilmesini destekleyerek turizmin yerel ekonomi ve istihdam üzerindeki katkısının artırılmasını hedeflemiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      '14 noktadan oluşan tarih, kültür ve inanç turizm rotası',
      'Turizm güzergâhında yol ve kaldırım düzenleme önerileri',
      'Tarihî yapı ve cepheler için sağlıklaştırma önerileri',
      'Turizm altyapısı ve erişilebilirliğin geliştirilmesi',
      'Konaklama ve turizm hizmet kapasitesinin geliştirilmesine yönelik öneriler',
      'Cizre\'nin tarihî, kültürel ve inanç turizmi potansiyelinin güçlendirilmesi',
      'Yerel ekonomik faaliyet ve istihdamın desteklenmesi',
      'Sürdürülebilir turizm yaklaşımının geliştirilmesi'
    ],
    stats: [
      { icon: '🗺️', value: '14', label: 'Turizm Rotası Noktası' },
      { icon: '🚶', value: '11.319 m²', label: 'Planlanan Kaldırım Alanı' },
      { icon: '🛣️', value: '25.459 m²', label: 'Planlanan Yol Alanı' },
      { icon: '🏛️', value: '6.990 m²', label: 'Cephe Sağlıklaştırma Alanı' }
    ]
  },
  en: {
    badge: 'TOURISM PLANNING & FEASIBILITY',
    title: 'Creating Historical, Cultural, and Religious Tourism Routes in Cizre',
    tagline: 'Cizre Historical, Cultural, and Religious Tourism Route',
    subtitle: 'Bringing Historical, Cultural, and Faith Heritage into Tourism',
    description: 'We prepared a comprehensive tourism route feasibility study to assess and develop the historical, cultural, and faith tourism potential of Cizre.',
    location: 'Cizre, Şırnak, Turkey',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Tourism Route and Feasibility Project' },
      { icon: '📍', label: 'LOCATION', value: 'Cizre, Şırnak, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Cizre Municipality, DIKA' },
      { icon: '🗺️', label: 'SERVICE AREA', value: 'Tourism Planning, Route Planning, Feasibility Analysis, Infrastructure Planning' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5000, 1/1000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'A comprehensive tourism route feasibility study was prepared to assess the historical, cultural, and faith tourism potential of Cizre. The project aimed to develop the tourism potential of the district, improve the visitor experience, and strengthen tourism infrastructure.',
      'A 14-point tourism route connecting historical and cultural assets was established. Recommendations were developed for transportation, pedestrian access, road and pavement improvements, and the renovation of buildings and facades along the route.',
      'The project also aimed to support the development of accommodation, food and beverage, retail, and other tourism services in Cizre, increasing tourism\'s contribution to the local economy and employment.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      '14-point historical, cultural, and faith tourism route',
      'Road and pavement improvement recommendations along the tourism route',
      'Renovation and restoration recommendations for historic buildings and facades',
      'Development of tourism infrastructure and accessibility',
      'Recommendations for improving accommodation and tourism service capacity',
      'Strengthening of Cizre\'s historical, cultural, and faith tourism potential',
      'Support for local economic activity and employment',
      'Development of a sustainable tourism approach'
    ],
    stats: [
      { icon: '🗺️', value: '14', label: 'Tourism Route Points' },
      { icon: '🚶', value: '11,319 m²', label: 'Planned Pavement Area' },
      { icon: '🛣️', value: '25,459 m²', label: 'Planned Road Area' },
      { icon: '🏛️', value: '6,990 m²', label: 'Facade Restoration Area' }
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
          :style="{ backgroundImage: 'url(/images/references/cizre.webp)' }"
        >
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline" style="color:rgba(210,235,255,0.82)">{{ c.tagline }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <p class="project-detail-desc">{{ c.description }}</p>
            <div class="project-plan-location">
              <span>📍</span>
              <span>{{ c.location }}</span>
            </div>
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

        <!-- Stats below about text, aligned with contributions -->
        <div class="project-stats-grid" style="margin-top:20px">
          <div v-for="stat in c.stats" :key="stat.label" class="project-stat-card">
            <span class="project-stat-icon">{{ stat.icon }}</span>
            <span class="project-stat-value">{{ stat.value }}</span>
            <span class="project-stat-label">{{ stat.label }}</span>
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
