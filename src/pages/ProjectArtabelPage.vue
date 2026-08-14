<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'YARATICI KONSEPT TURİZM MASTER PLAN',
    title: 'Artabel Gölleri Tabiat Parkı Yaratıcı Turizm Konsept Master Planı',
    tagline: 'Doğa, Macera ve Kültür Odaklı Sürdürülebilir Turizm Destinasyonu',
    subtitle: 'Artabel\'in Eşsiz Doğal ve Kültürel Potansiyelini Turizme Kazandırmak',
    description: 'Artabel Gölleri Tabiat Parkı\'nın doğal, kültürel ve rekreasyonel değerlerini bütüncül bir yaklaşımla değerlendirmek amacıyla yaratıcı turizm konsept master planı hazırladık.',
    location: 'Torul, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Yaratıcı Turizm Konsept Master Planı' },
      { icon: '📍', label: 'LOKASYON', value: 'Torul, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Doğu Karadeniz Kalkınma Ajansı (DOKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Turizm Planlaması, Mekânsal Planlama, Destinasyon Geliştirme, Konsept Tasarım, Sürdürülebilir Turizm' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/25.000, 1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Artabel Gölleri Tabiat Parkı\'nın eşsiz doğal ve kültürel değerlerini turizm deneyimine dönüştürmek amacıyla kapsamlı bir yaratıcı turizm konsept master planı hazırlanmıştır. Çalışmada buz gölleri, akarsular, şelaleler, dağlar, yaylalar ve biyolojik çeşitlilik ile bölgenin kültürel mirası birlikte değerlendirilmiştir.',
      'Plan kapsamında doğa yürüyüşleri, dağcılık, kuş gözlemciliği, kış sporları, kampçılık ve gökyüzü gözlemleri gibi farklı deneyim alanları geliştirilmiştir. Ziyaretçi deneyimini desteklemek amacıyla turist karşılama merkezleri, yayla evleri ve yöresel ürün alanları gibi tamamlayıcı kullanımlar da önerilmiştir.',
      'Çalışmada ayrıca Gümüştuğ, Gülaçar ve Dağdibi köylerinin yanı sıra Akbulak ve Yaylalı üzerinden yeni erişim bağlantıları değerlendirilerek parkın çevresindeki kırsal yerleşimlerle turizm ilişkilerinin güçlendirilmesi hedeflenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Artabel Gölleri Tabiat Parkı için yaratıcı turizm konsepti',
      'Doğa ve macera temelli turizm rotaları',
      'Dağcılık ve farklı zorluk seviyelerinde yürüyüş rotaları',
      'Kuş gözlemciliği ve doğa gözlem faaliyetleri',
      'Kış sporları ve turizm faaliyetleri',
      'Turist karşılama merkezleri ve yayla evi konseptleri',
      'Kamp ve doğa ile uyumlu konaklama önerileri',
      'Yeni erişim noktaları ve kırsal bağlantıların geliştirilmesi',
      'Doğal ve kültürel değerlerin korunmasına dayalı sürdürülebilir turizm yaklaşımı'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🏔️', title: 'DOĞA', desc: 'Buz gölleri, şelaleler, akarsular, dağlar ve zengin biyolojik çeşitlilik üzerinden doğa deneyimleri' },
      { icon: '🧗', title: 'MACERA', desc: 'Dağcılık, trekking, doğa yürüyüşleri ve kış sporları gibi aktif turizm deneyimleri' },
      { icon: '🏺', title: 'KÜLTÜR', desc: 'Yöresel el sanatları, geleneksel yaşam, yerel lezzetler ve yayla kültürünün turizm deneyimine entegre edilmesi' },
      { icon: '⛺', title: 'KONAKLAMA', desc: 'Kamp alanları ve geleneksel mimariyi yansıtan yayla evi konseptleriyle doğa ile uyumlu konaklama deneyimleri' }
    ]
  },
  en: {
    badge: 'CREATIVE CONCEPT TOURISM MASTER PLAN',
    title: 'Artabel Lakes Nature Park Creative Tourism Concept Master Plan',
    tagline: 'Sustainable Tourism Destination Focused on Nature, Adventure, and Culture',
    subtitle: 'Bringing Artabel\'s Unique Natural and Cultural Potential into Tourism',
    description: 'We prepared a creative tourism concept master plan to comprehensively assess the natural, cultural, and recreational values of Artabel Lakes Nature Park.',
    location: 'Torul, Gümüşhane, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Creative Tourism Concept Master Plan' },
      { icon: '📍', label: 'LOCATION', value: 'Torul, Gümüşhane, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'Eastern Black Sea Development Agency (DOKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Tourism Planning, Spatial Planning, Destination Development, Concept Design, Sustainable Tourism' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/25,000, 1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'A comprehensive creative tourism concept master plan was prepared to transform the unique natural and cultural values of Artabel Lakes Nature Park into tourism experiences. The study jointly assessed glacial lakes, streams, waterfalls, mountains, highland plateaus, biodiversity, and the region\'s cultural heritage.',
      'The plan developed diverse experience areas including nature walks, mountaineering, birdwatching, winter sports, camping, and stargazing. Complementary uses such as visitor reception centres, highland guesthouses, and local product areas were also proposed to support the visitor experience.',
      'The study also evaluated new access connections via the villages of Gümüştuğ, Gülaçar, and Dağdibi, as well as Akbulak and Yaylalı, aiming to strengthen the tourism relationships between the park and surrounding rural settlements.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Creative tourism concept for Artabel Lakes Nature Park',
      'Nature and adventure-based tourism routes',
      'Mountaineering and hiking routes at varying difficulty levels',
      'Birdwatching and nature observation activities',
      'Winter sports and tourism activities',
      'Visitor reception centres and highland guesthouse concepts',
      'Camping and nature-compatible accommodation proposals',
      'Development of new access points and rural connectivity',
      'Sustainable tourism approach based on protecting natural and cultural values'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🏔️', title: 'NATURE', desc: 'Nature experiences through glacial lakes, waterfalls, streams, mountains, and rich biodiversity' },
      { icon: '🧗', title: 'ADVENTURE', desc: 'Active tourism experiences including mountaineering, trekking, nature walks, and winter sports' },
      { icon: '🏺', title: 'CULTURE', desc: 'Integration of local crafts, traditional life, regional cuisine, and highland culture into the tourism experience' },
      { icon: '⛺', title: 'ACCOMMODATION', desc: 'Nature-compatible accommodation through camping areas and highland guesthouse concepts reflecting traditional architecture' }
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
          :style="{ backgroundImage: 'url(/images/references/artabel-golleri.png)' }"
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
