<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'HORIZON EUROPE',
    title: 'SHORE',
    tagline: 'Empower Students as the agents of change',
    subtitle: 'Eğitim ve İş Birliği Yoluyla Okyanus Okuryazarlığını Güçlendirmek',
    description: 'Öğrencileri, öğretmenleri ve okulları bir araya getirerek mavi eğitim, yenilikçi öğrenme ve iş birliğine dayalı projeler aracılığıyla okyanus okuryazarlığını güçlendirdik.',
    location: 'Avrupa Birliği Projesi',
    metaTitle: 'Proje Detayları',
    meta: [
      { icon: '📋', label: 'PROGRAM', value: 'Horizon Europe' },
      { icon: '🗓️', label: 'SÜRE', value: '2024-2026 (36 ay)' },
      { icon: '📍', label: 'KAPSAM', value: '9 Avrupa Ülkesi' },
      { icon: '👥', label: 'KOORDİNATÖR', value: 'Yıldız Teknik Üniversitesi' },
      { icon: '🤝', label: 'ORTAKLAR', value: 'Avusturya, Çekya, Estonya, İrlanda, İtalya, Macaristan, Romanya, Polonya, Türkiye' },
      { icon: '🎯', label: 'HEDEF KİTLE', value: 'İlk ve ortaöğretim öğrencileri, eğitimciler, yerel topluluklar' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'SHORE, öğrencileri ve öğretmenleri okul temelli etkinlikler ve iş birliğine dayalı projeler aracılığıyla bir araya getirerek okyanus okuryazarlığının güçlendirilmesine ve Mission Ocean hedeflerinin desteklenmesine katkı sağladı.',
      'Proje süresince ortaklar; Baltık Denizi, Karadeniz, Akdeniz, Tuna Nehri ve Ren Nehri ile bağlantılı okullara yönelik eğitim programları, öğretim materyalleri ve mavi müfredatlar geliştirdi.',
      'Projeye katılan okullar, kendi mavi projelerini hayata geçirmek üzere hibe desteğinden yararlandı. En başarılı okul projesi ise "Yılın Okyanus Elçisi" ödülüne layık görüldü.',
      'SHORE, finansal desteğin yanı sıra araştırmacıları, yerel paydaşları, eğitimcileri ve okulları bir araya getiren bir bilgi ve kaynak merkezi oluşturdu. Böylece proje bölgelerinde iş birliği, bilgi paylaşımı ve okyanus odaklı eğitim çalışmalarının güçlendirilmesine katkı sağladı.'
    ],
    contributionsTitle: 'Projenin Katkıları',
    contributions: [
      'Avrupa genelinde okyanus okuryazarlığını güçlendirmek',
      'Çevre farkındalığı ve iklim eylemi için yenilikçi eğitim modelleri geliştirmek',
      'AB Okyanus Misyonu’nun hedeflerini desteklemek',
      'Gençleri değişimin öncüleri olmaları için güçlendirmek',
      'Uluslararası iş birliği ve bilgi transferini teşvik etmek',
      'Çok dilli dijital öğrenme platformu oluşturmak'
    ]
  },
  en: {
    badge: 'HORIZON EUROPE',
    title: 'SHORE',
    tagline: 'Empower Students as the agents of change',
    subtitle: 'Advancing Ocean Literacy Through Education and Collaboration',
    description: 'We strengthened ocean literacy by bringing together students, teachers, and schools through blue education, innovative learning, and collaborative projects.',
    location: 'European Union Project',
    metaTitle: 'Project Details',
    meta: [
      { icon: '📋', label: 'PROGRAMME', value: 'Horizon Europe' },
      { icon: '🗓️', label: 'DURATION', value: '2024-2026 (36 months)' },
      { icon: '📍', label: 'SCOPE', value: '9 European Countries' },
      { icon: '👥', label: 'COORDINATOR', value: 'Yıldız Technical University' },
      { icon: '🤝', label: 'PARTNERS', value: 'Austria, Czech Republic, Estonia, Ireland, Italy, Hungary, Romania, Poland, Türkiye' },
      { icon: '🎯', label: 'TARGET GROUP', value: 'Primary & secondary students, educators, local communities' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'SHORE strengthened ocean literacy by engaging students and teachers in activities and collaborative school projects that supported the objectives of Mission Ocean.',
      'Throughout the project, partners developed training programmes, educational resources, and blue curricula for schools connected to the Baltic Sea, Black Sea, Mediterranean Sea, Danube River, and Rhine River.',
      'Participating schools received grant support to implement their own blue projects, while the most outstanding school project was recognised with the "Ocean Ambassador of the Year" award.',
      'Beyond financial support, SHORE established a knowledge and resource hub that brought together researchers, local stakeholders, educators, and schools, strengthening collaboration and knowledge sharing across the participating regions.'
    ],
    contributionsTitle: 'Project Contributions',
    contributions: [
      'Strengthen ocean literacy across Europe',
      'Develop innovative educational models for environmental awareness and climate action',
      'Support the objectives of the EU Ocean Mission',
      'Empower young people to be the pioneers of change',
      'Promote international collaboration and knowledge transfer',
      'Create a multilingual digital learning platform'
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
          :style="{ backgroundImage: 'url(/images/references/shore.webp)' }"
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
          <div
            v-for="item in c.meta"
            :key="item.label"
            class="project-meta-row"
          >
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
