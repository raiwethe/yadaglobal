<script setup>
import { computed, ref } from 'vue'
import { locale } from '../i18n.js'

const pageContent = {
  tr: {
    kicker: 'Cozumlerimiz',
    title: 'ULUSLARARASI PROJELER VE STRATEJIK FINANSMAN',
    description:
      'Yada Global olarak; koklu teknik ve kentsel uzmanligimizi uluslararasi finansman mekanizmalariyla bulusturuyoruz. Horizon Europe, Erasmus+ KA2, LIFE, Interreg, EUREKA ve Digital Europe gibi kuresel hibe programlarindan; World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi cok tarafli kuruluslarin fonladigi makro olcekli yatirim, ihale ve kredi sureclerine kadar tum asamalarda stratejik cozum ortagiyiz. Birlesmis Milletler Surdurulebilir Kalkinma Amaclari ile uyumlu projelere hem lider danismanlik sagliyor hem de konsorsiyumlara teknoloji ortagi olarak dogrudan dahil oluyoruz.',
    tabs: [
      {
        key: 'eu-projects',
        label: '🇪🇺 Avrupa Birligi Projeleri ve Konsorsiyum Yonetimi',
        intro:
          'Yada Global; cok uluslu Ar-Ge, inovasyon, yesil donusum, mesleki mukemmeliyet ve akilli sehircilik odakli Avrupa Birligi projeleri sureclerinde stratejik danisman ve resmi konsorsiyum ortagi olarak yer almaktadir. Horizon Europe, DUT, CoVE, Erasmus+ KA2, LIFE ve Digital Europe kapsaminda basvuru stratejilerinden yurutuucu ortak rollerine ve nihai raporlama sureclerine kadar tum donguyu uctan uca yonetiyoruz.',
        iconCards: [
          { icon: '🤝', title: 'Konsorsiyum Yapilandirma', text: 'Sinir otesi ortaklik kurulumunda stratejik liderlik.' },
          { icon: '🎓', title: 'Erasmus+ KA2 Surecleri', text: 'Idari, lojistik ve mali koordinasyonda tam uyum.' },
          { icon: '💻', title: 'Dijital Is Paketleri', text: 'LMS, uygulama ve oyunlastirma ciktilarinda teknik sahiplik.' }
        ],
        blocks: [
          {
            title: '🤝 Uluslararasi Konsorsiyum Yonetimi ve AB Hibe Surecleri Danismanligi',
            text: 'Avrupa Komisyonu ve iliskili fon otoriteleri tarafindan yayimlanan cok uluslu cagrilari yakindan takip ederek kurumunuza en uygun fonlama stratejilerini kurguluyoruz. Consortium Building yetkinligimizle Horizon Europe, DUT, CoVE, LIFE ve Eurostars projeleri icin sinir otesi konsorsiyumlar olusturuyor; cagrı analizi, basvuru stratejisi, idari-mali danismanlik ve nihai raporlama asamalarini AB standartlarinda yonetiyoruz.',
            visual: 'AB Konsorsiyum'
          },
          {
            title: '🎓 Erasmus+ KA2 Stratejik Ortakliklar ve Proje Surec Yonetimi',
            text: 'Egitim, genclik, kentsel farkindalik ve kurumsal kapasite gelistirme alanlarinda uluslararasi isbirliklerini tetikleyen Erasmus+ KA2 stratejik ortaklik projelerinde kurumlarin dogru konsorsiyumlara dahil olmasi ve sureclerin koordinasyonu icin danismanlik sunuyoruz. Uluslararasi ortaklik toplantilari ve LTT faaliyetlerinin lojistik, idari ve teknik planlamasini Avrupa Komisyonu normlarina uyumlu sekilde yonetiyoruz.',
            visual: 'Erasmus+ KA2'
          },
          {
            title: '💻 Dijital Is Paketi Liderligi, Uygulama Gelistirme ve Oyunlastirma',
            text: 'Dahil oldugumuz AB projelerinde yalnizca surec danismanligi degil, resmi proje ortagi olarak dogrudan teknik cikti sorumlulugu ustleniyoruz. Yayginlastirma stratejilerine uygun web platformlari kuruyor; Erasmus+ ve CoVE projeleri icin cok dilli, SCORM uyumlu LMS altyapilari gelistiriyoruz. Senaryo tabanli oyunlastirma kurgulari ve projeye ozel mobil/web uygulama gelistirme faaliyetleriyle dijital is paketlerini uretiyoruz.',
            visual: 'Dijital Is Paketleri'
          }
        ]
      },
      {
        key: 'bid-management',
        label: '💼 Uluslararasi Fonlu Ihaleler ve Stratejik Teklif Yonetimi',
        intro:
          'Yada Global; cok tarafli kalkinma bankalari ve kuresel ajanslar tarafindan finanse edilen uluslararasi teknik yardim ve hizmet alim ihalelerinde uctan uca stratejik danismanlik sunmaktadir. World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI regulasyonlarina uygun teknik-idari sartname analizleri ile uluslararasi standartlarda bid management surecleri yonetiyoruz.',
        iconCards: [
          { icon: '📑', title: 'Sartname Analizi', text: 'Teknik-idari gereksinimlerde derin risk ve uyum okumalari.' },
          { icon: '🌍', title: 'Kuresel Ihale Uyumu', text: 'Cok tarafli kurulus prosedurlerine uygun ihale koordinasyonu.' },
          { icon: '✍️', title: 'Teklif Dokumantasyonu', text: 'Degerlendirme kriterlerine uygun teknik ve mali dosyalama.' }
        ],
        blocks: [
          {
            title: '📑 Teknik Sartname Analizleri ve Teklif Stratejisi',
            text: 'Uluslararasi kuruluslarin yayimladigi cok uluslu ihale dosyalarini, idari ve teknik sartnameleri derinlemesine analiz ediyoruz. Kurumunuzun kuresel pazardaki ihale sureclerine uyumunu guclendirmek icin risk analizleri, maliyet projeksiyonlari, yerel mevzuat uyumluluk denetimleri ve joint venture modellerini iceren teknik ve finansal teklif stratejileri gelistiriyoruz.',
            visual: 'Bid Strategy'
          },
          {
            title: '🌍 Cok Tarafli Kalkinma Bankalari ve Kuresel Ajanslarin Ihale Yonetimi',
            text: 'World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi kuruluslarin procurement prosedurlerine tam uyumlu surec yonetimi sagliyoruz. Akilli sehirler, CBS, surdurulebilir ulasim ve dijital donusum odakli ihaleleri izleyerek firmalarin ve konsorsiyumlarin uluslararasi alimlara eksiksiz dosyalar sunmasini koordine ediyoruz.',
            visual: 'Kuresel Ihale'
          },
          {
            title: '✍️ Teknik Teklif Gelistirme ve Uluslararasi Dokumantasyon Yonetimi',
            text: 'Uluslararasi ihale metodolojilerine uygun technical proposal ve is plani metinleri gelistiriyoruz. Teknik uzman ozgecmislerinin duzenlenmesi, kurumsal referanslarin uluslararasi formatlara uyarlanmasi, mali teklif sablonlarinin optimizasyonu ve evaluation criteria ile tam uyumlu dokumantasyon setlerinin hazirlanmasi sureclerini titizlikle yurutuuyoruz.',
            visual: 'Teklif Dokumani'
          }
        ]
      },
      {
        key: 'finance',
        label: '📈 Uluslararasi Kredi, Finansman ve Yatirim Danismanligi',
        intro:
          'Yada Global; makro olcekli akilli sehir, altyapi, bolgesel kalkinma ve yesil donusum yatirimlari icin uluslararasi finans kuruluslarindan uzun vadeli kredi ve fon saglama sureclerini yonetmektedir. Cok uluslu bankalarin ve kalkinma ajanslarinin normlarina uygun ticari ve teknik fizibilite raporlari, finansal modellemeler ve yesil finansman stratejileriyle buyuk olcekli yatirimlari uluslararasi fonlara hazir hale getiriyoruz.',
        iconCards: [
          { icon: '🏦', title: 'Uzun Vadeli Kredi', text: 'Sovereign/non-sovereign finansman kurgularinda surec yonetimi.' },
          { icon: '📋', title: 'Fizibilite ve Modelleme', text: 'ROI, NPV, IRR bazli finansal karar destek modelleri.' },
          { icon: '🍃', title: 'Yesil Finansman', text: 'ESG uyumlu yatirim ve fon erisim stratejileri.' }
        ],
        blocks: [
          {
            title: '🏦 Makro Proje Finansmani ve Uluslararasi Uzun Vadeli Kredi Yonetimi',
            text: 'Belediyelerin, OSBlerin ve ozel sektor yatirimcilarinin buyuk olcekli altyapi, akilli kent ve dijital donusum projeleri icin cok tarafli kalkinma bankalarindan uzun vadeli kredi saglama sureclerine danismanlik yapiyoruz. Finansman kuruluslarinin katı basvuru prosedurlerine uyumlu borclanma stratejileri kurguluyor ve fonlama oncesi kurumsal risk analizleri gerceklestiriyoruz.',
            visual: 'Proje Finansmani'
          },
          {
            title: '📋 Ticari, Teknik Fizibilite Raporlari ve Finansal Modelleme',
            text: 'Uluslararasi finans kuruluslarinin ve bolgesel kalkinma ajanslarinin kabul standartlarina uyumlu ticari ve teknik fizibilite raporlari hazirliyoruz. Yatirimlarin geri donus surelerini, net bugunku degerlerini ve ic verimlilik oranlarini hesaplayan dinamik finansal modelleme ve risk analizi tablolarıyla projelerin finansal surdurulebilirligini belgeliyoruz.',
            visual: 'Finansal Model'
          },
          {
            title: '🍃 Yesil Finansman, Surdurulebilirlik Yonetimi ve Yatirim Rehberligi',
            text: 'Avrupa Yesil Mutabakati normlariyla eslesen yatirimlar icin green finance, green bonds ve surdurulebilirlik odakli fon mekanizmalarina erisim stratejileri gelistiriyoruz. Yatirimcilarin iklim ve cevre regulasyonlarina uyumunu koordine ederek ESG kriterlerine uygun yatirim rehberligi sunuyoruz.',
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
