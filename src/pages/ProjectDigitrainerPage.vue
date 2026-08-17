<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA220-VET',
    title: 'DIGITRAINER 4.0',
    tagline: 'Eğitim 4.0 için Dijital Beceriler',
    subtitle: 'Mesleki Eğitimcilerin Dijital Dönüşüm ve Eğitim 4.0 için Güçlendirmek',
    description: 'Mesleki eğitimcilerin dijital yetkinliklerini güçlendirerek onları Eğitim 4.0 ve Dördüncü Sanayi Devrimi\u2019nin gereksinimlerine hazırladık.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎯', label: 'AKSİYON', value: 'KA220-VET – Mesleki Eğitim ve Öğretimde İş Birliği Ortaklıkları' },
      { icon: '🗓️', label: 'SÜRE', value: '2023–2025 (25 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '5 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Stichting Onderwijs Midden Limburg (SOML)' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Hollanda, İtalya, Malta, İspanya, Almanya' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'Mesleki eğitimciler, karar vericiler ve politika paydaşları' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'DIGITRAINER 4.0, Mesleki eğitimcilerin dijital yetkinliklerini güçlendirmeyi ve onları Eğitim 4.0 ile Dördüncü Sanayi Devrimi\u2019nin gereksinimlerine hazırlamayı amaçladı. Proje; eğitimcilerin dijital ve gelişmekte olan teknolojileri kullanma konusundaki özgüven ve kapasitelerini artırmaya odaklanırken mesleki eğitim kurumlarında yenilik ve uyum yeteneğini teşvik etti.',
      'Proje; yapay zeka, dijital okuryazarlık, çevrimiçi değerlendirme, öğrenme analitiği ve sürükleyici teknolojileri kapsayan modüler bir müfredat ile eğitim kaynakları geliştirdi. Eğitimcilerin dijital hazırbulunuşluğu, ortak ülkeler genelinde yürütülen anket ve görüşmeler aracılığıyla da analiz edildi.',
      'Sekiz etkileşimli modül, testler, sertifika, videolar ve uzman podcast\u2019lerini içeren çok dilli bir MOOC platformu geliştirildi ve tüm ortak ülkelerde pilot uygulamaya alındı. Proje aynı zamanda ulusal çalışmalar ve bir Avrupa sentez raporu üreterek mesleki eğitim sektörünün uzun vadeli dijital dönüşüm ve inovasyon potansiyelini destekledi.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Mesleki eğitimcilerin dijital yetkinliklerini güçlendirmek',
      'Eğitim 4.0 için modüler bir müfredat geliştirmek',
      '8 etkileşimli modüle sahip çok dilli bir MOOC platformu oluşturmak',
      'Yapay zeka, dijital okuryazarlık, çevrimiçi değerlendirme, öğrenme analitiği ve sürükleyici teknolojileri ele almak',
      '5 Ulusal Çalışma ve 1 Avrupa Sentez Raporu üretmek',
      'Animasyonlu açıklayıcı videolar, uzman podcast\u2019leri, testler ve sertifika kaynakları geliştirmek',
      'Eğitim kaynaklarını ortak ülkelerde pilot uygulamaya almak ve doğrulamak',
      'Mesleki eğitim sektöründe dijital dönüşümü, inovasyonu ve dayanıklılığı desteklemek'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA220-VET',
    title: 'DIGITRAINER 4.0',
    tagline: 'Digital Skills for Education 4.0',
    subtitle: 'Empowering VET Trainers for Digital Transformation and Education 4.0',
    description: 'We strengthened the digital competences of VET trainers and prepared them for the demands of Education 4.0 and the Fourth Industrial Revolution.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎯', label: 'ACTION', value: 'KA220-VET – Cooperation Partnerships in Vocational Education and Training' },
      { icon: '🗓️', label: 'DURATION', value: '2023–2025 (25 months)' },
      { icon: '📍', label: 'SCOPE', value: '5 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Stichting Onderwijs Midden Limburg (SOML)' },
      { icon: '🤝', label: 'PARTNERS', value: 'Netherlands, Italy, Malta, Spain, Germany' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'VET trainers, decision makers, and policy stakeholders' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'DIGITRAINER 4.0 aimed to strengthen the digital competences of VET trainers and prepare them for the demands of Education 4.0 and the Fourth Industrial Revolution. The project focused on increasing trainers\' confidence and capacity in using digital and emerging technologies while encouraging innovation and adaptability within VET institutions.',
      'The project developed training resources and a modular curriculum covering AI, digital literacy, online assessment, learning analytics, and immersive technologies. Trainers\' digital readiness was also analysed through surveys and interviews conducted across the partner countries.',
      'A multilingual MOOC platform with eight interactive modules, quizzes, certification, videos, and expert podcasts was developed and piloted in all partner countries. The project also produced national studies and a European synthesis report, supporting the long-term digital transformation and innovation potential of the VET sector.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthened the digital competences of VET trainers',
      'Developed a modular curriculum for Education 4.0',
      'Created a multilingual MOOC platform with 8 interactive modules',
      'Addressed AI, digital literacy, online assessment, learning analytics, and immersive technologies',
      'Produced 5 National Studies and 1 European Synthesis Report',
      'Developed animated explainer videos, expert podcasts, quizzes, and certification resources',
      'Piloted and validated the training resources across partner countries',
      'Supported digital transformation, innovation, and resilience within the VET sector'
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
          :style="{ backgroundImage: 'url(/images/references/digitrainer.webp)' }"
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
