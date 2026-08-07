<script setup>
import { computed } from 'vue'
import { locale, translate } from '../i18n.js'

const content = {
  en: {
    title: 'Yada Global Cookie Policy and Cookie Notice',
    intro: 'This Cookie Policy and Cookie Notice has been prepared in accordance with Article 10 of the Turkish <strong>Personal Data Protection Law No. 6698 ("KVKK")</strong>, the Communiqué on the Procedures and Principles to be Followed in Fulfilling the Obligation to Inform, the Personal Data Protection Authority\'s <strong>Guidelines on Cookie Applications</strong>, applicable provisions of the <strong>European Union General Data Protection Regulation ("GDPR" - Regulation (EU) 2016/679)</strong>, and international good practices.',
    updatedLabel: 'Effective date',
    controllerLabel: 'Data Controller',
    controllerTable: {
      headers: ['Information', 'Details'],
      rows: [
        ['Company Name', 'Yada Global Bilişim Planlama Proje Pazarlama İnşaat Sanayi ve Ticaret Limited Şirketi'],
        ['MERSIS Number', '0927108427600001'],
        ['Registered Address', 'Mustafa Kemal Mah. Dumlupınar Bulvarı Tepe Prime A Blok No:266 D.No:18 PK:06510 Çankaya / Ankara / Türkiye'],
        ['Website', '<a href="https://www.yadaglb.com/" target="_blank" rel="noreferrer noopener">www.yadaglb.com</a>'],
        ['E-mail', '<a href="mailto:compliance@yadaglb.com">compliance@yadaglb.com</a>']
      ]
    },
    sections: [
      {
        title: '1. Introduction and Identity of the Data Controller',
        body: 'This Cookie Policy and Cookie Notice has been prepared in accordance with Article 10 of the Turkish Personal Data Protection Law No. 6698 ("KVKK"), the Communiqué on the Procedures and Principles to be Followed in Fulfilling the Obligation to Inform, the Personal Data Protection Authority\'s Guidelines on Cookie Applications, applicable provisions of the European Union General Data Protection Regulation ("GDPR" - Regulation (EU) 2016/679), and international good practices.'
      },
      {
        title: '2. What Are Cookies?',
        body: 'Cookies are small text files placed on your computer, mobile device, tablet, or other electronic device when you visit a website.',
        listTitle: 'Cookies are used to:',
        items: [
          'Ensure the secure and efficient operation of the website;',
          'Remember user preferences and settings;',
          'Improve user experience;',
          'Analyze website performance and visitor statistics;',
          'Maintain website security and functionality.'
        ],
        notes: ['Cookies do not access files stored on your device and cannot independently identify a user unless combined with other information.']
      },
      {
        title: '3. Types of Cookies',
        subsections: [
          {
            subtitle: '3.1 Based on Duration',
            table: {
              headers: ['Cookie Type', 'Description'],
              rows: [
                ['Session Cookies', 'Temporary cookies that remain active during the browsing session and are deleted when the browser is closed.'],
                ['Persistent Cookies', 'Cookies stored on the device until their expiration date or until deleted by the user.']
              ]
            }
          },
          {
            subtitle: '3.2 Based on Source',
            table: {
              headers: ['Cookie Type', 'Description'],
              rows: [
                ['First-Party Cookies', 'Cookies placed directly by Yada Global.'],
                ['Third-Party Cookies', 'Cookies placed by service providers integrated into the website.']
              ]
            }
          },
          {
            subtitle: '3.3 Based on Purpose',
            table: {
              headers: ['Cookie Type', 'Description'],
              rows: [
                ['Strictly Necessary Cookies', 'Essential for the operation, security, and accessibility of the website.'],
                ['Functional Cookies', 'Remember user preferences such as language settings and display options.'],
                ['Analytics and Performance Cookies', 'Collect statistical information regarding website performance and visitor behavior.'],
                ['Advertising and Marketing Cookies', 'May be used to provide personalized content, campaigns, and advertising activities, subject to applicable legal requirements and user consent where required.']
              ]
            }
          }
        ]
      },
      {
        title: '4. Cookies Used on Our Website',
        body: 'The exact cookies used on our website may vary depending on the services, technologies, and infrastructure components implemented at a given time.',
        table: {
          headers: ['Cookie Category', 'Purpose', 'Retention Period', 'Provider'],
          rows: [
            ['Strictly Necessary Cookies', 'Website functionality, session management, security, load balancing, and fraud prevention', 'Session or limited duration', 'First Party'],
            ['Functional Cookies', 'Language preferences and user settings', 'Until preference changes or cookie expiry', 'First Party'],
            ['Consent Management Cookies', 'Recording and managing cookie consent preferences', 'Up to 12 months', 'First Party'],
            ['Analytics Cookies', 'Measuring website traffic and performance statistics', 'According to provider configuration and retention settings', 'First and/or Third Party'],
            ['Third-Party Service Cookies', 'Supporting integrated services and embedded content', 'Determined by relevant provider', 'Third Party']
          ]
        },
        note: 'The categories of cookies that may be used include:',
        footerNote: 'Yada Global periodically reviews and updates its cookie inventory and may revise this section whenever technical infrastructure changes occur.'
      },
      {
        title: '5. Legal Basis for Processing Personal Data Through Cookies',
        body: 'Personal data collected through cookies is processed electronically through automated means.',
        subsections: [
          {
            subtitle: 'Strictly Necessary Cookies',
            body: 'Such cookies are processed on the basis of:<br/><br/><strong>KVKK Article 5/2(f)</strong><br/>Legitimate interests of the data controller, provided that the fundamental rights and freedoms of the data subject are not harmed.<br/><br/><strong>GDPR Article 6(1)(f)</strong><br/>Legitimate interests pursued by the controller.'
          },
          {
            subtitle: 'Functional, Analytics, and Marketing Cookies',
            body: 'Such cookies are processed only where required by law and based on:<br/><br/><strong>KVKK Article 5/1</strong><br/>Explicit consent of the data subject.<br/><br/><strong>GDPR Article 6(1)(a)</strong><br/>Consent of the data subject.<br/><br/>Consent may be withdrawn at any time without affecting the lawfulness of processing carried out before withdrawal.'
          }
        ]
      },
      {
        title: '6. Third-Party Services and Cookies',
        body: 'Our website may use or integrate services provided by third parties.',
        listTitle: 'Examples may include:',
        items: ['Google Analytics', 'Google Maps', 'Google Fonts', 'Microsoft Services', 'Cloudflare', 'LinkedIn Services', 'YouTube', 'Online meeting or collaboration platforms', 'Other cloud-based infrastructure and analytics providers'],
        notes: ['These providers may place cookies on users\' devices in accordance with their own privacy and cookie policies.', 'Yada Global does not control the data processing activities conducted independently by such third-party providers.', 'Users are encouraged to review the privacy and cookie policies of the relevant providers.']
      },
      {
        title: '7. Cookie Consent Management',
        body: 'When visiting our website, users may be presented with a <strong>Cookie Consent Management Platform</strong>. Through this platform, users may accept all cookies, reject non-essential cookies, customize cookie preferences by category, withdraw previously granted consent, and update preferences at any time.',
        notes: ['Changes to cookie preferences become effective immediately upon saving the updated settings.']
      },
      {
        title: '8. Managing and Disabling Cookies',
        body: 'Users may also control cookie settings directly through their web browsers.',
        table: {
          headers: ['Browser', 'Cookie Management Path'],
          rows: [
            ['Google Chrome', 'Settings → Privacy and Security → Cookies and Other Site Data'],
            ['Mozilla Firefox', 'Settings → Privacy & Security → Cookies and Site Data'],
            ['Safari', 'Preferences → Privacy'],
            ['Microsoft Edge', 'Settings → Cookies and Site Permissions']
          ]
        },
        footerNote: 'Please note that disabling strictly necessary cookies may affect the functionality, accessibility, and security of certain website features.'
      },
      {
        title: '9. Rights of Data Subjects',
        body: 'Data subjects may exercise their rights under:<br/><br/>- Article 11 of the Turkish Personal Data Protection Law (KVKK);<br/>- Applicable provisions of the GDPR, where relevant.',
        listTitle: 'Requests may include:',
        items: ['Learning whether personal data is processed;', 'Requesting information regarding processing activities;', 'Requesting correction of inaccurate or incomplete data;', 'Requesting deletion or destruction where legally applicable;', 'Objecting to unlawful processing activities;', 'Requesting compensation for damages arising from unlawful processing.']
      },
      {
        title: '10. Contact and Applications',
        body: 'Data subjects may submit requests regarding personal data and cookie processing activities through:',
        contact: {
          email: 'compliance@yadaglb.com',
          address: 'Mustafa Kemal Mah. Dumlupınar Bulvarı Tepe Prime A Blok No:266 D.No:18 PK:06510 Çankaya / Ankara / Türkiye'
        },
        footerNote: 'Applications shall be evaluated and concluded in accordance with applicable legislation.'
      },
      {
        title: '11. Changes to This Cookie Policy',
        body: 'Yada Global may update this Cookie Policy due to changes in applicable legislation, decisions of regulatory authorities, technological developments, changes in website infrastructure, introduction of new digital services, information security requirements, and operational needs.',
        notes: ['Updated versions become effective upon publication on the website.']
      },
      {
        title: '12. Effective Date',
        body: 'This Cookie Policy enters into force upon publication on the official website of Yada Global.',
        notes: ['The most current version shall always be available through the Company\'s website and other communication channels deemed appropriate by Yada Global.']
      }
    ]
  },
  tr: {
    title: 'Yada Global Çerez Politikası ve Aydınlatma Metni',
    intro: 'Bu Çerez Politikası ve Aydınlatma Metni; 6698 sayılı <strong>Kişisel Verilerin Korunması Kanunu ("KVKK")</strong>, Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ, Kişisel Verileri Koruma Kurumu\'nun <strong>Çerez Uygulamaları Hakkında Rehberi</strong>, uygulanabilir olduğu ölçüde <strong>Avrupa Birliği Genel Veri Koruma Tüzüğü (General Data Protection Regulation – GDPR, Regulation (EU) 2016/679)</strong> ile uluslararası iyi uygulamalar dikkate alınarak hazırlanmıştır.',
    updatedLabel: 'Yürürlük tarihi',
    controllerLabel: 'Veri Sorumlusu',
    controllerTable: {
      headers: ['Bilgi', 'Açıklama'],
      rows: [
        ['Ticaret Unvanı', 'Yada Global Bilişim Planlama Proje Pazarlama İnşaat Sanayi ve Ticaret Limited Şirketi'],
        ['MERSİS No', '0927108427600001'],
        ['Merkez Adresi', 'Mustafa Kemal Mah. Dumlupınar Bulvarı Tepe Prime A Blok No:266 D.No:18 PK:06510 Çankaya / Ankara / Türkiye'],
        ['Web Sitesi', '<a href="http://www.yadaglb.com/" target="_blank" rel="noreferrer noopener">www.yadaglb.com</a>'],
        ['E-posta', '<a href="mailto:compliance@yadaglb.com">compliance@yadaglb.com</a>']
      ]
    },
    sections: [
      {
        title: '1. Giriş ve Veri Sorumlusunun Kimliği',
        body: 'Bu Çerez Politikası ve Aydınlatma Metni; yukarıdaki mevzuat dikkate alınarak hazırlanmıştır.'
      },
      {
        title: '2. Çerez (Cookie) Nedir?',
        body: 'Çerezler; bir internet sitesini ziyaret ettiğinizde bilgisayarınıza, cep telefonunuza, tabletinize veya diğer elektronik cihazlarınıza kaydedilen küçük metin dosyalarıdır.',
        listTitle: 'Çerezler aşağıdaki amaçlarla kullanılmaktadır:',
        items: [
          'İnternet sitesinin güvenli ve kesintisiz şekilde çalışmasını sağlamak,',
          'Kullanıcı tercih ve ayarlarını hatırlamak,',
          'Kullanıcı deneyimini geliştirmek,',
          'Web sitesinin performansını ve ziyaretçi istatistiklerini analiz etmek,',
          'Web sitesi güvenliğini ve işlevselliğini sağlamak.'
        ],
        notes: ['Çerezler cihazınızdaki dosyalara erişmez ve tek başlarına kimliğinizi belirleyemez. Ancak diğer bilgilerle birlikte kullanıldığında kişisel veri niteliği taşıyabilirler.']
      },
      {
        title: '3. Çerez Türleri',
        subsections: [
          {
            subtitle: '3.1 Sürelerine Göre',
            table: {
              headers: ['Çerez Türü', 'Açıklama'],
              rows: [
                ['Oturum Çerezleri', 'Tarayıcı açık olduğu sürece çalışan ve tarayıcı kapatıldığında otomatik olarak silinen geçici çerezlerdir.'],
                ['Kalıcı Çerezler', 'Belirlenen süre boyunca veya kullanıcı tarafından silinene kadar cihazda saklanan çerezlerdir.']
              ]
            }
          },
          {
            subtitle: '3.2 Kaynağına Göre',
            table: {
              headers: ['Çerez Türü', 'Açıklama'],
              rows: [
                ['Birinci Taraf Çerezleri', 'Doğrudan Yada Global tarafından yerleştirilen çerezlerdir.'],
                ['Üçüncü Taraf Çerezleri', 'Web sitesine entegre edilen üçüncü taraf hizmet sağlayıcıları tarafından yerleştirilen çerezlerdir.']
              ]
            }
          },
          {
            subtitle: '3.3 Kullanım Amaçlarına Göre',
            table: {
              headers: ['Çerez Türü', 'Açıklama'],
              rows: [
                ['Zorunlu (Teknik) Çerezler', 'Web sitesinin güvenli, erişilebilir ve doğru şekilde çalışması için gerekli çerezlerdir.'],
                ['İşlevsel Çerezler', 'Dil tercihi ve kullanıcı ayarları gibi tercihlerin hatırlanmasını sağlar.'],
                ['Performans ve Analitik Çerezleri', 'Web sitesinin kullanımına ilişkin istatistiksel veriler toplayarak performansın geliştirilmesine katkı sağlar.'],
                ['Reklam ve Pazarlama Çerezleri', 'Uygulanabilir mevzuat kapsamında gerekli olduğu durumlarda ve kullanıcının açık rızası doğrultusunda kişiselleştirilmiş içerik, kampanya ve reklam faaliyetlerinin yürütülmesi amacıyla kullanılabilir.']
              ]
            }
          }
        ]
      },
      {
        title: '4. Web Sitemizde Kullanılabilecek Çerezler',
        body: 'Web sitemizde kullanılan çerezler; kullanılan teknolojilere, altyapıya ve sunulan dijital hizmetlere bağlı olarak zaman içerisinde değişiklik gösterebilir.',
        table: {
          headers: ['Çerez Kategorisi', 'Kullanım Amacı', 'Saklama Süresi', 'Sağlayıcı'],
          rows: [
            ['Zorunlu (Teknik) Çerezler', 'Web sitesinin çalışması, oturum yönetimi, güvenlik, yük dengeleme ve dolandırıcılığın önlenmesi', 'Oturum süresince veya sınırlı süre', 'Birinci Taraf'],
            ['İşlevsel Çerezler', 'Dil tercihi ve kullanıcı ayarlarının hatırlanması', 'Tercih değiştirilene veya çerez süresi dolana kadar', 'Birinci Taraf'],
            ['Çerez Tercih Yönetimi Çerezleri', 'Kullanıcının çerez tercihlerini ve onay kayıtlarını saklamak', 'En fazla 12 ay', 'Birinci Taraf'],
            ['Analitik Çerezler', 'Web sitesi trafiğinin ve performansının analiz edilmesi', 'Hizmet sağlayıcının yapılandırmasına göre', 'Birinci ve/veya Üçüncü Taraf'],
            ['Üçüncü Taraf Hizmet Çerezleri', 'Entegre hizmetlerin ve gömülü içeriklerin çalışmasını sağlamak', 'İlgili hizmet sağlayıcının belirlediği süre', 'Üçüncü Taraf']
          ]
        },
        note: 'Aşağıdaki tabloda web sitemizde kullanılabilecek temel çerez kategorileri yer almaktadır.',
        footerNote: 'Yada Global, teknik altyapısında meydana gelen değişikliklere bağlı olarak çerez envanterini düzenli aralıklarla gözden geçirir ve gerektiğinde bu bölümü günceller.'
      },
      {
        title: '5. Çerezler Aracılığıyla Kişisel Verilerin İşlenmesinin Hukuki Sebebi',
        body: 'Çerezler aracılığıyla toplanan kişisel veriler elektronik ortamda otomatik yöntemlerle işlenmektedir.',
        subsections: [
          {
            subtitle: 'Zorunlu (Teknik) Çerezler',
            body: '<strong>KVKK Madde 5/2(f)</strong><br/>Veri sorumlusunun meşru menfaatleri için veri işlemenin zorunlu olması ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemesi.<br/><br/><strong>GDPR Madde 6/1(f)</strong><br/>Veri sorumlusunun meşru menfaati.'
          },
          {
            subtitle: 'İşlevsel, Analitik ve Pazarlama Çerezleri',
            body: '<strong>KVKK Madde 5/1</strong><br/>İlgili kişinin açık rızası.<br/><br/><strong>GDPR Madde 6/1(a)</strong><br/>İlgili kişinin açık rızası.<br/><br/>Verilen açık rıza, istenildiği zaman geri alınabilir. Açık rızanın geri alınması, geri alma tarihinden önce gerçekleştirilen veri işleme faaliyetlerinin hukuka uygunluğunu etkilemez.'
          }
        ]
      },
      {
        title: '6. Üçüncü Taraf Hizmetleri ve Çerezler',
        body: 'Web sitemiz, üçüncü taraf hizmet sağlayıcılarına ait çeşitli hizmetlerden yararlanabilir.',
        listTitle: 'Bunlara örnek olarak;',
        items: ['Google Analytics', 'Google Maps', 'Google Fonts', 'Microsoft Hizmetleri', 'Cloudflare', 'LinkedIn Hizmetleri', 'YouTube', 'Çevrim içi toplantı ve iş birliği platformları', 'Diğer bulut bilişim, analiz ve altyapı hizmetleri'],
        notes: ['Bu hizmet sağlayıcılar kendi gizlilik ve çerez politikaları kapsamında cihazınıza çerez yerleştirebilir.', 'Yada Global, bu üçüncü taraf hizmet sağlayıcılarının kendi sistemlerinde gerçekleştirdiği veri işleme faaliyetlerinden sorumlu değildir.', 'Kullanıcıların ilgili hizmet sağlayıcıların gizlilik ve çerez politikalarını ayrıca incelemeleri tavsiye edilir.']
      },
      {
        title: '7. Çerez Tercihlerinin Yönetimi',
        body: 'Web sitemizi ziyaret ettiğinizde size sunulan <strong>Çerez Tercih Yönetim Platformu</strong> aracılığıyla tüm çerezleri kabul edebilir, zorunlu olmayan çerezleri reddedebilir, çerez tercihlerinizi kategori bazında belirleyebilir, daha önce verdiğiniz onayı geri çekebilir ve tercihlerinizi dilediğiniz zaman güncelleyebilirsiniz.',
        notes: ['Yapılan değişiklikler kaydedildiği anda yürürlüğe girer.']
      },
      {
        title: '8. Çerezlerin Yönetilmesi ve Engellenmesi',
        body: 'Kullanıcılar ayrıca internet tarayıcıları üzerinden çerez ayarlarını yönetebilirler.',
        table: {
          headers: ['Tarayıcı', 'Çerez Yönetimi'],
          rows: [
            ['Google Chrome', 'Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Diğer Site Verileri'],
            ['Mozilla Firefox', 'Ayarlar → Gizlilik & Güvenlik → Çerezler ve Site Verileri'],
            ['Safari', 'Tercihler → Gizlilik'],
            ['Microsoft Edge', 'Ayarlar → Çerezler ve Site İzinleri']
          ]
        },
        footerNote: 'Zorunlu çerezlerin devre dışı bırakılması durumunda web sitemizin bazı bölümleri düzgün çalışmayabilir.'
      },
      {
        title: '9. İlgili Kişilerin Hakları',
        body: 'İlgili kişiler KVKK\'nın 11. maddesi ve uygulanabilir olduğu ölçüde GDPR hükümleri kapsamındaki haklarını kullanabilirler.',
        listTitle: 'Bu haklar arasında;',
        items: ['Kişisel verilerinin işlenip işlenmediğini öğrenme,', 'İşleniyorsa buna ilişkin bilgi talep etme,', 'Yanlış veya eksik verilerin düzeltilmesini isteme,', 'Şartların oluşması halinde kişisel verilerin silinmesini veya yok edilmesini isteme,', 'Hukuka aykırı veri işleme faaliyetlerine itiraz etme,', 'Kanuna aykırı veri işlenmesi nedeniyle uğranılan zararın giderilmesini talep etme']
      },
      {
        title: '10. İletişim ve Başvuru',
        body: 'Çerezler ve kişisel verilerin işlenmesine ilişkin taleplerinizi aşağıdaki kanallar aracılığıyla iletebilirsiniz.',
        contact: {
          email: 'compliance@yadaglb.com',
          address: 'Mustafa Kemal Mah. Dumlupınar Bulvarı Tepe Prime A Blok No:266 D.No:18 PK:06510 Çankaya / Ankara / Türkiye'
        },
        footerNote: 'Başvurularınız yürürlükteki mevzuat çerçevesinde değerlendirilerek sonuçlandırılır.'
      },
      {
        title: '11. Bu Çerez Politikasındaki Değişiklikler',
        body: 'Yada Global; yürürlükteki mevzuatta meydana gelen değişiklikler, düzenleyici kurum kararları, teknolojik gelişmeler, web sitesi altyapısındaki değişiklikler, yeni dijital hizmetlerin devreye alınması, bilgi güvenliği gereklilikleri ve kurumsal ihtiyaçlar doğrultusunda bu Çerez Politikasını güncelleyebilir.',
        notes: ['Güncellenen politika, internet sitesinde yayımlandığı tarihten itibaren yürürlüğe girer.']
      },
      {
        title: '12. Yürürlük',
        body: 'Bu Çerez Politikası, Yada Global\'in resmî internet sitesinde yayımlandığı tarihte yürürlüğe girer.',
        notes: ['Politikanın güncel sürümü her zaman şirketin internet sitesinde ve gerekli görülen diğer iletişim kanallarında erişime sunulur.']
      }
    ]
  }
}

const currentContent = computed(() => content[locale.value] || content.en)
const uiLabels = computed(() => ({
  noteTitle: locale.value === 'en' ? 'Notes' : 'Notlar',
  email: locale.value === 'en' ? 'E-mail' : 'E-posta',
  postalAddress: locale.value === 'en' ? 'Postal Address' : 'Posta Adresi'
}))
</script>

<template>
  <section class="page-wrapper page-content route-page cookie-policy-page">
    <div class="cookie-policy-shell">
      <div class="cookie-policy-hero">
        <div class="cookie-policy-hero-copy">
          <span class="route-page-kicker">{{ translate('policiesPage.cards.cookie.title') }}</span>
          <h1>{{ currentContent.title }}</h1>
          <p class="cookie-policy-intro" v-html="currentContent.intro"></p>
          <p class="cookie-policy-meta">
            <strong>{{ currentContent.updatedLabel }}:</strong>
            <span>08.08.2026</span>
          </p>
        </div>
        <div class="cookie-policy-hero-visual" aria-hidden="true">
          <div class="cookie-policy-graphic cookie-policy-graphic--main"></div>
          <div class="cookie-policy-graphic cookie-policy-graphic--accent"></div>
        </div>
      </div>

      <article class="cookie-policy-section cookie-policy-controller">
        <h2>{{ currentContent.controllerLabel }}</h2>
        <table class="cookie-policy-table">
          <thead>
            <tr>
              <th v-for="header in currentContent.controllerTable.headers" :key="header">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in currentContent.controllerTable.rows" :key="row[0]">
              <th scope="row">{{ row[0] }}</th>
              <td v-html="row[1]"></td>
            </tr>
          </tbody>
        </table>
      </article>

      <div class="cookie-policy-body">
        <article v-for="section in currentContent.sections" :key="section.title" class="cookie-policy-section">
          <h2>{{ section.title }}</h2>
          <p v-if="section.body" v-html="section.body"></p>
          <p v-if="section.listTitle" class="cookie-policy-list-title">{{ section.listTitle }}</p>
          <ul v-if="section.items" class="cookie-policy-list">
            <li v-for="item in section.items" :key="item" v-html="item"></li>
          </ul>

          <div v-if="section.table" class="cookie-policy-table-wrap">
            <table class="cookie-policy-table">
              <thead>
                <tr>
                  <th v-for="header in section.table.headers" :key="header">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in section.table.rows" :key="row[0]">
                  <th scope="row">{{ row[0] }}</th>
                  <td v-for="cell in row.slice(1)" :key="cell" v-html="cell"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-for="subsection in section.subsections || []" :key="subsection.subtitle" class="cookie-policy-subsection">
            <h3>{{ subsection.subtitle }}</h3>
            <p v-if="subsection.body" v-html="subsection.body"></p>
            <div v-if="subsection.table" class="cookie-policy-table-wrap">
              <table class="cookie-policy-table">
                <thead>
                  <tr>
                    <th v-for="header in subsection.table.headers" :key="header">{{ header }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in subsection.table.rows" :key="row[0]">
                    <th scope="row">{{ row[0] }}</th>
                    <td>{{ row[1] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p v-if="section.note" class="cookie-policy-note">{{ section.note }}</p>
          <p v-if="section.footerNote" class="cookie-policy-note">{{ section.footerNote }}</p>

          <div v-if="section.contact" class="cookie-policy-contact-card">
            <p><strong>{{ uiLabels.email }}</strong></p>
            <p><a :href="`mailto:${section.contact.email}`">{{ section.contact.email }}</a></p>
            <p><strong>{{ uiLabels.postalAddress }}</strong></p>
            <p>{{ section.contact.address }}</p>
          </div>

          <p v-if="section.notes && section.notes.length" class="cookie-policy-note-list-title">{{ uiLabels.noteTitle }}</p>
          <ul v-if="section.notes && section.notes.length" class="cookie-policy-note-list">
            <li v-for="note in section.notes" :key="note" v-html="note"></li>
          </ul>
        </article>
      </div>

      <div class="cookie-policy-footer">
        <router-link to="/" class="cookie-policy-back">{{ translate('nav.about') }}</router-link>
      </div>
    </div>
  </section>
</template>