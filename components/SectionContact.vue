<script setup lang="ts">
const email = 'giuliacenzato.psicologa@gmail.com'
const phoneDisplay = '+39 346 857 4736'
const phoneHref = '+393468574736'
</script>

<template>
  <section id="contatti" class="contact" aria-labelledby="contact-heading">
    <div class="contact__inner">
      <div class="contact__layout">
        <div class="contact__map">
          <img
            class="contact__map-img"
            src="/contact-map.jpg"
            width="1024"
            height="925"
            alt="Mappa dello studio vicino a Strada Romana, Pietole (MN), con segnaposto sulla zona."
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="contact__panel">
          <h2 id="contact-heading" class="contact__title">Contatti</h2>
          <p class="contact__intro">
            Contattami per prenotare un primo colloquio o per ricevere maggiori
            informazioni sui servizi offerti.
          </p>
          <div class="contact__rule" role="presentation" />

          <ul class="contact__list">
            <li class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div class="contact__row-body">
                <span class="contact__row-label">Email</span>
                <a class="contact__row-value" :href="`mailto:${email}`">{{ email }}</a>
              </div>
            </li>
            <li class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div class="contact__row-body">
                <span class="contact__row-label">Telefono</span>
                <a class="contact__row-value" :href="`tel:${phoneHref}`">{{ phoneDisplay }}</a>
              </div>
            </li>
            <li class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 8c-1.657 0-3 1.194-3 2.667 0 2 3 5.333 3 5.333s3-3.333 3-5.333C15 9.194 13.657 8 12 8z" />
                  <circle cx="12" cy="10.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <div class="contact__row-body">
                <span class="contact__row-label">Studio</span>
                <p class="contact__row-value contact__row-value--plain">
                  Strada Romana 109, Pietole, 46034 (MN)
                </p>
              </div>
            </li>
            <li class="contact__row">
              <span class="contact__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 18v3" />
                  <circle cx="9" cy="10" r="1.5" />
                  <path d="M13 12h4" />
                  <path d="M13 9h2" />
                </svg>
              </span>
              <div class="contact__row-body">
                <span class="contact__row-label">Modalità</span>
                <p class="contact__row-value contact__row-value--plain">
                  In presenza e Online
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--space-xl) var(--space-md);
  scroll-margin-top: 5rem;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.contact__inner {
  max-width: var(--wide-max);
  margin: 0 auto;
}

.contact__layout {
  display: grid;
  gap: var(--space-lg);
  align-items: center;
}

@media (min-width: 768px) {
  .contact__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-xl);
    align-items: start;
  }
}

.contact__map {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #e8e8e8;
  line-height: 0;
}

.contact__map-img {
  display: block;
  width: 100%;
  height: auto;
}

.contact__title {
  font-family: var(--font-serif);
  font-size: clamp(1.85rem, 3.2vw, 3rem);
  font-weight: 400;
  margin: 0 0 var(--space-sm);
  color: var(--color-text);
  letter-spacing: 0.01em;
}

.contact__intro {
  margin: 0 0 var(--space-md);
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.55;
  max-width: 28rem;
}

.contact__rule {
  height: 1px;
  max-width: 12rem;
  margin: 0 0 var(--space-lg);
  background: var(--color-border);
  border: none;
}

.contact__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact__row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.contact__icon {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  color: var(--color-text);
  opacity: 0.85;
}

.contact__icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.contact__row-body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.contact__row-label {
  font-family: var(--font-serif);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
}

.contact__row-value {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  color: var(--color-text);
  word-break: break-word;
  line-height: 1.35;
}

.contact__row-value:hover {
  color: var(--color-accent-hover);
}

.contact__row-value--plain {
  color: var(--color-text);
  font-weight: 400;
  margin: 0;
}
</style>
