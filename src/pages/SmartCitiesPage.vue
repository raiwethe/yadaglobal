<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { locale } from '../i18n.js'

const route = useRoute()

const pageContent = {
  tr: {
    kicker: 'ÇÖZÜMLERİMİZ',
    title: 'AKILLI KENTLER VE SÜRDÜRÜLEBİLİR ŞEHİRCİLİK',
    description:
      'Yada Global olarak; makro ölçekli kentsel stratejilerden mikro ölçekli kentsel tasarıma kadar modern şehirciliğin her aşamasında veri odaklı çözümler sunuyoruz. Yasal mevzuatlara tam uyumlu imar planlama, koruma amaçlı imar planları ve bölge planlarındaki köklü uzmanlığımızı; Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) ve Avrupa Yeşil Mutabakatı normlarıyla entegre ediyoruz. Kentlerin geleceğini iklim, çevre ve sıfır karbon odaklı eylemlerle tasarlarken; 3D Dijital İkiz teknolojileri, akıllı kent ağları ve Sürdürülebilir Kentsel Hareketlilik Planı (SUMP) altyapılarıyla dirençli, yaşanabilir ve akıllı kentsel ekosistemler inşa ediyoruz.',
    tabs: [
      {
        key: 'planning',
        label: 'Şehir Planlama ve Bölgesel Master Planlar',
        intro:
          'Yada Global; yürürlükteki yasal mevzuatlara, koruma yüksek kurulları kararlarına ve Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) normlarına tam uyumlu üst ve alt ölçekli şehir planlama süreçlerini yönetmektedir. Makro ölçekli bölge planları ve stratejik mekansal stratejilerden, yerel ekonomileri canlandıran tematik master plan ve turizm master planı çalışmalarına kadar kentsel gelişim süreçlerini veri odaklı analitik araştırma çerçeveleriyle uçtan uca yürütüyoruz.',
        iconCards: [
          { icon: '🧭', title: 'Planlama Stratejisi', text: 'Makro ve mikro ölçekte bütünleşik planlama çerçevesi.' },
          { icon: '📐', title: 'Mevzuat Uyum', text: 'Nazım ve uygulama planlarında yönetmelik odaklı yaklaşım.' },
          { icon: '🏆', title: 'Master Plan Yetkinliği', text: 'Bölgesel kalkınmayı hızlandıran tematik master planlar.' }
        ],
        blocks: [
          {
            title: 'Nazım, Uygulama, OSB ve Koruma Amaçlı İmar Planları',
            text: 'Yürürlükteki mevzuat, yönetmelik ve şehircilik ilkelerine tam uyumlu Nazım İmar Planları, Koruma Amaçlı İmar Planları, Bölge Planları ve Organize Sanayi Bölgesi (OSB) İmar Planları hazırlıyoruz. Sit alanları ile tarihi, kültürel ve doğal miras alanlarının sürdürülebilirlik ilkeleri doğrultusunda geleceğe taşınması ve yasal güvence altına alınması için teknik altyapısı güçlü planlama süreçlerini titizlikle yürütüyoruz.',
            visual: 'İmar Planlama',
            image: '/images/urban-planning-development-conservation-plans.webp'
          },
          {
            title: 'Stratejik Mekansal Planlama ve Bölge Planları',
            text: 'Kentlerin, havzaların ve metropoliten alanların gelecekteki büyüme projeksiyonlarını, lojistik akslarını, sosyo-ekonomik dinamiklerini ve arazi kullanım kararlarını makro ölçekte kurguluyoruz. Bölgesel kalkınma politikalarına altlık oluşturan üst ölçekli bölge planları geliştirerek doğal afetlere, iklim krizine ve kontrolsüz nüfus baskılarına karşı dirençli kent modelleri tasarlıyoruz.',
            visual: 'Bölgesel Strateji',
            image: '/images/strategic-spatial-regional-planning.webp'
          },
          {
            title: 'Tematik Bölgesel Master Planlar ve Turizm Master Planı',
            text: 'Bölgelerin, havzaların ve kentlerin ekonomik, sosyal ve kültürel kalkınmasını tetikleyecek tematik master plan çalışmaları yürütüyoruz. Ulusal ve uluslararası kalkınma ajansları ile bakanlık normlarına tam uyumlu; sürdürülebilir turizm master planı, konsept turizm planları ve bölgesel layout tasarımları ile alanların potansiyelini maksimize eden bütünsel fizibilite raporları hazırlıyoruz.',
            visual: 'Master Plan',
            image: '/images/thematic-regional-tourism-master-plan.webp'
          }
        ]
      },
      {
        key: 'digital-twin',
        label: 'Akıllı Şehirler, OSB’ler ve Endüstriyel Dijital İkiz Çözümleri',
        intro:
          'Yada Global; veri odaklı modern kent yönetimi ve Organize Sanayi Bölgeleri (OSB) için ileri düzey akıllı çözümler ve dijital ikiz platformları kurgulamaktadır. Nesnelerin İnterneti (IoT) ağlarını, endüstriyel üretim simülasyonlarını, yeşil altyapı takibini ve Sürdürülebilir Kentsel Hareketlilik Planı (SUMP) standartlarını Coğrafi Bilgi Sistemleri (CBS) altyapımızla entegre ederek yaşayan şehirlerin ve fabrikaların dijital kopyalarını inşa ediyoruz.',
        iconCards: [
          { icon: '🔌', title: 'IoT Entegrasyonu', text: 'Kent ve OSB altyapılarında sensör verisini tek merkezde toplama.' },
          { icon: '🏭', title: 'Dijital İkiz', text: '3D şehir ve tesis simülasyonlarıyla öngörülebilir operasyon.' },
          { icon: '🚗', title: 'SUMP ve Lojistik', text: 'Akıllı mobilite ve lojistikte karbon odaklı optimizasyon.' }
        ],
        blocks: [
          {
            title: 'Nesnelerin İnterneti (IoT) Entegrasyonu ve Akıllı OSB Yönetim Ağları',
            text: 'Hem yerel yönetimler hem de Organize Sanayi Bölgeleri için akıllı sayaçlar, hava ve su kalitesi istasyonları, endüstriyel atık takip modülleri ve enerji şebekelerinden gelen IoT verilerini merkezi platformda topluyoruz. Anlık akan sensör verilerini anlamlandırarak OSB yönetimlerinin ve tesislerin su, atık, enerji ve bütçe kaynaklarını maksimum verimlilikle yönetmesini sağlıyoruz.',
            visual: 'IoT Ağları',
            image: '/images/iot-smart-industrial-zone-management.webp'
          },
          {
            title: '3D Kent Modelleme, Fabrika Yerleşkeleri ve Endüstriyel Dijital İkiz Platformları',
            text: 'Fiziksel kentlerin, büyük gayrimenkul projelerinin ve özel sektöre ait sanayi tesislerinin coğrafi, mimari ve altyapısal verilerini kullanarak yaşayan dijital ikiz modelleri üretiyoruz. Gerçek zamanlı simülasyonlarla OSB genişleme alanlarını, lojistik ve üretim akışlarını, afet risk senaryolarını ve kentsel dönüşüm etkilerini yatırım öncesinde 3D modeller üzerinde test ediyoruz.',
            visual: '3D Simülasyon',
            image: '/images/3d-industrial-digital-twin-platform.webp'
          },
          {
            title: 'Akıllı Ulaşım, Endüstriyel Lojistik ve SUMP',
            text: 'Kent içi erişilebilirliği artırırken, sanayi bölgelerinin ve holdinglerin karmaşık lojistik ağlarını optimize eden ve karbon emisyonlarını düşürmeyi hedefleyen uluslararası standartlarda SUMP çözümleri sunuyoruz. Trafik yoğunluk haritaları, sinyalizasyon optimizasyonları, personel servis rotaları ve ağır vasıta hat planlamalarıyla akıllı ulaşım altyapılarını veri odaklı yöntemlerle kurguluyoruz.',
            visual: 'Akıllı Mobilite',
            image: '/images/smart-mobility-industrial-logistics-sump.webp'
          }
        ]
      },
      {
        key: 'sustainability',
        label: 'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri',
        intro:
          'Yada Global; Avrupa Yeşil Mutabakatı normlarına ve küresel çevre regülasyonlarına tam uyumlu sürdürülebilir şehircilik ve yeşil dönüşüm projeleri üretmektedir. Karbon nötr kent eylemlerinden yeşil altyapı tasarımlarına kadar, hem yerel yönetimlerin hem de Organize Sanayi Bölgeleri ve özel sektör kuruluşlarının çevre odaklı mevzuatlara tam uyum sağlaması için stratejik çevre planları hazırlıyoruz.',
        iconCards: [
          { icon: '🚍', title: 'Sıfır Karbon Mobilite', text: 'Toplu taşıma ve lojistikte emisyon azaltım odaklı dönüşüm.' },
          { icon: '🗺️', title: 'SECAP Planlama', text: 'İklim uyumu ve enerji verimliliği için eylem planları.' },
          { icon: '📈', title: 'Yeşil Dönüşüm', text: 'Karbon ayak izi raporlama ve döngüsel ekonomi stratejileri.' }
        ],
        blocks: [
          {
            title: 'Sıfır Karbon Ulaşım Hizmetleri ve Yeşil Mobilite Dönüşümü',
            text: 'İklim kriziyle mücadele kapsamında, kent içi ve sanayi bölgelerindeki toplu taşıma ile lojistik altyapılarının çevre dostu ve sıfır emisyonlu hale getirilmesi için teknik fizibilite çerçeveleri hazırlıyoruz. Elektrikli otobüs entegrasyonu, şarj istasyonu konumlandırma analizleri ve yeşil mobilite ağ tasarım süreçlerini CBS tabanlı verilerle yönetiyoruz.',
            visual: 'Sıfır Karbon',
            image: '/images/zero-carbon-transport-green-mobility.webp'
          },
          {
            title: 'Sürdürülebilir Enerji ve İklim Eylem Planları (SECAP)',
            text: 'Uluslararası standartlarda ve Avrupa Belediye Başkanları Sözleşmesi normlarında, kentlerin geleceğini koruma altına alan SECAP planları hazırlıyoruz. Kentlerin ve endüstriyel bölgelerin sera gazı emisyon envanterlerini çıkarıyor, iklim değişikliğine uyum kapasitesini ölçüyor ve fon mekanizmalarına erişimi destekleyen somut azaltım stratejileri geliştiriyoruz.',
            visual: 'SECAP',
            image: '/images/secap-sustainable-energy-climate-action-plan.webp'
          },
          {
            title: 'Yeşil Dönüşüm, Döngüsel Ekonomi ve Karbon Ayak İzi Raporlaması',
            text: 'Özel sektör kuruluşları, OSB’ler ve sanayi tesisleri için Avrupa Yeşil Mutabakatı ve SKDM uyum süreçlerini yönetiyoruz. Kurumsal karbon ayak izi raporlaması gerçekleştiriyor, endüstriyel atık yönetimini optimize eden döngüsel ekonomi stratejileri kurguluyor ve şirketlerin sürdürülebilirlik performanslarını uluslararası yeşil finansman desteklerine hazır hale getiriyoruz.',
            visual: 'Yeşil Finansman',
            image: '/images/green-transformation-circular-economy-carbon-footprint.webp'
          }
        ]
      }
    ]
  },
  en: {
    kicker: 'Our Solutions',
    title: 'SMART CITIES AND SUSTAINABLE URBANISM',
    description:
      'At Yada Global, we provide data-driven solutions across every stage of modern urbanism, from macro-scale urban strategies to micro-scale design. We integrate deep expertise in legally compliant zoning, conservation-focused planning, and regional frameworks with the UN Sustainable Development Goals and European Green Deal principles. By combining climate, environment, and net-zero actions with 3D digital twin technologies, smart city networks, and Sustainable Urban Mobility Plan (SUMP) infrastructure, we build resilient, livable, and intelligent urban ecosystems.',
    tabs: [
      {
        key: 'planning',
        label: 'Urban Planning and Regional Master Plans',
        intro:
          'Yada Global manages upper- and lower-scale urban planning processes in full alignment with current legislation, conservation board decisions, and UN Sustainable Development Goals standards. From macro-level regional plans and strategic spatial frameworks to thematic master plans and tourism master planning, we deliver end-to-end urban development programs through data-driven analytical research.',
        iconCards: [
          { icon: '🧭', title: 'Planning Strategy', text: 'Integrated planning frameworks across macro and micro scales.' },
          { icon: '📐', title: 'Regulatory Compliance', text: 'Code-aligned planning in master and implementation layers.' },
          { icon: '🏆', title: 'Master Plan Expertise', text: 'Thematic master plans that accelerate regional development.' }
        ],
        blocks: [
          {
            title: 'Master, Detailed, OIZ & Conservation Development Plans',
            text: 'We prepare Master Development Plans, Conservation-Oriented Development Plans, Regional Plans, and Organized Industrial Zone (OIZ) Development Plans in full compliance with current legislation, applicable regulations, and urban planning principles. We meticulously manage planning processes supported by a strong technical infrastructure to ensure that protected areas, as well as historical, cultural, and natural heritage sites, are preserved and carried forward into the future in line with sustainability principles and secured through appropriate planning frameworks.',
            visual: 'Zoning Planning',
            image: '/images/urban-planning-development-conservation-plans.webp'
          },
          {
            title: 'Strategic Spatial Planning and Regional Plans',
            text: 'We model growth projections, logistics corridors, socio-economic dynamics, and land-use decisions for cities, basins, and metropolitan areas at macro scale. Through upper-scale regional plans and analytical planning frameworks, we design resilient urban models against disasters, climate risks, and uncontrolled population pressure.',
            visual: 'Regional Strategy',
            image: '/images/strategic-spatial-regional-planning.webp'
          },
          {
            title: 'Thematic Regional Master Plans and Tourism Master Planning',
            text: 'We develop thematic master plans that activate regional economic, social, and cultural potential. Aligned with national and international development agencies and ministerial standards, we produce sustainable tourism master plans, concept tourism plans, and regional layout strategies supported by comprehensive feasibility studies.',
            visual: 'Master Planning',
            image: '/images/thematic-regional-tourism-master-plan.webp'
          }
        ]
      },
      {
        key: 'digital-twin',
        label: 'Smart Cities, Industrial Zones, and Digital Twin Solutions',
        intro:
          'Yada Global designs advanced smart-city and digital twin platforms for data-driven municipal governance and Organized Industrial Zones. By integrating IoT networks, industrial production simulations, green infrastructure monitoring, and SUMP standards with our GIS backbone, we build living digital replicas of cities and factories.',
        iconCards: [
          { icon: '🔌', title: 'IoT Integration', text: 'Unified sensor data management for city and industrial ecosystems.' },
          { icon: '🏭', title: 'Digital Twins', text: '3D simulation environments for predictive operational control.' },
          { icon: '🚗', title: 'SUMP and Logistics', text: 'Carbon-aware optimization for mobility and freight networks.' }
        ],
        blocks: [
          {
            title: 'IoT Integration and Smart Industrial Zone Management Networks',
            text: 'For municipalities and Organized Industrial Zones, we consolidate IoT streams from smart meters, air and water quality stations, industrial waste tracking modules, and energy systems into a central platform. We transform real-time sensor data into actionable insights to optimize water, waste, energy, and budget usage with minimal loss.',
            visual: 'IoT Networks',
            image: '/images/iot-smart-industrial-zone-management.webp'
          },
          {
            title: '3D City Modeling, Factory Campuses, and Industrial Digital Twin Platforms',
            text: 'We create living digital twin models by combining geospatial, architectural, and infrastructure data from cities, real-estate developments, and large industrial assets. Through real-time simulation, we test expansion scenarios, production and logistics flows, disaster risk models, and urban transformation impacts before investment decisions are made.',
            visual: '3D Simulation',
            image: '/images/3d-industrial-digital-twin-platform.webp'
          },
          {
            title: 'Smart Mobility, Industrial Logistics, and SUMP',
            text: 'We deliver internationally aligned SUMP solutions that improve urban accessibility, optimize complex industrial logistics networks, and reduce carbon emissions. Using traffic density mapping, signal optimization, staff shuttle routing, and heavy-vehicle corridor planning, we design data-driven mobility infrastructure for both cities and major enterprises.',
            visual: 'Smart Mobility',
            image: '/images/smart-mobility-industrial-logistics-sump.webp'
          }
        ]
      },
      {
        key: 'sustainability',
        label: 'Sustainable Urbanism, Green Transition, and Environmental Strategies',
        intro:
          'Yada Global develops sustainable urbanism and green transition programs fully aligned with the European Green Deal and global environmental regulations. From carbon-neutral city actions to green infrastructure design, we produce strategic environmental plans that help municipalities, industrial zones, and private-sector organizations achieve full regulatory compliance.',
        iconCards: [
          { icon: '🚍', title: 'Net-Zero Mobility', text: 'Emission-reduction pathways for public transport and logistics.' },
          { icon: '🗺️', title: 'SECAP Planning', text: 'Action frameworks for energy efficiency and climate adaptation.' },
          { icon: '📈', title: 'Green Transformation', text: 'Carbon reporting and circular-economy performance strategy.' }
        ],
        blocks: [
          {
            title: '🚍 Net-Zero Transport Services and Green Mobility Transition',
            text: 'To address climate challenges, we prepare technical feasibility frameworks for transforming public transport and logistics systems into low-emission, environmentally responsible networks. We manage electric bus integration, charging station location analysis, and green mobility network design through GIS-based planning data.',
            visual: 'Net-Zero',
            image: '/images/zero-carbon-transport-green-mobility.webp'
          },
          {
            title: 'Sustainable Energy and Climate Action Plans (SECAP)',
            text: 'Following international standards and Covenant of Mayors principles, we prepare SECAP programs that safeguard long-term urban resilience. We develop greenhouse gas inventories for cities and industrial districts, assess adaptation capacity, and define practical mitigation strategies that strengthen access to climate and development financing.',
            visual: 'SECAP',
            image: '/images/secap-sustainable-energy-climate-action-plan.webp'
          },
          {
            title: '📈 Green Transition, Circular Economy, and Carbon Footprint Reporting',
            text: 'For private enterprises, industrial zones, and production facilities, we manage compliance with the European Green Deal and Carbon Border Adjustment Mechanism requirements. We deliver corporate carbon footprint reporting, circular-economy strategy design for industrial waste optimization, and readiness roadmaps for green finance and regional development support.',
            visual: 'Green Finance',
            image: '/images/green-transformation-circular-economy-carbon-footprint.webp'
          }
        ]
      }
    ]
  }
}

const activeTab = ref('planning')
const localizedContent = computed(() => pageContent[locale.value] ?? pageContent.en)
const tabs = computed(() => localizedContent.value.tabs)
const currentTab = computed(() => tabs.value.find((tab) => tab.key === activeTab.value) ?? tabs.value[0])

// Auto-select tab when navigating from search
watchEffect(() => {
  const t = route.query.tab
  if (t && tabs.value.some((tab) => tab.key === t)) activeTab.value = t
})

const isActive = (key) => activeTab.value === key
const selectTab = (key) => {
  activeTab.value = key
}

const getBlockVisualStyle = (block) => {
  if (!block.image) return undefined

  return {
    backgroundImage: `linear-gradient(140deg, rgba(11, 47, 119, 0.28), rgba(15, 143, 152, 0.18)), url(${block.image})`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f8fbff'
  }
}
</script>

<template>
  <section class="page-wrapper page-content route-page digital-tech-page">
    <header class="digital-tech-hero">
      <div class="digital-tech-hero-overlay"></div>
      <div class="digital-tech-hero-content">
        <p class="digital-tech-kicker">{{ localizedContent.kicker }}</p>
        <h1>{{ localizedContent.title }}</h1>
        <p>{{ localizedContent.description }}</p>
      </div>
      <div class="digital-tech-hero-img-wrap" aria-hidden="true">
        <img src="/images/smartbanner.webp" alt="" class="digital-tech-hero-img" />
      </div>
    </header>

    <nav class="digital-tech-tabs" aria-label="Akıllı kentler sekmeleri">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="digital-tech-tab"
        :class="{ active: isActive(tab.key) }"
        @click="selectTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </nav>

    <transition name="digital-panel" mode="out-in">
      <article :key="currentTab.key" class="digital-tech-panel">
        <header class="digital-tech-panel-header">
          <div class="digital-tech-panel-heading">
            <h2>{{ currentTab.label }}</h2>
          </div>
          <p>{{ currentTab.intro }}</p>
        </header>

        <section class="digital-tech-icon-grid" aria-label="Öne çıkan yetenekler">
          <article v-for="card in currentTab.iconCards" :key="card.title" class="digital-tech-icon-card">
            <p class="digital-tech-icon">{{ card.icon }}</p>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </article>
        </section>

        <section class="digital-tech-blocks">
          <article v-for="(block, index) in currentTab.blocks" :key="block.title" class="digital-tech-block">
            <div class="digital-tech-block-content">
              <span class="digital-tech-block-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
              <div class="digital-tech-block-copy">
                <h3>{{ block.title }}</h3>
                <p>{{ block.text }}</p>
              </div>
            </div>
            <div class="digital-tech-block-timeline" aria-hidden="true">
              <span class="digital-tech-block-timeline-line"></span>
            </div>
            <div class="digital-tech-block-visual" :style="getBlockVisualStyle(block)" aria-hidden="true">
              <span class="digital-tech-visual-pill">{{ block.visual }}</span>
            </div>
          </article>
        </section>
      </article>
    </transition>
  </section>
</template>
