<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { locale } from '../i18n.js'

const route = useRoute()

const pageContent = {
  tr: {
    kicker: 'ÇÖZÜMLERİMİZ',
    title: 'ULUSLARARASI PROJELER VE STRATEJİK FİNANSMAN',
    description:
      'Yada Global olarak; köklü teknik ve kentsel uzmanlığımızı uluslararası finansman mekanizmalarıyla buluşturuyoruz. Horizon Europe, Erasmus+ KA2, LIFE, Interreg, EUREKA ve Digital Europe gibi küresel hibe programlarından; World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi çok taraflı kuruluşların fonladığı makro ölçekli yatırım, ihale ve kredi süreçlerine kadar tüm aşamalarda stratejik çözüm ortağıyız. Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları ile uyumlu projelere hem lider danışmanlık sağlıyor hem de konsorsiyumlara teknoloji ortağı olarak doğrudan dahil oluyoruz.',
    tabs: [
      {
        key: 'eu-projects',
        label: '🇪🇺 Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi',
        intro:
          'Yada Global; çok uluslu Ar-Ge, inovasyon, yeşil dönüşüm, mesleki mükemmeliyet ve akıllı şehircilik odaklı Avrupa Birliği projeleri süreçlerinde stratejik danışman ve resmi konsorsiyum ortağı olarak yer almaktadir. Horizon Europe, DUT, CoVE, Erasmus+ KA2, LIFE ve Digital Europe kapsamında başvuru stratejilerinden yürütücü ortak rollerine ve nihai raporlama süreçlerine kadar tüm döngüyü uçtan uca yönetiyoruz.',
        iconCards: [
          { icon: '🤝', title: 'Konsorsiyum Yapılandırma', text: 'Sınır ötesi ortaklık kurulumunda stratejik liderlik.' },
          { icon: '🎓', title: 'Erasmus+ KA2 Süreçleri', text: 'İdari, lojistik ve mali koordinasyonda tam uyum.' },
          { icon: '💻', title: 'Dijital İş Paketleri', text: 'LMS, uygulama ve oyunlaştırma çıktılarında teknik sahiplik.' }
        ],
        blocks: [
          {
            title: '🤝 Uluslararası Konsorsiyum Yönetimi ve AB Hibe Süreçleri Danışmanlığı',
            text: 'Avrupa Komisyonu ve ilişkili fon otoriteleri tarafından yayımlanan çok uluslu çağrıları yakından takip ederek kurumunuza en uygun fonlama stratejilerini kurguluyoruz. Consortium Building yetkinliğimizle Horizon Europe, DUT, CoVE, LIFE ve Eurostars projeleri için sınır ötesi konsorsiyumlar oluşturuyor; çağrı analizi, başvuru stratejisi, idari-mali danışmanlık ve nihai raporlama aşamalarını AB standartlarında yönetiyoruz.',
            visual: 'AB Konsorsiyum'
          },
          {
            title: '🎓 Erasmus+ KA2 Stratejik Ortaklıklar ve Proje Süreç Yönetimi',
            text: 'Eğitim, gençlik, kentsel farkındalık ve kurumsal kapasite geliştirme alanlarında uluslararası işbirliklerini tetikleyen Erasmus+ KA2 stratejik ortaklık projelerinde kurumların doğru konsorsiyumlara dahil olması ve süreçlerin koordinasyonu için danışmanlık sunuyoruz. Uluslararası ortaklık toplantıları ve LTT faaliyetlerinin lojistik, idari ve teknik planlamasını Avrupa Komisyonu normlarına uyumlu şekilde yönetiyoruz.',
            visual: 'Erasmus+ KA2'
          },
          {
            title: '💻 Dijital İş Paketi Liderliği, Uygulama Geliştirme ve Oyunlaştırma',
            text: 'Dahil olduğumuz AB projelerinde yalnızca süreç danışmanlığı değil, resmi proje ortağı olarak doğrudan teknik çıktı sorumluluğu üstleniyoruz. Yaygınlaştırma stratejilerine uygun web platformları kuruyor; Erasmus+ ve CoVE projeleri için çok dilli, SCORM uyumlu LMS altyapıları geliştiriyoruz. Senaryo tabanlı oyunlaştırma kurguları ve projeye özel mobil/web uygulama geliştirme faaliyetleriyle dijital iş paketlerini üretiyoruz.',
            visual: 'Dijital İş Paketleri'
          }
        ]
      },
      {
        key: 'bid-management',
        label: '💼 Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi',
        intro:
          'Yada Global; çok taraflı kalkınma bankaları ve küresel ajanslar tarafından finanse edilen uluslararası teknik yardım ve hizmet alım ihalelerinde uçtan uca stratejik danışmanlık sunmaktadır. World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI düzenlemelerine uygun teknik-idari şartname analizleri ile uluslararası standartlarda bid management süreçleri yönetiyoruz.',
        iconCards: [
          { icon: '📑', title: 'Şartname Analizi', text: 'Teknik-idari gereksinimlerde derin risk ve uyum okumaları.' },
          { icon: '🌍', title: 'Küresel İhale Uyumu', text: 'Çok taraflı kuruluş prosedürlerine uygun ihale koordinasyonu.' },
          { icon: '✍️', title: 'Teklif Dokümantasyonu', text: 'Değerlendirme kriterlerine uygun teknik ve mali dosyalama.' }
        ],
        blocks: [
          {
            title: '📑 Teknik Şartname Analizleri ve Teklif Stratejisi',
            text: 'Uluslararası kuruluşların yayımladığı çok uluslu ihale dosyalarını, idari ve teknik şartnameleri derinlemesine analiz ediyoruz. Kurumunuzun küresel pazardaki ihale süreçlerine uyumunu güçlendirmek için risk analizleri, maliyet projeksiyonları, yerel mevzuat uyumluluk denetimleri ve joint venture modellerini içeren teknik ve finansal teklif stratejileri geliştiriyoruz.',
            visual: 'Bid Strategy'
          },
          {
            title: '🌍 Çok Taraflı Kalkınma Bankaları ve Küresel Ajansların İhale Yönetimi',
            text: 'World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi kuruluşların procurement prosedürlerine tam uyumlu süreç yönetimi sağlıyoruz. Akıllı şehirler, CBS, sürdürülebilir ulaşım ve dijital dönüşüm odaklı ihaleleri izleyerek firmaların ve konsorsiyumların uluslararası alımlara eksiksiz dosyalar sunmasını koordine ediyoruz.',
            visual: 'Küresel İhale'
          },
          {
            title: '✍️ Teknik Teklif Geliştirme ve Uluslararası Dokümantasyon Yönetimi',
            text: 'Uluslararası ihale metodolojilerine uygun technical proposal ve iş planı metinleri geliştiriyoruz. Teknik uzman özgeçmişlerinin düzenlenmesi, kurumsal referansların uluslararası formatlara uyarlanması, mali teklif şablonlarının optimizasyonu ve evaluation criteria ile tam uyumlu dokümantasyon setlerinin hazırlanması süreçlerini titizlikle yürütüyoruz.',
            visual: 'Teklif Dokümanı'
          }
        ]
      },
      {
        key: 'finance',
        label: '📈 Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı',
        intro:
          'Yada Global; makro ölçekli akıllı şehir, altyapı, bölgesel kalkınma ve yeşil dönüşüm yatırımları için uluslararası finans kuruluşlarından uzun vadeli kredi ve fon sağlama süreçlerini yönetmektedir. Çok uluslu bankaların ve kalkınma ajanslarının normlarına uygun ticari ve teknik fizibilite raporları, finansal modellemeler ve yeşil finansman stratejileriyle büyük ölçekli yatırımları uluslararası fonlara hazır hale getiriyoruz.',
        iconCards: [
          { icon: '🏦', title: 'Uzun Vadeli Kredi', text: 'Sovereign/non-sovereign finansman kurgularında süreç yönetimi.' },
          { icon: '📋', title: 'Fizibilite ve Modelleme', text: 'ROI, NPV, IRR bazlı finansal karar destek modelleri.' },
          { icon: '🍃', title: 'Yeşil Finansman', text: 'ESG uyumlu yatırım ve fon erişim stratejileri.' }
        ],
        blocks: [
          {
            title: '🏦 Makro Proje Finansmanı ve Uluslararası Uzun Vadeli Kredi Yönetimi',
            text: 'Belediyelerin, OSBlerin ve özel sektör yatırımcılarının büyük ölçekli altyapı, akıllı kent ve dijital dönüşüm projeleri için çok taraflı kalkınma bankalarından uzun vadeli kredi sağlama süreçlerine danışmanlık yapıyoruz. Finansman kuruluşlarının katı başvuru prosedürlerine uyumlu borçlanma stratejileri kurguluyor ve fonlama öncesi kurumsal risk analizleri gerçekleştiriyoruz.',
            visual: 'Proje Finansmanı'
          },
          {
            title: '📋 Ticari, Teknik Fizibilite Raporları ve Finansal Modelleme',
            text: 'Uluslararası finans kuruluşlarının ve bölgesel kalkınma ajanslarının kabul standartlarına uyumlu ticari ve teknik fizibilite raporları hazırlıyoruz. Yatırımların geri dönüş sürelerini, net bugünkü değerlerini ve iç verimlilik oranlarını hesaplayan dinamik finansal modelleme ve risk analizi tablolarıyla projelerin finansal sürdürülebilirliğini belgeliyoruz.',
            visual: 'Finansal Model'
          },
          {
            title: '🍃 Yeşil Finansman, Sürdürülebilirlik Yönetimi ve Yatırım Rehberliği',
            text: 'Avrupa Yeşil Mutabakatı normlarıyla eşleşen yatırımlar için green finance, green bonds ve sürdürülebilirlik odaklı fon mekanizmalarına erişim stratejileri geliştiriyoruz. Yatırımcıların iklim ve çevre düzenlemelerine uyumunu koordine ederek ESG kriterlerine uygun yatırım rehberliği sunuyoruz.',
            visual: 'Green Finance'
          }
        ]
      }
    ]
  },
  en: {
    kicker: 'Our Solutions',
    title: 'INTERNATIONAL PROJECTS AND STRATEGIC FINANCE',
    description:
      'At Yada Global, we connect deep technical and urban expertise with international financing mechanisms. From global grant programs such as Horizon Europe, Erasmus+ KA2, LIFE, Interreg, EUREKA, and Digital Europe to macro-scale investment, procurement, and loan processes funded by multilateral institutions such as the World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI, we act as a strategic solution partner across the full lifecycle. We provide lead advisory for projects aligned with the UN Sustainable Development Goals while also participating directly in consortia as a technology partner.',
    tabs: [
      {
        key: 'eu-projects',
        label: '🇪🇺 EU Projects and Consortium Management',
        intro:
          'Yada Global acts as a strategic advisor and official consortium partner in multinational EU project processes focused on R&D, innovation, green transition, vocational excellence, and smart urbanism. Under Horizon Europe, DUT, CoVE, Erasmus+ KA2, LIFE, and Digital Europe, we manage the full cycle from application strategy to implementation partner roles and final reporting.',
        iconCards: [
          { icon: '🤝', title: 'Consortium Building', text: 'Strategic leadership for cross-border partnership formation.' },
          { icon: '🎓', title: 'Erasmus+ KA2 Delivery', text: 'Full administrative, logistical, and financial coordination.' },
          { icon: '💻', title: 'Digital Work Packages', text: 'Technical ownership for LMS, apps, and gamification outputs.' }
        ],
        blocks: [
          {
            title: '🤝 International Consortium Management and EU Grant Advisory',
            text: 'We closely monitor multinational calls published by the European Commission and related authorities, then design funding strategies tailored to your institution. With strong consortium building capability, we lead cross-border structures for Horizon Europe, DUT, CoVE, LIFE, and Eurostars, while managing call analysis, application strategy, administrative-financial alignment, and final reporting to EU standards.',
            visual: 'EU Consortium'
          },
          {
            title: '🎓 Erasmus+ KA2 Strategic Partnerships and Process Management',
            text: 'We support institutions in joining the right consortia and coordinating Erasmus+ KA2 strategic partnership projects across education, youth, urban awareness, and institutional capacity development. We plan transnational meetings and LTT activities, and ensure administrative and financial workflows are executed in full compliance with European Commission norms.',
            visual: 'Erasmus+ KA2'
          },
          {
            title: '💻 Digital Work Package Leadership, Application Development, and Gamification',
            text: 'In EU projects, we do more than process advisory: we join consortia as an official partner and take responsibility for technical work packages. We establish dissemination-ready web platforms, deliver multilingual SCORM-compliant LMS environments for Erasmus+ and CoVE, and create scenario-based gamification with project-specific mobile/web applications, AI-enabled algorithms, and GIS-driven analytics outputs.',
            visual: 'Digital Work Packages'
          }
        ]
      },
      {
        key: 'bid-management',
        label: '💼 International Tenders and Strategic Bid Management',
        intro:
          'Yada Global provides end-to-end strategic advisory for international technical assistance and service procurement tenders financed by multilateral development banks and global agencies. We run bid management in line with World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI regulations through rigorous technical and administrative specification analysis.',
        iconCards: [
          { icon: '📑', title: 'Specification Analysis', text: 'Deep requirement mapping, risk diagnostics, and compliance planning.' },
          { icon: '🌍', title: 'Global Procurement Alignment', text: 'Process coordination aligned with multilateral procedures.' },
          { icon: '✍️', title: 'Proposal Documentation', text: 'Technical and financial files aligned with evaluation criteria.' }
        ],
        blocks: [
          {
            title: '📑 Technical Specification Analysis and Bid Strategy',
            text: 'We analyze multinational tender files and technical-administrative specifications in depth. To strengthen your competitiveness in global procurement, we design technical and financial bid strategies covering risk analysis, cost projections, local compliance reviews, and joint venture model structuring.',
            visual: 'Bid Strategy'
          },
          {
            title: '🌍 Tender Management for Multilateral Banks and Global Agencies',
            text: 'We ensure process execution in full alignment with procurement guidelines of institutions such as the World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI. We track global tenders in smart cities, GIS, sustainable mobility, and digital transformation, coordinating complete submissions from firms and consortia.',
            visual: 'Global Tendering'
          },
          {
            title: '✍️ Technical Proposal Development and International Documentation Management',
            text: 'We prepare technical proposal narratives and work plans in line with international tender methodologies. Our delivery includes expert CV formatting, adaptation of institutional track records to global formats, financial template optimization, and complete documentation sets aligned with the contracting authority evaluation criteria.',
            visual: 'Proposal Development'
          }
        ]
      },
      {
        key: 'finance',
        label: '📈 International Credit, Financing, and Investment Advisory',
        intro:
          'Yada Global manages long-term credit and fund access processes for macro-scale investments in smart cities, infrastructure, regional development, and green transition. Through bank-grade feasibility studies, financial modeling, and green finance strategies aligned with multilateral institutions and development agencies, we prepare large investments for international funding.',
        iconCards: [
          { icon: '🏦', title: 'Long-Term Credit Structuring', text: 'Advisory across sovereign and non-sovereign lending pathways.' },
          { icon: '📋', title: 'Feasibility and Modeling', text: 'ROI, NPV, and IRR based financial decision models.' },
          { icon: '🍃', title: 'Green Finance', text: 'ESG-aligned funding access and sustainability roadmaps.' }
        ],
        blocks: [
          {
            title: '🏦 Macro Project Finance and International Long-Term Credit Management',
            text: 'We advise municipalities, organized industrial zones, and private investors on obtaining long-term financing from multilateral development banks and global funds for large infrastructure, smart city, and digital transformation investments. We design borrowing strategies compatible with strict lender requirements and conduct institutional risk analysis before funding rounds.',
            visual: 'Project Finance'
          },
          {
            title: '📋 Commercial and Technical Feasibility Reports and Financial Modeling',
            text: 'We produce commercial and technical feasibility studies aligned with acceptance standards of international financial institutions and regional development agencies. Through dynamic modeling and risk analytics that calculate ROI, NPV, and IRR, we document the financial sustainability of investment programs to global standards.',
            visual: 'Financial Modeling'
          },
          {
            title: '🍃 Green Finance, Sustainability Management, and Investment Guidance',
            text: 'For investments aligned with the European Green Deal, we design access strategies for green finance instruments, green bonds, and sustainability-focused funds. We coordinate climate and environmental compliance while guiding investors toward ESG-compatible funding criteria and long-term value positioning.',
            visual: 'Green Finance'
          }
        ]
      }
    ]
  }
}

const activeTab = ref('eu-projects')
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

    <nav class="digital-tech-tabs" aria-label="Uluslararası projeler sekmeleri">
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
