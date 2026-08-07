<script setup>
import { computed, ref } from 'vue'
import { translate } from '../i18n.js'

const selectedAboutSection = ref('profile')

const aboutTabs = [
  { key: 'profile', labelKey: 'about.profileTab' },
  { key: 'approach', labelKey: 'about.approachTab' },
  { key: 'policies', labelKey: 'about.policiesTab' }
]

const heroCards = [
  {
    titleKeys: ['hero.card1.0', 'hero.card1.1', 'hero.card1.2'],
    image: 'https://sampas.com.tr/uploads/2023/10/dijital-ikiz.jpg.webp',
    link: '/digital-teknolojiler-ve-yazilim-cozumleri'
  },
  {
    titleKeys: ['hero.card2.0', 'hero.card2.1', 'hero.card2.2'],
    image: 'https://sampas.com.tr/uploads/2026/01/deprem.jpg.webp',
    link: '/akilli-kentler-ve-surdurulebilir-sehircilik'
  },
  {
    titleKeys: ['hero.card3.0', 'hero.card3.1', 'hero.card3.2'],
    image: 'https://sampas.com.tr/uploads/2023/10/46-1-2.jpg.webp',
    link: '/uluslararasi-projeler-ve-stratejik-finansman'
  }
]

const sectionImage = computed(() => {
  if (selectedAboutSection.value === 'approach') {
    return 'https://sampas.com.tr/uploads/2023/10/46-1-2.jpg.webp'
  }

  if (selectedAboutSection.value === 'policies') {
    return 'https://sampas.com.tr/uploads/2024/01/policy-hero.jpg.webp'
  }

  return 'https://sampas.com.tr/uploads/2023/10/dijital-ikiz.jpg.webp'
})

const expertiseItems = [
  { icon: 'gis', labelKey: 'expertise.gis' },
  { icon: 'software', labelKey: 'expertise.software' },
  { icon: 'ai', labelKey: 'expertise.ai' },
  { icon: 'cybersecurity', labelKey: 'expertise.cybersecurity' },
  { icon: 'smartCity', labelKey: 'expertise.smartCity' },
  { icon: 'sustainable', labelKey: 'expertise.sustainablePlanning' },
  { icon: 'international', labelKey: 'expertise.internationalProjects' }
]

const complianceSections = [
  {
    key: 'dataProtection',
    number: '01',
    titleKey: 'policiesPage.sections.dataProtection.title',
    subtitleKey: 'policiesPage.sections.dataProtection.subtitle',
    cards: [
      {
        icon: 'shield-lock',
        titleKey: 'policiesPage.cards.kvkk.title',
        descriptionKey: 'policiesPage.cards.kvkk.description',
        badgeKey: 'policiesPage.badges.pdf',
        buttonKey: 'policiesPage.buttons.pdfView',
        hrefKey: 'policiesPage.links.kvkk',
        external: true
      },
      {
        icon: 'cookie',
        titleKey: 'policiesPage.cards.cookie.title',
        descriptionKey: 'policiesPage.cards.cookie.description',
        badgeKey: 'policiesPage.badges.web',
        buttonKey: 'policiesPage.buttons.review',
        hrefKey: 'policiesPage.links.cookie',
        external: false
      }
    ]
  },
  {
    key: 'equalityEthics',
    number: '02',
    titleKey: 'policiesPage.sections.equalityEthics.title',
    subtitleKey: 'policiesPage.sections.equalityEthics.subtitle',
    cards: [
      {
        icon: 'users',
        titleKey: 'policiesPage.cards.gep.title',
        descriptionKey: 'policiesPage.cards.gep.description',
        badgeKey: 'policiesPage.badges.pdf',
        buttonKey: 'policiesPage.buttons.pdfView',
        hrefKey: 'policiesPage.links.gep',
        external: true
      },
      {
        icon: 'diversity',
        titleKey: 'policiesPage.cards.dei.title',
        descriptionKey: 'policiesPage.cards.dei.description',
        badgeKey: 'policiesPage.badges.pdf',
        buttonKey: 'policiesPage.buttons.pdfView',
        hrefKey: 'policiesPage.links.dei',
        external: true
      },
      {
        icon: 'balance-scale',
        titleKey: 'policiesPage.cards.ethics.title',
        descriptionKey: 'policiesPage.cards.ethics.description',
        badgeKey: 'policiesPage.badges.pdf',
        buttonKey: 'policiesPage.buttons.pdfView',
        hrefKey: 'policiesPage.links.ethics',
        external: true
      }
    ]
  },
  {
    key: 'sustainability',
    number: '03',
    titleKey: 'policiesPage.sections.sustainability.title',
    subtitleKey: 'policiesPage.sections.sustainability.subtitle',
    cards: [
      {
        icon: 'leaf',
        titleKey: 'policiesPage.cards.environment.title',
        descriptionKey: 'policiesPage.cards.environment.description',
        badgeKey: 'policiesPage.badges.pdf',
        buttonKey: 'policiesPage.buttons.pdfView',
        hrefKey: 'policiesPage.links.environment',
        external: true
      }
    ]
  }
]

const navLinks = [
  { label: 'Kurumsal', href: '/services' },
  { label: 'Çözümler', href: '/contact' },
  { label: 'AR-GE', href: '/cookie-policy' },
  { label: 'Kariyer', href: '/services' },
  { label: 'Medya', href: '/contact' },
  { label: 'İLETİŞİM', href: '/contact' }
]

const selectAboutSection = (key) => {
  selectedAboutSection.value = key
}
</script>

<template>
  <div class="page-wrapper page-content">
    <section class="hero-section">
      <div class="hero-grid">
        <article v-for="card in heroCards" :key="card.titleKeys.join('-')" class="hero-card">
          <router-link :to="card.link" class="hero-link">
            <div class="hero-image" :style="{ backgroundImage: `url(${card.image})` }"></div>
            <div class="hero-overlay">
              <h2 class="hero-title">
                <template v-for="key in card.titleKeys" :key="key">
                  <span>{{ translate(key) }}</span>
                </template>
              </h2>
            </div>
          </router-link>
        </article>
      </div>
    </section>

    <section class="about-section" aria-labelledby="about-heading">
      <h2 id="about-heading" class="section-title">{{ translate('about.heading') }}</h2>

      <div class="about-tabs" role="tablist" aria-label="About section tabs">
        <button
          v-for="tab in aboutTabs"
          :key="tab.key"
          type="button"
          class="about-tab"
          :class="{ active: selectedAboutSection === tab.key }"
          @click="selectAboutSection(tab.key)"
          role="tab"
          :aria-selected="selectedAboutSection === tab.key"
        >
          {{ translate(tab.labelKey) }}
        </button>
      </div>

      <div v-if="selectedAboutSection === 'policies'" class="compliance-page">
        <div class="compliance-hero">
          <div class="compliance-hero-copy">
            <h3 class="company-profile-heading">{{ translate('policiesPage.heading') }}</h3>
            <div class="company-profile-body">
              <p>{{ translate('policiesPage.description') }}</p>
              <p class="compliance-hero-note">{{ translate('policiesPage.heroNote') }}</p>
            </div>
          </div>
          <div class="compliance-hero-visual" aria-hidden="true">
            <div class="compliance-hero-illustration">
              <div class="compliance-hero-shield">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
                  <path d="M32 4l22 8v14c0 16-10 26-22 32-12-6-22-16-22-32V12l22-8Z" />
                  <path d="M26 28h12" />
                  <path d="M32 28v12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div v-for="section in complianceSections" :key="section.key" class="compliance-section">
          <div class="compliance-section-header">
            <div class="compliance-section-number">{{ section.number }}</div>
            <div class="compliance-section-meta">
              <h3 class="compliance-section-heading">{{ translate(section.titleKey) }}</h3>
              <p class="compliance-section-subtitle">{{ translate(section.subtitleKey) }}</p>
            </div>
          </div>
          <div class="compliance-card-grid">
            <article v-for="card in section.cards" :key="card.titleKey" class="compliance-card">
              <div class="compliance-card-icon" aria-hidden="true">
                <svg v-if="card.icon === 'shield-lock'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6c8 0 14 4 14 10v4h4v14c0 8-6 14-14 14S10 42 10 34V20h4v-4c0-6 6-10 14-10Z" />
                  <rect x="18" y="26" width="12" height="10" rx="5" />
                  <path d="M24 26v-6" />
                </svg>
                <svg v-else-if="card.icon === 'cookie'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6c10 0 18 8 18 18 0 10-8 18-18 18-10 0-18-8-18-18C6 14 14 6 24 6Z" />
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="30" cy="14" r="2" />
                  <circle cx="28" cy="28" r="2" />
                </svg>
                <svg v-else-if="card.icon === 'users'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="23" cy="16" r="8" />
                  <path d="M10 42c0-7 6-12 13-12s13 5 13 12" />
                  <path d="M35 16c0 4-3 7-8 7" />
                </svg>
                <svg v-else-if="card.icon === 'diversity'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="18" r="6" />
                  <circle cx="32" cy="18" r="6" />
                  <path d="M10 36c0-4 4-8 8-8s8 4 8 8" />
                  <path d="M24 30h8" />
                </svg>
                <svg v-else-if="card.icon === 'balance-scale'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 10v28" />
                  <path d="M14 34h20" />
                  <path d="M16 34c-2-8 0-12 8-12s10 4 8 12" />
                  <path d="M10 18h10" />
                  <path d="M38 18h-10" />
                </svg>
                <svg v-else-if="card.icon === 'leaf'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M24 6c10 8 14 14 14 22 0 6-4 12-10 14" />
                  <path d="M24 6c-10 8-14 14-14 22 0 6 4 12 10 14" />
                  <path d="M24 6v34" />
                </svg>
              </div>
              <div class="compliance-card-copy">
                <span class="compliance-badge">{{ translate(card.badgeKey) }}</span>
                <h4>{{ translate(card.titleKey) }}</h4>
                <p>{{ translate(card.descriptionKey) }}</p>
                <router-link v-if="!card.external" :to="translate(card.hrefKey)" class="compliance-button">
                  {{ translate(card.buttonKey) }}
                  <span aria-hidden="true">→</span>
                </router-link>
                <a v-else :href="translate(card.hrefKey)" class="compliance-button" target="_blank" rel="noreferrer noopener">
                  {{ translate(card.buttonKey) }}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>

        <div class="compliance-footer">
          <div class="compliance-footer-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="24" cy="24" r="20" />
              <path d="M24 16v12" />
              <path d="M24 34h.01" />
            </svg>
          </div>
          <div>
            <h4>{{ translate('policiesPage.footer.title') }}</h4>
            <p>{{ translate('policiesPage.footer.text') }}</p>
          </div>
        </div>
      </div>

      <div v-else class="company-profile-section">
        <div class="company-profile-copy">
          <span class="company-profile-label">{{ translate('companyProfile.title') }}</span>
          <h3 class="company-profile-heading">
            {{ selectedAboutSection === 'profile'
              ? translate('companyProfile.tagline')
              : translate(`about.${selectedAboutSection}`) }}
          </h3>
          <div class="company-profile-body">
            <template v-if="selectedAboutSection === 'profile'">
              <p v-html="translate('companyProfile.paragraphs.p1')"></p>
              <p v-html="translate('companyProfile.paragraphs.p2')"></p>
              <p v-html="translate('companyProfile.paragraphs.p3')"></p>
              <p v-html="translate('companyProfile.paragraphs.p4')"></p>
            </template>
            <template v-else-if="selectedAboutSection === 'approach'">
              <div class="approach-copy">
                <p v-html="translate('approachPage.intro1')"></p>
                <p v-html="translate('approachPage.intro2')"></p>
              </div>
              <div class="approach-points">
                <article
                  v-for="(card, index) in translate('approachPage.cards')"
                  :key="card.title"
                  class="approach-point"
                >
                  <div class="approach-point-number">{{ index + 1 }}</div>
                  <div class="approach-point-content">
                    <h4>{{ card.title }}</h4>
                    <p>{{ card.description }}</p>
                  </div>
                </article>
              </div>
            </template>
            <template v-else>
              <p>{{ translate('about.policiesDescription') }}</p>
            </template>
          </div>
        </div>

        <div class="company-profile-visual">
          <template v-if="selectedAboutSection === 'approach'">
            <div class="approach-visuals">
              <div class="approach-visual-card approach-visual-card--large" :style="{ backgroundImage: `url(${sectionImage})` }"></div>
            </div>
          </template>
          <template v-else>
            <div class="company-profile-image" :style="{ backgroundImage: `url(${sectionImage})` }"></div>
            <div class="company-feature-panel">
              <div class="company-feature-grid">
                <template v-if="selectedAboutSection === 'profile'">
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('companyProfile.features.experience.title') }}</h4>
                      <p>{{ translate('companyProfile.features.experience.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('companyProfile.features.holistic.title') }}</h4>
                      <p>{{ translate('companyProfile.features.holistic.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('companyProfile.features.technologies.title') }}</h4>
                      <p>{{ translate('companyProfile.features.technologies.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('companyProfile.features.impact.title') }}</h4>
                      <p>{{ translate('companyProfile.features.impact.description') }}</p>
                    </div>
                  </article>
                </template>
                <template v-else>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('about.policiesCards.0.title') }}</h4>
                      <p>{{ translate('about.policiesCards.0.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('about.policiesCards.1.title') }}</h4>
                      <p>{{ translate('about.policiesCards.1.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('about.policiesCards.2.title') }}</h4>
                      <p>{{ translate('about.policiesCards.2.description') }}</p>
                    </div>
                  </article>
                  <article class="company-feature-card">
                    <div>
                      <h4>{{ translate('about.policiesCards.3.title') }}</h4>
                      <p>{{ translate('about.policiesCards.3.description') }}</p>
                    </div>
                  </article>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-if="selectedAboutSection === 'approach'" class="approach-banner">
        <div class="approach-banner-icon">Y</div>
        <p v-html="translate('approachPage.banner')"></p>
      </div>
    </section>

    <section class="expertise-section" aria-labelledby="expertise-heading">
      <h2 id="expertise-heading" class="section-title">{{ translate('expertise.heading') }}</h2>
      <div class="expertise-grid">
        <article v-for="item in expertiseItems" :key="item.labelKey" class="expertise-card">
          <p>{{ translate(item.labelKey) }}</p>
        </article>
      </div>
    </section>

    <nav class="site-nav" aria-label="Ana sayfa menüsü">
      <router-link v-for="item in navLinks" :key="item.label" :to="item.href" class="site-nav-link">
        <span>{{ item.label }}</span>
        <span class="nav-arrow">→</span>
      </router-link>
    </nav>
  </div>
</template>
