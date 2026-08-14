<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'YARATICI TURİZM KONSEPT MASTER PLAN',
    title: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı',
    tagline: 'Doğa, Kültür ve Macera Odaklı Yaratıcı Turizm Koridoru',
    subtitle: 'Şiran’ın Doğal ve Kültürel Potansiyelini Turizme Kazandırmak',
    description: 'Şiran’ın doğal, kültürel ve rekreasyonel potansiyelini bütüncül bir yaklaşımla değlendirmek amacıyla yaratıcı turizm konsept master planı hazırladık.',
    location: 'Şiran, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Yaratıcı Turizm Konsept Master Planı' },
      { icon: '📍', label: 'LOKASYON', value: 'Şiran, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Doğu Karadeniz Kalkınma Ajansı (DOKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Turizm Planlaması, Mekânsal Planlama, Stratejik Planlama, Destinasyon Geliştirme, Konsept Tasarım' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/25.000, 1/5.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Şiran\'ın doğal, kültürel ve rekreasyonel potansiyelini bütüncül bir yaklaşımla değerlendirmek amacıyla Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı hazırlanmıştır. Çalışmada destinasyonun mevcut potansiyeli, cazibe noktaları, erişilebilirliği, turist profilleri ve stratejik odakları birlikte ele alınmıştır.',
      'Plan kapsamında Şiran\'ın farklı bölgelerini birbirine bağlayan doğa, kültür, macera ve rekreasyon temelli turizm deneyimleri geliştirilmiştir. Köy konaklarından kamp alanlarına, yamaç paraşütünden ATV ve bisiklet parkurlarına, macera parklarından Tomara Şelalesi çevresindeki kullanımlara kadar farklı turizm konseptleri önerilmiştir.',
      'Bu yaklaşım ile Şiran\'ın farklı turizm değerlerinin tek bir koridor içerisinde bütünleştirilmesi ve destinasyonun çeşitlendirilmiş, deneyim odaklı ve sürdürülebilir bir turizm merkezi olarak geliştirilmesi hedeflenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Şiran Kuzey-Güney Yaratıcı Turizm Koridoru konsepti',
      'Turizm cazibe noktalarının belirlenmesi ve önceliklendirilmesi',
      'Stratejik turizm odakları ve hedef turist gruplarının belirlenmesi',
      'Doğa, kültür, macera ve rekreasyon temelli turizm deneyimleri',
      'Turizm altyapısı ve erişilebilirlik önerileri',
      'Köy turizmi ve konaklama konseptleri',
      'Aktif turizm ve doğa sporlarına yönelik öneriler',
      'Destinasyonun bütüncül ve deneyim odaklı geliştirilmesi'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🌿', title: 'DOĞA', desc: 'Doğa ile bütünleşen turizm ve rekreasyon deneyimleri' },
      { icon: '🏺', title: 'KÜLTÜR', desc: 'Yerel mimari, köy yaşamı ve kültürel değerlerin turizme kazandırılması' },
      { icon: '🧗', title: 'MACERA', desc: 'ATV, hiking, bisiklet, yamaç paraşütü ve macera parkurları' },
      { icon: '⛺', title: 'REKREASYON', desc: 'Su sporları, kamp, spor ve dinlenme alanları' }
    ]
  },
  en: {
    badge: 'CREATIVE TOURISM CONCEPT MASTER PLAN',
    title: 'Şiran North-South Corridor Creative Tourism Concept Master Plan',
    tagline: 'Creative Tourism Corridor Focused on Nature, Culture, and Adventure',
    subtitle: 'Bringing Şiran’s Natural and Cultural Potential into Tourism',
    description: 'We prepared a creative tourism concept master plan to comprehensively assess the natural, cultural, and recreational potential of Şiran.',
    location: 'Şiran, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Creative Tourism Concept Master Plan' },
      { icon: '📍', label: 'LOCATION', value: 'Şiran, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Eastern Black Sea Development Agency (DOKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Tourism Planning, Spatial Planning, Strategic Planning, Destination Development, Concept Design' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/25,000, 1/5,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'The North-South Corridor Creative Tourism Concept Master Plan was prepared to comprehensively assess the natural, cultural, and recreational potential of Şiran. The study addressed the destination\'s existing potential, attractions, accessibility, tourist profiles, and strategic priorities.',
      'The plan developed nature, culture, adventure, and recreation-based tourism experiences linking different parts of Şiran. Tourism concepts ranging from village guesthouses to campsites, paragliding to ATV and cycling trails, adventure parks to uses around Tomara Waterfall were proposed.',
      'This approach aimed to integrate Şiran\'s diverse tourism assets within a single corridor and develop the destination as a diversified, experience-driven, and sustainable tourism hub.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Şiran North-South Creative Tourism Corridor concept',
      'Identification and prioritisation of tourism attractions',
      'Strategic tourism focuses and target visitor group definitions',
      'Nature, culture, adventure, and recreation-based tourism experiences',
      'Tourism infrastructure and accessibility recommendations',
      'Village tourism and accommodation concepts',
      'Active tourism and outdoor sports recommendations',
      'Holistic and experience-driven destination development'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🌿', title: 'NATURE', desc: 'Tourism and recreation experiences integrated with nature' },
      { icon: '🏺', title: 'CULTURE', desc: 'Local architecture, village life, and cultural heritage brought into tourism' },
      { icon: '🧗', title: 'ADVENTURE', desc: 'ATV, hiking, cycling, paragliding, and adventure trails' },
      { icon: '⛺', title: 'RECREATION', desc: 'Water sports, camping, sports facilities, and leisure areas' }
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
          :style="{ backgroundImage: 'url(/images/references/siran1.png)' }"
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

        <!-- Focus areas -->
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
