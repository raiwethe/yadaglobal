<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'DİJİTAL PORTFÖY YÖNETİMİ',
    title: 'DİJİTAL PORTFÖY YÖNETİMİ',
    subtitle: 'Gayrimenkul Verilerinin Dijitalleştirilmesi ve Arşivlenmesi',
    description: "Moderna Grup'un gayrimenkul portföyüne ilişkin mevcut verilerin dijital ortama aktarılması, düzenlenmesi, sınıflandırılması ve merkezi bir dijital arşiv yapısında yönetilmesine yönelik veri yönetimi hizmeti.",
    meta: [
      { icon: '📋', label: 'HİZMET TÜRÜ', value: 'Dijital Portföy Yönetimi' },
      { icon: '🗂️', label: 'HİZMET ALANI', value: 'Veri Dijitalleştirme & Dijital Arşivleme' },
      { icon: '🏢', label: 'HİZMET VERİLEN KURUM', value: 'Moderna Grup Gayrimenkul Yapı İnşaat Turizm Sanayi ve Ticaret A.Ş.' },
      { icon: '🏘️', label: 'KAPSAM', value: 'Gayrimenkul Portföyü' },
      { icon: '💾', label: 'VERİ YÖNETİMİ', value: 'Dijitalleştirme, Sınıflandırma, Arşivleme' },
      { icon: '✅', label: 'HİZMET DURUMU', value: 'Devam Ediyor', highlight: true }
    ],
    sectionTitle: 'PROJE HAKKINDA',
    sectionText: [
      'Hizmet kapsamında firmanın mevcut gayrimenkul portföyüne ilişkin bilgi ve belgeler dijital ortama aktarılmış, sistematik bir veri yapısı içerisinde düzenlenmiş ve erişilebilir bir dijital arşiv oluşturulacaktır. Gayrimenkullere ait mülkiyet, konum, nitelik ve doküman bilgilerinin düzenli bir yapıda bir araya getirilmesiyle, portföyün daha kolay yönetilmesi ve güncellenmesi sağlanacaktır.',
      'Bu süreç sayesinde dağınık ve fiziksel ortamda bulunan bilgilerin merkezi bir dijital yapıya taşınması, veri bütünlüğünün korunması ve ihtiyaç duyulan bilgilere hızlı erişim sağlanması hedeflenmektedir. Oluşturulacak dijital altyapı, firmanın mevcut portföyünü daha etkin takip etmesine ve gelecekte gerçekleştirilecek analiz, raporlama ve dijital dönüşüm çalışmalarına temel oluşturacaktır.'
    ],
    benefitsTitle: 'HİZMETİN SAĞLADIĞI FAYDALAR',
    benefits: [
      'Gayrimenkul bilgilerinin merkezi olarak yönetilmesi',
      'Bilgi ve belgelere hızlı erişim',
      'Fiziksel arşiv yükünün azaltılması',
      'Veri kaybı ve bilgi dağınıklığının önlenmesi',
      'Gayrimenkul portföyünün daha etkin takip edilmesi',
      'Kurumsal bilgi altyapısının güçlendirilmesi'
    ]
  },
  en: {
    badge: 'DIGITAL PORTFOLIO MANAGEMENT',
    title: 'DIGITAL PORTFOLIO MANAGEMENT',
    subtitle: 'Digitization and Archiving of Real Estate Data',
    description: "A data management service for transferring, organizing, classifying, and managing Moderna Grup's existing real estate portfolio data in a centralized digital archive.",
    meta: [
      { icon: '📋', label: 'SERVICE TYPE', value: 'Digital Portfolio Management' },
      { icon: '🗂️', label: 'SERVICE AREA', value: 'Data Digitization & Digital Archiving' },
      { icon: '🏢', label: 'CLIENT', value: 'Moderna Grup Gayrimenkul Yapı İnşaat Turizm Sanayi ve Ticaret A.Ş.' },
      { icon: '🏘️', label: 'SCOPE', value: 'Real Estate Portfolio' },
      { icon: '💾', label: 'DATA MANAGEMENT', value: 'Digitization, Classification, Archiving' },
      { icon: '✅', label: 'SERVICE STATUS', value: 'Ongoing', highlight: true }
    ],
    sectionTitle: 'ABOUT THE PROJECT',
    sectionText: [
      'As part of the service, information and documents related to the company’s existing real estate portfolio will be transferred into a digital environment, organized within a systematic data structure, and used to create an accessible digital archive. Bringing ownership, location, property, and document information together in an organized structure will make the portfolio easier to manage and update.',
      'This process aims to move scattered information held in physical environments into a centralized digital structure, preserve data integrity, and provide fast access to the information needed. The digital infrastructure to be created will enable the company to track its existing portfolio more effectively and establish a foundation for future analysis, reporting, and digital transformation initiatives.'
    ],
    benefitsTitle: 'SERVICE BENEFITS',
    benefits: [
      'Centralized management of real estate information',
      'Fast access to information and documents',
      'Reduced physical archive burden',
      'Prevention of data loss and information scatteredness',
      'More effective tracking of the real estate portfolio',
      'Strengthened corporate information infrastructure'
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
          :style="{ backgroundImage: 'url(/images/references/digital.png)' }"
        >
          <div class="project-plan-hero-gradient"></div>
          <span class="project-plan-badge">{{ c.badge }}</span>
          <div class="project-plan-hero-bottom">
            <h1 id="digital-portfolio-title" class="project-plan-title">{{ c.title }}</h1>
            <p class="project-detail-tagline">{{ c.subtitle }}</p>
            <div class="project-detail-divider" aria-hidden="true"></div>
            <p class="project-detail-desc">{{ c.description }}</p>
            <p class="project-plan-location">
              <span>🗂️</span>
              <span>{{ c.meta[3].value }}</span>
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
      <section class="digital-portfolio-detail" aria-labelledby="digital-portfolio-detail-title">
        <div class="digital-portfolio-detail-heading">
          <h2 id="digital-portfolio-detail-title">{{ c.sectionTitle }}</h2>
          <p v-for="paragraph in c.sectionText" :key="paragraph" class="digital-portfolio-detail-paragraph">{{ paragraph }}</p>
        </div>
      </section>

      <aside class="project-contributions" aria-labelledby="digital-portfolio-benefits-title">
        <h2 id="digital-portfolio-benefits-title" class="project-section-title">{{ c.benefitsTitle }}</h2>
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
