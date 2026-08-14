<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'FİZİBİLİTE ÇALIŞMASI',
    title: 'Sürmene Yeniçam Tersane Alanına İlişkin Düzenleme ve İyileştirme Önerileri',
    tagline: 'Gemi İnşa Sektörünü Güçlendiren Entegre Üretim Alanı',
    subtitle: 'Sürmene Yeniçam Tersane Alanının Üretim ve Rekabet Gücünü Geliştirmek',
    description: 'Sürmene Yeniçam Tersane Alanının mevcut yapısını, üretim kapasitesini ve gelişme potansiyelini değerlendirerek; sektörel, mekânsal ve kurumsal gelişime yönelik düzenleme ve iyileştirme önerileri geliştirdik.',
    location: 'Sürmene, Trabzon, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Tersane Alanı Düzenleme ve İyileştirme Projesi' },
      { icon: '📍', label: 'LOKASYON', value: 'Sürmene, Trabzon, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Doğu Karadeniz Kalkınma Ajansı (DOKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Sektörel Analiz, Mekânsal Planlama, Tersane Alanı Değerlendirmesi, Sanayi Alanı Planlaması, OSB Geliştirme' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/25.000, 1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Sürmene Yeniçam Tersane Alanının mevcut üretim yapısı, sektörel kapasitesi ve gelişme potansiyeli kapsamlı bir araştırmayla değerlendirilmiştir. Çalışmada ulaşım, enerji, kıyı özellikleri, işgücüne erişim, çevresel koşullar, arazi yapısı ve genişleme imkânları gibi temel kriterler ele alınmıştır.',
      'Araştırma kapsamında bölgede faaliyet gösteren firmaların üretim alanları, kapasite değerleri, üretilen gemi türleri ve çalışan sayıları analiz edilerek tersane alanının sektörel gelişim potansiyeli ortaya konmuştur.',
      'Çalışma sonucunda firmaların ortak tedarik ve üretim, tanıtım ve pazarlama, Ar-Ge, eğitim ve danışmanlık faaliyetleri kapsamında daha güçlü bir organizasyonel yapı altında bir araya getirilmesi önerilmiştir. Bu doğrultuda alanın "Gemi ve Yat İnşası" konusunda ihtisaslaşmış bir OSB olarak faaliyet göstermesi önerisi geliştirilmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Sürmene Yeniçam Tersane Alanının mevcut durum ve kapasite analizi',
      'Gemi inşa sektörünün üretim ve rekabet potansiyelinin değerlendirilmesi',
      'Tersane alanının mekânsal ve sektörel gelişimine yönelik öneriler',
      'Ortak tedarik ve üretim yapısının geliştirilmesi',
      'Tanıtım, pazarlama, Ar-Ge, eğitim ve danışmanlık faaliyetlerinin güçlendirilmesi',
      'Sürmene Yeniçam Gemi Yat ve İhtisas OSB önerisinin geliştirilmesi',
      'OSB için alternatif yerleşim planlarının oluşturulması',
      'Sanayi, yan sanayi ve ortak kullanım alanlarının mekânsal olarak kurgulanması'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '⚓', title: 'ÜRETİM', desc: 'Gemi inşa, bakım-onarım ve farklı gemi türlerine yönelik üretim kapasitesinin geliştirilmesi' },
      { icon: '🤝', title: 'KÜMELENME', desc: 'Tersane firmalarının ortak tedarik, üretim, pazarlama, Ar-Ge ve eğitim faaliyetleriyle birlikte hareket etmesi' },
      { icon: '🏭', title: 'İHTİSAS OSB', desc: 'Gemi ve yat inşası konusunda uzmanlaşmış bir ihtisas OSB modelinin geliştirilmesi' },
      { icon: '🗺️', title: 'MEKÂNSAL GELİŞİM', desc: 'Sanayi, yan sanayi, sosyal tesis, eğitim, teknik altyapı, park ve ulaşım alanlarını bütünleştiren yerleşim planı' }
    ]
  },
  en: {
    badge: 'FEASIBILITY STUDY',
    title: 'Regulations and Improvement Proposals for Sürmene Yeniçam Shipyard Area',
    tagline: 'Integrated Production Area Strengthening the Shipbuilding Sector',
    subtitle: 'Developing the Production and Competitive Capacity of Sürmene Yeniçam Shipyard Area',
    description: 'We assessed the existing structure, production capacity, and development potential of the Sürmene Yeniçam Shipyard Area and developed regulatory and improvement proposals for sectoral, spatial, and institutional development.',
    location: 'Sürmene, Trabzon, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Shipyard Area Regulation and Improvement Project' },
      { icon: '📍', label: 'LOCATION', value: 'Sürmene, Trabzon, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Eastern Black Sea Development Agency (DOKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Sectoral Analysis, Spatial Planning, Shipyard Area Assessment, Industrial Zone Planning, OIZ Development' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/25,000, 1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'The existing production structure, sectoral capacity, and development potential of the Sürmene Yeniçam Shipyard Area were comprehensively assessed. The study addressed key criteria including transportation, energy, coastal characteristics, labour access, environmental conditions, land structure, and expansion possibilities.',
      'Within the research scope, the production areas, capacity values, vessel types, and workforce numbers of firms operating in the region were analysed, revealing the sectoral development potential of the shipyard area.',
      'The study recommended bringing firms together under a stronger organisational structure through joint supply and production, promotion and marketing, R&D, training, and consultancy activities. Accordingly, a proposal was developed for the area to operate as an Organised Industrial Zone specialising in ship and yacht construction.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Current situation and capacity analysis of Sürmene Yeniçam Shipyard Area',
      'Assessment of production and competitive potential in the shipbuilding sector',
      'Spatial and sectoral development proposals for the shipyard area',
      'Development of a joint supply and production structure',
      'Strengthening of promotion, marketing, R&D, training, and consultancy activities',
      'Development of the Sürmene Yeniçam Ship, Yacht and Specialised OIZ proposal',
      'Creation of alternative settlement plans for the OIZ',
      'Spatial structuring of industrial, sub-industrial, and shared use areas'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '⚓', title: 'PRODUCTION', desc: 'Development of production capacity for shipbuilding, maintenance, and various vessel types' },
      { icon: '🤝', title: 'CLUSTERING', desc: 'Shipyard firms acting together through joint supply, production, marketing, R&D, and training activities' },
      { icon: '🏭', title: 'SPECIALISED OIZ', desc: 'Development of a specialised Organised Industrial Zone model for ship and yacht construction' },
      { icon: '🗺️', title: 'SPATIAL DEVELOPMENT', desc: 'Settlement plan integrating industrial, sub-industrial, social facilities, education, technical infrastructure, parks and transport' }
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
          :style="{ backgroundImage: 'url(/images/references/surmene.png)' }"
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
