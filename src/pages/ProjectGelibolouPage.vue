<script setup>
import { computed } from 'vue'
import { locale } from '../i18n.js'

const content = {
  tr: {
    badge: 'YARATICI KONSEPT TURİZM MASTER PLAN',
    title: 'Gelibolu Merkezi Yaratıcı Turizm Konsept Planları',
    tagline: 'Tematik Turizm Odaklarını Mekânsal Tasarımlara Dönüştürmek',
    subtitle: 'Gelibolu\'nun Turizm Vizyonunu Uygulanabilir Konseptlere Dönüştürmek',
    description: 'Gelibolu için geliştirilen uzun vadeli turizm vizyonu doğrultusunda belirlenen tematik odakları detaylandırmak, çok katmanlı miras birikimini mekânsal olarak kurgulamak ve kentin dört mevsim şehir turizmi potansiyelini güçlendirmek amacıyla yaratıcı turizm konsept planları hazırlandı.',
    location: 'Gelibolu İlçe Merkezi, Çanakkale, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJE TÜRÜ', value: 'Yaratıcı Turizm Konsept Planları' },
      { icon: '📍', label: 'LOKASYON', value: 'Gelibolu İlçe Merkezi, Çanakkale, Türkiye' },
      { icon: '🏛️', label: 'İŞVEREN', value: 'Güney Marmara Kalkınma Ajansı (GMKA)' },
      { icon: '🗺️', label: 'HİZMET ALANI', value: 'Şehir Turizmi, Konsept Planlama, Mekânsal Tasarım, Tematik Planlama, Destinasyon Geliştirme' },
      { icon: '📏', label: 'PROJE ÖLÇEĞİ', value: '1/5.000, 1/1.000' },
      { icon: '✅', label: 'PROJE DURUMU', value: 'Tamamlandı', highlight: true }
    ],
    aboutTitle: 'Proje Hakkında',
    aboutText: [
      'Gelibolu ilçe merkezinin çok katmanlı tarihî, kültürel ve mimari değerlerini koruyarak turizm vizyonunda belirlenen stratejik kararları somutlaştırmak amacıyla Yaratıcı Turizm Konsept Planları hazırlanmıştır. Miras, İnanç, Deneyim, Gastronomi, Müzecilik, Rotalar ve Turizm Altyapısı olmak üzere yedi ana stratejik alanda gelişme odakları belirlenmiştir.',
      'Konsept planlarda su sporları, tırmanış ve macera parkurları, gastronomi atölyeleri, tematik müzecilik, kültür yürüyüşleri, karavan parkı ve hostel gibi çeşitli deneyim alanları kurgulanmıştır. Gelibolu Deniz Feneri ve Müzesi, Şengül Hamamı Restorasyon Önerisi, Gelibolu Gastronomi Akademisi, Kent Müzesi, Denizcilik Müzesi, Sardalya Müzesi, Eğritaş Su Sporları Merkezi, Çamlık Kamp Alanı, Hamzakoy Karavan Park ve Gelibolu Marina proje fikirleri detaylandırılmıştır.',
      'Planlama ve tasarım yaklaşımında sürdürülebilirlik, ekolojik mimari ve kent kimliğine uyum temel alınarak önerilen turizm alanlarının Gelibolu\'nun kentsel sit dokusu, mimari mirası ve doğal peyzajı ile tam bir bütünlük içinde olması hedeflenmiştir.'
    ],
    contributionsTitle: 'Ana Çıktılar',
    contributions: [
      'Yedi stratejik odağa yönelik yaratıcı turizm konsept planları',
      'Çok katmanlı şehir turizmi gelişme odaklarının ve rotalarının belirlenmesi',
      'Tarihi çekirdek, iç liman, kordon ve rekreasyon alanları arasındaki erişim ilişkileri',
      'Tarih, kültür, inanç, gastronomi ve macera odaklı tasarım önerileri',
      'Eğritaş Su Sporları Merkezi ve kıyı aktivite alanları',
      'Fener Parkı tırmanış parkuru ve aktif şehir rekreasyon alanları',
      'Gelibolu Gastronomi Akademisi, Gastronomi Müzesi ve Lezzetler Sokağı',
      'Gelibolu Kent Müzesi, Denizcilik Müzesi ve Sardalya Müzesi konseptleri',
      'Hamzakoy Karavan Park ve geleneksel konutlardan dönüştürülen Hostel konseptleri',
      'Sürdürülebilir, yürünebilir ve ekoloji temelli mekânsal tasarım yaklaşımı'
    ],
    focusTitle: 'Proje Odakları',
    focuses: [
      { icon: '🏰', title: 'MİRAS', desc: 'Kale, hamamlar, deniz feneri, şehitlik ve anıtların şehir turizmi deneyimine dahil edilmesi' },
      { icon: '🕌', title: 'İNANÇ', desc: 'Mevlevilik, Çilehane, namazgâh, türbeler üzerinden manevi yolculuk ve kültür turları' },
      { icon: '🧗', title: 'DENEYİM', desc: 'Tırmanış parkuru, su sporları, sanat sokağı, akademi ve hostellerle aktif şehir deneyimleri' },
      { icon: '🍽️', title: 'GASTRONOMİ', desc: 'Sardalya, peynir helvası ve Mevlevi mutfağından hareketle lezzet sokağı, akademi ve tadım turları' },
      { icon: '🏛️', title: 'MÜZECİLİK', desc: 'Kent belleği, denizcilik ve balıkçılık geçmişini dijital sunum teknikleriyle aktaran tematik müzeler' },
      { icon: '🗺️', title: 'ROTALAR & ALTYAPI', desc: 'Maneviyat, gastronomi ve bellek temalı yürüyüş turları ile marina, otopark ve karşılama merkezleri' }
    ],
    featuredTitle: 'Öne Çıkan Konseptler',
    featured: 'Tematik Müzeler • Gastronomi Akademisi • Denizcilik & Sardalya • Su Sporları • Hosteller • Karavan Park • Yürüyüş Rotaları • Mevlevi Kültürü'
  },
  en: {
    badge: 'CREATIVE CONCEPT TOURISM MASTER PLAN',
    title: 'Gelibolu Center Creative Tourism Concept Plans',
    tagline: 'Translating Thematic Tourism Focuses into Spatial Designs',
    subtitle: 'Translating Gelibolu\'s Tourism Vision into Implementable Concepts',
    description: 'Creative tourism concept plans were prepared to detail the thematic focuses defined in the long-term tourism vision for Gelibolu, structure its multi-layered heritage spatially, and strengthen the city\'s four-season urban tourism potential.',
    location: 'Gelibolu Town Centre, Çanakkale, Türkiye',
    meta: [
      { icon: '📋', label: 'PROJECT TYPE', value: 'Creative Tourism Concept Plans' },
      { icon: '📍', label: 'LOCATION', value: 'Gelibolu Town Centre, Çanakkale, Türkiye' },
      { icon: '🏛️', label: 'CLIENT', value: 'South Marmara Development Agency (GMKA)' },
      { icon: '🗺️', label: 'SERVICE AREAS', value: 'Urban Tourism, Concept Planning, Spatial Design, Thematic Planning, Destination Development' },
      { icon: '📏', label: 'PROJECT SCALE', value: '1/5,000, 1/1,000' },
      { icon: '✅', label: 'PROJECT STATUS', value: 'Completed', highlight: true }
    ],
    aboutTitle: 'About the Project',
    aboutText: [
      'Creative Tourism Concept Plans were prepared to concretise the strategic decisions defined in the tourism vision while protecting the multi-layered historical, cultural, and architectural values of Gelibolu town centre. Development focuses were identified across seven strategic areas: Heritage, Faith, Experience, Gastronomy, Museology, Routes, and Tourism Infrastructure.',
      'Various experience areas were structured in the concept plans including water sports, climbing and adventure trails, gastronomy workshops, thematic museums, cultural walks, caravan parks, and hostels. Project ideas were detailed including Gelibolu Lighthouse and Museum, Şengül Bath Restoration, Gelibolu Gastronomy Academy and Museum, Town Museum, Maritime Museum, Sardine Museum, Eğritaş Water Sports Centre, Çamlık Camping Area, Hamzakoy Caravan Park, and Gelibolu Marina.',
      'The planning and design approach was grounded in sustainability, ecological architecture, and compatibility with urban identity, aiming to ensure that proposed tourism areas are fully integrated with Gelibolu\'s urban conservation fabric, architectural heritage, and natural landscape.'
    ],
    contributionsTitle: 'Key Outputs',
    contributions: [
      'Creative tourism concept plans for seven strategic focuses',
      'Identification of multi-layered urban tourism development focuses and routes',
      'Structuring access relationships between the historic core, inner harbour, promenade, and recreation areas',
      'History, culture, faith, gastronomy, and adventure-focused design proposals',
      'Eğritaş Water Sports Centre and coastal activity areas',
      'Lighthouse Park climbing trail and active urban recreation areas',
      'Gelibolu Gastronomy Academy, Gastronomy Museum, and Flavours Street',
      'Gelibolu Town Museum, Maritime Museum, and Sardine Museum concepts',
      'Hamzakoy Caravan Park and traditional house-converted Hostel accommodation concepts',
      'Sustainable, walkable, and ecology-based spatial design approach'
    ],
    focusTitle: 'Project Focuses',
    focuses: [
      { icon: '🏰', title: 'HERITAGE', desc: 'Integrating castle, baths, lighthouse, memorial sites, and monuments into the urban tourism experience' },
      { icon: '🕌', title: 'FAITH', desc: 'Spiritual journeys and cultural tours through Mevlevi tradition, retreat houses, and shrines' },
      { icon: '🧗', title: 'EXPERIENCE', desc: 'Active urban experiences with climbing trail, water sports, arts street, academy, and hostels' },
      { icon: '🍽️', title: 'GASTRONOMY', desc: 'Flavours street, academy, and tasting tours inspired by sardine, cheese halva, and Mevlevi cuisine' },
      { icon: '🏛️', title: 'MUSEOLOGY', desc: 'Thematic museums presenting urban memory, maritime and fishing heritage with digital techniques' },
      { icon: '🗺️', title: 'ROUTES & INFRASTRUCTURE', desc: 'Spirituality, gastronomy, and memory-themed walking tours with marina, parking, and welcome centres' }
    ],
    featuredTitle: 'Featured Concepts',
    featured: 'Thematic Museums • Gastronomy Academy • Maritime & Sardine • Water Sports • Hostels • Caravan Park • Walking Routes • Mevlevi Culture'
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
          :style="{ backgroundImage: 'url(/images/references/gelibolu.png)' }"
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

        <!-- Featured concepts pill -->
        <div class="project-featured-pill" style="margin-top:20px">
          <span class="project-featured-label">{{ c.featuredTitle }}</span>
          <span class="project-featured-text">{{ c.featured }}</span>
        </div>

        <div class="project-focus-grid project-focus-grid--5" style="margin-top:16px">
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
