<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA227',
    title: 'STORYLAND',
    tagline: 'Yetişkinler İçin Yeni E-Sanatsal İngilizce Öğrenme Yaklaşımı',
    subtitle: 'Dijital Hikaye Anlatımı ve Yaratıcı Öğrenme Yoluyla Yetişkinleri Güçlendirmek',
    description: 'Dijital hikaye anlatımı, sanatsal ifade ve yenilikçi e-öğrenme yaklaşımları aracılığıyla yetişkinlerin İngilizce dil ve dijital becerilerini güçlendirdik.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎨', label: 'AKSİYON', value: 'KA227 – Yaratıcılık için Ortaklıklar' },
      { icon: '🗓️', label: 'SÜRE', value: '2021–2023 (24 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '4 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Van İl Milli Eğitim Müdürlüğü' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Türkiye, Belçika, Hırvatistan, Slovenya' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'Yetişkin öğrenciler, eğitimciler ve yetişkin eğitimi profesyonelleri' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'STORYLAND, dijital hikaye anlatımı, sanatsal üretim ve yaratıcı öğrenme yöntemlerinin yenilikçi bir bileşimi aracılığıyla yetişkinlerin İngilizce dil ve dijital yetkinliklerini güçlendirmeyi hedefledi.',
      'Proje, disiplinlerarası bir öğrenme yaklaşımı olarak Dijital Hikaye Anlatımı\u2019nı tanıttı; yetişkin öğrencilerin dil becerilerini geliştirirken dijital yetkinliklerini, yaratıcılıklarını, iletişim becerilerini ve özgüvenlerini artırmalarına olanak tanıdı.',
      'Proje süresince ortaklar, yetişkin öğrenciler ve eğitimciler için pratik kaynaklar ve rehberlik sunan kapsamlı bir Dijital Hikaye Anlatımı Araç Seti geliştirdi. Proje aynı zamanda dijital hikaye anlatımı, yaratıcı etkinlikler ve öz yönelimli öğrenme yoluyla İngilizce dil öğrenimini desteklemek amacıyla tasarlanmış çevrimiçi bir öğrenme platformu olan StoryLand\u2019i de hayata geçirdi.',
      'Dil eğitimini, dijital teknolojileri ve sanatsal ifadeyi bir araya getiren STORYLAND; kültürlerarası diyaloğu, sosyal kapsayıcılığı, yaşam boyu öğrenmeyi ve yetişkinlerin eğitim ile istihdama daha aktif biçimde katılımını destekledi.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Yetişkin öğrencilerin İngilizce dil ve dijital yetkinliklerini güçlendirmek',
      'Yetişkin eğitimi için yenilikçi bir Dijital Hikaye Anlatımı Araç Seti geliştirmek',
      'StoryLand çevrimiçi öğrenme ve paylaşım platformunu oluşturmak',
      'Dil öğrenimine yaratıcı ve disiplinlerarası yaklaşımları teşvik etmek',
      'Yetişkinler için öz yönelimli ve erişilebilir öğrenme fırsatlarını desteklemek',
      'Kültürlerarası diyaloğu ve sosyal kapsayıcılığı güçlendirmek',
      'Dijital teknolojileri ve sanatsal ifadeyi yetişkin eğitimine entegre etmek',
      'Yaşam boyu öğrenmeyi ve değişen dünyaya uyum için beceri gelişimini desteklemek'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA227',
    title: 'STORYLAND',
    tagline: 'New E-Artistic English Learning Approach for Adults',
    subtitle: 'Empowering Adults Through Digital Storytelling and Creative Learning',
    description: 'We enhanced adults\' English language and digital skills through digital storytelling, artistic expression, and innovative e-learning approaches.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎨', label: 'ACTION', value: 'KA227 – Partnerships for Creativity' },
      { icon: '🗓️', label: 'DURATION', value: '2021–2023 (24 months)' },
      { icon: '📍', label: 'SCOPE', value: '4 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Van Provincial Directorate of National Education' },
      { icon: '🤝', label: 'PARTNERS', value: 'Türkiye, Belgium, Croatia, Slovenia' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Adult learners, educators, and adult education professionals' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'STORYLAND aimed to strengthen adults\' English language and digital competences through an innovative combination of digital storytelling, artistic production, and creative learning methods.',
      'The project introduced Digital Storytelling as an interdisciplinary learning approach, enabling adult learners to develop language skills while improving their digital competences, creativity, communication abilities, and confidence.',
      'Throughout the project, partners developed a comprehensive Digital Storytelling Toolkit providing practical resources and guidance for adult learners and educators. The project also created StoryLand, an online learning platform designed to support English language learning through digital storytelling, creative activities, and self-directed learning.',
      'By combining language education, digital technologies, and artistic expression, STORYLAND promoted intercultural dialogue, social inclusion, lifelong learning, and improved opportunities for adults to participate more actively in education and employment.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthened English language and digital competences among adult learners',
      'Developed an innovative Digital Storytelling Toolkit for adult education',
      'Created the StoryLand online learning and sharing platform',
      'Promoted creative and interdisciplinary approaches to language learning',
      'Supported self-directed and accessible learning opportunities for adults',
      'Encouraged intercultural dialogue and social inclusion',
      'Integrated digital technologies and artistic expression into adult education',
      'Supported lifelong learning and the development of skills for the changing world'
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-detail-page">

    <!-- Hero + Sidebar -->
    <div class="project-detail-layout">

      <!-- Left: Hero card -->
      <div class="project-detail-main">
        <div
          class="project-detail-hero"
          :style="{ backgroundImage: 'url(/images/references/storyland.webp)' }"
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
