<script setup>
import { computed, ref } from 'vue'
import { locale } from '../i18n.js'

const pageContent = {
  tr: {
    kicker: 'Cozumlerimiz',
    title: 'DIJITAL TEKNOLOJILER VE YAZILIM COZUMLERI',
    description:
      'Cografi veri zekasi, yapay zeka muhendisligi ve siber guvenlik denetimini tek bir stratejik catida birlestirerek kurumlara olceklenebilir dijital donusum altyapisi sunuyoruz.',
    tabs: [
      {
        key: 'gis',
        label: '🛰️ Cografi Bilgi Sistemleri ve Mekansal Veri Analitigi',
        intro:
          'Yada Global; Cografi Bilgi Sistemleri (CBS) ve Uzaktan Algilama teknolojilerinde uctan uca cozumler sunan lider bir teknoloji firmasidir. Buyuk mekansal verileri ileri duzey analitik yontemlerle isleyerek; kamu politikalarini yonlendiren akilli kentsel modeller ve ozel sektor yatirimlarina yon veren lokasyon analitigi cozumleri uretiyoruz.',
        iconCards: [
          { icon: '🗺️', title: 'Mekansal Karar Destegi', text: 'Veriyi karar mekanizmalarina tasiyan GIS analitik akislari.' },
          { icon: '🛰️', title: 'Uzaktan Algilama', text: 'Uydu ve radar verisinden zaman serisi tabanli icgoruler.' },
          { icon: '📍', title: 'Lokasyon Zekasi', text: 'Yatirim, operasyon ve buyume kararlari icin konumsal modelleme.' }
        ],
        blocks: [
          {
            title: 'Mekansal Veri Analitigi, Modelleme ve CBS Cozumleri',
            text: 'Kamu kurumlari ve yerel yonetimlerin ham mekansal verilerini gelismis algoritmalara dayali GIS analizi yontemleriyle isliyoruz. Kentsel buyume projeksiyonlari, afet risk senaryolari, lojistik ag optimizasyonlari ve mekansal veri tabani tasarimlari ile gelecege yonelik surdurulebilir tahmin modelleri uretiyoruz.',
            visual: 'Mekansal Zeka'
          },
          {
            title: 'Uzaktan Algilama ve Uydu Goruntusu Analizi',
            text: 'Yuksek cozunurluklu uydu ve radar goruntuleri uzerinden uzaktan algilama teknolojileriyle zaman serisi analizleri gerceklestiriyoruz. Arazi kullanimi degisiklikleri, cevre kirliligi izleme, kentsel isi adasi haritalama ile endustriyel tarimda bitki sagligi takibi ve rekolte tahmin modelleri gelistiriyoruz.',
            visual: 'Uzaktan Algilama'
          },
          {
            title: 'Ozel Sektor Icin Lokasyon Analitigi ve Ticari Is Zekasi',
            text: 'Perakende, lojistik, enerji ve finans sektorlerindeki kuresel ve yerel markalar icin konum tabanli deger onerileri kurguluyoruz. Nufus yogunlugu, demografik yapi, erisilebilirlik ve rakip analizi verilerini harita uzerinde cakistirarak yer secimi sureclerini bilimsel olarak yonetiyoruz.',
            visual: 'Lokasyon Analitigi'
          },
          {
            title: 'Yatirim Arazi Secimi ve Mekansal Risk Yonetimi',
            text: 'GES/RES ve buyuk olcekli endustriyel tesis yatirimlari oncesinde CBS tabanli fizibilite raporlari hazirliyoruz. Arazinin egim, baki, trafo hatlarina yakinlik ve yasal sinir analizlerini yaparken; tasqin, sel ve deprem risk analitigi sunuyoruz.',
            visual: 'Risk Haritalama'
          },
          {
            title: 'Web-GIS Tabanli Yonetim Portallari ve Sistem Entegrasyonu',
            text: 'Kamu ve ozel sektor kuruluslarinin cografi veri tabanlarini merkezi yapida topluyoruz. Tarayici tabanli harita yonetimi, sorgulama ve dinamik gorsellestirme icin olceklenebilir Web-GIS portallari ve bulut altyapilari kurguluyoruz.',
            visual: 'Web GIS'
          },
          {
            title: 'Buyuk Mekansal Veri Isleme ve IoT Haritalama',
            text: 'Akilli sehir donanimlari, saha sensorleri ve mobil uygulamalardan akan buyuk mekansal veri akislarini tek bir merkeze entegre ediyoruz. Gercek zamanli lokasyon verilerini filtreleyerek dinamik cografi karar destek sistemleri insa ediyoruz.',
            visual: 'Buyuk Mekansal Veri'
          }
        ]
      },
      {
        key: 'ai',
        label: '💻 Yazilim Gelistirme ve Yapay Zeka Sistem Muhendisligi',
        intro:
          'Yada Global; kamu kurumlari ve ozel sektor sirketleri icin olceklenebilir, yuksek performansli ve yapay zeka tabanli yazilim cozumleri sunmaktadir. Buyuk veri yigınlarini ve mekansal zekayi anlamlandirmak uzere; gelismis algoritmalara sahip AI yazilim gelistirme, bulut tabanli platformlar ve akilli karar destek sistemleri insa ediyoruz.',
        iconCards: [
          { icon: '🤖', title: 'AI Karar Motorlari', text: 'Tahmine dayali analitik ve akilli otomasyon altyapilari.' },
          { icon: '☁️', title: 'Bulut ve SaaS', text: 'Olceklenebilir, guvenli ve entegre kurumsal platformlar.' },
          { icon: '📱', title: 'Akilli Uygulamalar', text: 'Mobil ve web kanallarinda gercek zamanli dijital deneyimler.' }
        ],
        blocks: [
          {
            title: 'Yapay Zeka Tabanli Karar Destek Sistemleri ve Veri Gorsellestirme',
            text: 'Kamu yonetimi, yerel yonetimler ve kurumsal liderler icin tahmine dayali analitik sunan akilli karar destek sistemleri gelistiriyoruz. Operasyonel verileri makine ogrenmesi algoritmalariyla isleyerek, riskleri azaltan ve gelecek senaryolarini ongoren paneller tasarliyoruz.',
            visual: 'AI Panelleri'
          },
          {
            title: 'AI Entegreli Ozel Kurumsal Yazilim Cozumleri ve SaaS Mimarisi',
            text: 'Sirketlerin ve kamu organizasyonlarinin geleneksel is akislarini akilli algoritmalarla otomatize eden kurumsal yazilim cozumleri uretiyoruz. LLM ve derin ogrenme entegrasyonlarina sahip bulut tabanli SaaS mimarileriyle dijital donusum sureclerini hizlandiriyoruz.',
            visual: 'Bulut Yerel'
          },
          {
            title: 'Akilli Kent Cozumleri ve Mobil Uygulama Gelistirme',
            text: 'Yerel yonetimler, belediyeler ve B2B sirketler icin saha yonetimini, vatandas iletisimini ve veri toplama surecini kolaylastiran mobil uygulamalar gelistiriyoruz. Yapay zeka destekli akilli sehir asistanlari ve lokasyon bazli servisler ile kullanici deneyimini guclendiriyoruz.',
            visual: 'Mobil Akilli Kent'
          },
          {
            title: 'IoT Donanim Entegrasyonlari ve Guvenli API Mimarisi',
            text: 'Farkli yazilim platformlari, eski veri tabanlari ve IoT donanimlarinin gecikmesiz haberlesmesini saglayan guvenli API kopruleri insa ediyoruz. Sensor verilerini yapay zeka motorlarina tasiyan veri boru hatlarini kuruyor, veri butunlugunu guclu sifreleme protokolleriyle koruyoruz.',
            visual: 'Guvenli API'
          }
        ]
      },
      {
        key: 'security',
        label: '🛡️ Siber Guvenlik Denetimi, Sizma Testleri ve Risk Raporlamasi',
        intro:
          'Yada Global; kamu kurumlari, yerel yonetimler ve kurumsal sirketler icin bagimsiz siber guvenlik denetimi ve risk analizi hizmetleri sunmaktadir. Akilli kent altyapilarinda, harita veri tabanlarinda ve dijital sistemlerdeki aciklari tespit etmek uzere gelismis sizma testleri ve uyum raporlamalari gerceklestiriyoruz.',
        iconCards: [
          { icon: '🛡️', title: 'Kritik Altyapi Guvenligi', text: 'SCADA ve IoT aglarinda butuncul zafiyet taramasi.' },
          { icon: '🎯', title: 'Pentest ve Red Team', text: 'Ag, uygulama ve API katmanlarinda kontrollu saldiri senaryolari.' },
          { icon: '📜', title: 'Regulasyon Uyum', text: 'NIS 2, ISO 27001 ve fon uyumluluk raporlama surecleri.' }
        ],
        blocks: [
          {
            title: 'Akilli Sehir ve Kritik Altyapi Siber Guvenlik Zafiyet Analizi',
            text: 'Sehirlerin su, enerji, atik su ve aydinlatma sebekelerini yoneten endustriyel kontrol sistemlerindeki guvenlik aciklarini tespit ediyoruz. IoT sensor aglari ve sinyalizasyon donanimlarinin haberlesme protokollerini denetleyerek gerekli guvenlik onlemlerini raporluyoruz.',
            visual: 'Kritik Altyapi'
          },
          {
            title: 'Mekansal Veri ve Dijital Ikiz Sizma Testleri',
            text: 'Kadastro, mulkiyet ve altyapi harita veri tabanlarinin siber dayanikliligini denetliyoruz. Web-GIS portallari ve dijital ikiz platformlarinin API, entegrasyon ve yetkilendirme aciklarini tespit ederek teknik bulgulari raporluyoruz.',
            visual: 'Dijital Ikiz Guvenligi'
          },
          {
            title: 'Kurumsal Pentest ve Teknik Risk Raporlamasi',
            text: 'Kurumlarin ic ve dis ag altyapilarinin, bulut sunucularinin ve veri merkezlerinin siber tehditlere karsi direncini olcuyoruz. Kaynak kod analizi ve oltalama simulasyonlariyla insan kaynakli riskleri degerlendirerek oncelikli aksiyon planlari sunuyoruz.',
            visual: 'Pentest Raporlama'
          },
          {
            title: 'Uluslararasi Siber Regulasyon ve Fon Uyum Danismanligi',
            text: 'AB siber guvenlik direktifleri ve bilgi guvenligi yonetim standartlarina yonelik gap analizleri ve uyum raporlama sureclerini yonetiyoruz. Uluslararasi finansmanli dijital donusum projelerinde zorunlu teknik siber risk raporlarini hazirliyoruz.',
            visual: 'Uyum Stratejisi'
          }
        ]
      }
    ]
  },
  en: {
    kicker: 'Our Solutions',
    title: 'DIGITAL TECHNOLOGIES AND SOFTWARE SOLUTIONS',
    description:
      'We combine geospatial intelligence, AI engineering, and cybersecurity assurance under one strategic framework to deliver scalable digital transformation infrastructure for institutions.',
    tabs: [
      {
        key: 'gis',
        label: '🛰️ Geographic Information Systems and Spatial Analytics',
        intro:
          'Yada Global delivers end-to-end capabilities in Geographic Information Systems (GIS) and Remote Sensing. By processing large spatial datasets with advanced analytics, we produce smart urban models for public policy and location intelligence solutions for private-sector investments.',
        iconCards: [
          { icon: '🗺️', title: 'Spatial Decision Support', text: 'GIS analytics pipelines that turn data into decision advantage.' },
          { icon: '🛰️', title: 'Remote Sensing', text: 'Time-series insights from satellite and radar imagery.' },
          { icon: '📍', title: 'Location Intelligence', text: 'Geospatial modeling for investment, operations, and growth.' }
        ],
        blocks: [
          {
            title: 'Spatial Analytics, Modeling, and GIS Solutions',
            text: 'We process raw spatial data from public institutions and local authorities through advanced GIS methods. We develop sustainable forecasting models for urban growth, disaster scenarios, logistics network optimization, and geodatabase architecture.',
            visual: 'Spatial Intelligence'
          },
          {
            title: 'Remote Sensing and Satellite Imagery Analysis',
            text: 'Using high-resolution satellite and radar imagery, we deliver time-series remote sensing analysis. We support land-use change monitoring, environmental surveillance, urban heat mapping, and agricultural vegetation and yield modeling.',
            visual: 'Remote Sensing'
          },
          {
            title: 'Location Analytics and Commercial Business Intelligence',
            text: 'For retail, logistics, energy, and finance, we build location-based value propositions. By overlaying demographic, accessibility, and competitor layers, we guide high-value branch, store, and commercial site selection with evidence-based workflows.',
            visual: 'Location Analytics'
          },
          {
            title: 'Investment Site Selection and Spatial Risk Management',
            text: 'Before large-scale energy and industrial investments, we deliver GIS-based feasibility studies. We analyze slope, aspect, utility proximity, and legal constraints, while providing flood, storm, and earthquake risk intelligence for finance and insurance use cases.',
            visual: 'Risk Mapping'
          },
          {
            title: 'Web GIS Portals and System Integration',
            text: 'We centralize geospatial databases for public and private organizations. We design scalable Web GIS portals and cloud infrastructure that enable secure browser-based map operations, querying, and dynamic visualization.',
            visual: 'Web GIS'
          },
          {
            title: 'Big Spatial Data Processing and IoT Mapping',
            text: 'We integrate high-volume spatial streams from smart-city hardware, field sensors, and mobile platforms into unified architectures. With real-time filtering and orchestration, we build dynamic spatial decision support systems for rapid operations.',
            visual: 'Spatial Big Data'
          }
        ]
      },
      {
        key: 'ai',
        label: '💻 Software Development and AI Systems Engineering',
        intro:
          'Yada Global provides scalable, high-performance, AI-powered software solutions for public institutions and private enterprises. We design advanced AI software products, cloud-native platforms, and intelligent decision support systems to operationalize complex data.',
        iconCards: [
          { icon: '🤖', title: 'AI Decision Engines', text: 'Predictive analytics and intelligent automation foundations.' },
          { icon: '☁️', title: 'Cloud and SaaS', text: 'Secure, integrated, and elastic enterprise platform delivery.' },
          { icon: '📱', title: 'Smart Applications', text: 'Real-time digital experiences across web and mobile channels.' }
        ],
        blocks: [
          {
            title: 'AI-Powered Decision Support and Data Visualization',
            text: 'We engineer intelligent decision support systems for public management and enterprise leadership. By applying machine learning to operational data, we build predictive panels that reduce risk, improve planning precision, and accelerate action.',
            visual: 'AI Dashboards'
          },
          {
            title: 'AI-Integrated Custom Enterprise Software and SaaS Architecture',
            text: 'We design custom enterprise software that modernizes legacy workflows through intelligent automation. With LLM and deep-learning integrations, our cloud-native SaaS architectures increase agility and speed up digital transformation delivery.',
            visual: 'Cloud Native'
          },
          {
            title: 'Smart City Solutions and Mobile Application Development',
            text: 'We create mobile solutions for municipalities and B2B teams to streamline field operations, citizen communication, and data capture. AI-enabled assistants, location-aware services, and modern UX principles drive practical, high-adoption applications.',
            visual: 'Mobile Smart City'
          },
          {
            title: 'IoT Integrations and Secure API Architecture',
            text: 'We connect heterogeneous platforms, legacy systems, and IoT environments through robust API layers. Sensor pipelines feed AI engines in near real-time while encryption standards protect data integrity and platform interoperability.',
            visual: 'Secure API'
          }
        ]
      },
      {
        key: 'security',
        label: '🛡️ Cybersecurity Audits, Penetration Testing, and Risk Reporting',
        intro:
          'Yada Global delivers independent cybersecurity audit and risk analysis services for public institutions, local governments, and enterprises. We identify vulnerabilities in smart city infrastructure, geospatial systems, and digital platforms through structured testing and compliance-focused reporting.',
        iconCards: [
          { icon: '🛡️', title: 'Critical Infrastructure Security', text: 'Comprehensive vulnerability assessment for SCADA and IoT networks.' },
          { icon: '🎯', title: 'Pentest and Red Teaming', text: 'Controlled attack simulations across network, application, and API layers.' },
          { icon: '📜', title: 'Regulatory Compliance', text: 'Alignment support for NIS 2, ISO 27001, and donor requirements.' }
        ],
        blocks: [
          {
            title: 'Smart City and Critical Infrastructure Vulnerability Analysis',
            text: 'We assess vulnerabilities in industrial control environments managing water, energy, wastewater, and lighting systems. We audit communications in IoT sensor networks and signaling components, then deliver prioritized control recommendations.',
            visual: 'Critical Infrastructure'
          },
          {
            title: 'Geospatial Data and Digital Twin Penetration Testing',
            text: 'We evaluate cyber resilience of strategic geospatial assets such as cadastral, ownership, and infrastructure datasets. We test API and integration points in Web GIS and digital twin platforms, including authorization and leakage risks.',
            visual: 'Digital Twin Security'
          },
          {
            title: 'Enterprise Pentesting and Technical Risk Reporting',
            text: 'We measure resistance of internal and external networks, cloud servers, and data-center environments through controlled penetration testing. Source code review and phishing simulations expose human and technical risks with actionable remediation paths.',
            visual: 'Pentest Reporting'
          },
          {
            title: 'International Cyber Regulation and Donor Compliance Advisory',
            text: 'We manage gap analysis and compliance reporting against EU cybersecurity directives and information-security standards. For internationally funded digital transformation programs, we prepare mandatory technical cyber risk and compliance documentation.',
            visual: 'Compliance Strategy'
          }
        ]
      }
    ]
  }
}

const activeTab = ref('gis')
const localizedContent = computed(() => pageContent[locale.value] ?? pageContent.en)
const tabs = computed(() => localizedContent.value.tabs)
const currentTab = computed(() => tabs.value.find((tab) => tab.key === activeTab.value) ?? tabs.value[0])

const isActive = (key) => activeTab.value === key
const selectTab = (key) => {
  activeTab.value = key
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
    </header>

    <nav class="digital-tech-tabs" aria-label="Dijital teknoloji sekmeleri">
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
          <h2>{{ currentTab.label }}</h2>
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
          <article v-for="block in currentTab.blocks" :key="block.title" class="digital-tech-block">
            <div class="digital-tech-block-visual" aria-hidden="true">
              <span class="digital-tech-visual-pill">{{ block.visual }}</span>
            </div>
            <div class="digital-tech-block-copy">
              <h3>{{ block.title }}</h3>
              <p>{{ block.text }}</p>
            </div>
          </article>
        </section>
      </article>
    </transition>
  </section>
</template>