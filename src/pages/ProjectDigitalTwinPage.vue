<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'DİJİTAL İKİZ',
    title: 'DİJİTAL İKİZ SÜREÇ MODELLEME, ALGORİTMA GELİŞTİRME VE ANALİTİK ÇÖZÜMLER',
    subtitle: 'Dijital İkiz, Algoritma Geliştirme ve Veri Odaklı Süreç Analizi',
    description: "Moderna Grup'un gayrimenkul portföyü ve operasyonel süreçlerine ilişkin verilerin analiz edilmesi, dijital ortamda süreç modellerinin oluşturulması, algoritmik çözümlerin geliştirilmesi ve veri odaklı karar destek altyapısının oluşturulmasına yönelik teknoloji hizmeti.",
    location: 'Gayrimenkul Portföyü ve Operasyonel Süreçler',
    meta: [
      { icon: '📋', label: 'HİZMET TÜRÜ', value: 'Dijital İkiz ve Analitik Çözümler' },
      { icon: '⚙️', label: 'HİZMET ALANI', value: 'Süreç Modelleme & Algoritma Geliştirme' },
      { icon: '🏢', label: 'HİZMET VERİLEN KURUM', value: 'Moderna Grup Gayrimenkul Yapı İnşaat Turizm Sanayi ve Ticaret A.Ş.' },
      { icon: '🏘️', label: 'KAPSAM', value: 'Gayrimenkul Portföyü ve Operasyonel Süreçler' },
      { icon: '📊', label: 'ANALİTİK YAPI', value: 'Veri Analizi, Modelleme ve Algoritmik Çözümler' },
      { icon: '🔄', label: 'HİZMET DURUMU', value: 'Devam Ediyor', highlight: true }
    ],
    sectionTitle: 'PROJE HAKKINDA',
    sectionText: [
      "Hizmet kapsamında Moderna Grup'un gayrimenkul portföyü ve operasyonel süreçlerine ilişkin mevcut veriler analiz edilerek, süreçlerin dijital ortamda modellenmesine yönelik dijital ikiz altyapısı oluşturulmaktadır. Farklı veri kaynaklarının bütünleşik bir yapıda değerlendirilmesiyle gayrimenkullere, süreçlere ve operasyonel performansa ilişkin verilerin izlenebilir ve analiz edilebilir hale getirilmesi hedeflenmektedir.",
      'Bu süreç kapsamında veri modellerinin oluşturulması, algoritmik analizlerin geliştirilmesi ve analitik çözüm altyapılarının tasarlanması çalışmaları yürütülmektedir. Geliştirilen yapı ile süreçlerin mevcut durumunun değerlendirilmesi, performans göstergelerinin analiz edilmesi ve farklı senaryoların dijital ortamda karşılaştırılmasına olanak sağlayan veri odaklı bir karar destek altyapısı oluşturulmaktadır.'
    ],
    benefitsTitle: 'HİZMETİN SAĞLADIĞI FAYDALAR',
    benefits: [
      'Gayrimenkul ve operasyonel süreçlerin dijital ortamda modellenmesi',
      'Farklı veri kaynaklarının bütünleşik olarak analiz edilmesi',
      'Veri odaklı karar destek mekanizmalarının geliştirilmesi',
      'Süreç performansının izlenmesi ve değerlendirilmesi',
      'Algoritmik analiz ve modelleme altyapısının oluşturulması',
      'Geleceğe yönelik senaryo ve öngörü çalışmalarının desteklenmesi'
    ]
  },
  en: {
    badge: 'DIGITAL TWIN',
    title: 'DIGITAL TWIN PROCESS MODELING, ALGORITHM DEVELOPMENT AND ANALYTICAL SOLUTIONS',
    subtitle: 'Digital Twin, Algorithm Development, and Data-Driven Process Analysis',
    description: "A technology service for analyzing data related to Moderna Grup's real estate portfolio and operational processes, creating process models in a digital environment, developing algorithmic solutions, and establishing a data-driven decision support infrastructure.",
    location: 'Real Estate Portfolio and Operational Processes',
    meta: [
      { icon: '📋', label: 'SERVICE TYPE', value: 'Digital Twin and Analytical Solutions' },
      { icon: '⚙️', label: 'SERVICE AREA', value: 'Process Modeling & Algorithm Development' },
      { icon: '🏢', label: 'CLIENT', value: 'Moderna Grup Gayrimenkul Yapı İnşaat Turizm Sanayi ve Ticaret A.Ş.' },
      { icon: '🏘️', label: 'SCOPE', value: 'Real Estate Portfolio and Operational Processes' },
      { icon: '📊', label: 'ANALYTICAL STRUCTURE', value: 'Data Analysis, Modeling, and Algorithmic Solutions' },
      { icon: '🔄', label: 'SERVICE STATUS', value: 'Ongoing', highlight: true }
    ],
    sectionTitle: 'ABOUT THE PROJECT',
    sectionText: [
      "As part of the service, existing data related to Moderna Grup's real estate portfolio and operational processes is being analyzed to establish a digital twin infrastructure for modeling processes in a digital environment. By evaluating different data sources within an integrated structure, the service aims to make information about properties, processes, and operational performance traceable and analyzable.",
      'This work includes creating data models, developing algorithmic analyses, and designing analytical solution infrastructure. The resulting structure provides data-driven decision support for evaluating the current state of processes, analyzing performance indicators, and comparing different scenarios in a digital environment.'
    ],
    benefitsTitle: 'SERVICE BENEFITS',
    benefits: [
      'Digital modeling of real estate and operational processes',
      'Integrated analysis of different data sources',
      'Development of data-driven decision support mechanisms',
      'Monitoring and evaluation of process performance',
      'Establishment of algorithmic analysis and modeling infrastructure',
      'Support for future scenario planning and predictive studies'
    ]
  }
}

const c = computed(() => content[locale.value] ?? content.en)
</script>

<template>
  <div class="page-wrapper page-content digital-portfolio-page">
    <div class="project-detail-layout digital-portfolio-intro">
      <div class="project-detail-main">
        <div
          class="project-plan-hero"
          :style="{ backgroundImage: 'url(/images/references/digitaltwin.png)' }"
        >
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline">{{ c.subtitle }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-desc">{{ c.description }}</p>
            <p class="project-plan-location">
              <span>🏘️</span>
              <span>{{ c.location }}</span>
            </p>
          </div>
        </div>
      </div>

      <aside class="project-detail-sidebar" aria-label="Hizmet bilgileri">
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

    <section class="digital-portfolio-body">
      <section class="digital-portfolio-detail" aria-labelledby="digital-twin-detail-title">
        <div class="digital-portfolio-detail-heading">
          <h2 id="digital-twin-detail-title">{{ c.sectionTitle }}</h2>
          <p v-for="paragraph in c.sectionText" :key="paragraph" class="digital-portfolio-detail-paragraph">{{ paragraph }}</p>
        </div>
      </section>

      <aside class="project-contributions" aria-labelledby="digital-twin-benefits-title">
        <h2 id="digital-twin-benefits-title" class="project-section-title">{{ c.benefitsTitle }}</h2>
        <ul class="project-contributions-list">
          <li v-for="benefit in c.benefits" :key="benefit" class="project-contribution-item">
            <span class="project-contribution-check" aria-hidden="true">✔</span>
            {{ benefit }}
          </li>
        </ul>
      </aside>
    </section>
  </div>
</template>
