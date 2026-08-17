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
    image: '/images/digital-technologies-software-solutions.png',
    link: '/digital-teknolojiler-ve-yazilim-cozumleri'
  },
  {
    titleKeys: ['hero.card2.0', 'hero.card2.1', 'hero.card2.2'],
    image: '/images/smart-cities-and-sustainable-urbanism.png',
    link: '/akilli-kentler-ve-surdurulebilir-sehircilik'
  },
  {
    titleKeys: ['hero.card3.0', 'hero.card3.1', 'hero.card3.2'],
    image: '/images/international-projects-and-strategic-finance.png',
    link: '/uluslararasi-projeler-ve-stratejik-finansman'
  }
]

const sectionImage = computed(() => {
  if (selectedAboutSection.value === 'approach') {
    return '/images/approach.png'
  }

  if (selectedAboutSection.value === 'policies') {
    return '/images/values.png'
  }

  return '/images/company.png'
})

const expertiseItems = [
  { image: 'geographic-information-systems-gis.png', labelKey: 'expertise.gis' },
  { image: 'software-development.png', labelKey: 'expertise.software' },
  { image: 'artificial-intelligence-solutions.png', labelKey: 'expertise.ai' },
  { image: 'cybersecurity-solutions.png', labelKey: 'expertise.cybersecurity' },
  { image: 'smart-city-technologies.png', labelKey: 'expertise.smartCity' },
  { image: 'sustainable-planning.png', labelKey: 'expertise.sustainablePlanning' },
  { image: 'international-project-development.png', labelKey: 'expertise.internationalProjects' }
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
            <div class="hero-image">
              <img
                :src="card.image"
                :alt="translate(card.titleKeys[0])"
                :loading="card === heroCards[0] ? 'eager' : 'lazy'"
                :fetchpriority="card === heroCards[0] ? 'high' : 'low'"
              />
            </div>
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
              <p v-html="translate('policiesPage.description')"></p>
              <p class="compliance-hero-note" v-html="translate('policiesPage.heroNote')"></p>
            </div>
          </div>
          <div class="compliance-hero-visual" aria-hidden="true">
            <div class="compliance-visual-card" :style="{ backgroundImage: `url(${sectionImage})` }"></div>
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
              <p class="approach-banner-text" v-html="translate('approachPage.banner')"></p>
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
    </section>

    <section class="expertise-section" aria-labelledby="expertise-heading">
      <h2 id="expertise-heading" class="section-title">{{ translate('expertise.heading') }}</h2>
      <div class="expertise-grid">
        <article v-for="item in expertiseItems" :key="item.labelKey" class="expertise-card">
          <div class="expertise-title-area">
            <p>{{ translate(item.labelKey) }}</p>
          </div>
          <div class="expertise-icon-area">
            <img
              :src="`/images/${item.image}`"
              :alt="translate(item.labelKey)"
              class="expertise-icon-img"
            />
          </div>
        </article>
      </div>
    </section>

  </div>
</template>
