<script setup>
import { computed } from 'vue'
import { translate } from '../i18n.js'
import { locale } from '../i18n.js'

const contactContent = computed(() => {
  if (locale.value === 'tr') {
    return {
      kicker: 'İletişim',
      title: 'Yada Global ile İletişime Geçin',
      intro:
        'Bir proje, iş birliği veya bilgi talebi için ekibimizle doğrudan iletişime geçebilirsiniz. Kurumsal ihtiyaçlarınıza uygun çözüm modelini birlikte planlayalım.',
      cards: [
        {
          icon: '📍',
          title: 'Açık Adres',
          text: 'Tepe Prime İş Merkezi, Mustafa Kemal Mahallesi, Dumlupınar Bulvarı No:266, Çankaya/Ankara, Türkiye',
          href: 'https://maps.google.com/?q=Tepe+Prime+Is+Merkezi+Mustafa+Kemal+Mahallesi+Dumlupinar+Bulvari+No+266+Cankaya+Ankara'
        },
        {
          icon: '☎️',
          title: 'Telefon / Faks',
          items: [
            {
              label: 'TEL: +90 312 945 47 78',
              href: 'tel:+903129454778'
            },
            {
              label: 'FAX: +90 850 522 34 03',
              href: 'tel:+908505223403'
            }
          ]
        },
        {
          icon: '✉️',
          title: 'E-Posta',
          text: 'info@yadaglb.com',
          href: 'mailto:info@yadaglb.com'
        }
      ],
      mapTitle: 'Harita',
      servicesLabel: 'Hizmetlerimizi İnceleyin',
      mapAction: 'Haritada Aç'
    }
  }

  return {
    kicker: 'Contact',
    title: 'Get in Touch with Yada Global',
    intro:
      'Reach our team directly for projects, partnerships, or information requests. Let us plan the right solution model for your institutional needs together.',
    cards: [
      {
        icon: '📍',
        title: 'Open Address',
        text: 'Tepe Prime Business Center, Mustafa Kemal District, Dumlupinar Boulevard No:266, Cankaya/Ankara, Turkiye',
        href: 'https://maps.google.com/?q=Tepe+Prime+Business+Center+Mustafa+Kemal+District+Dumlupinar+Boulevard+No+266+Cankaya+Ankara'
      },
      {
        icon: '☎️',
        title: 'Telephone / Fax',
        items: [
          {
            label: 'TEL: +90 312 945 47 78',
            href: 'tel:+903129454778'
          },
          {
            label: 'FAX: +90 850 522 34 03',
            href: 'tel:+908505223403'
          }
        ]
      },
      {
        icon: '✉️',
        title: 'E-mail',
        text: 'info@yadaglb.com',
        href: 'mailto:info@yadaglb.com'
      }
    ],
    mapTitle: 'Map',
    servicesLabel: 'Explore Our Services',
    mapAction: 'Open in Maps'
  }
})
</script>

<template>
  <section class="page-wrapper page-content route-page contact-page-shell">
    <header class="contact-hero-card">
      <div class="contact-hero-copy">
        <h1>{{ contactContent.title }}</h1>
        <p>{{ contactContent.intro }}</p>
        <router-link to="/services" class="route-page-link services-link-bold">{{ contactContent.servicesLabel }}</router-link>
      </div>
      <img src="/images/iletisim.png" alt="" class="contact-hero-visual" aria-hidden="true" />
    </header>

    <section class="contact-info-grid">
      <article v-for="card in contactContent.cards" :key="card.title" class="contact-info-card">
        <p class="contact-info-icon">{{ card.icon }}</p>
        <h2>{{ card.title }}</h2>
        <div v-if="card.items" class="contact-info-links">
          <a v-for="item in card.items" :key="item.label" :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined">
            {{ item.label }}
          </a>
        </div>
        <p v-if="!card.href">{{ card.text }}</p>
        <a v-else :href="card.href" :target="card.href.startsWith('http') ? '_blank' : undefined" :rel="card.href.startsWith('http') ? 'noopener noreferrer' : undefined">{{ card.text }}</a>
      </article>
    </section>

    <section class="contact-map-card" :aria-label="contactContent.mapTitle">
      <iframe
        title="Yada Global Location"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Tepe+Prime,+Ankara&output=embed"
      ></iframe>
    </section>

    <a
      class="route-page-link"
      href="https://maps.google.com/?q=Tepe+Prime+Is+Merkezi+Mustafa+Kemal+Mahallesi+Dumlupinar+Bulvari+No+266+Cankaya+Ankara"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ contactContent.mapAction }}
    </a>

  </section>
</template>
