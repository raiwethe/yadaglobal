<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { locale, translate, setLocale } from './i18n.js'

const router = useRouter()
const logoSrc = '/images/yadalogo.webp'
const searchOpen = ref(false)
const searchQuery = ref('')
const langOpen = ref(false)
const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)
const headerScrolled = ref(false)
const langDropdownRef = ref(null)
const searchDropdownRef = ref(null)

const currentLang = computed(() => locale.value.toUpperCase())

const pageSeo = computed(() => {
  const isEnglish = locale.value === 'en'
  const path = router.currentRoute.value.path
  const pages = isEnglish
    ? {
        '/': ['Yada Global | Digital Technologies, Smart Cities and International Projects', 'Yada Global develops digital technologies, smart city solutions, and international project advisory services.'],
        '/services': ['Services | Yada Global', 'Explore Yada Global advisory, technology, and project development services.'],
        '/contact': ['Contact | Yada Global', 'Contact Yada Global for projects, partnerships, and institutional solution advisory.'],
        '/projeler-ve-referanslar': ['Projects and References | Yada Global', 'Explore Yada Global projects, references, and international partnerships.']
      }
    : {
        '/': ['Yada Global | Dijital Teknolojiler, Akıllı Kentler ve Uluslararası Projeler', 'Yada Global dijital teknolojiler, akıllı kent çözümleri ve uluslararası proje danışmanlığı sunar.'],
        '/services': ['Hizmetlerimiz | Yada Global', 'Yada Global danışmanlık, teknoloji ve proje geliştirme hizmetlerini keşfedin.'],
        '/contact': ['İletişim | Yada Global', 'Projeler, iş birlikleri ve kurumsal çözümler için Yada Global ile iletişime geçin.'],
        '/projeler-ve-referanslar': ['Projeler ve Referanslar | Yada Global', 'Yada Global projelerini, referanslarını ve uluslararası iş birliklerini inceleyin.']
      }

  return pages[path] ?? (isEnglish ? pages['/'] : pages['/'])
})

// Normalize Turkish casing and accents so i, ı, İ, and I match consistently.
const normalize = (str) =>
  String(str ?? '')
    .replace(/[İIı]/g, 'i')
    .toLocaleLowerCase('en-US')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const projectSearchItems = {
  tr: [
    { title: 'SHORE', subtitle: 'Çevre Bilinci ve Eylemi için Okyanus Okuryazarlığı', to: '/projeler-ve-referanslar/shore', keywords: ['okyanus', 'eğitim', 'iş birliği'] },
    { title: 'Cizre Tarih, Kültür, İnanç Turizm Rotalarının Oluşturulması', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/cizre', keywords: ['cizre', 'turizm', 'rota'] },
    { title: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/siran1', keywords: ['şiran', 'turizm', 'master plan'] },
    { title: 'Şiran Kuzey-Güney Koridoru Yaratıcı Turizm Konsept Master Planı Modelleme ve Tahmini Maliyet', subtitle: 'Modelleme ve Tahmini Maliyet', to: '/projeler-ve-referanslar/siran2', keywords: ['şiran', 'turizm', 'master plan', 'modelleme', 'tahmini maliyet'] },
    { title: 'Artabel Gölleri Tabiat Parkı Yaratıcı Turizm Konsept Master Planı', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/artabel-golleri', keywords: ['artabel', 'doğa', 'turizm'] },
    { title: 'Sürmene Yeniçam Tersane Alanı Gelişim ve İyileştirme Çalışması', subtitle: 'OSB Geliştirme', to: '/projeler-ve-referanslar/surmene', keywords: ['sürmene', 'tersane', 'osb', 'üretim'] },
    { title: 'Kapıdağ Yarımadası Tematik Planlama, Bağlamsal Tasarım ve Vizyon Oluşturma Projesi', subtitle: 'Tematik Planlama', to: '/projeler-ve-referanslar/kapidag', keywords: ['kapıdağ', 'tematik planlama', 'vizyon'] },
    { title: 'Kapıdağ Yarımadası Yaratıcı Turizm Konsept Planları', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/kapidag2', keywords: ['kapıdağ', 'yarımada', 'turizm', 'konsept plan', 'master plan', 'erdek'] },
    { title: 'Gelibolu Merkezi Yaratıcı Turizm Konsept Planları', subtitle: 'Turizm Master Planı', to: '/projeler-ve-referanslar/gelibolu', keywords: ['gelibolu', 'turizm', 'konsept'] },
    { title: 'Biga Ramazanlar GES Planlama', subtitle: 'Mekânsal Planlama ve Teknik Danışmanlık', to: '/projeler-ve-referanslar/biga', keywords: ['biga', 'ges', 'güneş enerjisi', 'sürdürülebilirlik', 'ramazanlar'] },
    { title: 'Eskişehir İli Sivrihisar İlçesi Kınık GES İmar Planı', subtitle: 'Mekânsal Planlama ve Teknik Danışmanlık', to: '/projeler-ve-referanslar/kinik', content: 'GES İmar Planı, Analitik Etüdler ve Araştırma Raporu. Sivrihisar Kınık güneş enerjisi santrali yatırımı için analitik araştırma, kurum görüşleri, arazi çalışmaları, jeolojik-jeoteknik etütler ve mevcut planlama verileri. Ulaşım, arazi yapısı, bitki örtüsü, iklim koşulları, güneşlenme potansiyeli, teknik altyapı, otopark ve ulaşım planlaması. 3.900 kW GES, 86.934,23 m² toplam planlama alanı ve 78.664,58 m² GES alanı. 1/5.000 ve 1/1.000 ölçekli planlama.', keywords: ['kinik', 'kınık', 'sivrihisar', 'eskisehir', 'eskişehir', 'ges', 'güneş enerjisi', 'imar planı', 'yenilenebilir enerji', '3900 kw', 'kurum görüşü', 'jeolojik', 'jeoteknik', 'güneşlenme', 'otopark'] },
    { title: 'Eskişehir İli Sivrihisar İlçesi Aşağıkepen GES İmar Planı', subtitle: 'Mekânsal Planlama ve Teknik Danışmanlık', to: '/projeler-ve-referanslar/asagikepen', content: 'GES İmar Planı, Analitik Etüdler ve Araştırma Raporu. Aşağıkepen Mahallesi için güneş enerjisi santrali planlama, araştırma, kurum görüşleri, arazi ve mevcut durum analizleri. Ulaşım, arazi yapısı, bitki örtüsü, iklim, güneşlenme, jeolojik ve hidrojeolojik değerlendirme, teknik altyapı ve mekânsal planlama. 846 kW GES, 1,9 hektar planlama alanı ve 2.188 güneş paneli. 1/5.000 ve 1/1.000 ölçekli planlama.', keywords: ['aşağıkepen', 'asagikepen', 'sivrihisar', 'eskisehir', 'eskişehir', 'ges', 'güneş enerjisi', 'imar planı', 'yenilenebilir enerji', '846 kw', 'güneş paneli', 'hidrojeolojik', 'jeolojik', 'analitik etüd', 'teknik altyapı'] },
    { title: 'Eskişehir İli Sivrihisar İlçesi Koltan Mahallesi GES İmar Planı', subtitle: 'Mekânsal Planlama ve Teknik Danışmanlık', to: '/projeler-ve-referanslar/koltan', content: 'GES İmar Planı ve Analitik Etüd Çalışması. Koltan Mahallesi 126 ada 2 parsel üzerinde güneş enerjisi santrali için analitik etüd, mevcut durum değerlendirmesi, mikrobölgeleme, jeolojik-jeoteknik değerlendirme, topoğrafya, güneşlenme, ulaşım ve altyapı incelemesi. Kurum ve kuruluş görüşleri, otoyol güzergâhına yakınlık, parlama ve ışıma etkisi değerlendirmeleri. 592,57 kW GES ve 3,01 hektar planlama alanı. 1/5.000 ve 1/1.000 ölçekli mekânsal planlama.', keywords: ['koltan', 'sivrihisar', 'eskisehir', 'eskişehir', 'ges', 'güneş enerjisi', 'imar planı', 'yenilenebilir enerji', '592,57 kw', '126 ada 2', 'parlama', 'ışıma', 'mikrobölgeleme', 'topoğrafya', 'jeoteknik', 'otoyol'] },
    { title: 'Storyland', subtitle: 'Yetişkinler İçin Yeni E-Sanatsal İngilizce Öğrenme Yaklaşımı', to: '/projeler-ve-referanslar/storyland', keywords: ['storyland', 'eğitim', 'ingilizce', 'sanatsal', 'erasmus'] },
    { title: 'E-MAKERS', subtitle: 'Yaratıcı Dil Öğrenimi için Dijital Hikaye Anlatımı', to: '/projeler-ve-referanslar/e-makers', keywords: ['e-makers', 'emakers', 'dijital hikaye', 'dil öğrenimi', 'erasmus'] },
    { title: 'S-FEDs', subtitle: 'Daha Güçlü Aile Desteğiyle Kapsayıcı Sporlar', to: '/projeler-ve-referanslar/s-feds', keywords: ['s-feds', 'sfeds', 'spor', 'aile', 'kapsayıcı', 'erasmus'] },
    { title: 'Tarım Kooperatiflerinde Kadınların Güçlendirilmesi', subtitle: 'Sürdürülebilir Tarım Yoluyla Kadınların Güçlendirilmesi', to: '/projeler-ve-referanslar/women', keywords: ['kadın', 'tarım', 'kooperatif', 'güçlendirme', 'erasmus'] },
    { title: 'DIGITRAINER 4.0', subtitle: 'Eğitim 4.0 için Dijital Beceriler', to: '/projeler-ve-referanslar/digitrainer', keywords: ['digitrainer', 'eğitim', 'dijital beceri', 'erasmus'] },
    { title: 'SU', subtitle: 'Sürdürülebilir Bir Gelecek İçin Su Bilinci', to: '/projeler-ve-referanslar/water', keywords: ['su', 'water', 'sürdürülebilirlik', 'su bilinci', 'erasmus'] },
    { title: 'Dijital Portföy', subtitle: 'Dijital Portföy Yönetim Hizmeti', to: '/projeler-ve-referanslar/digital', keywords: ['dijital', 'portföy', 'veri'] },
    { title: 'Dijital İkiz', subtitle: 'Dijital İkiz Yönetim Hizmeti', to: '/projeler-ve-referanslar/digitalikiz', keywords: ['dijital ikiz', 'veri', 'modelleme'] }
  ],
  en: [
    { title: 'SHORE', subtitle: 'Ocean Literacy for Environmental Awareness and Action', to: '/projeler-ve-referanslar/shore', keywords: ['ocean', 'education', 'collaboration'] },
    { title: 'Creating Historical, Cultural, and Faith Tourism Routes in Cizre', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/cizre', keywords: ['cizre', 'tourism', 'routes'] },
    { title: 'Şiran North-South Corridor Creative Tourism Concept Master Plan', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/siran1', keywords: ['siran', 'şiran', 'tourism', 'master plan'] },
    { title: 'Şiran North-South Corridor Creative Tourism Concept Master Plan Modeling and Estimated Cost', subtitle: 'Modeling and Estimated Cost', to: '/projeler-ve-referanslar/siran2', keywords: ['siran', 'şiran', 'tourism', 'master plan', 'modeling', 'estimated cost'] },
    { title: 'Artabel Lakes Nature Park Creative Tourism Concept Master Plan', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/artabel-golleri', keywords: ['artabel', 'nature', 'tourism'] },
    { title: 'Sürmene Yeniçam Shipyard Area Development and Improvement Study', subtitle: 'OIZ Development', to: '/projeler-ve-referanslar/surmene', keywords: ['sürmene', 'shipyard', 'oiz', 'production'] },
    { title: 'Kapıdağ Peninsula Thematic Planning, Contextual Design and Vision Creation Project', subtitle: 'Thematic Planning', to: '/projeler-ve-referanslar/kapidag', keywords: ['kapidag', 'thematic planning', 'vision'] },
    { title: 'Kapıdağ Peninsula Creative Tourism Concept Plans', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/kapidag2', keywords: ['kapidag', 'kapidag peninsula', 'tourism', 'creative tourism', 'concept plan', 'master plan', 'erdek'] },
    { title: 'Gelibolu Center Creative Tourism Concept Plans', subtitle: 'Tourism Master Plan', to: '/projeler-ve-referanslar/gelibolu', keywords: ['gelibolu', 'tourism', 'concept'] },
    { title: 'Biga Ramazanlar SPP Planning', subtitle: 'Spatial Planning and Technical Consulting', to: '/projeler-ve-referanslar/biga', keywords: ['biga', 'solar power', 'spp', 'sustainability', 'ramazanlar'] },
    { title: 'Kınık Solar Power Plant Zoning Plan, Sivrihisar District, Eskişehir Province', subtitle: 'Spatial Planning and Technical Consulting', to: '/projeler-ve-referanslar/kinik', content: 'SPP Zoning Plan, analytical studies, and research report. Solar power plant investment in Kınık, Sivrihisar, including analytical research, institutional consultations, fieldwork, geological-geotechnical surveys, and existing planning data. Access, land structure, vegetation, climate, solar exposure, technical infrastructure, parking, and transport planning. 3,900 kW SPP, 86,934.23 m² total planning area, and 78,664.58 m² SPP area. Planning at 1/5,000 and 1/1,000 scales.', keywords: ['kinik', 'kınık', 'sivrihisar', 'eskisehir', 'eskişehir', 'solar power', 'solar plant', 'spp', 'zoning plan', 'renewable energy', '3900 kw', 'institutional consultations', 'geological', 'geotechnical', 'solar exposure', 'parking'] },
    { title: 'Aşağıkepen Solar Power Plant Zoning Plan, Sivrihisar District, Eskişehir Province', subtitle: 'Spatial Planning and Technical Consulting', to: '/projeler-ve-referanslar/asagikepen', content: 'SPP Zoning Plan, analytical studies, and research report. Solar power plant planning and research in Aşağıkepen Neighbourhood, including institutional consultations, land and existing-condition analysis. Access, land structure, vegetation, climate, solar exposure, geological and hydrogeological assessment, technical infrastructure, and spatial planning. 846 kW SPP, 1.9 hectare planning area, and 2,188 solar panels. Planning at 1/5,000 and 1/1,000 scales.', keywords: ['aşağıkepen', 'asagikepen', 'sivrihisar', 'eskisehir', 'eskişehir', 'solar power', 'solar plant', 'spp', 'zoning plan', 'renewable energy', '846 kw', 'solar panels', 'hydrogeological', 'geological', 'analytical study', 'technical infrastructure'] },
    { title: 'Koltan Neighbourhood Solar Power Plant Zoning Plan, Sivrihisar District, Eskişehir Province', subtitle: 'Spatial Planning and Technical Consulting', to: '/projeler-ve-referanslar/koltan', content: 'SPP Zoning Plan and analytical study. Solar power plant planning on block 126, parcel 2 in Koltan Neighbourhood, including analytical study, existing-condition assessment, microzonation, geological-geotechnical assessment, topography, solar exposure, transport, and infrastructure review. Institutional opinions, motorway proximity, glare, and light-reflection assessment. 592.57 kW SPP and 3.01 hectare planning area. Spatial planning at 1/5,000 and 1/1,000 scales.', keywords: ['koltan', 'sivrihisar', 'eskisehir', 'eskişehir', 'solar power', 'solar plant', 'spp', 'zoning plan', 'renewable energy', '592.57 kw', 'block 126 parcel 2', 'glare', 'light reflection', 'microzonation', 'topography', 'geotechnical', 'motorway'] },
    { title: 'Storyland', subtitle: 'New e-Artistic English Learning Approach for Adults', to: '/projeler-ve-referanslar/storyland', keywords: ['storyland', 'education', 'english', 'artistic', 'erasmus'] },
    { title: 'E-MAKERS', subtitle: 'Digital Storytelling for Creative Language Learning', to: '/projeler-ve-referanslar/e-makers', keywords: ['e-makers', 'emakers', 'digital storytelling', 'language learning', 'erasmus'] },
    { title: 'S-FEDs', subtitle: 'Inclusive Sports Through Stronger Family Support', to: '/projeler-ve-referanslar/s-feds', keywords: ['s-feds', 'sfeds', 'sports', 'family', 'inclusive', 'erasmus'] },
    { title: 'Women Empowerment in Agricultural Cooperatives', subtitle: 'Women Empowerment Through Sustainable Agriculture', to: '/projeler-ve-referanslar/women', keywords: ['women', 'agriculture', 'cooperative', 'empowerment', 'erasmus'] },
    { title: 'DIGITRAINER 4.0', subtitle: 'Digital Skills for Education 4.0', to: '/projeler-ve-referanslar/digitrainer', keywords: ['digitrainer', 'education', 'digital skills', 'erasmus'] },
    { title: 'WATER', subtitle: 'Water Literacy for Sustainable Future', to: '/projeler-ve-referanslar/water', keywords: ['water', 'sustainable', 'water literacy', 'erasmus'] },
    { title: 'Digital Portfolio', subtitle: 'Digital Portfolio Management Service', to: '/projeler-ve-referanslar/digital', keywords: ['digital', 'portfolio', 'data'] },
    { title: 'Digital Twin', subtitle: 'Digital Twin Management Service', to: '/projeler-ve-referanslar/digitalikiz', keywords: ['digital twin', 'data', 'modeling'] }
  ]
}

const serviceSearchItems = {
  tr: [
    {
      title: 'Dijital Teknolojiler ve Yazılım Çözümleri',
      subtitle: 'Ana hizmet sayfası',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      content: 'Yada Global coğrafi veri zekâsı, yapay zekâ mühendisliği, yazılım geliştirme ve siber güvenlik denetimini tek bir stratejik çatı altında birleştirerek kurumlara ölçeklenebilir ve güvenilir dijital dönüşüm altyapıları sunuyoruz. Veriyi anlamlandıran, süreçleri dijitalleştiren ve kurumların karar alma kapasitesini güçlendiren teknoloji çözümleri geliştiriyor; kamu, yerel yönetimler ve özel sektör için ihtiyaçlara özel, sürdürülebilir ve güvenli dijital sistemler tasarlıyoruz. Modern teknolojileri kurumsal ihtiyaçlarla buluşturarak, bugünün operasyonlarını iyileştiren ve geleceğin dijital altyapılarına uyum sağlayan çözümler üretiyoruz.',
      keywords: ['dijital', 'yazılım', 'teknoloji']
    },
    {
      title: 'Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği',
      subtitle: 'Dijital Teknolojiler › CBS / GIS',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'gis',
      content: 'Yada Global; Coğrafi Bilgi Sistemleri (CBS) ve Uzaktan Algılama teknolojilerinde uçtan uca çözümler sunan lider bir teknoloji firmasıdır. Büyük mekansal verileri ileri düzey analitik yöntemlerle işleyerek; kamu politikalarını yönlendiren akıllı kentsel modeller ve özel sektör yatırımlarına yön veren lokasyon analitiği çözümleri üretiyoruz. Mekansal Karar Desteği Veriyi karar mekanizmalarına taşıyan CBS analitik akışları. Uzaktan Algılama Uydu ve radar verisinden zaman serisi tabanlı içgörüler. Lokasyon Zekası Yatırım, operasyon ve büyüme kararları için konumsal modelleme. Mekansal Veri Analitiği, Modelleme ve CBS Çözümleri Kamu kurumları ve yerel yönetimlerin ham mekansal verilerini gelişmiş algoritmalara dayalı CBS analizi yöntemleriyle işliyoruz. Kentsel büyüme projeksiyonları, afet risk senaryoları, lojistik ağ optimizasyonları ve mekansal veri tabanı tasarımları ile geleceğe yönelik sürdürülebilir tahmin modelleri üretiyoruz. Uzaktan Algılama ve Uydu Görüntüsü Analizi Yüksek çözünürlüklü uydu ve radar görüntüleri üzerinden uzaktan algılama teknolojileriyle zaman serisi analizleri gerçekleştiriyoruz. Arazi kullanımı değişiklikleri, çevre kirliliği izleme, kentsel ısı adası haritalama ile endüstriyel tarımda bitki sağlığı takibi ve rekolte tahmin modelleri geliştiriyoruz. Özel Sektör İçin Lokasyon Analitiği ve Ticari İş Zekası Perakende, lojistik, enerji ve finans sektörlerindeki küresel ve yerel markalar için konum tabanlı değer önerileri kurguluyoruz. Nüfus yoğunluğu, demografik yapı, erişilebilirlik ve rakip analizi verilerini harita üzerinde çakıştırarak yer seçimi süreçlerini bilimsel olarak yönetiyoruz. Yatırım Arazi Seçimi ve Mekansal Risk Yönetimi GES/RES ve büyük ölçekli endüstriyel tesis yatırımları öncesinde CBS tabanlı fizibilite raporları hazırlıyoruz. Arazinin eğim, bakı, trafo hatlarına yakınlık ve yasal sınır analizlerini yaparken; taşkın, sel ve deprem risk analitiği sunuyoruz. Web-CBS Tabanlı Yönetim Portalları ve Sistem Entegrasyonu Kamu ve özel sektör kuruluşlarının coğrafi veri tabanlarını merkezi yapıda topluyoruz. Tarayıcı tabanlı harita yönetimi, sorgulama ve dinamik görselleştirme için ölçeklenebilir Web-CBS portalları ve bulut altyapıları kurguluyoruz. Büyük Mekansal Veri İşleme ve IoT Haritalama Akıllı şehir donanımları, saha sensörleri ve mobil uygulamalardan akan büyük mekansal veri akışlarını tek bir merkeze entegre ediyoruz. Gerçek zamanlı lokasyon verilerini filtreleyerek dinamik coğrafi karar destek sistemleri inşa ediyoruz.',
      keywords: ['CBS', 'GIS', 'harita', 'uzaktan algılama', 'uydu', 'lokasyon', 'mekansal', 'coğrafi', 'radar', 'analitik', 'mekânsal', 'Mekansal Zeka', 'Risk Haritalama', 'Web CBS', 'Büyük Mekansal Veri']
    },
    {
      title: 'Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği',
      subtitle: 'Dijital Teknolojiler › Yapay Zeka',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'ai',
      content: 'Yada Global; kamu kurumları ve özel sektör şirketleri için ölçeklenebilir, yüksek performanslı ve yapay zeka tabanlı yazılım çözümleri sunmaktadır. Büyük veri yığınlarını ve mekansal zekayı anlamlandırmak üzere; gelişmiş algoritmalara sahip AI yazılım geliştirme, bulut tabanlı platformlar ve akıllı karar destek sistemleri inşa ediyoruz. AI Karar Motorları Tahmine dayalı analitik ve akıllı otomasyon altyapıları. Bulut ve SaaS Ölçeklenebilir, güvenli ve entegre kurumsal platformlar. Akıllı Uygulamalar Mobil ve web kanallarında gerçek zamanlı dijital deneyimler. Yapay Zeka Tabanlı Karar Destek Sistemleri ve Veri Görselleştirme Kamu yönetimi, yerel yönetimler ve kurumsal liderler için tahmine dayalı analitik sunan akıllı karar destek sistemleri geliştiriyoruz. Operasyonel verileri makine öğrenmesi algoritmalarıyla işleyerek, riskleri azaltan ve gelecek senaryolarını öngören paneller tasarlıyoruz. AI Entegreli Özel Kurumsal Yazılım Çözümleri ve SaaS Mimarisi Şirketlerin ve kamu organizasyonlarının geleneksel iş akışlarını akıllı algoritmalarla otomatize eden kurumsal yazılım çözümleri üretiyoruz. LLM ve derin öğrenme entegrasyonlarına sahip bulut tabanlı SaaS mimarileriyle dijital dönüşüm süreçlerini hızlandırıyoruz. Akıllı Kent Çözümleri ve Mobil Uygulama Geliştirme Yerel yönetimler, belediyeler ve B2B şirketler için saha yönetimini, vatandaş iletişimini ve veri toplama sürecini kolaylaştıran mobil uygulamalar geliştiriyoruz. Yapay zeka destekli akıllı şehir asistanları ve lokasyon bazlı servisler ile kullanıcı deneyimini güçlendiriyoruz. IoT Donanım Entegrasyonları ve Güvenli API Mimarisi Farklı yazılım platformları, eski veri tabanları ve IoT donanımlarının gecikmesiz haberleşmesini sağlayan güvenli API köprüleri inşa ediyoruz. Sensör verilerini yapay zeka motorlarına taşıyan veri boru hatlarını kuruyor, veri bütünlüğünü güçlü şifreleme protokolleriyle koruyoruz.',
      keywords: ['yapay zeka', 'AI', 'yazılım', 'SaaS', 'bulut', 'mobil', 'uygulama', 'LLM', 'IoT', 'API', 'makine öğrenmesi', 'AI Panelleri', 'Bulut Yerel', 'Mobil Akıllı Kent', 'Güvenli API']
    },
    {
      title: 'Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması',
      subtitle: 'Dijital Teknolojiler › Siber Güvenlik',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'security',
      content: 'Yada Global; kamu kurumları, yerel yönetimler ve kurumsal şirketler için bağımsız siber güvenlik denetimi ve risk analizi hizmetleri sunmaktadır. Akıllı kent altyapılarında, harita veri tabanlarında ve dijital sistemlerdeki açıkları tespit etmek üzere gelişmiş sızma testleri ve uyum raporlamaları gerçekleştiriyoruz. Kritik Altyapı Güvenliği SCADA ve IoT ağlarında bütüncül zafiyet taraması. Pentest ve Red Team Ağ, uygulama ve API katmanlarında kontrollü saldırı senaryoları. Regülasyon Uyum NIS 2, ISO 27001 ve fon uyumluluk raporlama süreçleri. Akıllı Şehir ve Kritik Altyapı Siber Güvenlik Zafiyet Analizi Şehirlerin su, enerji, atık su ve aydınlatma şebekelerini yöneten endüstriyel kontrol sistemlerindeki güvenlik açıklarını tespit ediyoruz. IoT sensör ağları ve sinyalizasyon donanımlarının haberleşme protokollerini denetleyerek gerekli güvenlik önlemlerini raporluyoruz. Mekansal Veri ve Dijital İkiz Sızma Testleri Kadastro, mülkiyet ve altyapı harita veri tabanlarının siber dayanıklılığını denetliyoruz. Web-GIS portalları ve dijital ikiz platformlarının API, entegrasyon ve yetkilendirme açıklarını tespit ederek teknik bulguları raporluyoruz. Kurumsal Pentest ve Teknik Risk Raporlaması Kurumların iç ve dış ağ altyapılarının, bulut sunucularının ve veri merkezlerinin siber tehditlere karşı direncini ölçüyoruz. Kaynak kod analizi ve oltalama simülasyonlarıyla insan kaynaklı riskleri değerlendirerek öncelikli aksiyon planları sunuyoruz. Uluslararası Siber Regülasyon ve Fon Uyum Danışmanlığı AB siber güvenlik direktifleri ve bilgi güvenliği yönetim standartlarına yönelik gap analizleri ve uyum raporlama süreçlerini yönetiyoruz. Uluslararası finansmanlı dijital dönüşüm projelerinde zorunlu teknik siber risk raporlarını hazırlıyoruz.',
      keywords: ['siber güvenlik', 'pentest', 'sızma testi', 'güvenlik', 'ISO 27001', 'NIS2', 'zafiyet', 'risk', 'red team', 'Kritik Altyapı', 'Dijital İkiz Güvenliği', 'Pentest Raporlama', 'Uyum Stratejisi']
    },
    {
      title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
      subtitle: 'Ana hizmet sayfası',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      content: 'Yada Global olarak; makro ölçekli kentsel stratejilerden mikro ölçekli kentsel tasarıma kadar modern şehirciliğin her aşamasında veri odaklı çözümler sunuyoruz. Yasal mevzuatlara tam uyumlu imar planlama, koruma amaçlı imar planları ve bölge planlarındaki köklü uzmanlığımızı; Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) ve Avrupa Yeşil Mutabakatı normlarıyla entegre ediyoruz. Kentlerin geleceğini iklim, çevre ve sıfır karbon odaklı eylemlerle tasarlarken; 3D Dijital İkiz teknolojileri, akıllı kent ağları ve Sürdürülebilir Kentsel Hareketlilik Planı (SUMP) altyapılarıyla dirençli, yaşanabilir ve akıllı kentsel ekosistemler inşa ediyoruz.',
      keywords: ['akıllı kent', 'şehircilik', 'kentsel']
    },
    {
      title: 'Şehir Planlama ve Bölgesel Master Planlar',
      subtitle: 'Akıllı Kentler › Şehir Planlama',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'planning',
      content: 'Yada Global; yürürlükteki yasal mevzuatlara, koruma yüksek kurulları kararlarına ve Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) normlarına tam uyumlu üst ve alt ölçekli şehir planlama süreçlerini yönetmektedir. Makro ölçekli bölge planları ve stratejik mekansal stratejilerden, yerel ekonomileri canlandıran tematik master plan ve turizm master planı çalışmalarına kadar kentsel gelişim süreçlerini veri odaklı analitik araştırma çerçeveleriyle uçtan uca yürütüyoruz. Planlama Stratejisi Makro ve mikro ölçekte bütünleşik planlama çerçevesi. Mevzuat Uyum Nazım ve uygulama planlarında yönetmelik odaklı yaklaşım. Master Plan Yetkinliği Bölgesel kalkınmayı hızlandıran tematik master planlar. Nazım, Uygulama, OSB ve Koruma Amaçlı İmar Planları Yürürlükteki mevzuat, yönetmelik ve şehircilik ilkelerine tam uyumlu Nazım İmar Planları, Koruma Amaçlı İmar Planları, Bölge Planları ve Organize Sanayi Bölgesi (OSB) İmar Planları hazırlıyoruz. Sit alanları ile tarihi, kültürel ve doğal miras alanlarının sürdürülebilirlik ilkeleri doğrultusunda geleceğe taşınması ve yasal güvence altına alınması için teknik altyapısı güçlü planlama süreçlerini titizlikle yürütüyoruz. Stratejik Mekansal Planlama ve Bölge Planları Kentlerin, havzaların ve metropoliten alanların gelecekteki büyüme projeksiyonlarını, lojistik akslarını, sosyo-ekonomik dinamiklerini ve arazi kullanım kararlarını makro ölçekte kurguluyoruz. Bölgesel kalkınma politikalarına altlık oluşturan üst ölçekli bölge planları geliştirerek doğal afetlere, iklim krizine ve kontrolsüz nüfus baskılarına karşı dirençli kent modelleri tasarlıyoruz. Tematik Bölgesel Master Planlar ve Turizm Master Planı Bölgelerin, havzaların ve kentlerin ekonomik, sosyal ve kültürel kalkınmasını tetikleyecek tematik master plan çalışmaları yürütüyoruz. Ulusal ve uluslararası kalkınma ajansları ile bakanlık normlarına tam uyumlu; sürdürülebilir turizm master planı, konsept turizm planları ve bölgesel layout tasarımları ile alanların potansiyelini maksimize eden bütünsel fizibilite raporları hazırlıyoruz.',
      keywords: ['imar', 'master plan', 'bölge planı', 'kentsel tasarım', 'planlama', 'üst ölçek', 'arazi', 'İmar Planlama', 'Bölgesel Strateji', 'Master Plan']
    },
    {
      title: "Akıllı Şehirler, OSB'ler ve Endüstriyel Dijital İkiz Çözümleri",
      subtitle: 'Akıllı Kentler › Dijital İkiz / OSB',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'digital-twin',
      content: 'Yada Global; veri odaklı modern kent yönetimi ve Organize Sanayi Bölgeleri (OSB) için ileri düzey akıllı çözümler ve dijital ikiz platformları kurgulamaktadır. Nesnelerin İnterneti (IoT) ağlarını, endüstriyel üretim simülasyonlarını, yeşil altyapı takibini ve Sürdürülebilir Kentsel Hareketlilik Planı (SUMP) standartlarını Coğrafi Bilgi Sistemleri (CBS) altyapımızla entegre ederek yaşayan şehirlerin ve fabrikaların dijital kopyalarını inşa ediyoruz. IoT Entegrasyonu Kent ve OSB altyapılarında sensör verisini tek merkezde toplama. Dijital İkiz 3D şehir ve tesis simülasyonlarıyla öngörülebilir operasyon. SUMP ve Lojistik Akıllı mobilite ve lojistikte karbon odaklı optimizasyon. Nesnelerin İnterneti (IoT) Entegrasyonu ve Akıllı OSB Yönetim Ağları Hem yerel yönetimler hem de Organize Sanayi Bölgeleri için akıllı sayaçlar, hava ve su kalitesi istasyonları, endüstriyel atık takip modülleri ve enerji şebekelerinden gelen IoT verilerini merkezi platformda topluyoruz. Anlık akan sensör verilerini anlamlandırarak OSB yönetimlerinin ve tesislerin su, atık, enerji ve bütçe kaynaklarını maksimum verimlilikle yönetmesini sağlıyoruz. 3D Kent Modelleme, Fabrika Yerleşkeleri ve Endüstriyel Dijital İkiz Platformları Fiziksel kentlerin, büyük gayrimenkul projelerinin ve özel sektöre ait sanayi tesislerinin coğrafi, mimari ve altyapısal verilerini kullanarak yaşayan dijital ikiz modelleri üretiyoruz. Gerçek zamanlı simülasyonlarla OSB genişleme alanlarını, lojistik ve üretim akışlarını, afet risk senaryolarını ve kentsel dönüşüm etkilerini yatırım öncesinde 3D modeller üzerinde test ediyoruz. Akıllı Ulaşım, Endüstriyel Lojistik ve SUMP Kent içi erişilebilirliği artırırken, sanayi bölgelerinin ve holdinglerin karmaşık lojistik ağlarını optimize eden ve karbon emisyonlarını düşürmeyi hedefleyen uluslararası standartlarda SUMP çözümleri sunuyoruz. Trafik yoğunluk haritaları, sinyalizasyon optimizasyonları, personel servis rotaları ve ağır vasıta hat planlamalarıyla akıllı ulaşım altyapılarını veri odaklı yöntemlerle kurguluyoruz.',
      keywords: ['OSB', 'dijital ikiz', 'endüstriyel', 'organize sanayi', 'SCADA', 'IoT', 'sensör', 'twin', 'IoT Ağları', '3D Simülasyon', 'Akıllı Mobilite']
    },
    {
      title: 'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri',
      subtitle: 'Akıllı Kentler › Sürdürülebilirlik',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'sustainability',
      content: 'Yada Global; Avrupa Yeşil Mutabakatı normlarına ve küresel çevre regülasyonlarına tam uyumlu sürdürülebilir şehircilik ve yeşil dönüşüm projeleri üretmektedir. Karbon nötr kent eylemlerinden yeşil altyapı tasarımlarına kadar, hem yerel yönetimlerin hem de Organize Sanayi Bölgeleri ve özel sektör kuruluşlarının çevre odaklı mevzuatlara tam uyum sağlaması için stratejik çevre planları hazırlıyoruz. Sıfır Karbon Mobilite Toplu taşıma ve lojistikte emisyon azaltım odaklı dönüşüm. SECAP Planlama İklim uyumu ve enerji verimliliği için eylem planları. Yeşil Dönüşüm Karbon ayak izi raporlama ve döngüsel ekonomi stratejileri. Sıfır Karbon Ulaşım Hizmetleri ve Yeşil Mobilite Dönüşümü İklim kriziyle mücadele kapsamında, kent içi ve sanayi bölgelerindeki toplu taşıma ile lojistik altyapılarının çevre dostu ve sıfır emisyonlu hale getirilmesi için teknik fizibilite çerçeveleri hazırlıyoruz. Elektrikli otobüs entegrasyonu, şarj istasyonu konumlandırma analizleri ve yeşil mobilite ağ tasarım süreçlerini CBS tabanlı verilerle yönetiyoruz. Sürdürülebilir Enerji ve İklim Eylem Planları (SECAP) Uluslararası standartlarda ve Avrupa Belediye Başkanları Sözleşmesi normlarında, kentlerin geleceğini koruma altına alan SECAP planları hazırlıyoruz. Kentlerin ve endüstriyel bölgelerin sera gazı emisyon envanterlerini çıkarıyor, iklim değişikliğine uyum kapasitesini ölçüyor ve fon mekanizmalarına erişimi destekleyen somut azaltım stratejileri geliştiriyoruz. Yeşil Dönüşüm, Döngüsel Ekonomi ve Karbon Ayak İzi Raporlaması Özel sektör kuruluşları, OSB’ler ve sanayi tesisleri için Avrupa Yeşil Mutabakatı ve SKDM uyum süreçlerini yönetiyoruz. Kurumsal karbon ayak izi raporlaması gerçekleştiriyor, endüstriyel atık yönetimini optimize eden döngüsel ekonomi stratejileri kurguluyor ve şirketlerin sürdürülebilirlik performanslarını uluslararası yeşil finansman desteklerine hazır hale getiriyoruz.',
      keywords: ['yeşil dönüşüm', 'çevre', 'SUMP', 'iklim', 'karbon', 'ESG', 'sürdürülebilir', 'emisyon', 'Sıfır Karbon', 'SECAP', 'Yeşil Finansman']
    },
    {
      title: 'Uluslararası Projeler ve Stratejik Finansman',
      subtitle: 'Ana hizmet sayfası',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      content: 'Yada Global olarak; köklü teknik ve kentsel uzmanlığımızı uluslararası finansman mekanizmalarıyla buluşturuyoruz. Horizon Europe, Erasmus+ KA2, LIFE, Interreg, EUREKA ve Digital Europe gibi küresel hibe programlarından; Dünya Bankası, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi çok taraflı kuruluşların fonladığı makro ölçekli yatırım, ihale ve kredi süreçlerine kadar tüm aşamalarda stratejik çözüm ortağıyız. Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları ile uyumlu projelere hem lider danışmanlık sağlıyor hem de konsorsiyumlara teknoloji ortağı olarak doğrudan dahil oluyoruz.',
      keywords: ['uluslararası', 'proje', 'finansman']
    },
    {
      title: 'Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi',
      subtitle: 'Uluslararası Projeler › AB / Horizon',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'eu-projects',
      content: 'Yada Global; çok uluslu Ar-Ge, inovasyon, yeşil dönüşüm, mesleki mükemmeliyet ve akıllı şehircilik odaklı Avrupa Birliği projeleri süreçlerinde stratejik danışman ve resmi konsorsiyum ortağı olarak yer almaktadır. Horizon Europe, DUT, CoVE, Erasmus+ KA2, LIFE ve Digital Europe kapsamında başvuru stratejilerinden yürütücü ortak rollerine ve nihai raporlama süreçlerine kadar tüm döngüyü uçtan uca yönetiyoruz. Konsorsiyum Yapılandırma Sınır ötesi ortaklık kurulumunda stratejik liderlik. Erasmus+ KA2 Süreçleri İdari, lojistik ve mali koordinasyonda tam uyum. Dijital İş Paketleri LMS, uygulama ve oyunlaştırma çıktılarında teknik sahiplik. Uluslararası Konsorsiyum Yönetimi ve AB Hibe Süreçleri Danışmanlığı Avrupa Komisyonu ve ilişkili fon otoriteleri tarafından yayımlanan çok uluslu çağrıları yakından takip ederek kurumunuza en uygun fonlama stratejilerini kurguluyoruz. Consortium Building yetkinliğimizle Horizon Europe, DUT, CoVE, LIFE ve Eurostars projeleri için sınır ötesi konsorsiyumlar oluşturuyor; çağrı analizi, başvuru stratejisi, idari-mali danışmanlık ve nihai raporlama aşamalarını AB standartlarında yönetiyoruz. Erasmus+ KA2 Stratejik Ortaklıklar ve Proje Süreç Yönetimi Eğitim, gençlik, kentsel farkındalık ve kurumsal kapasite geliştirme alanlarında uluslararası işbirliklerini tetikleyen Erasmus+ KA2 stratejik ortaklık projelerinde kurumların doğru konsorsiyumlara dahil olması ve süreçlerin koordinasyonu için danışmanlık sunuyoruz. Uluslararası ortaklık toplantıları ve LTT faaliyetlerinin lojistik, idari ve teknik planlamasını Avrupa Komisyonu normlarına uyumlu şekilde yönetiyoruz. Dijital İş Paketi Liderliği, Uygulama Geliştirme ve Oyunlaştırma Dahil olduğumuz AB projelerinde yalnızca süreç danışmanlığı değil, resmi proje ortağı olarak doğrudan teknik çıktı sorumluluğu üstleniyoruz. Yaygınlaştırma stratejilerine uygun web platformları ve e-öğrenme platformları kuruyor; Erasmus+ ve CoVE projeleri için çok dilli, SCORM uyumlu LMS altyapıları geliştiriyoruz. Senaryo tabanlı oyunlaştırma kurguları, dijital eğitim içerikleri ve projeye özel mobil/web uygulama geliştirme faaliyetleriyle dijital iş paketlerini uçtan uca üretiyoruz.',
      keywords: ['AB', 'Avrupa', 'Horizon', 'Erasmus', 'konsorsiyum', 'hibe', 'LIFE', 'Interreg', 'DUT', 'CoVE', 'EUREKA', 'AB Konsorsiyum', 'Erasmus+ KA2', 'Dijital İş Paketleri']
    },
    {
      title: 'Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi',
      subtitle: 'Uluslararası Projeler › İhale / Teklif',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'bid-management',
      content: 'Yada Global; çok taraflı kalkınma bankaları ve küresel ajanslar tarafından finanse edilen uluslararası teknik yardım ve hizmet alım ihalelerinde uçtan uca stratejik danışmanlık sunmaktadır. World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI düzenlemelerine uygun teknik-idari şartname analizleri ile uluslararası standartlarda bid management süreçleri yönetiyoruz. Şartname Analizi Teknik-idari gereksinimlerde derin risk ve uyum okumaları. Küresel İhale Uyumu Çok taraflı kuruluş prosedürlerine uygun ihale koordinasyonu. Teklif Dokümantasyonu Değerlendirme kriterlerine uygun teknik ve mali dosyalama. Teknik Şartname Analizleri ve Teklif Stratejisi Uluslararası kuruluşların yayımladığı çok uluslu ihale dosyalarını, idari ve teknik şartnameleri derinlemesine analiz ediyoruz. Kurumunuzun küresel pazardaki ihale süreçlerine uyumunu güçlendirmek için risk analizleri, maliyet projeksiyonları, yerel mevzuat uyumluluk denetimleri ve joint venture modellerini içeren teknik ve finansal teklif stratejileri geliştiriyoruz. Çok Taraflı Kalkınma Bankaları ve Küresel Ajansların İhale Yönetimi Dünya Bankası, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France ve GTAI gibi kuruluşların procurement prosedürlerine tam uyumlu süreç yönetimi sağlıyoruz. Akıllı şehirler, CBS, sürdürülebilir ulaşım ve dijital dönüşüm odaklı ihaleleri izleyerek firmaların ve konsorsiyumların uluslararası alımlara eksiksiz dosyalar sunmasını koordine ediyoruz. Uluslararası Kuruluşlar Dünya Bankası World Bank Avrupa Yatırım Bankası EIB Avrupa İmar ve Kalkınma Bankası EBRD Asya Kalkınma Bankası ADB İslam Kalkınma Bankası IsDB Birleşmiş Milletler Kalkınma Programı UNDP Alman Uluslararası İşbirliği Kurumu GIZ Expertise France Uluslararası Göç Politikaları Geliştirme Merkezi ICMPD Alman Ticaret ve Yatırım Ajansı GTAI Birleşmiş Milletler Küresel Pazar Yeri UNGM. Teknik Teklif Geliştirme ve Uluslararası Dokümantasyon Yönetimi Uluslararası ihale metodolojilerine uygun technical proposal ve iş planı metinleri geliştiriyoruz. Teknik uzman özgeçmişlerinin düzenlenmesi, kurumsal referansların uluslararası formatlara uyarlanması, mali teklif şablonlarının optimizasyonu ve evaluation criteria ile tam uyumlu dokümantasyon setlerinin hazırlanması süreçlerini titizlikle yürütüyoruz.',
      keywords: ['ihale', 'teklif', 'World Bank', 'UNDP', 'EBRD', 'GIZ', 'ICMPD', 'bid', 'tender', 'procurement', 'Teklif Stratejisi', 'Küresel İhale', 'Teklif Dokümanı']
    },
    {
      title: 'Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı',
      subtitle: 'Uluslararası Projeler › Kredi / Yatırım',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'finance',
      content: 'Yada Global; makro ölçekli akıllı şehir, altyapı, bölgesel kalkınma ve yeşil dönüşüm yatırımları için uluslararası finans kuruluşlarından uzun vadeli kredi ve fon sağlama süreçlerini yönetmektedir. Çok uluslu bankaların ve kalkınma ajanslarının normlarına uygun ticari ve teknik fizibilite raporları, finansal modellemeler ve yeşil finansman stratejileriyle büyük ölçekli yatırımları uluslararası fonlara hazır hale getiriyoruz. Uzun Vadeli Kredi Kamu ve özel sektör finansman kurgularında süreç yönetimi. Fizibilite ve Modelleme ROI, NPV, IRR bazlı finansal karar destek modelleri. Yeşil Finansman ESG uyumlu yatırım ve fon erişim stratejileri. Makro Proje Finansmanı ve Uluslararası Uzun Vadeli Kredi Yönetimi Belediyelerin, OSBlerin ve özel sektör yatırımcılarının büyük ölçekli altyapı, akıllı kent ve dijital dönüşüm projeleri için çok taraflı kalkınma bankalarından uzun vadeli kredi sağlama süreçlerine danışmanlık yapıyoruz. Finansman kuruluşlarının katı başvuru prosedürlerine uyumlu borçlanma stratejileri kurguluyor ve fonlama öncesi kurumsal risk analizleri gerçekleştiriyoruz. Ticari, Teknik Fizibilite Raporları ve Finansal Modelleme Uluslararası finans kuruluşlarının ve bölgesel kalkınma ajanslarının kabul standartlarına uyumlu ticari ve teknik fizibilite raporları hazırlıyoruz. Yatırımların geri dönüş sürelerini, net bugünkü değerlerini ve iç verimlilik oranlarını hesaplayan dinamik finansal modelleme ve risk analizi tablolarıyla projelerin finansal sürdürülebilirliğini belgeliyoruz. Yeşil Finansman, Sürdürülebilirlik Yönetimi ve Yatırım Rehberliği Avrupa Yeşil Mutabakatı normlarıyla uyumlu yatırımlar için yeşil finansman, yeşil tahvil ve sürdürülebilirlik odaklı fon mekanizmalarına erişim stratejileri geliştiriyoruz. Yatırımcıların iklim ve çevre düzenlemelerine uyumunu koordine ederek çevresel, sosyal ve yönetişim (ESG) kriterlerine uygun yatırım rehberliği sunuyoruz.',
      keywords: ['kredi', 'yatırım', 'fizibilite', 'yeşil finansman', 'EIB', 'IsDB', 'NPV', 'IRR', 'ROI', 'green bond', 'ESG', 'Proje Finansmanı', 'Finansal Model', 'Yeşil Finansman']
    }
  ],
  en: [
    {
      title: 'Digital Technologies and Software Solutions',
      subtitle: 'Main service page',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      content: 'At Yada Global we combine geographic data intelligence, artificial intelligence engineering, software development, and cybersecurity auditing under a single strategic umbrella to provide organizations with scalable and reliable digital transformation infrastructures. We develop technology solutions that make sense of data, digitize processes, and strengthen organizations\' decision-making capacity; we design customized, sustainable, and secure digital systems for the public sector, local governments, and the private sector. By bringing together modern technologies with corporate needs, we create solutions that improve today\'s operations and adapt to the digital infrastructures of the future.',
      keywords: ['digital', 'software', 'technology']
    },
    {
      title: 'Geographic Information Systems and Spatial Analytics',
      subtitle: 'Digital Technologies › GIS',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'gis',
      content: 'Yada Global delivers end-to-end capabilities in Geographic Information Systems (GIS) and Remote Sensing. By processing large spatial datasets with advanced analytics, we produce smart urban models for public policy and location intelligence solutions for private-sector investments. Spatial Decision Support GIS analytics pipelines that turn data into decision advantage. Remote Sensing Time-series insights from satellite and radar imagery. Location Intelligence Geospatial modeling for investment, operations, and growth. Spatial Analytics, Modeling, and GIS Solutions We process raw spatial data from public institutions and local authorities through advanced GIS methods. We develop sustainable forecasting models for urban growth, disaster scenarios, logistics network optimization, and geodatabase architecture. Remote Sensing and Satellite Imagery Analysis Using high-resolution satellite and radar imagery, we deliver time-series remote sensing analysis. We support land-use change monitoring, environmental surveillance, urban heat mapping, and agricultural vegetation and yield modeling. Location Analytics and Commercial Business Intelligence For retail, logistics, energy, and finance, we build location-based value propositions. By overlaying demographic, accessibility, and competitor layers, we guide high-value branch, store, and commercial site selection with evidence-based workflows. Investment Site Selection and Spatial Risk Management Before large-scale energy and industrial investments, we deliver GIS-based feasibility studies. We analyze slope, aspect, utility proximity, and legal constraints, while providing flood, storm, and earthquake risk intelligence for finance and insurance use cases. Web GIS Portals and System Integration We centralize geospatial databases for public and private organizations. We design scalable Web GIS portals and cloud infrastructure that enable secure browser-based map operations, querying, and dynamic visualization. Big Spatial Data Processing and IoT Mapping We integrate high-volume spatial streams from smart-city hardware, field sensors, and mobile platforms into unified architectures. With real-time filtering and orchestration, we build dynamic spatial decision support systems for rapid operations.',
      keywords: ['GIS', 'CBS', 'map', 'remote sensing', 'satellite', 'location', 'spatial', 'geospatial', 'radar', 'Spatial Intelligence', 'Risk Mapping', 'Web GIS', 'Spatial Big Data']
    },
    {
      title: 'Software Development and AI Systems Engineering',
      subtitle: 'Digital Technologies › AI & Software',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'ai',
      content: 'Yada Global provides scalable, high-performance, AI-powered software solutions for public institutions and private enterprises. We design advanced AI software products, cloud-native platforms, and intelligent decision support systems to operationalize complex data. AI Decision Engines Predictive analytics and intelligent automation foundations. Cloud and SaaS Secure, integrated, and elastic enterprise platform delivery. Smart Applications Real-time digital experiences across web and mobile channels. AI-Powered Decision Support and Data Visualization We engineer intelligent decision support systems for public management and enterprise leadership. By applying machine learning to operational data, we build predictive panels that reduce risk, improve planning precision, and accelerate action. AI-Integrated Custom Enterprise Software and SaaS Architecture We design custom enterprise software that modernizes legacy workflows through intelligent automation. With LLM and deep-learning integrations, our cloud-native SaaS architectures increase agility and speed up digital transformation delivery. Smart City Solutions and Mobile Application Development We create mobile solutions for municipalities and B2B teams to streamline field operations, citizen communication, and data capture. AI-enabled assistants, location-aware services, and modern UX principles drive practical, high-adoption applications. IoT Integrations and Secure API Architecture We connect heterogeneous platforms, legacy systems, and IoT environments through robust API layers. Sensor pipelines feed AI engines in near real-time while encryption standards protect data integrity and platform interoperability.',
      keywords: ['AI', 'software', 'SaaS', 'cloud', 'mobile', 'app', 'LLM', 'IoT', 'API', 'machine learning', 'AI Dashboards', 'Cloud Native', 'Mobile Smart City', 'Secure API']
    },
    {
      title: 'Cybersecurity Audits, Penetration Testing, and Risk Reporting',
      subtitle: 'Digital Technologies › Cybersecurity',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      tab: 'security',
      content: 'Yada Global delivers independent cybersecurity audit and risk analysis services for public institutions, local governments, and enterprises. We identify vulnerabilities in smart city infrastructure, geospatial systems, and digital platforms through structured testing and compliance-focused reporting. Critical Infrastructure Security Comprehensive vulnerability assessment for SCADA and IoT networks. Pentest and Red Teaming Controlled attack simulations across network, application, and API layers. Regulatory Compliance Alignment support for NIS 2, ISO 27001, and donor requirements. Smart City and Critical Infrastructure Vulnerability Analysis We assess vulnerabilities in industrial control environments managing water, energy, wastewater, and lighting systems. We audit communications in IoT sensor networks and signaling components, then deliver prioritized control recommendations. Geospatial Data and Digital Twin Penetration Testing We evaluate cyber resilience of strategic geospatial assets such as cadastral, ownership, and infrastructure datasets. We test API and integration points in Web GIS and digital twin platforms, including authorization and leakage risks. Enterprise Pentesting and Technical Risk Reporting We measure resistance of internal and external networks, cloud servers, and data-center environments through controlled penetration testing. Source code review and phishing simulations expose human and technical risks with actionable remediation paths. International Cyber Regulation and Donor Compliance Advisory We manage gap analysis and compliance reporting against EU cybersecurity directives and information-security standards. For internationally funded digital transformation programs, we prepare mandatory technical cyber risk and compliance documentation.',
      keywords: ['cybersecurity', 'pentest', 'penetration', 'security', 'ISO 27001', 'NIS2', 'vulnerability', 'risk', 'red team', 'Critical Infrastructure', 'Digital Twin Security', 'Pentest Reporting', 'Compliance Strategy']
    },
    {
      title: 'Smart Cities and Sustainable Urbanism',
      subtitle: 'Main service page',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      content: 'At Yada Global, we provide data-driven solutions across every stage of modern urbanism, from macro-scale urban strategies to micro-scale design. We integrate deep expertise in legally compliant zoning, conservation-focused planning, and regional frameworks with the UN Sustainable Development Goals and European Green Deal principles. By combining climate, environment, and net-zero actions with 3D digital twin technologies, smart city networks, and Sustainable Urban Mobility Plan (SUMP) infrastructure, we build resilient, livable, and intelligent urban ecosystems.',
      keywords: ['smart city', 'urbanism', 'urban']
    },
    {
      title: 'Urban Planning and Regional Master Plans',
      subtitle: 'Smart Cities › Urban Planning',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'planning',
      content: 'Yada Global manages upper- and lower-scale urban planning processes in full alignment with current legislation, conservation board decisions, and UN Sustainable Development Goals standards. From macro-level regional plans and strategic spatial frameworks to thematic master plans and tourism master planning, we deliver end-to-end urban development programs through data-driven analytical research. Planning Strategy Integrated planning frameworks across macro and micro scales. Regulatory Compliance Code-aligned planning in master and implementation layers. Master Plan Expertise Thematic master plans that accelerate regional development. Master, Detailed, OIZ & Conservation Development Plans We prepare Master Development Plans, Conservation-Oriented Development Plans, Regional Plans, and Organized Industrial Zone (OIZ) Development Plans in full compliance with current legislation, applicable regulations, and urban planning principles. We meticulously manage planning processes supported by a strong technical infrastructure to ensure that protected areas, as well as historical, cultural, and natural heritage sites, are preserved and carried forward into the future in line with sustainability principles and secured through appropriate planning frameworks. Strategic Spatial Planning and Regional Plans We model growth projections, logistics corridors, socio-economic dynamics, and land-use decisions for cities, basins, and metropolitan areas at macro scale. Through upper-scale regional plans and analytical planning frameworks, we design resilient urban models against disasters, climate risks, and uncontrolled population pressure. Thematic Regional Master Plans and Tourism Master Planning We develop thematic master plans that activate regional economic, social, and cultural potential. Aligned with national and international development agencies and ministerial standards, we produce sustainable tourism master plans, concept tourism plans, and regional layout strategies supported by comprehensive feasibility studies.',
      keywords: ['zoning', 'master plan', 'regional plan', 'urban design', 'planning', 'land use', 'Zoning Planning', 'Regional Strategy', 'Master Planning']
    },
    {
      title: 'Smart Cities, Industrial Zones, and Digital Twin Solutions',
      subtitle: 'Smart Cities › Digital Twin / OSB',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'digital-twin',
      content: 'Yada Global designs advanced smart-city and digital twin platforms for data-driven municipal governance and Organized Industrial Zones. By integrating IoT networks, industrial production simulations, green infrastructure monitoring, and SUMP standards with our GIS backbone, we build living digital replicas of cities and factories. IoT Integration Unified sensor data management for city and industrial ecosystems. Digital Twins 3D simulation environments for predictive operational control. SUMP and Logistics Carbon-aware optimization for mobility and freight networks. IoT Integration and Smart Industrial Zone Management Networks For municipalities and Organized Industrial Zones, we consolidate IoT streams from smart meters, air and water quality stations, industrial waste tracking modules, and energy systems into a central platform. We transform real-time sensor data into actionable insights to optimize water, waste, energy, and budget usage with minimal loss. 3D City Modeling, Factory Campuses, and Industrial Digital Twin Platforms We create living digital twin models by combining geospatial, architectural, and infrastructure data from cities, real-estate developments, and large industrial assets. Through real-time simulation, we test expansion scenarios, production and logistics flows, disaster risk models, and urban transformation impacts before investment decisions are made. Smart Mobility, Industrial Logistics, and SUMP We deliver internationally aligned SUMP solutions that improve urban accessibility, optimize complex industrial logistics networks, and reduce carbon emissions. Using traffic density mapping, signal optimization, staff shuttle routing, and heavy-vehicle corridor planning, we design data-driven mobility infrastructure for both cities and major enterprises.',
      keywords: ['OSB', 'digital twin', 'industrial zone', 'SCADA', 'IoT', 'sensor', 'twin', 'IoT Networks', '3D Simulation', 'Smart Mobility']
    },
    {
      title: 'Sustainable Urbanism, Green Transition, and Environmental Strategies',
      subtitle: 'Smart Cities › Sustainability',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      tab: 'sustainability',
      content: 'Yada Global develops sustainable urbanism and green transition programs fully aligned with the European Green Deal and global environmental regulations. From carbon-neutral city actions to green infrastructure design, we produce strategic environmental plans that help municipalities, industrial zones, and private-sector organizations achieve full regulatory compliance. Net-Zero Mobility Emission-reduction pathways for public transport and logistics. SECAP Planning Action frameworks for energy efficiency and climate adaptation. Green Transformation Carbon reporting and circular-economy performance strategy. Net-Zero Transport Services and Green Mobility Transition To address climate challenges, we prepare technical feasibility frameworks for transforming public transport and logistics systems into low-emission, environmentally responsible networks. We manage electric bus integration, charging station location analysis, and green mobility network design through GIS-based planning data. Sustainable Energy and Climate Action Plans (SECAP) Following international standards and Covenant of Mayors principles, we prepare SECAP programs that safeguard long-term urban resilience. We develop greenhouse gas inventories for cities and industrial districts, assess adaptation capacity, and define practical mitigation strategies that strengthen access to climate and development financing. Green Transition, Circular Economy, and Carbon Footprint Reporting For private enterprises, industrial zones, and production facilities, we manage compliance with the European Green Deal and Carbon Border Adjustment Mechanism requirements. We deliver corporate carbon footprint reporting, circular-economy strategy design for industrial waste optimization, and readiness roadmaps for green finance and regional development support.',
      keywords: ['green transition', 'environment', 'SUMP', 'climate', 'carbon', 'ESG', 'sustainable', 'emission', 'Net-Zero', 'SECAP', 'Green Finance']
    },
    {
      title: 'International Projects and Strategic Finance',
      subtitle: 'Main service page',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      content: 'At Yada Global, we connect deep technical and urban expertise with international financing mechanisms. From global grant programs such as Horizon Europe, Erasmus+ KA2, LIFE, Interreg, EUREKA, and Digital Europe to macro-scale investment, procurement, and loan processes funded by multilateral institutions such as the World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI, we act as a strategic solution partner across the full lifecycle. We provide lead advisory for projects aligned with the UN Sustainable Development Goals while also participating directly in consortia as a technology partner.',
      keywords: ['international', 'project', 'finance']
    },
    {
      title: 'EU Projects and Consortium Management',
      subtitle: 'International Projects › EU / Horizon',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'eu-projects',
      content: 'Yada Global acts as a strategic advisor and official consortium partner in multinational EU project processes focused on R&D, innovation, green transition, vocational excellence, and smart urbanism. Under Horizon Europe, DUT, CoVE, Erasmus+ KA2, LIFE, and Digital Europe, we manage the full cycle from application strategy to implementation partner roles and final reporting. Consortium Building Strategic leadership for cross-border partnership formation. Erasmus+ KA2 Delivery Full administrative, logistical, and financial coordination. Digital Work Packages Technical ownership for LMS, apps, and gamification outputs. International Consortium Management and EU Grant Advisory We closely monitor multinational calls published by the European Commission and related authorities, then design funding strategies tailored to your institution. With strong consortium building capability, we lead cross-border structures for Horizon Europe, DUT, CoVE, LIFE, and Eurostars, while managing call analysis, application strategy, administrative-financial alignment, and final reporting to EU standards. Erasmus+ KA2 Strategic Partnerships and Process Management We support institutions in joining the right consortia and coordinating Erasmus+ KA2 strategic partnership projects across education, youth, urban awareness, and institutional capacity development. We plan transnational meetings and LTT activities, and ensure administrative and financial workflows are executed in full compliance with European Commission norms. Digital Work Package Leadership, Application Development, and Gamification In the EU projects we participate in, we take on direct responsibility for technical outputs as official project partners, rather than providing process consultancy alone. We develop web platforms and e-learning platforms aligned with dissemination strategies, as well as multilingual, SCORM-compliant LMS infrastructures for Erasmus+ and CoVE projects. Through scenario-based gamification, digital learning content, and project-specific mobile/web application development, we deliver digital work packages from end to end.',
      keywords: ['EU', 'Europe', 'Horizon', 'Erasmus', 'consortium', 'grant', 'LIFE', 'Interreg', 'DUT', 'CoVE', 'EUREKA', 'EU Consortium', 'Erasmus+ KA2', 'Digital Work Packages']
    },
    {
      title: 'International Tenders and Strategic Bid Management',
      subtitle: 'International Projects › Tenders',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'bid-management',
      content: 'Yada Global provides end-to-end strategic advisory for international technical assistance and service procurement tenders financed by multilateral development banks and global agencies. We run bid management in line with World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI regulations through rigorous technical and administrative specification analysis. Specification Analysis Deep requirement mapping, risk diagnostics, and compliance planning. Global Procurement Alignment Process coordination aligned with multilateral procedures. Proposal Documentation Technical and financial files aligned with evaluation criteria. Technical Specification Analysis and Bid Strategy We analyze multinational tender files and technical-administrative specifications in depth. To strengthen your competitiveness in global procurement, we design technical and financial bid strategies covering risk analysis, cost projections, local compliance reviews, and joint venture model structuring. Tender Management for Multilateral Banks and Global Agencies We ensure process execution in full alignment with procurement guidelines of institutions such as the World Bank, UNDP, EBRD, EIB, ICMPD, IsDB, GIZ, Expertise France, and GTAI. We track global tenders in smart cities, GIS, sustainable mobility, and digital transformation, coordinating complete submissions from firms and consortia. International Institutions World Bank European Investment Bank EIB European Bank for Reconstruction and Development EBRD Asian Development Bank ADB Islamic Development Bank IsDB United Nations Development Programme UNDP German Agency for International Cooperation GIZ Expertise France International Centre for Migration Policy Development ICMPD Germany Trade & Invest GTAI United Nations Global Marketplace UNGM. Technical Proposal Development and International Documentation Management We prepare technical proposal narratives and work plans in line with international tender methodologies. Our delivery includes expert CV formatting, adaptation of institutional track records to global formats, financial template optimization, and complete documentation sets aligned with the contracting authority evaluation criteria.',
      keywords: ['tender', 'bid', 'World Bank', 'UNDP', 'EBRD', 'GIZ', 'ICMPD', 'procurement', 'proposal', 'Bid Strategy', 'Global Tendering', 'Proposal Development']
    },
    {
      title: 'International Credit, Financing, and Investment Advisory',
      subtitle: 'International Projects › Finance',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      tab: 'finance',
      content: 'Yada Global manages long-term credit and fund access processes for macro-scale investments in smart cities, infrastructure, regional development, and green transition. Through bank-grade feasibility studies, financial modeling, and green finance strategies aligned with multilateral institutions and development agencies, we prepare large investments for international funding. Long-Term Credit Structuring Advisory across sovereign and non-sovereign lending pathways. Feasibility and Modeling ROI, NPV, and IRR based financial decision models. Green Finance ESG-aligned funding access and sustainability roadmaps. Macro Project Finance and International Long-Term Credit Management We advise municipalities, organized industrial zones, and private investors on obtaining long-term financing from multilateral development banks and global funds for large infrastructure, smart city, and digital transformation investments. We design borrowing strategies compatible with strict lender requirements and conduct institutional risk analysis before funding rounds. Commercial and Technical Feasibility Reports and Financial Modeling We produce commercial and technical feasibility studies aligned with acceptance standards of international financial institutions and regional development agencies. Through dynamic modeling and risk analytics that calculate ROI, NPV, and IRR, we document the financial sustainability of investment programs to global standards. Green Finance, Sustainability Management, and Investment Guidance For investments aligned with the European Green Deal, we design access strategies for green finance instruments, green bonds, and sustainability-focused funds. We coordinate climate and environmental compliance while guiding investors toward ESG-compatible funding criteria and long-term value positioning.',
      keywords: ['credit', 'investment', 'feasibility', 'green finance', 'EIB', 'IsDB', 'NPV', 'IRR', 'ROI', 'green bond', 'ESG', 'Project Finance', 'Financial Modeling', 'Green Finance']
    }
  ]
}

const searchIndex = computed(() => {
  if (locale.value === 'tr') {
    return [
      { title: 'Hizmetlerimiz', subtitle: 'Hizmet sayfası', to: '/services', keywords: ['hizmet', 'servis'] },
      { title: 'Yaklaşımımız ve Sürdürülebilir Kalkınma Amaçları', subtitle: 'Ana sayfa › Yaklaşımımız', to: '/', query: { about: 'approach' }, content: 'Tüm çalışmalarımızı Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SKA) doğrultusunda, çevresel, sosyal ve ekonomik değer yaratma hedefiyle şekillendiriyoruz.', keywords: ['yaklaşım', 'ska', 'sürdürülebilir kalkınma amaçları', 'birleşmiş milletler', 'çevresel', 'sosyal', 'ekonomik değer', 'sürdürülebilirlik'] },
      { title: 'İletişim', subtitle: 'İletişim sayfası', to: '/contact', keywords: ['telefon', 'adres', 'email', 'faks', 'harita'] },
      ...serviceSearchItems.tr,
      { title: 'Kişisel Verilerin Korunması ve Gizlilik Politikası', subtitle: 'Kurumsal politika', href: '/YadaGlobal_Kisisel_Verilerin_Korunmasi_ve_Gizlilik_Politikasi_v1.0.pdf', keywords: ['kvkk', 'kişisel veri', 'gizlilik', 'politika'] },
      { title: 'Çerez Politikası', subtitle: 'Kurumsal politika', to: '/cookie-policy', keywords: ['çerez', 'cookie', 'politika'] },
      { title: 'Toplumsal Cinsiyet Eşitliği Planı', subtitle: 'Kurumsal politika', href: '/YadaGlobal_Toplumsal_Cinsiyet_Esitligi_Plani_2026-2030_v1.0.pdf', keywords: ['toplumsal cinsiyet', 'eşitlik', 'gep', 'politika'] },
      { title: 'Çeşitlilik, Eşitlik ve Kapsayıcılık Politikası', subtitle: 'Kurumsal politika', href: '/YadaGlobal_Cesitlilik_Esitlik_ve_Kapsayicilik_Politikasi_v1.0.pdf', keywords: ['çeşitlilik', 'eşitlik', 'kapsayıcılık', 'dei', 'politika'] },
      { title: 'Etik İlkeler ve Yolsuzlukla Mücadele Politikası', subtitle: 'Kurumsal politika', href: '/YadaGlobal_Etik_Ilkeler_ve_Yolsuzlukla_Mucadele_Politikasi_v1.0.pdf', keywords: ['etik', 'yolsuzluk', 'mücadele', 'politika'] },
      { title: 'Çevresel ve Sürdürülebilirlik Politikası ve Eylem Planı', subtitle: 'Kurumsal politika', href: '/YadaGlobal_Cevresel_ve_Surdurulebilirlik_Politikasi_ve_Eylem_Plani_2026-2030_v1.0.pdf', keywords: ['çevresel', 'sürdürülebilirlik', 'eylem planı', 'politika'] },
      ...projectSearchItems.tr
    ]
  }

  return [
    { title: 'Services', subtitle: 'Service hub', to: '/services', keywords: ['service'] },
    { title: 'Our Approach and Sustainable Development Goals', subtitle: 'Homepage › Our Approach', to: '/', query: { about: 'approach' }, content: 'We shape all our work in line with the United Nations Sustainable Development Goals (SDGs), with the aim of creating environmental, social, and economic value.', keywords: ['approach', 'sdg', 'sdgs', 'sustainable development goals', 'united nations', 'environmental', 'social', 'economic value', 'sustainability'] },
    { title: 'Contact', subtitle: 'Contact page', to: '/contact', keywords: ['phone', 'address', 'email', 'fax', 'map'] },
    ...serviceSearchItems.en,
    { title: 'Personal Data Protection and Privacy Policy', subtitle: 'Corporate policy', href: '/YadaGlobal_Personal_Data_Protection_and_Privacy_Policy_v1.0.pdf', keywords: ['personal data', 'privacy', 'data protection', 'policy'] },
    { title: 'Cookie Policy', subtitle: 'Corporate policy', to: '/cookie-policy', keywords: ['cookie', 'policy'] },
    { title: 'Gender Equality Plan (GEP)', subtitle: 'Corporate policy', href: '/YadaGlobal_Gender_Equality_Plan_2026-2030_v1.0.pdf', keywords: ['gender', 'equality', 'gep', 'policy'] },
    { title: 'Diversity, Equity & Inclusion (DEI)', subtitle: 'Corporate policy', href: '/YadaGlobal_Diversity_Equity_and_Inclusion_Policy_v1.0.pdf', keywords: ['diversity', 'equity', 'inclusion', 'dei', 'policy'] },
    { title: 'Ethics Principles and Anti-Corruption Policy', subtitle: 'Corporate policy', href: '/YadaGlobal_Code_of_Ethics_and_Anti_Corruption_Policy_v1.0.pdf', keywords: ['ethics', 'anti-corruption', 'corruption', 'policy'] },
    { title: 'Environmental and Sustainability Policy and Action Plan', subtitle: 'Corporate policy', href: '/YadaGlobal_Environmental_and_Sustainability_Policy_and_Action_Plan_2026-2030_v1.0.pdf', keywords: ['environmental', 'sustainability', 'action plan', 'policy'] },
    ...projectSearchItems.en
  ]
})

const searchResults = computed(() => {
  const query = normalize(searchQuery.value.trim())
  if (!query) return []

  return searchIndex.value.filter((item) => {
    const text = normalize([item.title, item.subtitle, item.content, ...(item.keywords ?? [])].join(' '))
    return text.includes(query)
  }).slice(0, 8)
})

const serviceMenuItems = computed(() => {
  if (locale.value === 'tr') {
    return [
      {
        label: 'Dijital Teknolojiler ve Yazılım Çözümleri',
        to: '/digital-teknolojiler-ve-yazilim-cozumleri'
      },
      {
        label: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
        to: '/akilli-kentler-ve-surdurulebilir-sehircilik'
      },
      {
        label: 'Uluslararası Projeler ve Stratejik Finansman',
        to: '/uluslararasi-projeler-ve-stratejik-finansman'
      }
    ]
  }

  return [
    {
      label: 'Digital Technologies and Software Solutions',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri'
    },
    {
      label: 'Smart Cities and Sustainable Urbanism',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik'
    },
    {
      label: 'International Projects and Strategic Finance',
      to: '/uluslararasi-projeler-ve-stratejik-finansman'
    }
  ]
})

const footerServices = computed(() => {
  if (locale.value === 'tr') {
    return [
      {
        title: 'Dijital Teknolojiler ve Yazılım Çözümleri',
        to: '/digital-teknolojiler-ve-yazilim-cozumleri',
        items: [
          'Coğrafi Bilgi Sistemleri ve Mekansal Veri Analitiği',
          'Yazılım Geliştirme ve Yapay Zeka Sistem Mühendisliği',
          'Siber Güvenlik Denetimi, Sızma Testleri ve Risk Raporlaması'
        ]
      },
      {
        title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
        to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
        items: [
          'Şehir Planlama ve Bölgesel Master Planlar',
          'Akıllı Şehirler, OSBler ve Endüstriyel Dijital İkiz Çözümleri',
          'Sürdürülebilir Şehircilik, Yeşil Dönüşüm ve Çevre Stratejileri'
        ]
      },
      {
        title: 'Uluslararası Projeler ve Stratejik Finansman',
        to: '/uluslararasi-projeler-ve-stratejik-finansman',
        items: [
          'Avrupa Birliği Projeleri ve Konsorsiyum Yönetimi',
          'Uluslararası Fonlu İhaleler ve Stratejik Teklif Yönetimi',
          'Uluslararası Kredi, Finansman ve Yatırım Danışmanlığı'
        ]
      }
    ]
  }

  return [
    {
      title: 'Digital Technologies and Software Solutions',
      to: '/digital-teknolojiler-ve-yazilim-cozumleri',
      items: [
        'GIS and Spatial Data Analytics',
        'Software Development and AI Systems Engineering',
        'Cybersecurity Audits, Pentesting and Risk Reporting'
      ]
    },
    {
      title: 'Smart Cities and Sustainable Urbanism',
      to: '/akilli-kentler-ve-surdurulebilir-sehircilik',
      items: [
        'Urban Planning and Regional Master Plans',
        'Smart Cities, Industrial Zones and Digital Twin Solutions',
        'Sustainable Urbanism, Green Transition and Environmental Strategies'
      ]
    },
    {
      title: 'International Projects and Strategic Finance',
      to: '/uluslararasi-projeler-ve-stratejik-finansman',
      items: [
        'EU Projects and Consortium Management',
        'International Tenders and Strategic Bid Management',
        'International Credit, Financing and Investment Advisory'
      ]
    }
  ]
})

const policyReports = computed(() => [
  {
    title: translate('policiesPage.cards.kvkk.title'),
    href: translate('policiesPage.links.kvkk'),
    external: true
  },
  {
    title: translate('policiesPage.cards.cookie.title'),
    href: translate('policiesPage.links.cookie'),
    external: false
  },
  {
    title: translate('policiesPage.cards.gep.title'),
    href: translate('policiesPage.links.gep'),
    external: true
  },
  {
    title: translate('policiesPage.cards.dei.title'),
    href: translate('policiesPage.links.dei'),
    external: true
  },
  {
    title: translate('policiesPage.cards.ethics.title'),
    href: translate('policiesPage.links.ethics'),
    external: true
  },
  {
    title: translate('policiesPage.cards.environment.title'),
    href: translate('policiesPage.links.environment'),
    external: true
  }
])

const footerLabels = computed(() => {
  if (locale.value === 'tr') {
    return {
      services: 'HİZMETLERİMİZ',
      policies: 'KURUMSAL POLİTİKA VE UYUM',
      links: 'İlgili Bağlantılar',
      servicesQuick: 'HİZMETLERİMİZ',
      servicesName: 'Hizmetlerimiz',
      contactQuick: 'İLETİŞİM',
      contactName: 'İletişim',
      follow: 'BİZİ TAKİP EDİN',
      rights: 'Tüm hakları saklıdır.'
    }
  }

  return {
    services: 'SERVICES',
    policies: 'CORPORATE POLICY AND COMPLIANCE',
    links: 'Related Links',
    servicesQuick: 'SERVICES',
    servicesName: 'Services',
    contactQuick: 'CONTACT',
    contactName: 'Contact',
    follow: 'FOLLOW US',
    rights: 'All rights reserved.'
  }
})

const openSearch = () => {
  searchOpen.value = true
}

const closeSearch = () => {
  searchOpen.value = false
  searchQuery.value = ''
}

const handleSearchSelect = (item) => {
  if (!item) return
  if (item.href) {
    window.open(item.href, '_blank', 'noopener,noreferrer')
    closeSearch()
    return
  }
  router.push(item.tab || item.query ? { path: item.to, query: item.query ?? { tab: item.tab } } : item.to)
  closeSearch()
}

const handleDocumentClick = (event) => {
  if (langOpen.value && langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
    langOpen.value = false
  }

  if (searchOpen.value && searchDropdownRef.value && !searchDropdownRef.value.contains(event.target)) {
    searchOpen.value = false
  }
}

const setLanguage = (lang) => {
  setLocale(lang)
  langOpen.value = false
}

const setMobileMenu = (open) => {
  mobileMenuOpen.value = open
  if (!open) mobileServicesOpen.value = false
  document.body.classList.toggle('mobile-menu-open', open)
}

const closeMobileMenu = () => setMobileMenu(false)

const handleScroll = () => {
  headerScrolled.value = window.scrollY > 12
}

watchEffect(() => {
  document.documentElement.lang = locale.value
  document.title = pageSeo.value[0]

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', pageSeo.value[1])

  const canonicalUrl = `${window.location.origin}${router.currentRoute.value.path}`
  const ensureLink = (rel, hreflang, href) => {
    const selector = `link[rel="${rel}"][hreflang="${hreflang}"]`
    let link = document.querySelector(selector)
    if (!link) {
      link = document.createElement('link')
      link.rel = rel
      link.hreflang = hreflang
      document.head.appendChild(link)
    }
    link.href = href
  }

  ensureLink('alternate', 'tr', canonicalUrl)
  ensureLink('alternate', 'en', canonicalUrl)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', pageSeo.value[0])
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', pageSeo.value[1])

  let structuredData = document.querySelector('script[data-yada-structured-data]')
  if (!structuredData) {
    structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.yadaStructuredData = 'true'
    document.head.appendChild(structuredData)
  }
  structuredData.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Yada Global',
        url: window.location.origin,
        logo: `${window.location.origin}${logoSrc}`,
        sameAs: [
          'https://www.linkedin.com/company/yadaglobal/',
          'https://www.instagram.com/yadaglobal/'
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: 'Yada Global',
        url: window.location.origin,
        telephone: '+90 312 945 47 78',
        email: 'info@yadaglb.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tepe Prime Is Merkezi, Mustafa Kemal Mahallesi, Dumlupinar Bulvari No:266',
          addressLocality: 'Cankaya',
          addressRegion: 'Ankara',
          addressCountry: 'TR'
        }
      }
    ]
  })
})

const scrollToAbout = () => {
  if (router.currentRoute.value.path === '/') {
    const target = document.getElementById('about-heading')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return
  }

  router.push({ path: '/', hash: '#about-heading' })
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  window.removeEventListener('scroll', handleScroll)
  document.body.classList.remove('mobile-menu-open')
})
</script>

<template>
  <div class="app-shell">
    <header class="page-header" :class="{ 'is-scrolled': headerScrolled }">
      <router-link to="/" class="brand-logo">
        <img :src="logoSrc" alt="YADA GLOBAL" width="800" height="318" class="brand-logo-image" />
      </router-link>

      <button class="mobile-menu-toggle" type="button" :aria-expanded="mobileMenuOpen" aria-controls="main-navigation" aria-label="Toggle navigation" @click="setMobileMenu(!mobileMenuOpen)">
        <span></span><span></span><span></span>
      </button>

      <div v-if="mobileMenuOpen" class="mobile-menu-backdrop" aria-hidden="true" @click="closeMobileMenu"></div>
      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': mobileMenuOpen }" aria-label="Main navigation">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">{{ translate('nav.home') }}</router-link>
        <button type="button" class="nav-link" @click="scrollToAbout(); closeMobileMenu()">{{ translate('nav.about') }}</button>
        <div class="nav-dropdown">
          <router-link to="/services" class="nav-link nav-link-dropdown desktop-services-link" @click="closeMobileMenu">
            {{ translate('nav.services') }}
            <span aria-hidden="true">▾</span>
          </router-link>
          <button v-if="mobileMenuOpen" type="button" class="nav-link nav-link-dropdown mobile-services-toggle" :aria-expanded="mobileServicesOpen" @click.stop="mobileServicesOpen = !mobileServicesOpen">
            {{ translate('nav.services') }}
            <span aria-hidden="true">▾</span>
          </button>
          <div class="nav-dropdown-menu" :class="{ 'is-mobile-open': mobileServicesOpen }" role="menu" aria-label="Service submenu">
            <router-link
              v-for="item in serviceMenuItems"
              :key="item.to"
              :to="item.to"
              class="nav-dropdown-item"
              role="menuitem"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
        <router-link to="/projeler-ve-referanslar" class="nav-link" @click="closeMobileMenu">{{ translate('nav.projects') }}</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMobileMenu">{{ translate('nav.contact') }}</router-link>
      </nav>

      <div class="header-tools">
        <div ref="searchDropdownRef" :class="['search-wrapper', { open: searchOpen }]">
          <button @click="openSearch" class="search-icon-btn" aria-label="Search">
            🔍
          </button>
          <input
            type="search"
            class="search-input"
            :placeholder="translate('searchPlaceholder')"
            aria-label="Search"
            v-model="searchQuery"
            :tabindex="searchOpen ? 0 : -1"
            @focus="openSearch"
            @keydown.esc="closeSearch"
            @keydown.enter.prevent="handleSearchSelect(searchResults[0])"
          />
          <div v-if="searchOpen && searchQuery.trim().length" class="search-results" role="listbox" aria-label="Search results">
            <button
              v-for="item in searchResults"
              :key="`${item.to}-${item.title}`"
              type="button"
              class="search-result-item"
              @click="handleSearchSelect(item)"
            >
              <strong>{{ item.title }}</strong>
              <span>{{ item.subtitle }}</span>
            </button>
            <p v-if="searchResults.length === 0" class="search-empty-state">{{ translate('searchNoResults') }}</p>
          </div>
        </div>

        <div class="lang-dropdown" ref="langDropdownRef" @click.stop>
          <button class="lang-switch" type="button" aria-haspopup="listbox" :aria-expanded="langOpen" @click="langOpen = !langOpen">
            {{ currentLang }} ▾
          </button>
          <div v-if="langOpen" class="lang-options" role="listbox">
            <button type="button" class="lang-option" @click="setLanguage('en')">EN</button>
            <button type="button" class="lang-option" @click="setLanguage('tr')">TR</button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="site-footer-top-bar" aria-hidden="true"></div>

      <div class="site-footer-grid">
        <section class="footer-brand-col">
          <img :src="logoSrc" alt="YADA GLOBAL" width="800" height="318" class="footer-logo" />
          <p>{{ translate('contactPage.description') }}</p>
          <div class="footer-related-links">
            <router-link to="/services" class="footer-related-item">
              <strong>{{ footerLabels.servicesName }}</strong>
            </router-link>
            <router-link to="/contact" class="footer-related-item">
              <strong>{{ footerLabels.contactName }}</strong>
            </router-link>
          </div>
          <p class="footer-follow">{{ footerLabels.follow }}</p>
          <div class="footer-social-row">
            <a href="https://www.linkedin.com/company/yadaglobal/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/yadaglobal/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/globalyada" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </section>

        <section class="footer-services-col">
          <h2>{{ footerLabels.services }}</h2>
          <div v-for="service in footerServices" :key="service.title" class="footer-service-group">
            <router-link :to="service.to" class="footer-service-title">{{ service.title }}</router-link>
            <ul>
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>

        <section class="footer-policies-col">
          <h2>{{ footerLabels.policies }}</h2>
          <ul>
            <li v-for="report in policyReports" :key="report.title">
              <a v-if="report.external" :href="report.href" target="_blank" rel="noopener noreferrer">{{ report.title }}</a>
              <router-link v-else :to="report.href">{{ report.title }}</router-link>
            </li>
          </ul>
        </section>
      </div>

      <div class="site-footer-bottom">
        <p>© {{ new Date().getFullYear() }} Yada Global. {{ footerLabels.rights }}</p>
      </div>
    </footer>
  </div>
</template>
