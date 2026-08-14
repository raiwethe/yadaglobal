<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA220-SCH',
    title: 'Do Not Let Water Leave Us!',
    tagline: 'STEAM Eğitimi Yoluyla Su Tasarrufu',
    subtitle: 'Öğrencileri Su Kaynaklarını Korumak İçin Güçlendirmek',
    description: 'Gençlerde su sorunlarına yönelik farkındalık oluşturduk ve STEAM tabanlı öğrenme yaklaşımları geliştirerek sorumlu su kullanımını, yaratıcılığı ve sürdürülebilir uygulamaları teşvik ettik.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎯', label: 'AKSİYON', value: 'KA220-SCH – Okul Eğitiminde İş Birliği Ortaklıkları' },
      { icon: '🗓️', label: 'SÜRE', value: '2023–2025 (24 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '6 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'GTVS Am Hundsturm' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Avusturya, Almanya, İspanya, İtalya, Portekiz, Türkiye' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: '10–16 yaş öğrenciler, öğretmenler, aileler ve okullar' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Do Not Let Water Leave Us!, öğrencilerin su tasarrufu, sorumlu tüketim ve su kaynaklarına ilişkin çevresel sorunlar hakkında farkındalık kazanmasına odaklandı. Proje; öğrencileri sürdürülebilir alışkanlıklar geliştirmeye ve daha bilinçli bireyler olmaya teşvik etti.',
      'Disiplinlerarası STEAM tabanlı yaklaşım kullanılarak proje; su kirliliği, su kıtlığı, tasarruf ve sürdürülebilirlik gibi konuları ele alırken öğrencilerin yaratıcılık, bilgi okuryazarlığı, problem çözme, eleştirel düşünce ve dayanıklılık becerilerini geliştirdi.',
      'Proje, çalıştaylar, saha etkinlikleri ve öğrenme hareketlilikleri aracılığıyla Avrupa genelindeki okulları bir araya getirdi. Ortaklar; öğretmenleri ve okulları su temalı eğitim konusunda desteklemek amacıyla Yeşil Platform, Su Okuryazarlığı Rubriği, STEAM Ders Planları ve Su Tasarrufu Müfredatı geliştirdi.',
      'Proje sonuçları; öğretmenlere, öğrencilere, okullara ve kamuoyuna yönelik su tasarrufu ve disiplinlerarası STEAM eğitimi alanındaki bilgi ve iyi uygulamaların paylaşılması için pratik kaynaklar sundu.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Öğrencilerde su tasarrufu farkındalığı oluşturmak',
      'Sorumlu ve sürdürülebilir su tüketimini teşvik etmek',
      'Öğrencilerin yaratıcılık, eleştirel düşünce ve problem çözme becerilerini geliştirmek',
      'Su eğitimini disiplinlerarası STEAM yaklaşımıyla bütünleştirmek',
      'Etkinlik, materyal ve iyi uygulamaların paylaşımı için Yeşil Platform geliştirmek',
      'Bilgi ve becerileri değerlendirmek amacıyla Su Okuryazarlığı Rubriği oluşturmak',
      'Öğretmenler için pratik STEAM Ders Planları hazırlamak',
      'Su tasarrufu eğitimi için Su Tasarrufu Müfredatı oluşturmak'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA220-SCH',
    title: 'Do Not Let Water Leave Us!',
    tagline: 'Water Conservation Through STEAM Education',
    subtitle: 'Empowering Students to Protect Water Resources',
    description: 'We raised awareness of water challenges among young people and developed STEAM-based learning approaches to promote responsible water consumption, creativity, and sustainable practices.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎯', label: 'ACTION', value: 'KA220-SCH – Cooperation Partnerships in School Education' },
      { icon: '🗓️', label: 'DURATION', value: '2023–2025 (24 months)' },
      { icon: '📍', label: 'SCOPE', value: '6 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'GTVS Am Hundsturm' },
      { icon: '🤝', label: 'PARTNERS', value: 'Austria, Germany, Spain, Italy, Portugal, Türkiye' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Students aged 10–16, teachers, families, and schools' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Do Not Let Water Leave Us! focused on raising awareness among students about water conservation, responsible consumption, and the environmental challenges related to water resources. The project encouraged students to develop sustainable habits and become more conscious citizens.',
      'Using an interdisciplinary STEAM-based approach, the project developed students\' creativity, information literacy, problem-solving, critical thinking, and resilience while addressing topics such as water pollution, water scarcity, conservation, and sustainability.',
      'The project brought together schools from across Europe through workshops, field activities, and learning mobilities. Partners developed a Green Platform, Water Literacy Rubric, STEAM Lesson Plans, and Water Save Curriculum to support teachers and schools in delivering water-related education.',
      'The project results provided practical resources for sharing knowledge and good practices on water conservation and interdisciplinary STEAM education, reaching teachers, students, schools, and the wider public.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Raised awareness of water conservation among students',
      'Promoted responsible and sustainable water consumption',
      'Developed students\' creativity, critical thinking, and problem-solving skills',
      'Integrated water education with an interdisciplinary STEAM approach',
      'Developed the Green Platform for sharing activities, materials, and good practices',
      'Created a Water Literacy Rubric to assess knowledge and skills',
      'Developed practical STEAM Lesson Plans for teachers',
      'Created the Water Save Curriculum for water conservation education'
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
          :style="{ backgroundImage: 'url(/images/references/water.png)' }"
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
