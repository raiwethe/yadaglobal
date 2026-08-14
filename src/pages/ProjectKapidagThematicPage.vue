<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'TEMATİK PLANLAMA',
    title: 'Kapıdağ Yarımadası Tematik Planlama, Bağlamsal Tasarım ve Vizyon Oluşturma Projesi',
    tagline: 'Doğa, Tarih ve Kültür Odaklı Dört Mevsim Turizm Destinasyonu',
    subtitle: 'Kapıdağ Yarımadası\'nın Özgün Değerlerini Sürdürülebilir Turizmle Bütünleştirmek',
    description: 'Kapıdağ Yarımadası\'nın doğal, tarihî ve kültürel değerlerini koruyarak dört mevsim turizm potansiyelini ortaya çıkarmak amacıyla tematik planlama, bağlamsal tasarım ve uzun vadeli turizm vizyonu geliştirdik.',
    location: 'Kapıdağ Yarımadası, Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Tematik Planlama, Bağlamsal Tasarım ve Vizyon Oluşturma' },
      { icon: '📍', label: 'LOKASYON', value: 'Kapıdağ Yarımadası, Erdek, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Güney Marmara Kalkınma Ajansı (GMKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Turizm Planlaması, Tematik Planlama, Bağlamsal Tasarım, Destinasyon Geliştirme, Stratejik Vizyon' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/25.000, 1/5.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Kapıdağ Yarımadası\'nın doğal, tarihî ve kültürel değerlerini bütüncül bir turizm yaklaşımıyla değerlendirmek amacıyla kapsamlı bir tematik planlama, bağlamsal tasarım ve vizyon oluşturma çalışması gerçekleştirilmiştir. Çalışmada ziyaretçi beklentileri, mevcut turizm hareketleri, altyapı, imar durumu ve bölgenin doğal ve kültürel yapısı birlikte analiz edilmiştir.',
      'Planlama sürecinde Kapıdağ\'ın özgün karakteriyle uyumlu tematik turizm alanları ve deneyim odaklı turizm faaliyetleri geliştirilmiş; doğa, tarih, kültür, macera, spor ve yavaş turizm gibi farklı deneyim türlerinin destinasyon içerisinde bütünleştirilmesi hedeflenmiştir.',
      'Bağlamsal tasarım yaklaşımıyla doğal peyzajın ve ekolojik dengenin korunması gözetilmiş, tematik alanların yerel çevreyle uyumlu şekilde yapılandırılması önerilmiştir. Vizyon çalışmasıyla ise Kapıdağ\'ın dört mevsim cazip, sürdürülebilir ve deneyim odaklı bir destinasyon olarak konumlandırılması hedeflenmiştir.',
      'Çalışma aynı zamanda yerel yönetimler, kamu kurumları, sivil toplum kuruluşları, üniversiteler, ticaret odaları ve yerel aktörlerin katılımıyla yürütülen çalıştay ve görüşmelerle desteklenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Kapıdağ Yarımadası için tematik turizm planı',
      'Bağlamsal tasarım ve mekânsal gelişim önerileri',
      'Dört mevsim turizm vizyonunun oluşturulması',
      'Doğa, tarih ve kültür temalarının turizm deneyimine entegre edilmesi',
      'Deneyimsel turizm odaklarının geliştirilmesi',
      'Ziyaretçi seyahat modeli ve yönlendirme yaklaşımı',
      'Sürdürülebilir ve kontrollü turizm hareketliliği',
      'Yerel paydaş katılımına dayalı turizm planlama yaklaşımı'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🌿', title: 'DOĞA', desc: 'Ekoturizm, doğa keşfi, yürüyüş ve doğal peyzajla bütünleşen deneyimler' },
      { icon: '🏛️', title: 'TARİH', desc: 'Kyzikos, Artake, Zeytinli Ada ve bölgenin tarihî mirasını merkeze alan turizm deneyimleri' },
      { icon: '🍽️', title: 'KÜLTÜR', desc: 'Yerel yaşam, gastronomi, geleneksel değerler ve kültürel mirasın turizme kazandırılması' },
      { icon: '⭐', title: 'DENEYİM', desc: 'Ekoturizm, festival, macera, spor, yaratıcı ve yavaş turizm türlerini bir araya getiren destinasyon yaklaşımı' },
      { icon: '⛺', title: 'KAMP', desc: 'Küçükova, Büyükova, Turan Mahallesi, Sığıryatak Tepesi ve Kirazlı Manastırı çevresinde kamp ve karavan önerileri' }
    ]
  },
  en: {
    badge: 'THEMATIC PLANNING',
    title: 'Kapıdağ Peninsula Thematic Planning, Contextual Design and Vision Creation Project',
    tagline: 'Four-Season Tourism Destination Focused on Nature, History, and Culture',
    subtitle: 'Integrating the Unique Values of Kapıdağ Peninsula with Sustainable Tourism',
    description: 'We developed thematic planning, contextual design, and a long-term tourism vision to reveal the four-season tourism potential of Kapıdağ Peninsula while protecting its natural, historical, and cultural values.',
    location: 'Kapıdağ Peninsula, Erdek, Balıkesir, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Thematic Planning, Contextual Design and Vision Creation' },
      { icon: '📍', label: 'LOCATION', value: 'Kapıdağ Peninsula, Erdek, Balıkesir, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'South Marmara Development Agency (GMKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Tourism Planning, Thematic Planning, Contextual Design, Destination Development, Strategic Vision' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/25,000, 1/5,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'A comprehensive thematic planning, contextual design, and vision creation study was carried out to assess the natural, historical, and cultural values of Kapıdağ Peninsula through a holistic tourism approach. The study jointly analysed visitor expectations, existing tourism movements, infrastructure, planning status, and the natural and cultural structure of the region.',
      'During the planning process, thematic tourism areas and experience-driven tourism activities in harmony with Kapıdağ\'s unique character were developed, aiming to integrate diverse experience types — including nature, history, culture, adventure, sport, and slow tourism — within the destination.',
      'The contextual design approach prioritised the protection of the natural landscape and ecological balance, recommending that thematic areas be structured in harmony with the local environment. The vision study aimed to position Kapıdağ as a four-season attractive, sustainable, and experience-driven destination.',
      'The study was also supported by workshops and consultations conducted with the participation of local authorities, public institutions, civil society organisations, universities, chambers of commerce, and local stakeholders.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Thematic tourism plan for Kapıdağ Peninsula',
      'Contextual design and spatial development proposals',
      'Development of a four-season tourism vision',
      'Integration of nature, history, and culture themes into the tourism experience',
      'Development of experiential tourism focuses',
      'Visitor travel model and wayfinding approach',
      'Sustainable and controlled tourism mobility',
      'Participatory tourism planning approach based on local stakeholder engagement'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🌿', title: 'NATURE', desc: 'Ecotourism, nature discovery, hiking, and experiences integrated with the natural landscape' },
      { icon: '🏛️', title: 'HISTORY', desc: 'Tourism experiences centred on Kyzikos, Artake, Zeytinli Island, and the region\'s historical heritage' },
      { icon: '🍽️', title: 'CULTURE', desc: 'Bringing local life, gastronomy, traditional values, and cultural heritage into tourism' },
      { icon: '⭐', title: 'EXPERIENCE', desc: 'Experience-focused destination approach combining ecotourism, festivals, adventure, sport, creative, and slow tourism' },
      { icon: '⛺', title: 'CAMPING', desc: 'Camping and caravan area proposals around Küçükova, Büyükova, Turan, Sığıryatak Hill, and Kirazlı Monastery' }
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
          :style="{ backgroundImage: 'url(/images/references/kapidag.png)' }"
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

        <!-- 5-item focus grid (3+2) -->
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
