<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { locale } from '../i18n.js'

const route = useRoute()

const pageContent = {
  tr: {
    kicker: 'ÇÖZÜMLERİMİZ',
    title: 'DİJİTAL TEKNOLOJİLER VE YAZILIM ÇÖZÜMLERİ',
    description:
      'Yada Global  coğrafi veri zekâsı, yapay zekâ mühendisliği, yazılım geliştirme ve siber güvenlik denetimini tek bir stratejik çatı altında birleştirerek kurumlara ölçeklenebilir ve güvenilir dijital dönüşüm altyapıları sunuyoruz. Veriyi anlamlandıran, süreçleri dijitalleştiren ve kurumların karar alma kapasitesini güçlendiren teknoloji çözümleri geliştiriyor; kamu, yerel yönetimler ve özel sektör için ihtiyaçlara özel, sürdürülebilir ve güvenli dijital sistemler tasarlıyoruz. Modern teknolojileri kurumsal ihtiyaçlarla buluşturarak, bugünün operasyonlarını iyileştiren ve geleceğin dijital altyapılarına uyum sağlayan çözümler üretiyoruz.',
    tabs: [
      {
        key: 'gis',
        label: '🛰️ Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği',
        intro:
          'Yada Global; Coğrafi Bilgi Sistemleri (CBS) ve Uzaktan Algılama teknolojilerinde uçtan uca çözümler sunan lider bir teknoloji firmasıdır. Büyük mekansal verileri ileri düzey analitik yöntemlerle işleyerek; kamu politikalarını yönlendiren akıllı kentsel modeller ve özel sektör yatırımlarına yön veren lokasyon analitiği çözümleri üretiyoruz.',
        iconCards: [
          { icon: '🗺️', title: 'Mekansal Karar Desteği', text: 'Veriyi karar mekanizmalarına taşıyan CBS analitik akışları.' },
          { icon: '🛰️', title: 'Uzaktan Algılama', text: 'Uydu ve radar verisinden zaman serisi tabanlı içgörüler.' },
          { icon: '📍', title: 'Lokasyon Zekası', text: 'Yatırım, operasyon ve büyüme kararları için konumsal modelleme.' }
        ],
        blocks: [
          {
            title: 'Mekansal Veri Analitiği, Modelleme ve CBS Çözümleri',
            text: 'Kamu kurumları ve yerel yönetimlerin ham mekansal verilerini gelişmiş algoritmalara dayalı CBS analizi yöntemleriyle işliyoruz. Kentsel büyüme projeksiyonları, afet risk senaryoları, lojistik ağ optimizasyonları ve mekansal veri tabanı tasarımları ile geleceğe yönelik sürdürülebilir tahmin modelleri üretiyoruz.',
            visual: 'Mekansal Zeka',
            image: '/images/gis-spatial-data-analytics.png'
          },
          {
            title: 'Uzaktan Algılama ve Uydu Görüntüsü Analizi',
            text: 'Yüksek çözünürlüklü uydu ve radar görüntüleri üzerinden uzaktan algılama teknolojileriyle zaman serisi analizleri gerçekleştiriyoruz. Arazi kullanımı değişiklikleri, çevre kirliliği izleme, kentsel ısı adası haritalama ile endüstriyel tarımda bitki sağlığı takibi ve rekolte tahmin modelleri geliştiriyoruz.',
            visual: 'Uzaktan Algılama',
            image: '/images/remote-sensing-satellite-imagery-analysis.png'
          },
          {
            title: 'Özel Sektör İçin Lokasyon Analitiği ve Ticari İş Zekası',
            text: 'Perakende, lojistik, enerji ve finans sektörlerindeki küresel ve yerel markalar için konum tabanlı değer önerileri kurguluyoruz. Nüfus yoğunluğu, demografik yapı, erişilebilirlik ve rakip analizi verilerini harita üzerinde çakıştırarak yer seçimi süreçlerini bilimsel olarak yönetiyoruz.',
            visual: 'Lokasyon Analitiği',
            image: '/images/location-analytics-business-intelligence.png'
          },
          {
            title: 'Yatırım Arazi Seçimi ve Mekansal Risk Yönetimi',
            text: 'GES/RES ve büyük ölçekli endüstriyel tesis yatırımları öncesinde CBS tabanlı fizibilite raporları hazırlıyoruz. Arazinin eğim, bakı, trafo hatlarına yakınlık ve yasal sınır analizlerini yaparken; taşkın, sel ve deprem risk analitiği sunuyoruz.',
            visual: 'Risk Haritalama',
            image: '/images/investment-site-selection-spatial-risk-analysis.png'
          },
          {
            title: 'Web-CBS Tabanlı Yönetim Portalları ve Sistem Entegrasyonu',
            text: 'Kamu ve özel sektör kuruluşlarının coğrafi veri tabanlarını merkezi yapıda topluyoruz. Tarayıcı tabanlı harita yönetimi, sorgulama ve dinamik görselleştirme için ölçeklenebilir Web-CBS portalları ve bulut altyapıları kurguluyoruz.',
            visual: 'Web CBS',
            image: '/images/web-gis-management-system-integration.png'
          },
          {
            title: 'Büyük Mekansal Veri İşleme ve IoT Haritalama',
            text: 'Akıllı şehir donanımları, saha sensörleri ve mobil uygulamalardan akan büyük mekansal veri akışlarını tek bir merkeze entegre ediyoruz. Gerçek zamanlı lokasyon verilerini filtreleyerek dinamik coğrafi karar destek sistemleri inşa ediyoruz.',
            visual: 'Büyük Mekansal Veri',
            image: '/images/big-spatial-data-iot-mapping.png'
          }
        ]
      },
      {
        key: 'ai',
        label: '💻 Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği',
        intro:
          'Yada Global; kamu kurumları ve özel sektör şirketleri için ölçeklenebilir, yüksek performanslı ve yapay zeka tabanlı yazılım çözümleri sunmaktadır. Büyük veri yığınlarını ve mekansal zekayı anlamlandırmak üzere; gelişmiş algoritmalara sahip AI yazılım geliştirme, bulut tabanlı platformlar ve akıllı karar destek sistemleri inşa ediyoruz.',
        iconCards: [
          { icon: '🤖', title: 'AI Karar Motorları', text: 'Tahmine dayalı analitik ve akıllı otomasyon altyapıları.' },
          { icon: '☁️', title: 'Bulut ve SaaS', text: 'Ölçeklenebilir, güvenli ve entegre kurumsal platformlar.' },
          { icon: '📱', title: 'Akıllı Uygulamalar', text: 'Mobil ve web kanallarında gerçek zamanlı dijital deneyimler.' }
        ],
        blocks: [
          {
            title: 'Yapay Zeka Tabanlı Karar Destek Sistemleri ve Veri Görselleştirme',
            text: 'Kamu yönetimi, yerel yönetimler ve kurumsal liderler için tahmine dayalı analitik sunan akıllı karar destek sistemleri geliştiriyoruz. Operasyonel verileri makine öğrenmesi algoritmalarıyla işleyerek, riskleri azaltan ve gelecek senaryolarını öngören paneller tasarlıyoruz.',
            visual: 'AI Panelleri',
            image: '/images/ai-decision-support-data-visualization.png'
          },
          {
            title: 'AI Entegreli Özel Kurumsal Yazılım Çözümleri ve SaaS Mimarisi',
            text: 'Şirketlerin ve kamu organizasyonlarının geleneksel iş akışlarını akıllı algoritmalarla otomatize eden kurumsal yazılım çözümleri üretiyoruz. LLM ve derin öğrenme entegrasyonlarına sahip bulut tabanlı SaaS mimarileriyle dijital dönüşüm süreçlerini hızlandırıyoruz.',
            visual: 'AI Entegrasyonu',
            image: '/images/ai-enterprise-software-saas.png'
          },
          {
            title: 'Akıllı Kent Çözümleri ve Mobil Uygulama Geliştirme',
            text: 'Yerel yönetimler, belediyeler ve B2B şirketler için saha yönetimini, vatandaş iletişimini ve veri toplama sürecini kolaylaştıran mobil uygulamalar geliştiriyoruz. Yapay zeka destekli akıllı şehir asistanları ve lokasyon bazlı servisler ile kullanıcı deneyimini güçlendiriyoruz.',
            visual: 'Mobil Akıllı Kent',
            image: '/images/smart-city-mobile-application-development.png'
          },
          {
            title: 'IoT Donanım Entegrasyonları ve Güvenli API Mimarisi',
            text: 'Farklı yazılım platformları, eski veri tabanları ve IoT donanımlarının gecikmesiz haberleşmesini sağlayan güvenli API köprüleri inşa ediyoruz. Sensör verilerini yapay zeka motorlarına taşıyan veri boru hatlarını kuruyor, veri bütünlüğünü güçlü şifreleme protokolleriyle koruyoruz.',
            visual: 'Güvenli API',
            image: '/images/iot-secure-api-integration.png'
          }
        ]
      },
      {
        key: 'security',
        label: '🛡️ Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması',
        intro:
          'Yada Global; kamu kurumları, yerel yönetimler ve kurumsal şirketler için bağımsız siber güvenlik denetimi ve risk analizi hizmetleri sunmaktadır. Akıllı kent altyapılarında, harita veri tabanlarında ve dijital sistemlerdeki açıkları tespit etmek üzere gelişmiş sızma testleri ve uyum raporlamaları gerçekleştiriyoruz.',
        iconCards: [
          { icon: '🛡️', title: 'Kritik Altyapı Güvenliği', text: 'SCADA ve IoT ağlarında bütüncül zafiyet taraması.' },
          { icon: '🎯', title: 'Pentest ve Red Team', text: 'Ağ, uygulama ve API katmanlarında kontrollü saldırı senaryoları.' },
          { icon: '📜', title: 'Regülasyon Uyum', text: 'NIS 2, ISO 27001 ve fon uyumluluk raporlama süreçleri.' }
        ],
        blocks: [
          {
            title: 'Akıllı Şehir ve Kritik Altyapı Siber Güvenlik Zafiyet Analizi',
            text: 'Şehirlerin su, enerji, atık su ve aydınlatma şebekelerini yöneten endüstriyel kontrol sistemlerindeki güvenlik açıklarını tespit ediyoruz. IoT sensör ağları ve sinyalizasyon donanımlarının haberleşme protokollerini denetleyerek gerekli güvenlik önlemlerini raporluyoruz.',
            visual: 'Kritik Altyapı',
            image: '/images/smart-city-critical-infrastructure-cybersecurity.png'
          },
          {
            title: 'Mekansal Veri ve Dijital İkiz Sızma Testleri',
            text: 'Kadastro, mülkiyet ve altyapı harita veri tabanlarının siber dayanıklılığını denetliyoruz. Web-CBS portalları ve dijital ikiz platformlarının API, entegrasyon ve yetkilendirme açıklarını tespit ederek teknik bulguları raporluyoruz.',
            visual: 'Dijital İkiz Güvenliği',
            image: '/images/gis-digital-twin-penetration-testing.png'
          },
          {
            title: 'Kurumsal Pentest ve Teknik Risk Raporlaması',
            text: 'Kurumların iç ve dış ağ altyapılarının, bulut sunucularının ve veri merkezlerinin siber tehditlere karşı direncini ölçüyoruz. Kaynak kod analizi ve oltalama simülasyonlarıyla insan kaynaklı riskleri değerlendirerek öncelikli aksiyon planları sunuyoruz.',
            visual: 'Pentest Raporlama',
            image: '/images/corporate-penetration-testing-risk-assessment.png'
          },
          {
            title: 'Uluslararası Siber Regülasyon ve Fon Uyum Danışmanlığı',
            text: 'AB siber güvenlik direktifleri ve bilgi güvenliği yönetim standartlarına yönelik gap analizleri ve uyum raporlama süreçlerini yönetiyoruz. Uluslararası finansmanlı dijital dönüşüm projelerinde zorunlu teknik siber risk raporlarını hazırlıyoruz.',
            visual: 'Uyum Stratejisi',
            image: '/images/cybersecurity-regulatory-compliance-advisory.png'
          }
        ]
      }
    ]
  },
  en: {
    kicker: 'Our Solutions',
    title: 'DIGITAL TECHNOLOGIES AND SOFTWARE SOLUTIONS',
    description:
      'At Yada Global we combine geographic data intelligence, artificial intelligence engineering, software development, and cybersecurity auditing under a single strategic umbrella to provide organizations with scalable and reliable digital transformation infrastructures. We develop technology solutions that make sense of data, digitize processes, and strengthen organizations\' decision-making capacity; we design customized, sustainable, and secure digital systems for the public sector, local governments, and the private sector. By bringing together modern technologies with corporate needs, we create solutions that improve today\'s operations and adapt to the digital infrastructures of the future.',
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
            visual: 'Spatial Intelligence',
            image: '/images/gis-spatial-data-analytics.png'
          },
          {
            title: 'Remote Sensing and Satellite Imagery Analysis',
            text: 'Using high-resolution satellite and radar imagery, we deliver time-series remote sensing analysis. We support land-use change monitoring, environmental surveillance, urban heat mapping, and agricultural vegetation and yield modeling.',
            visual: 'Remote Sensing',
            image: '/images/remote-sensing-satellite-imagery-analysis.png'
          },
          {
            title: 'Location Analytics and Commercial Business Intelligence',
            text: 'For retail, logistics, energy, and finance, we build location-based value propositions. By overlaying demographic, accessibility, and competitor layers, we guide high-value branch, store, and commercial site selection with evidence-based workflows.',
            visual: 'Location Analytics',
            image: '/images/location-analytics-business-intelligence.png'
          },
          {
            title: 'Investment Site Selection and Spatial Risk Management',
            text: 'Before large-scale energy and industrial investments, we deliver GIS-based feasibility studies. We analyze slope, aspect, utility proximity, and legal constraints, while providing flood, storm, and earthquake risk intelligence for finance and insurance use cases.',
            visual: 'Risk Mapping',
            image: '/images/investment-site-selection-spatial-risk-analysis.png'
          },
          {
            title: 'Web GIS Portals and System Integration',
            text: 'We centralize geospatial databases for public and private organizations. We design scalable Web GIS portals and cloud infrastructure that enable secure browser-based map operations, querying, and dynamic visualization.',
            visual: 'Web GIS',
            image: '/images/web-gis-management-system-integration.png'
          },
          {
            title: 'Big Spatial Data Processing and IoT Mapping',
            text: 'We integrate high-volume spatial streams from smart-city hardware, field sensors, and mobile platforms into unified architectures. With real-time filtering and orchestration, we build dynamic spatial decision support systems for rapid operations.',
            visual: 'Spatial Big Data',
            image: '/images/big-spatial-data-iot-mapping.png'
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
            visual: 'AI Dashboards',
            image: '/images/ai-decision-support-data-visualization.png'
          },
          {
            title: 'AI-Integrated Custom Enterprise Software and SaaS Architecture',
            text: 'We design custom enterprise software that modernizes legacy workflows through intelligent automation. With LLM and deep-learning integrations, our cloud-native SaaS architectures increase agility and speed up digital transformation delivery.',
            visual: 'AI Integration',
            image: '/images/ai-enterprise-software-saas.png'
          },
          {
            title: 'Smart City Solutions and Mobile Application Development',
            text: 'We create mobile solutions for municipalities and B2B teams to streamline field operations, citizen communication, and data capture. AI-enabled assistants, location-aware services, and modern UX principles drive practical, high-adoption applications.',
            visual: 'Mobile Smart City',
            image: '/images/smart-city-mobile-application-development.png'
          },
          {
            title: 'IoT Integrations and Secure API Architecture',
            text: 'We connect heterogeneous platforms, legacy systems, and IoT environments through robust API layers. Sensor pipelines feed AI engines in near real-time while encryption standards protect data integrity and platform interoperability.',
            visual: 'Secure API',
            image: '/images/iot-secure-api-integration.png'
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
            visual: 'Critical Infrastructure',
            image: '/images/smart-city-critical-infrastructure-cybersecurity.png'
          },
          {
            title: 'Geospatial Data and Digital Twin Penetration Testing',
            text: 'We evaluate cyber resilience of strategic geospatial assets such as cadastral, ownership, and infrastructure datasets. We test API and integration points in Web GIS and digital twin platforms, including authorization and leakage risks.',
            visual: 'Digital Twin Security',
            image: '/images/gis-digital-twin-penetration-testing.png'
          },
          {
            title: 'Enterprise Pentesting and Technical Risk Reporting',
            text: 'We measure resistance of internal and external networks, cloud servers, and data-center environments through controlled penetration testing. Source code review and phishing simulations expose human and technical risks with actionable remediation paths.',
            visual: 'Pentest Reporting',
            image: '/images/corporate-penetration-testing-risk-assessment.png'
          },
          {
            title: 'International Cyber Regulation and Donor Compliance Advisory',
            text: 'We manage gap analysis and compliance reporting against EU cybersecurity directives and information-security standards. For internationally funded digital transformation programs, we prepare mandatory technical cyber risk and compliance documentation.',
            visual: 'Compliance Strategy',
            image: '/images/cybersecurity-regulatory-compliance-advisory.png'
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
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
        <img src="/images/digitalbanner.png" alt="" class="digital-tech-hero-img" />
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