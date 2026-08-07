import { ref } from 'vue'

const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

const setCookie = (name, value, days = 365) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

const initialLang = getCookie('yadaglobal_lang') || 'en'
const locale = ref(initialLang)

const messages = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },
    searchPlaceholder: 'Search...',
    searchNoResults: 'No results found',
    about: {
      heading: 'About Us',
      profile: 'COMPANY PROFILE',
      profileTab: 'COMPANY PROFILE',
      approachTab: 'OUR APPROACH',
      policiesTab: 'CORPORATE GOVERNANCE & COMPLIANCE',
      profileDescription: 'YADA GLOBAL develops sustainable and innovative projects.',
      approach: 'OUR APPROACH',
      approachDescription: 'Our solutions are shaped by technology-focused analytics and strategic planning.',
      policies: 'CORPORATE GOVERNANCE & COMPLIANCE',
      policiesDescription: 'Transparency, quality and sustainability form the basis of our way of doing business.',
      policiesCards: {
        0: {
          title: 'Policy Pillar 1',
          description: 'Core principles and governance frameworks that strengthen institutional operations.'
        },
        1: {
          title: 'Policy Pillar 2',
          description: 'Transparency, compliance and reporting processes that support responsible management.'
        },
        2: {
          title: 'Policy Pillar 3',
          description: 'Sustainable practices and long-term impact objectives for resilient growth.'
        },
        3: {
          title: 'Policy Pillar 4',
          description: 'Quality, risk management and internal communication standards that guide our work.'
        }
      }
    },
    companyProfile: {
      title: 'Yada Global',
      tagline: 'For a better future, with data, technology, together.',
      paragraphs: {
        p1: '<strong>YADA GLOBAL</strong> is a consultancy and technology company operating in <strong>digital technologies</strong>, <strong>smart cities</strong> and <strong>international project development</strong>. We contribute to transformation processes by developing <strong>data-driven</strong>, <strong>innovative</strong> and <strong>sustainable solutions</strong> for public institutions, local governments, international organizations and the private sector.',
        p2: 'Our areas of expertise include <strong>Geographic Information Systems (GIS)</strong>, <strong>software development</strong>, <strong>artificial intelligence</strong>, <strong>cybersecurity</strong>, <strong>spatial planning</strong>, <strong>smart city technologies</strong> and <strong>international fund programs</strong>. With our interdisciplinary approach, we provide <strong>end-to-end consultancy and technology solutions</strong> from strategic planning to digital transformation.',
        p3: 'We also provide project development, consortium management, technical proposal preparation and investment advisory services within the scope of <strong>European Union programs</strong>, <strong>international development organizations</strong> and <strong>multilateral financing mechanisms</strong>.',
        p4: 'With a <strong>scientific approach</strong>, <strong>innovation</strong>, <strong>transparency</strong> and <strong>international quality standards</strong> at its core, we aim to produce <strong>reliable, practical and sustainable solutions</strong> that help our clients reach their goals.'
      },
      features: {
        experience: {
          title: 'International Experience',
          description: 'Expertise in project development for EU and multilateral funding programs.'
        },
        holistic: {
          title: 'Holistic Approach',
          description: 'Integrated solutions that bring diverse disciplines together.'
        },
        technologies: {
          title: 'Innovative Technologies',
          description: 'AI, GIS, data analytics and smart city technologies.'
        },
        impact: {
          title: 'Sustainable Impact',
          description: 'Solutions that are environmentally, socially and economically sustainable.'
        }
      }
    },
    expertise: {
      heading: 'Our Expertise',
      gis: 'Geographic Information Systems (GIS)',
      software: 'Software Development',
      ai: 'Artificial Intelligence Solutions',
      cybersecurity: 'Cybersecurity Solutions',
      smartCity: 'Smart City Technologies',
      sustainablePlanning: 'Sustainable Planning',
      internationalProjects: 'International Project Development'
    },
    hero: {
      card1: ['Digital Technologies', 'and', 'Software Solutions'],
      card2: ['Smart Cities', 'and', 'Sustainable Urbanism'],
      card3: ['International Projects', 'and', 'Strategic Finance']
    },
    breadcrumb: {
      home: 'Home',
      about: 'About',
      approach: 'Approach'
    },
    servicesPage: {
      heading: 'Services',
      description: 'Explore the advisory, technology and project development services we provide for institutions and organizations.'
    },
    contactPage: {
      heading: 'Contact',
      description: 'Get in touch with the Yada Global team to discuss a project, partnership or request for information.'
    },
    cookiePolicyPage: {
      heading: 'Cookie Policy',
      description: 'This page explains how cookies are used on the Yada Global website and how they support your browsing experience.'
    },
    approachPage: {
      heading: 'Our Approach',
      intro1: 'At Yada Global, we approach every project with a <strong>strategic perspective</strong>, <strong>data-driven analysis</strong> and <strong>innovative technologies</strong>. Our goal is not only to address current needs, but also to create long-term value by anticipating the opportunities and risks institutions may face in the future.',
      intro2: 'In our work, we combine <strong>Geographic Information Systems (GIS)</strong>, <strong>artificial intelligence</strong>, <strong>spatial analysis</strong>, <strong>digital technologies</strong> and <strong>international good practices</strong> to develop integrated solutions that support decision-making processes.',
      cards: [
        {
          title: 'Data-Supported Decisions',
          description: 'At the core of every successful project is accurate data and strong analysis. Therefore, we build all our work on scientific methods, up-to-date data and measurable outputs; helping institutions make faster, more accurate and more sustainable decisions.'
        },
        {
          title: 'Interdisciplinary Perspective',
          description: 'Today\'s complex challenges cannot be solved through a single area of expertise. That is why we bring together technology, urban planning, environment, economy and international project management under one roof to deliver integrated solutions.'
        },
        {
          title: 'Working at International Standards',
          description: 'We plan our projects in line with European Union programs, international development organizations and global quality standards; adopting a management approach that is transparent, accountable and results-oriented.'
        },
        {
          title: 'Sustainable Impact',
          description: 'We believe success should be measured not only by completed projects, but by their long-term impact. For this reason, we prioritize solutions that are economically, environmentally and socially sustainable.'
        }
      ],
      banner: 'For Yada Global, consultancy is not only about sharing knowledge; it is about developing <strong>technology-enabled, practical and lasting solutions</strong> and becoming a trusted partner in institutions\' transformation journey.'
    },
    policiesPage: {
      label: 'Corporate Governance & Compliance',
      heading: 'Corporate Governance & Compliance',
      description: 'Yada Global conducts its operations in line with ethical values, data security, equality and sustainability principles; adopting a corporate governance approach that complies with national legislation and international standards.',
      heroNote: 'Access our corporate policy documents and compliance resources below.',
      sections: {
        dataProtection: {
          title: 'Data Protection',
          subtitle: 'Policies for personal data protection and digital privacy.'
        },
        equalityEthics: {
          title: 'Equality and Ethics',
          subtitle: 'Corporate documents supporting diversity, equality, inclusion and ethical conduct.'
        },
        sustainability: {
          title: 'Sustainability',
          subtitle: 'Environmental responsibility and sustainable development approach.'
        }
      },
      cards: {
        kvkk: {
          title: 'Personal Data Protection and Privacy Policy',
          description: 'Our corporate policy document prepared under the Personal Data Protection Law No. 6698.'
        },
        cookie: {
          title: 'Cookie Policy',
          description: 'Information about cookies used on our website.'
        },
        gep: {
          title: 'Gender Equality Plan (GEP)',
          description: 'Our corporate plan supporting gender equality.'
        },
        dei: {
          title: 'Diversity, Equity & Inclusion (DEI)',
          description: 'A policy document explaining our diversity, equity and inclusion principles.'
        },
        ethics: {
          title: 'Ethics Principles and Anti-Corruption Policy',
          description: 'Our corporate ethics principles and working standards.'
        },
        environment: {
          title: 'Environmental and Sustainability Policy and Action Plan',
          description: 'A policy document explaining how we operate in line with environmental sustainability principles.'
        }
      },
      links: {
        kvkk: '/docs/YadaGlobal_Personal_Data_Protection_and_Privacy_Policy_EN.pdf',
        cookie: '/cookie-policy',
        gep: '/docs/YadaGlobal_Gender_Equality_Plan_2026-2030_v1.0.pdf',
        dei: '/docs/YadaGlobal_Diversity_Equity_and_Inclusion_Policy_v1.0.pdf',
        ethics: '/docs/YadaGlobal_Code_of_Ethics_and_Anti_Corruption_Policy_v1.0.pdf',
        environment: '/docs/YadaGlobal_Environmental_and_Sustainability_Policy_and_Action_Plan_2026-2030_v1.0.pdf'
      },
      badges: {
        pdf: 'PDF Document',
        web: 'Web Page'
      },
      buttons: {
        pdfView: 'View PDF',
        review: 'Review'
      },
      footer: {
        title: 'About the Documents',
        text: 'Our corporate policy and compliance documents are periodically reviewed and updated. The documents shown on this page represent the most recent versions as of their publication dates.'
      }
    }
  },
  tr: {
    nav: {
      about: 'Hakkımızda',
      services: 'HİZMETLERİMİZ',
      contact: 'İLETİŞİM'
    },
    searchPlaceholder: 'Ara...',
    searchNoResults: 'Sonuç bulunamadı',
    about: {
      heading: 'Hakkımızda',
      profile: 'ŞİRKET PROFİLİ',
      profileTab: 'ŞİRKET PROFİLİ',
      approachTab: 'YAKLAŞIMIMIZ',
      policiesTab: 'KURUMSAL POLİTİKALAR',
      profileDescription: 'YADA GLOBAL olarak sürdürülebilir ve yenilikçi projeler geliştiriyoruz.',
      approach: 'Yaklaşımımız',
      approachDescription: 'Çözümlerimiz, teknoloji odaklı analitik ve stratejik planlama ile şekilleniyor.',
      policiesTab: 'KURUMSAL YÖNETİM VE UYUM',
      policies: 'KURUMSAL YÖNETİM VE UYUM',
      policiesDescription: 'Şeffaflık, kalite ve sürdürülebilirlik iş yapış biçimimizin temelini oluşturur.',
      policiesCards: {
        0: {
          title: 'Politika Kartı 1',
          description: 'Kurumsal yapıyı güçlendiren temel ilke ve standartlar burada açıklanır.'
        },
        1: {
          title: 'Politika Kartı 2',
          description: 'Süreçlerin şeffaflığı, uyumluluk adımları ve raporlama sistemleri ele alınır.'
        },
        2: {
          title: 'Politika Kartı 3',
          description: 'Sürdürülebilir uygulamalar ve uzun vadeli etki hedefleri paylaşılır.'
        },
        3: {
          title: 'Politika Kartı 4',
          description: 'Kalite, risk yönetimi ve kurum içi iletişim yaklaşımları vurgulanır.'
        }
      }
    },
    policiesPage: {
      label: 'Kurumsal Yönetim ve Uyum',
      heading: 'Kurumsal Politikalar ve Uyum',
      description: 'Yada Global olarak faaliyetlerimizi etik değerler, veri güvenliği, eşitlik ve sürdürülebilirlik ilkeleri doğrultusunda yürütüyor; ulusal mevzuat ve uluslararası standartlarla uyumlu kurumsal yönetim anlayışını benimsiyoruz.',
      heroNote: 'Kurumsal politika belgelerimize ve uyum dokümanlarımıza aşağıdan ulaşabilirsiniz.',
      sections: {
        dataProtection: {
          title: 'VERİ KORUMA',
          subtitle: 'Kişisel verilerin korunması ve dijital gizlilik kapsamında yürüttüğümüz uygulamalar.'
        },
        equalityEthics: {
          title: 'EŞİTLİK VE ETİK',
          subtitle: 'Çeşitlilik, eşitlik, kapsayıcılık ve etik çalışma kültürümüzü destekleyen kurumsal belgeler.'
        },
        sustainability: {
          title: 'SÜRDÜRÜLEBİLİRLİK',
          subtitle: 'Çevresel sorumluluk ve sürdürülebilir kalkınma yaklaşımımız.'
        }
      },
      cards: {
        kvkk: {
          title: 'Kişisel Verilerin Korunması ve Gizlilik Politikası',
          description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan kurumsal politika dokümanımız.'
        },
        cookie: {
          title: 'Çerez Politikası',
          description: 'Web sitemizde kullanılan çerezler hakkında bilgilendirme metni.'
        },
        gep: {
          title: 'Toplumsal Cinsiyet Eşitliği Planı',
          description: 'Toplumsal cinsiyet eşitliğini destekleyen kurumsal planımız.'
        },
        dei: {
          title: 'Çeşitlilik, Eşitlik ve Kapsayıcılık Politikası',
          description: 'Çeşitlilik, eşitlik ve kapsayıcılık ilkelerimizi açıklayan politika dokümanı.'
        },
        ethics: {
          title: 'Etik İlkeler ve Yolsuzlukla Mücadele Politikası',
          description: 'Kurumsal etik ilkelerimiz ve çalışma standartlarımız.'
        },
        environment: {
          title: 'Çevresel ve Sürdürülebilirlik Politikası ve Eylem Planı',
          description: 'Faaliyetlerimizi çevresel sürdürülebilirlik ilkeleri doğrultusunda yürüttüğümüzü açıklayan politika belgesi.'
        }
      },
      links: {
        kvkk: '/docs/YadaGlobal_Kisisel_Verilerin_Korunmasi_ve_Gizlilik_Politikasi_TR.pdf',
        cookie: '/cookie-politikasi',
        gep: '/docs/YadaGlobal_Toplumsal_Cinsiyet_Esitligi_Plani_2026-2030_v1.0.pdf',
        dei: '/docs/YadaGlobal_Cesitlilik_Esitlik_ve_Kapsayicilik_Politikasi_v1.0.pdf',
        ethics: '/docs/YadaGlobal_Etik_Ilkeler_ve_Yolsuzlukla_Mucadele_Politikasi_v1.0.pdf',
        environment: '/docs/YadaGlobal_Cevresel_ve_Surdurulebilirlik_Politikasi_ve_Eylem_Plani_2026-2030_v1.0.pdf'
      },
      badges: {
        pdf: 'PDF Belgesi',
        web: 'Web Sayfası'
      },
      buttons: {
        pdfView: 'PDF Görüntüle',
        review: 'İncele'
      },
      footer: {
        title: 'Belgeler Hakkında',
        text: 'Kurumsal politika ve uyum belgelerimiz belirli aralıklarla gözden geçirilmekte ve güncellenmektedir. Bu sayfada yer alan belgeler yayımlandıkları tarih itibarıyla güncel sürümleri ifade etmektedir.'
      }
    },
    companyProfile: {
      title: 'Yada Global',
      tagline: 'Daha iyi bir gelecek için, veriyle, teknolojiyle, birlikte.',
      paragraphs: {
        p1: '<strong>Yada Global</strong>, <strong>dijital teknolojiler</strong>, <strong>akıllı kentler</strong> ve <strong>uluslararası proje geliştirme</strong> alanlarında faaliyet gösteren bir <strong>danışmanlık ve teknoloji şirketidir</strong>. Kamu kurumları, yerel yönetimler, uluslararası kuruluşlar ve özel sektör için <strong>veri odaklı</strong>, <strong>yenilikçi</strong> ve <strong>sürdürülebilir çözümler</strong> geliştirerek kurumların dönüşüm süreçlerine katkı sağlamaktadır.',
        p2: '<strong>Uzmanlık alanlarımız arasında Coğrafi Bilgi Sistemleri (CBS)</strong>, <strong>yazılım geliştirme</strong>, <strong>yapay zekâ</strong>, <strong>siber güvenlik</strong>, <strong>mekânsal planlama</strong>, <strong>akıllı kent teknolojileri</strong> ve <strong>uluslararası fon programları</strong> yer almaktadır. Farklı disiplinleri bir araya getiren yaklaşımımız sayesinde kurumlara stratejik planlamadan dijital dönüşüme kadar <strong>uçtan uca danışmanlık ve teknoloji çözümleri</strong> sunuyoruz.',
        p3: '<strong>Aynı zamanda Avrupa Birliği programları</strong>, <strong>uluslararası kalkınma kuruluşları</strong> ve <strong>çok taraflı finansman mekanizmaları</strong> kapsamında proje geliştirme, konsorsiyum yönetimi, teknik teklif hazırlama ve yatırım danışmanlığı hizmetleri veriyoruz.',
        p4: '<strong>Bilimsel yaklaşım</strong>, <strong>yenilikçilik</strong>, <strong>şeffaflık</strong> ve <strong>uluslararası kalite standartlarını</strong> esas alan çalışma anlayışımızla, müşterilerimizin hedeflerine ulaşmasını sağlayan <strong>güvenilir, uygulanabilir ve sürdürülebilir çözümler</strong> üretmeyi amaçlıyoruz.'
      },
      features: {
        experience: {
          title: 'DENEYİM',
          description: 'AB ve çok taraflı fon programlarında proje geliştirme uzmanlığı.'
        },
        holistic: {
          title: 'BÜTÜNCÜL YAKLAŞIM',
          description: 'Farklı disiplinleri bir araya getiren entegre çözümler.'
        },
        technologies: {
          title: 'YENİLİKÇİ TEKNOLOJİLER',
          description: 'Yapay zeka, CBS, veri analitiği ve akıllı şehir teknolojileri.'
        },
        impact: {
          title: 'SÜRDÜRÜLEBİLİR ETKİ',
          description: 'Çevresel, sosyal ve ekonomik açıdan sürdürülebilir çözümler.'
        }
      }
    },
    expertise: {
      heading: 'Uzmanlık Alanlarımız',
      gis: 'Coğrafi Bilgi Sistemleri (CBS)',
      software: 'Yazılım Geliştirme',
      ai: 'Yapay Zekâ Çözümleri',
      cybersecurity: 'Siber Güvenlik Çözümleri',
      smartCity: 'Akıllı Kent Teknolojileri',
      sustainablePlanning: 'Sürdürülebilir Planlama',
      internationalProjects: 'Uluslararası Proje Geliştirme'
    },
    breadcrumb: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      approach: 'Yaklaşımımız'
    },
    servicesPage: {
      heading: 'Hizmetler',
      description: 'Kurumlar ve organizasyonlar için sunduğumuz danışmanlık, teknoloji ve proje geliştirme hizmetlerini keşfedin.'
    },
    contactPage: {
      heading: 'İletişim',
      description: 'Bir proje, iş birliği veya bilgi talebi için Yada Global ekibiyle iletişime geçin.'
    },
    cookiePolicyPage: {
      heading: 'Çerez Politikası',
      description: 'Bu sayfa, Yada Global web sitesinde çerezlerin nasıl kullanıldığını ve gezinme deneyiminize nasıl katkı sağladığını açıklar.'
    },
    hero: {
      card1: ['DİJİTAL TEKNOLOJİLER', 'VE', 'YAZILIM ÇÖZÜMLERİ'],
      card2: ['AKILLI KENTLER', 'VE', 'SÜRDÜRÜLEBİLİR ŞEHİRCİLİK'],
      card3: ['ULUSLARARASI PROJELER', 'VE', 'STRATEJİK FİNANSMAN']
    },
    approachPage: {
      heading: 'Yaklaşımımız',
      intro1: 'Yada Global olarak her projeye <strong>stratejik bakış açısı</strong>, <strong>veri odaklı analiz</strong> ve <strong>yenilikçi teknolojiler</strong> temelinde yaklaşıyoruz. Amacımız yalnızca mevcut ihtiyaçlara çözüm üretmek değil; kurumların gelecekte karşılaşabileceği fırsat ve riskleri öngörerek uzun vadeli değer oluşturmaktır.',
      intro2: 'Çalışmalarımızda <strong>Coğrafi Bilgi Sistemleri (CBS)</strong>, <strong>yapay zekâ</strong>, <strong>mekânsal analiz</strong>, <strong>dijital teknolojiler</strong> ve <strong>uluslararası iyi uygulamaları</strong> bir araya getirerek, karar alma süreçlerini destekleyen bütünleşik çözümler geliştiriyoruz.',
      cards: [
        {
          title: 'Veriyle Desteklenen Kararlar',
          description: 'Her başarılı projenin temelinde doğru veri ve güçlü analiz yer alır. Bu nedenle tüm çalışmalarımızı bilimsel yöntemler, güncel veriler ve ölçülebilir çıktılar üzerine inşa ediyor; kurumların daha hızlı, daha doğru ve daha sürdürülebilir kararlar almasını destekliyoruz.'
        },
        {
          title: 'Disiplinler Arası Bakış Açısı',
          description: 'Günümüzün karmaşık sorunları tek bir uzmanlık alanıyla çözülememektedir. Bu nedenle teknoloji, şehircilik, çevre, ekonomi ve uluslararası proje yönetimi disiplinlerini aynı çatı altında bir araya getirerek entegre çözümler sunuyoruz.'
        },
        {
          title: 'Uluslararası Standartlarda Çalışma',
          description: 'Projelerimizi Avrupa Birliği programları, uluslararası kalkınma kuruluşları ve küresel kalite standartları doğrultusunda planlıyor; şeffaf, hesap verebilir ve sonuç odaklı bir yönetim anlayışı benimsiyoruz.'
        },
        {
          title: 'Sürdürülebilir Etki',
          description: 'Başarının yalnızca tamamlanan projelerle değil, oluşturduğu uzun vadeli etkiyle ölçüldüğüne inanıyoruz. Bu nedenle geliştirdiğimiz her çözümün ekonomik, çevresel ve sosyal açıdan sürdürülebilir olmasına öncelik veriyoruz.'
        }
      ],
      banner: 'Yada Global için danışmanlık; yalnızca bilgi paylaşmak değil, <strong>teknolojiyle güçlendirilmiş, uygulanabilir ve kalıcı çözümler</strong> geliştirerek kurumların dönüşüm yolculuğunda güvenilir bir iş ortağı olmaktır.'
    }
  }
}

const setLocale = (lang) => {
  if (messages[lang]) {
    locale.value = lang
    setCookie('yadaglobal_lang', lang)
  }
}

const translate = (key) => {
  const parts = key.split('.')
  let value = messages[locale.value]

  for (const part of parts) {
    if (value == null) return key
    value = value[part]
  }

  return value
}

export { locale, setLocale, translate }
