<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'YARATICI KONSEPT TURİZM MASTER PLAN',
    title: 'Kapıdağ Yarımadası Yaratıcı Turizm Konsept Planları',
    tagline: 'Tematik Turizm Odaklarını Mekânsal Tasarımlara Dönüştürmek',
    subtitle: 'Kapıdağ Yarımadası\'nın Turizm Vizyonunu Uygulanabilir Konseptlere Dönüştürmek',
    description: 'Kapıdağ Yarımadası için geliştirilen turizm vizyonu doğrultusunda belirlenen tematik odakları detaylandırmak ve bölgenin dört mevsim turizm potansiyelini güçlendirmek amacıyla yaratıcı turizm konsept planları hazırladık.',
    location: 'Kapıdağ Yarımadası, Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Yaratıcı Turizm Konsept Planları' },
      { icon: '📍', label: 'LOKASYON', value: 'Kapıdağ Yarımadası, Erdek, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Güney Marmara Kalkınma Ajansı (GMKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Turizm Planlaması, Konsept Planlama, Mekânsal Tasarım, Tematik Planlama, Destinasyon Geliştirme' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Kapıdağ Yarımadası\'nın doğal, tarihî ve kültürel değerlerini koruyarak turizm vizyonunda belirlenen stratejik kararları somutlaştırmak amacıyla Yaratıcı Turizm Konsept Planları hazırlanmıştır. Çalışma kapsamında tarih ve arkeoloji, kırsal turizm, doğa turizmi, şehir turizmi ve kamp turizmi olmak üzere beş tematik alanda gelişme odakları ve bu odaklara bağlı aktiviteler belirlenmiştir.',
      'Konsept planlarda farklı turizm odakları için su sporları, macera parkurları, aromaterapi, dalış, kamp-karavan, kültür ve gastronomi gibi çeşitli deneyim alanları geliştirilmiştir. Yukarıyapıcı Göleti Su Sporları Tesisi, Kapıdağ Macera Parkuru, Aromaterapi Kompleksi, Kirazlı Manastırı Bölgesi, Dalış Merkezi, Turan Karavan Parkı ve Erdek Kültür ve Ziraat Müzesi gibi proje fikirleri detaylandırılmıştır.',
      'Planlama ve tasarım yaklaşımında sürdürülebilirlik ve ekolojik mimari temel alınarak, önerilen turizm alanlarının Kapıdağ Yarımadası\'nın doğal peyzajı ve özgün karakteriyle uyumlu olması hedeflenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Beş tematik alana yönelik yaratıcı turizm konsept planları',
      'Tematik turizm gelişme odaklarının belirlenmesi',
      'Turizm cazibe noktaları arasındaki ilişkilerin kurgulanması',
      'Doğa, kültür, macera ve rekreasyon odaklı tasarım önerileri',
      'Su sporları ve dalış merkezleri',
      'Macera parkuru ve aktif turizm alanları',
      'Aromaterapi kompleksi ve sağlık odaklı turizm önerileri',
      'Kamp ve karavan parkı konseptleri',
      'Kültür, gastronomi ve yerel değerleri destekleyen turizm alanları',
      'Sürdürülebilir ve ekoloji temelli mekânsal tasarım yaklaşımı'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🏛️', title: 'TARİH & ARKEOLOJİ', desc: 'Kültürel mirasın korunması ve tarihî değerlerin turizm deneyimine dahil edilmesi' },
      { icon: '🌾', title: 'KIRSAL TURİZM', desc: 'Yerel yaşam, kırsal peyzaj ve yöresel değerler üzerinden alternatif turizm deneyimleri' },
      { icon: '🌿', title: 'DOĞA TURİZMİ', desc: 'Doğal alanlarla bütünleşen ekoturizm, yürüyüş ve açık hava aktiviteleri' },
      { icon: '🏙️', title: 'ŞEHİR TURİZMİ', desc: 'Erdek merkezinde kültür, gastronomi, sanat ve ziyaretçi deneyimini destekleyen kullanımlar' },
      { icon: '⛺', title: 'KAMP TURİZMİ', desc: 'Çadır kampı ve karavan parklarıyla alternatif konaklama ve doğa deneyimleri' },
      { icon: '⭐', title: 'ÖNE ÇIKAN KONSEPTLER', desc: 'Su Sporları · Macera · Aromaterapi · Dalış · Kamp-Karavan · Kültür · Gastronomi' }
    ]
  },
  en: {
    badge: 'CREATIVE CONCEPT TOURISM MASTER PLAN',
    title: 'Kapıdağ Peninsula Creative Tourism Concept Plans',
    tagline: 'Translating Thematic Tourism Focuses into Spatial Designs',
    subtitle: 'Translating the Tourism Vision of Kapıdağ Peninsula into Implementable Concepts',
    description: 'We prepared creative tourism concept plans to detail the thematic focuses defined in the tourism vision for Kapıdağ Peninsula and to strengthen the region\'s four-season tourism potential.',
    location: 'Kapıdağ Peninsula, Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Creative Tourism Concept Plans' },
      { icon: '📍', label: 'LOCATION', value: 'Kapıdağ Peninsula, Erdek, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'South Marmara Development Agency (GMKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Tourism Planning, Concept Planning, Spatial Design, Thematic Planning, Destination Development' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Creative Tourism Concept Plans were prepared to concretise the strategic decisions defined in the tourism vision while protecting the natural, historical, and cultural values of Kapıdağ Peninsula. The study identified development focuses and related activities across five thematic areas: history and archaeology, rural tourism, nature tourism, urban tourism, and camping tourism.',
      'Various experience areas were developed for different tourism focuses in the concept plans, including water sports, adventure trails, aromatherapy, diving, camping and caravanning, culture, and gastronomy. Project ideas such as the Yukarıyapıcı Pond Water Sports Facility, Kapıdağ Adventure Trail, Aromatherapy Complex, Kirazlı Monastery Area, Diving Centre, Turan Caravan Park, and Erdek Culture and Agriculture Museum were detailed.',
      'The planning and design approach was grounded in sustainability and ecological architecture, aiming to ensure that the proposed tourism areas are in harmony with the natural landscape and unique character of the Kapıdağ Peninsula.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Creative tourism concept plans for five thematic areas',
      'Identification of thematic tourism development focuses',
      'Structuring relationships between tourism attraction points',
      'Nature, culture, adventure, and recreation-focused design proposals',
      'Water sports and diving centres',
      'Adventure trail and active tourism areas',
      'Aromatherapy complex and health-focused tourism proposals',
      'Camping and caravan park concepts',
      'Tourism areas supporting culture, gastronomy, and local values',
      'Sustainable and ecology-based spatial design approach'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🏛️', title: 'HISTORY & ARCHAEOLOGY', desc: 'Protection of cultural heritage and integration of historical values into the tourism experience' },
      { icon: '🌾', title: 'RURAL TOURISM', desc: 'Alternative tourism experiences through local life, rural landscapes, and regional values' },
      { icon: '🌿', title: 'NATURE TOURISM', desc: 'Ecotourism, hiking, and outdoor activities integrated with natural areas' },
      { icon: '🏙️', title: 'URBAN TOURISM', desc: 'Uses supporting culture, gastronomy, art, and visitor experience in Erdek town centre' },
      { icon: '⛺', title: 'CAMPING TOURISM', desc: 'Alternative accommodation and nature experiences with tent camping and caravan parks' },
      { icon: '⭐', title: 'FEATURED CONCEPTS', desc: 'Water Sports · Adventure · Aromatherapy · Diving · Camping-Caravan · Culture · Gastronomy' }
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
          :style="{ backgroundImage: 'url(/images/references/kapidag2.png)' }"
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

        <div class="project-focus-grid project-focus-grid--5" style="margin-top:24px">
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
