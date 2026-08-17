<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA220-ADU',
    title: 'S-FEDs',
    tagline: 'Özel Sporcularda Aile Desteğinin Güçlendirilmesi',
    subtitle: 'Kapsayıcı Eğitim ve Destek Yoluyla Antrenörler ve Aileleri Güçlendirmek',
    description: 'Zihinsel engelli sporcularla çalışan antrenörlerin ve ailelerin becerilerini güçlendirerek sporcuların sürdürülebilir spor kariyerlerine daha etkin katkı sağlamalarını destekledik.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎯', label: 'AKSİYON', value: 'KA220-ADU – Yetişkin Eğitiminde İş Birliği Ortaklıkları' },
      { icon: '🗓️', label: 'SÜRE', value: '2022–2024 (24 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '6 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Türkiye Özel Sporcular Spor Federasyonu' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Türkiye, Çek Cumhuriyeti, İspanya, Sırbistan, İtalya' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'Antrenörler, aileler, özel sporcu federasyonları ve eğitim personeli' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Proje, zihinsel engelli sporcularla çalışan antrenörlerin aile desteği ve yönetim becerilerini geliştirerek Avrupa\'daki özel sporcu federasyonlarının kapasitesini güçlendirmeyi amaçladı. Antrenörlerin ve ailelerin daha güçlü iletişim, rehberlik ve iş birliği becerileri geliştirme ihtiyacına yanıt verdi.',
      'Proje süresince antrenörler ve aileler için eğitim programları ve destek kaynakları geliştirildi. Bu kaynaklar; aile yönetimi, danışmanlık, iletişim ve zihinsel engelli sporculara daha etkili destek sağlamak için gereken beceriler üzerine yoğunlaştı.',
      'Federasyonlara ve antrenörlere erişilebilir eğitim olanakları sunmak amacıyla uluslararası bir e-öğrenme platformu da geliştirildi. Uluslararası toplantılar, kısa süreli antrenör eğitimleri ve çoğaltıcı etkinlikler, proje sonuçlarının geliştirilmesine, kalite değerlendirmesine ve yaygınlaştırılmasına katkı sağladı.',
      'Proje, aile yönetimi eğitimi için ortak bir çerçeve oluşturarak katılımcı federasyonların antrenör ve aile destek programları ile hizmet içi eğitim olanakları geliştirmesine imkân tanıdı. Aynı zamanda antrenörler, aileler ve federasyonlar arasındaki iş birliğini güçlendirerek zihinsel engelli sporculara daha iyi destek sağlanmasına katkıda bulundu.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Özel sporcu federasyonlarında aile destek kapasitelerini güçlendirmek',
      'Antrenörlerin aile yönetimi, iletişim ve danışmanlık becerilerini geliştirmek',
      'Antrenörler ve aileler için eğitim programları ve öğrenme kaynakları oluşturmak',
      'Antrenörler ve federasyonlar için uluslararası bir e-öğrenme platformu kurmak',
      'Ailelerin zihinsel engelli sporcuları daha iyi anlamasını ve desteklemesini sağlamak',
      'Antrenörler, aileler ve federasyonlar arasındaki iş birliğini güçlendirmek',
      'Zihinsel engelli sporcuların sosyal kapsayıcılığını teşvik etmek',
      'Sporcuların daha sürdürülebilir spor kariyerleri geliştirmesini desteklemek'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA220-ADU',
    title: 'S-FEDs',
    tagline: 'Building Capacities of Special Athletes Federations on Family Support',
    subtitle: 'Empowering Coaches and Families Through Inclusive Education and Support',
    description: 'We strengthened the skills of coaches and families to better support athletes with intellectual disabilities and contribute to their sustainable sporting careers.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎯', label: 'ACTION', value: 'KA220-YOU – Cooperation Partnerships in Adult Education' },
      { icon: '🗓️', label: 'DURATION', value: '2022–2024 (24 months)' },
      { icon: '📍', label: 'SCOPE', value: '6 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Turkish Special Athletes Sport Federation' },
      { icon: '🤝', label: 'PARTNERS', value: 'Türkiye, Czech Republic, Spain, Serbia, Italy' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Coaches, families, special athletes federations and education staff' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'The project aimed to strengthen the capacity of special athletes federations in Europe by improving family support and management skills among coaches working with athletes with intellectual disabilities. It addressed the need for coaches and families to develop stronger communication, guidance, and cooperation skills.',
      'Throughout the project, training programmes and support resources were developed for coaches and families. These resources focused on family management, counselling, communication, and the skills needed to provide more effective support to athletes with intellectual disabilities.',
      'An international e-learning platform was also developed to support federations and coaches through accessible training opportunities. International meetings, short-term coach training, and multiplier events contributed to the development, quality assessment, and dissemination of the project results.',
      'The project established a common framework for family management training and enabled participating federations to develop coach and family support programmes and in-service training opportunities. It also strengthened cooperation between coaches, families, and federations, contributing to better support for athletes with intellectual disabilities.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthened family support capacities within special athletes federations',
      'Improved coaches\' family management, communication, and counselling skills',
      'Developed training programmes and educational resources for coaches and families',
      'Created an international e-learning platform for coaches and federations',
      'Supported families in better understanding and supporting athletes with intellectual disabilities',
      'Strengthened cooperation between coaches, families, and federations',
      'Promoted the social inclusion of athletes with intellectual disabilities',
      'Supported athletes in developing more sustainable sporting careers'
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
          :style="{ backgroundImage: 'url(/images/references/s-feds.webp)' }"
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
