<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA220-ADU',
    title: 'Tarım Kooperatiflerinde Kadınların Güçlendirilmesi',
    tagline: 'Tarım Kooperatiflerinde Kadınların Rolünü Güçlendirmek',
    subtitle: 'Tarım Kooperatifleri ve Dijital Öğrenme Yoluyla Kadınları Güçlendirmek',
    description: 'Yenilikçi yetişkin eğitimi aracılığıyla tarım kooperatifleri, dijital teknolojiler, iletişim ve mesleki gelişim alanlarındaki becerilerini güçlendirerek kadın çiftçileri destekledik.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎯', label: 'AKSİYON', value: 'KA220-ADU – Yetişkin Eğitiminde İş Birliği Ortaklıkları' },
      { icon: '🗓️', label: 'SÜRE', value: '2022–2024 (24 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '3 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Silivri Belediyesi' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Türkiye, İspanya, İtalya' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'Kadın çiftçiler, yetişkin eğitimciler, tarım kooperatifleri' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Tarım Kooperatiflerinde Kadınların Güçlendirilmesi projesi; kooperatif yönetimi, iletişim, dijital beceriler ve girişimcilik alanlarında yenilikçi eğitimler aracılığıyla kadın çiftçilerin katılımını ve kapasitesini güçlendirmeyi amaçladı.',
      'Proje; Tarım Kooperatifleri Eğitimi için Yenilikçi Metodoloji, Kadın Çiftçiler için Eğitim Modülü ve AgroSis e-Öğrenme Platformu\u2019nu geliştirerek pratik öğrenme kaynakları, simülasyonlar, videolar ve çevrimiçi dersler sundu.',
      'Ulusötesi iş birliği, eğitim faaliyetleri ve çoğaltıcı etkinlikler aracılığıyla proje; kadın çiftçilerin becerilerini geliştirdi ve yetişkin eğitimcilerin mesleki gelişimini destekledi. Bu sayede kadınların güçlenmesine, kırsal kalkınmaya, sürdürülebilirliğe ve daha güçlü tarım kooperatiflerine katkı sağladı.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Kadınların tarım kooperatiflerine katılımını güçlendirmek',
      'Kooperatif yönetimi, iletişim, dijital ve girişimcilik becerilerini geliştirmek',
      'Tarım kooperatifi eğitimi için yenilikçi bir metodoloji geliştirmek',
      'Kadın çiftçiler için pratik bir eğitim modülü oluşturmak',
      'AgroSis e-Öğrenme Platformu\u2019nu hayata geçirmek',
      'Dijital öğrenme, simülasyonlar, videolar ve çevrimiçi dersler sunmak',
      'Modern eğitim yöntemleriyle yetişkin eğitimcilerin becerilerini güçlendirmek',
      'Kadınların güçlenmesini, kırsal kalkınmayı, sürdürülebilirliği ve dijital dönüşümü desteklemek'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA220-ADU',
    title: 'Women Empowerment in Agricultural Cooperatives',
    tagline: 'Strengthening Women\'s Role in Agricultural Cooperatives',
    subtitle: 'Empowering Women Through Agricultural Cooperatives and Digital Learning',
    description: 'We supported women farmers by strengthening their skills in agricultural cooperatives, digital technologies, communication, and professional development through innovative adult education.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎯', label: 'ACTION', value: 'KA220-ADU – Cooperation Partnerships in Adult Education' },
      { icon: '🗓️', label: 'DURATION', value: '2022–2024 (24 months)' },
      { icon: '📍', label: 'SCOPE', value: '3 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Silivri Belediyesi' },
      { icon: '🤝', label: 'PARTNERS', value: 'Türkiye, Spain, Italy' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Women farmers, adult educators, agricultural cooperatives' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'The Women Empowerment in Agricultural Cooperatives project aimed to strengthen the participation and capacity of women farmers through innovative training in cooperative management, communication, digital skills, and entrepreneurship.',
      'The project developed an Innovative Methodology for Agricultural Cooperatives Training, a Training Module for Women Farmers, and the AgroSis e-Learning Platform, providing practical learning resources, simulations, videos, and online classes.',
      'Through transnational cooperation, training activities, and multiplier events, the project improved women farmers\' skills and supported the professional development of adult educators, contributing to women\'s empowerment, rural development, sustainability, and stronger agricultural cooperatives.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthened women\'s participation in agricultural cooperatives',
      'Improved cooperative management, communication, digital, and entrepreneurial skills',
      'Developed an innovative methodology for agricultural cooperative training',
      'Created a practical training module for women farmers',
      'Developed the AgroSis e-Learning Platform',
      'Provided digital learning, simulations, videos, and online classes',
      'Strengthened the skills of adult educators through modern training methods',
      'Supported women\'s empowerment, rural development, sustainability, and digital transformation'
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-detail-page">

    <div class="project-detail-layout">

      <div class="project-detail-main">
        <div
          class="project-detail-hero"
          :style="{ backgroundImage: 'url(/images/references/women.webp)' }"
        >
          <div class="project-detail-hero-gradient"></div>
          <div class="project-detail-hero-content">
            <span class="project-detail-badge">{{ c.badge }}</span>
            <h1 class="project-detail-title">{{ c.title }}</h1>
            <p class="project-detail-tagline">{{ c.tagline }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <p class="project-detail-desc">{{ c.description }}</p>
            <div class="project-detail-location">
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
