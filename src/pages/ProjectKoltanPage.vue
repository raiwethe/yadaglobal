<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'GES PLANLAMA VE SÜRDÜRÜLEBİLİRLİK',
    title: 'Eskişehir İli Sivrihisar İlçesi Koltan Mahallesi GES İmar Planı',
    tagline: 'Yenilenebilir Enerji Yatırımları İçin Analitik Planlama ve İmar Altyapısı',
    subtitle: 'Güneş Enerjisi Potansiyelini Planlı ve Sürdürülebilir Bir Yatırıma Dönüştürmek',
    description: 'Sivrihisar Koltan Mahallesi\'nde planlanan güneş enerjisi santrali için imar planı ve analitik etüd çalışmaları gerçekleştirdik.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'GES İmar Planı ve Analitik Etüd Çalışması' },
      { icon: '📍', label: 'LOKASYON', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'İmar Planlama, Analitik Etüdler, Jeolojik Değerlendirme, Kurum Görüşleri, Yenilenebilir Enerji Planlaması' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Çalışma kapsamında Sivrihisar İlçesi, Koltan Mahallesi\'nde bulunan 126 ada 2 parsel üzerinde güneş enerjisi santrali kurulmasına yönelik planlama ve analitik etüt çalışmaları gerçekleştirilmiştir. İnceleme alanının yaklaşık 3,01 hektar büyüklüğünde olduğu ve mevcut durumda yapılaşma bulunmadığı raporda belirtilmiştir.',
      'Planlama sürecinde alanın jeolojik ve jeoteknik özellikleri, topoğrafik yapısı, güneşlenme potansiyeli, ulaşım bağlantıları ve altyapı koşulları değerlendirilmiştir. Yapılan mikrobölgeleme etüdü ile yerleşime uygunluk değerlendirmeleri gerçekleştirilerek imar planı çalışmalarına teknik girdiler oluşturulmuştur.',
      'Çalışma sonucunda 592,57 kW gücünde Güneş Enerjisi Santrali için yenilenebilir enerji kaynaklarına dayalı üretim tesis alanına yönelik planlama kararları geliştirilmiştir.',
      'Ayrıca ilgili kurum ve kuruluşlardan alınan görüşler doğrultusunda ulaşım ve altyapı koşulları değerlendirilmiş; Karayolları açısından otoyol güzergâhına yakınlık nedeniyle gerekli parlama ve ışıma etkisi değerlendirmeleri de planlama sürecine dahil edilmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Koltan GES için imar planı çalışması',
      'Analitik etüd ve mevcut durum değerlendirmeleri',
      'Mikrobölgeleme ve yerleşime uygunluk değerlendirmesi',
      'Jeolojik ve jeoteknik verilerin planlamaya aktarılması',
      'Güneş enerjisi potansiyelinin değerlendirilmesi',
      'Kurum ve kuruluş görüşlerinin incelenmesi',
      'Ulaşım ve altyapı değerlendirmeleri',
      '1/5.000 ve 1/1.000 ölçekli planlama çalışmaları',
      '592,57 kW kapasiteli GES için mekânsal plan kararlarının oluşturulması'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '☀️', title: 'YENİLENEBİLİR ENERJİ', desc: 'Güneş enerjisi potansiyelinin değerlendirilerek yenilenebilir enerji üretim alanının planlanması.' },
      { icon: '🗺️', title: 'ANALİTİK PLANLAMA', desc: 'Arazi, topoğrafya, güneşlenme, ulaşım ve mevcut durum verilerinin bütüncül şekilde değerlendirilmesi.' },
      { icon: '⛰️', title: 'JEOLOJİK DEĞERLENDİRME', desc: 'Jeolojik ve mikrobölgeleme etütleri üzerinden alanın yerleşime uygunluk koşullarının belirlenmesi.' },
      { icon: '📐', title: 'MEKÂNSAL PLANLAMA', desc: 'GES yatırım alanının ilgili teknik veriler ve kurum görüşleri doğrultusunda imar planı kararlarıyla yapılandırılması.' }
    ],
    stats: [
      { icon: '⚡', value: '592,57 kW', label: 'GES Kurulu Gücü' },
      { icon: '📐', value: '3,01 ha', label: 'Planlama Alanı' },
      { icon: '🗂️', value: '126 Ada 2', label: 'Parsel' }
    ]
  },
  en: {
    badge: 'SPP PLANNING AND SUSTAINABILITY',
    title: 'Koltan Neighbourhood Solar Power Plant Zoning Plan, Sivrihisar District, Eskişehir Province',
    tagline: 'Analytical Planning and Zoning Infrastructure for Renewable Energy Investments',
    subtitle: 'Transforming Solar Energy Potential into a Planned and Sustainable Investment',
    description: 'We delivered zoning-plan and analytical-study work for the proposed solar power plant in Koltan Neighbourhood, Sivrihisar.',
    location: 'Sivrihisar, Eskişehir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'SPP Zoning Plan and Analytical Study' },
      { icon: '📍', label: 'LOCATION', value: 'Sivrihisar, Eskişehir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'MTG Planlama Mimarlık Mühendislik İnşaat Ticaret Limited Şirketi' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Zoning Planning, Analytical Studies, Geological Assessment, Institutional Consultations, Renewable Energy Planning' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Planning and analytical study work was carried out for the establishment of a solar power plant on block 126, parcel 2 in Koltan Neighbourhood, Sivrihisar District. The report states that the study area is approximately 3.01 hectares and currently has no built development.',
      'The planning process assessed the site\'s geological and geotechnical characteristics, topography, solar exposure potential, transport connections, and infrastructure conditions. A microzonation study and suitability-for-development assessment provided technical inputs for the zoning-plan work.',
      'The study resulted in planning decisions for a renewable-energy production facility area for a 592.57 kW Solar Power Plant.',
      'Transport and infrastructure conditions were also assessed in light of opinions from relevant institutions. Required glare and light-reflection assessments were included in the planning process because of the site\'s proximity to the motorway corridor.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Zoning-plan study for the Koltan SPP',
      'Analytical study and existing-condition assessments',
      'Microzonation and suitability-for-development assessment',
      'Integration of geological and geotechnical data into planning',
      'Assessment of solar energy potential',
      'Review of opinions from institutions and organizations',
      'Transport and infrastructure assessments',
      'Planning studies at 1/5,000 and 1/1,000 scales',
      'Spatial planning decisions for a 592.57 kW SPP'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '☀️', title: 'RENEWABLE ENERGY', desc: 'Assessment of solar energy potential and planning of the renewable energy production area.' },
      { icon: '🗺️', title: 'ANALYTICAL PLANNING', desc: 'Integrated assessment of land, topography, solar exposure, transport, and existing-condition data.' },
      { icon: '⛰️', title: 'GEOLOGICAL ASSESSMENT', desc: 'Determination of site suitability through geological and microzonation studies.' },
      { icon: '📐', title: 'SPATIAL PLANNING', desc: 'Structuring the SPP investment site through zoning-plan decisions based on technical data and institutional opinions.' }
    ],
    stats: [
      { icon: '⚡', value: '592.57 kW', label: 'Installed SPP Capacity' },
      { icon: '📐', value: '3.01 ha', label: 'Planning Area' },
      { icon: '🗂️', value: 'Block 126, Parcel 2', label: 'Parcel' }
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content project-plan-page">
    <div class="project-detail-layout">
      <div class="project-detail-main">
        <div class="project-plan-hero" :style="{ backgroundImage: 'url(/images/references/koltan.png)' }">
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline">{{ c.tagline }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-subtitle">{{ c.subtitle }}</p>
            <p class="project-detail-desc">{{ c.description }}</p>
            <p class="project-plan-location"><span>📍</span><span>{{ c.location }}</span></p>
          </div>
        </div>
      </div>

      <aside class="project-detail-sidebar">
        <div class="project-detail-meta-card">
          <div v-for="item in c.meta" :key="item.label" class="project-meta-row">
            <span class="project-meta-icon" aria-hidden="true">{{ item.icon }}</span>
            <div class="project-meta-content">
              <span class="project-meta-label">{{ item.label }}</span>
              <span class="project-meta-value" :class="{ 'project-meta-badge-active': item.highlight }">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <section class="project-stats-grid" :aria-label="locale === 'tr' ? 'Proje verileri' : 'Project data'">
      <article v-for="stat in c.stats" :key="stat.label" class="project-stat-card">
        <span class="project-stat-icon" aria-hidden="true">{{ stat.icon }}</span>
        <strong class="project-stat-value">{{ stat.value }}</strong>
        <span class="project-stat-label">{{ stat.label }}</span>
      </article>
    </section>

    <div class="project-detail-body">
      <section class="project-about">
        <h2 class="project-plan-about-title">{{ c.aboutTitle }}</h2>
        <p v-for="paragraph in c.aboutText" :key="paragraph" class="project-about-para">{{ paragraph }}</p>
        <h2 class="project-section-title">{{ c.focusTitle }}</h2>
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