<script setup>
import { computed } from 'vue'
import { translate } from '../i18n.js'
import { locale } from '../i18n.js'

const serviceCards = computed(() => {
  if (locale.value === 'tr') {
    return [
      {
        title: 'Dijital Teknolojiler ve Yazılım Çözümleri',
        description: 'CBS, yapay zeka ve siber güvenlik ekseninde ölçeklenebilir dönüşüm altyapıları.',
        link: '/digital-teknolojiler-ve-yazilim-cozumleri'
      },
      {
        title: 'Akıllı Kentler ve Sürdürülebilir Şehircilik',
        description: 'Planlama, dijital ikiz ve yeşil dönüşüm odaklı uçtan uca şehircilik çözümleri.',
        link: '/akilli-kentler-ve-surdurulebilir-sehircilik'
      },
      {
        title: 'Uluslararası Projeler ve Stratejik Finansman',
        description: 'AB projeleri, ihale yönetimi ve uluslararası yatırım finansmanı danışmanlığı.',
        link: '/uluslararasi-projeler-ve-stratejik-finansman'
      }
    ]
  }

  return [
    {
      title: 'Digital Technologies and Software Solutions',
      description: 'Scalable transformation infrastructure across GIS, AI, and cybersecurity.',
      link: '/digital-teknolojiler-ve-yazilim-cozumleri'
    },
    {
      title: 'Smart Cities and Sustainable Urbanism',
      description: 'End-to-end urban solutions across planning, digital twin, and green transition.',
      link: '/akilli-kentler-ve-surdurulebilir-sehircilik'
    },
    {
      title: 'International Projects and Strategic Finance',
      description: 'EU projects, bid management, and international investment finance advisory.',
      link: '/uluslararasi-projeler-ve-stratejik-finansman'
    }
  ]
})
</script>

<template>
  <section class="page-wrapper page-content route-page">
    <div class="services-hub">
      <h1>{{ translate('servicesPage.heading') }}</h1>
      <p>{{ translate('servicesPage.description') }}</p>

      <div class="services-hub-grid">
        <article v-for="card in serviceCards" :key="card.link" class="services-hub-card">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
          <router-link :to="card.link" class="services-hub-link">
            {{ locale === 'tr' ? 'Sayfayı Aç' : 'Open Page' }}
            <span aria-hidden="true">→</span>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>
