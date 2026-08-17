<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'ERASMUS+ KA220-YOU',
    title: 'e-Makers',
    tagline: 'İyi Uygulama Örneği',
    subtitle: 'Dijital Sosyal Girişimcilik Yoluyla Gençleri Güçlendirmek',
    description: 'Sosyal girişimcilik, dijital dönüşüm ve yenilikçi öğrenme yaklaşımlarını bir araya getirerek gençlerin dijital, girişimcilik ve çevre becerilerini güçlendirdik.',
    location: 'Avrupa Birliği Projesi',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Erasmus+' },
      { icon: '🎯', label: 'AKSİYON', value: 'KA220-YOU – Gençlik Alanında İş Birliği Ortaklıkları' },
      { icon: '🗓️', label: 'SÜRE', value: '2021–2023' },
      { icon: '📍', label: 'KAPSAM', value: '4 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Fundacion Xul para la Comunicación Social y el Desarrollo' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'İspanya, İtalya, Hırvatistan, Türkiye' },
      { icon: '🎓', label: 'HEDEF KİTLE', value: '18–30 yaş arası gençler, gençlik çalışanları, sosyal girişimler' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'e-Makers, dijitalleşme, girişimcilik eğitimi ve çevre farkındalığını bir araya getirerek gençler arasında çevresel sosyal girişimciliği teşvik etmeyi amaçladı. Proje; genç girişimcilerin ve sosyal girişimlerin çevresel ve toplumsal sorunlara sürdürülebilir yaklaşımlar geliştirirken daha güçlü dijital kapasiteler edinme ihtiyacına yanıt verdi.',
      'Proje süresince ortaklar, gençlerin ve gençlik çalışanlarının dijital, girişimcilik, mesleki ve sosyal becerilerini güçlendirmeye yönelik yenilikçi öğrenme kaynakları geliştirdi. Sosyal girişimcilik eğitimini daha ilgi çekici, pratik ve erişilebilir kılmak için yaygın eğitim metodolojileri ve oyunlaştırma yöntemleri kullanıldı.',
      'Proje; Dijital Sosyal Girişimcilik için Yaygın Eğitim Araç Seti, Sosyal Girişimlerin Dijitalleşmesi El Kitabı ve Sanal Masa Oyunu olmak üzere üç temel entelektüel çıktı üretti. Bu kaynaklar, sosyal girişimcilik, dijital fırsatlar, organizasyonel yönetim ve çevre sorunlarını anlamak için pratik araçlar sundu.',
      'Öğrenme, Öğretme ve Eğitim faaliyetleri, ulusötesi toplantılar, sanal eğitimler ve çoğaltıcı etkinlikler aracılığıyla e-Makers; bilgi alışverişini destekledi ve ortak kuruluşlar arasındaki iş birliğini güçlendirdi. Proje aynı zamanda gençleri yenilikçi fikirler geliştirmeye, çevresel sorunlara karşı harekete geçmeye ve toplulukları içinde aktif birer E-Maker olmaya teşvik etti.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Gençler ve gençlik çalışanları arasında dijital ve sosyal girişimcilik becerilerini güçlendirmek',
      'Dijital sosyal girişimcilik için yenilikçi yaygın eğitim kaynakları geliştirmek',
      'Sosyal girişimlerin dijitalleşmesi için pratik bir el kitabı oluşturmak',
      'Oyunlaştırma yoluyla sosyal girişimciliği teşvik eden bir sanal masa oyunu geliştirmek',
      'Çevresel sorunlara ilişkin farkındalığı artırmak ve gençleri harekete geçmeye teşvik etmek',
      'Gençlik çalışanlarının mesleki, dijital, iletişim, takım çalışması ve yönetim becerilerini geliştirmek',
      'Sosyal girişimlerin sürdürülebilirliğini ve uluslararasılaşmasını desteklemek',
      'Avrupa genelinde kuruluşlar arasında ulusötesi iş birliğini ve bilgi alışverişini güçlendirmek'
    ]
  },
  en: {
    badge: 'ERASMUS+ KA220-YOU',
    title: 'e-Makers',
    tagline: 'Good Practice Example',
    subtitle: 'Empowering Young People Through Digital Social Entrepreneurship',
    description: 'We strengthened young people\'s digital, entrepreneurial, and environmental skills by combining social entrepreneurship, digital transformation, and innovative learning approaches.',
    location: 'European Union Project',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Erasmus+' },
      { icon: '🎯', label: 'ACTION', value: 'KA220-YOU – Cooperation Partnerships in Youth' },
      { icon: '🗓️', label: 'DURATION', value: '2021–2023' },
      { icon: '📍', label: 'SCOPE', value: '4 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Fundacion Xul para la Comunicación Social y el Desarrollo' },
      { icon: '🤝', label: 'PARTNERS', value: 'Spain, Italy, Croatia, Türkiye' },
      { icon: '🎓', label: 'TARGET GROUP', value: 'Young people aged 18–30, youth workers, social enterprises' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'e-Makers aimed to foster environmental social entrepreneurship among young people by combining digitalisation, entrepreneurship education, and environmental awareness. The project responded to the growing need for young entrepreneurs and social enterprises to develop stronger digital capacities and sustainable approaches to addressing environmental and societal challenges.',
      'Throughout the project, partners developed innovative learning resources to strengthen the digital, entrepreneurial, professional, and soft skills of young people and youth workers. Non-formal learning methodologies and gamification were used to make social entrepreneurship education more engaging, practical, and accessible.',
      'The project produced three key intellectual outputs, including a Non-Formal Training Toolkit for Digital Social Entrepreneurship, a Manual for the Digitalisation of Social Enterprises, and a Virtual Board Game. These resources provided practical tools for understanding social entrepreneurship, digital opportunities, organisational management, and environmental challenges.',
      'Through Learning, Teaching and Training activities, transnational meetings, virtual training, and multiplier events, e-Makers supported knowledge exchange and strengthened cooperation among partner organisations. The project also encouraged young people to develop innovative ideas, take action on environmental challenges, and become active E-Makers within their communities.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthened digital and social entrepreneurship skills among young people and youth workers',
      'Developed innovative non-formal training resources for digital social entrepreneurship',
      'Created a practical manual for the digitalisation of social enterprises',
      'Developed a virtual board game to promote social entrepreneurship through gamification',
      'Increased awareness of environmental challenges and encouraged young people to take action',
      'Improved youth workers\' professional, digital, communication, teamwork, and management skills',
      'Supported the sustainability and internationalisation of social enterprises',
      'Strengthened transnational cooperation and knowledge exchange among organisations across Europe'
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
          :style="{ backgroundImage: 'url(/images/references/emakers.webp)' }"
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
