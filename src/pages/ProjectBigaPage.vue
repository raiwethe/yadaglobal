<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'GES PLANLAMA VE SÜRDÜRÜLEBİLİRLİK',
    title: 'Çanakkale Biga Ramazanlar Mahallesi GES Planlama ve Sürdürülebilirlik Danışmanlığı',
    tagline: 'Güneş Enerjisi Santralinin Mekânsal Planlama ve Sürdürülebilirlik Yaklaşımıyla Değerlendirilmesi',
    subtitle: 'Mevcut GES Alanını Verimli, Sürdürülebilir ve Planlı Bir Enerji Sistemine Dönüştürmek',
    description: 'Çanakkale Biga’daki mevcut Güneş Enerjisi Santrali için mekânsal planlama, sürdürülebilirlik ve teknik danışmanlık hizmetleri sunuyoruz.',
    location: 'Biga, Çanakkale, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'GES Planlama, Sürdürülebilirlik ve Teknik Danışmanlık' },
      { icon: '📍', label: 'LOKASYON', value: 'Biga, Çanakkale, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'EBD Yenilenebilir Enerji Anonim Şirketi' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Mekânsal Analiz, GES Planlaması, Sürdürülebilir Enerji Yönetimi, Arazi Kullanım Analizi, Teknik Danışmanlık' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Devam Ediyor', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Çanakkale İli, Biga İlçesi, Ramazanlar Mahallesi, 116 Ada 11 Parsel üzerinde bulunan Güneş Enerjisi Santrali’ne yönelik planlama ve danışmanlık çalışmaları devam etmektedir. Proje kapsamında mevcut tesisin arazi kullanımı, mekânsal yapısı, enerji altyapısı ve çevresel koşulları detaylı olarak değerlendirilmektedir.',
      '1/1.000 ölçekli mekânsal analiz ve planlama çalışmaları doğrultusunda, mevcut GES alanının daha etkin ve sürdürülebilir şekilde değerlendirilmesine yönelik planlama kararları geliştirilmektedir. Bununla birlikte, enerji üretim süreçlerinin uzun vadeli verimliliğini destekleyecek sürdürülebilir arazi kullanımı, çevresel uyum, teknik altyapı ve işletme geliştirme yaklaşımları ele alınmaktadır.',
      'Çalışmalar kapsamında elde edilen mekânsal ve teknik veriler doğrultusunda, tesisin mevcut durumunun iyileştirilmesi ve gelecekteki ihtiyaçlara uyum sağlayabilmesi için uygulanabilir planlama önerileri ve teknik danışmanlık çıktıları oluşturulmaktadır.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      '1/1.000 ölçekli mekânsal analiz ve planlama çalışmaları',
      'Mevcut arazi kullanımı ve saha değerlendirmesi',
      'GES altyapısı ve çevresel koşulların analizi',
      'Sürdürülebilir enerji ve arazi kullanım yaklaşımı',
      'Teknik planlama ve danışmanlık raporları',
      'Uzun vadeli işletme ve verimlilik geliştirme önerileri'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '☀️', title: 'GES PLANLAMASI', desc: 'Mevcut güneş enerjisi santralinin mekânsal ve teknik kapasitesinin değerlendirilmesi' },
      { icon: '🗺️', title: 'MEKÂNSAL ANALİZ', desc: 'Arazi kullanımı, saha yapısı ve enerji altyapısının bütüncül olarak incelenmesi' },
      { icon: '🍃', title: 'SÜRDÜRÜLEBİLİRLİK', desc: 'Çevresel uyum ve sürdürülebilir arazi kullanımı kararlarının geliştirilmesi' },
      { icon: '📐', title: 'TEKNİK DANIŞMANLIK', desc: 'Tesisin gelecekteki ihtiyaçlarına uyum sağlayacak uygulanabilir öneriler' }
    ]
  },
  en: {
    badge: 'SPP PLANNING AND SUSTAINABILITY',
    title: 'Çanakkale Biga Ramazanlar Solar Power Plant Planning and Sustainability Advisory',
    tagline: 'Assessing the Solar Power Plant through Spatial Planning and Sustainability',
    subtitle: 'Transforming the Existing SPP Site into an Efficient, Sustainable, and Planned Energy System',
    description: 'We provide spatial planning, sustainability, and technical advisory services for the existing Solar Power Plant in Biga, Çanakkale.',
    location: 'Biga, Çanakkale, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'SPP Planning, Sustainability, and Technical Advisory' },
      { icon: '📍', label: 'LOCATION', value: 'Biga, Çanakkale, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'EBD Renewable Energy Joint Stock Company' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Spatial Analysis, SPP Planning, Sustainable Energy Management, Land Use Analysis, Technical Advisory' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'In Progress', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Planning and advisory work is ongoing for the Solar Power Plant located on Block 116, Parcel 11, in Ramazanlar Neighbourhood, Biga, Çanakkale. The project evaluates the existing facility’s land use, spatial structure, energy infrastructure, and environmental conditions in detail.',
      'In line with 1/1,000-scale spatial analysis and planning studies, planning decisions are being developed to support a more efficient and sustainable use of the existing SPP site. Sustainable land use, environmental compliance, technical infrastructure, and operational development approaches that support long-term energy production efficiency are also being addressed.',
      'Based on the spatial and technical data produced through the studies, implementable planning recommendations and technical advisory outputs are being developed to improve the facility’s current condition and respond to future needs.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      '1/1,000-scale spatial analysis and planning studies',
      'Existing land use and site assessment',
      'Analysis of SPP infrastructure and environmental conditions',
      'Sustainable energy and land use approach',
      'Technical planning and advisory reports',
      'Long-term operational and efficiency improvement recommendations'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '☀️', title: 'SPP PLANNING', desc: 'Assessment of the existing solar power plant’s spatial and technical capacity' },
      { icon: '🗺️', title: 'SPATIAL ANALYSIS', desc: 'Integrated review of land use, site structure, and energy infrastructure' },
      { icon: '🍃', title: 'SUSTAINABILITY', desc: 'Development of environmental compliance and sustainable land use decisions' },
      { icon: '📐', title: 'TECHNICAL ADVISORY', desc: 'Implementable recommendations aligned with the facility’s future needs' }
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
          class="project-plan-hero project-biga-hero"
          :style="{ backgroundImage: 'url(/images/references/biga.webp)' }"
        >
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
