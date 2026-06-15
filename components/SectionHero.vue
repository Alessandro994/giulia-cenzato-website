<script setup lang="ts">
const heroSrc = ref('/hero.png')

function onHeroError() {
  if (heroSrc.value !== '/hero-placeholder.svg') {
    heroSrc.value = '/hero-placeholder.svg'
  }
}
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__grid">
      <div class="hero__copy">
        <h2 class="hero__eyebrow">Dove inizia il cambiamento</h2>
        <h1 id="hero-heading" class="hero__title">
          Un percorso di psicoterapia per conoscere meglio sé stessi, affrontare
          le difficoltà e trasformarle in opportunità di crescita.
          <span class="hero__title-role">
            Dr.ssa Giulia Cenzato - Psicologa e Psicoterapeuta in formazione
          </span>
        </h1>
        <div class="hero__body">
          <p>
            Nel mio lavoro accompagno le persone in un percorso di maggiore
            consapevolezza di sé, aiutandole a rafforzare la fiducia nelle
            proprie risorse e nella capacità di affrontare le sfide della vita.
          </p>
          <p>
            Offro uno spazio di ascolto empatico, professionale e privo di
            giudizio, in cui poter ritrovare equilibrio, comprensione e
            benessere duraturo.
          </p>
        </div>
      </div>
      <figure class="hero__figure">
        <div class="hero__frame">
          <img
            class="hero__img"
            :src="heroSrc"
            width="923"
            height="1024"
            alt="Illustrazione astratta con forme geometriche colorate"
            loading="eager"
            decoding="async"
            @error="onHeroError"
          />
        </div>
      </figure>
    </div>
    <div class="hero__bottom">
      <div class="hero__bottom-inner">
        <hr class="hero__rule" />
        <div class="hero__contact">
          <a
            class="hero__contact-link"
            href="mailto:giuliacenzato.psicologa@gmail.com"
          >
            <span class="hero__contact-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hero__contact-svg"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="m2 7 10 6.5L22 7" />
              </svg>
            </span>
            <span class="hero__contact-text"
              >giuliacenzato.psicologa@gmail.com</span
            >
          </a>
          <a class="hero__contact-link" href="tel:+393468574736">
            <span class="hero__contact-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hero__contact-svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.34 1.7.65 2.5a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.8.31 1.64.53 2.5.65A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </span>
            <span class="hero__contact-text">+39 346 857 4736</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-xl) var(--space-md);
  background: var(--color-hero-bg);
}

.hero__grid {
  max-width: var(--wide-max);
  margin: 0 auto;
  display: grid;
  gap: var(--space-xl);
  align-items: start;
}

@media (max-width: 959.98px) {
  .hero__figure {
    order: -1;
  }
}

@media (min-width: 960px) {
  .hero__grid {
    /* Testo ~55%, illustrazione ~45% */
    grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.88fr);
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;
  }
}

.hero__copy {
  max-width: 38rem;
  text-align: left;
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: 400;
  line-height: 1.38;
  margin: 0 0 1.5rem;
  color: var(--color-text);
}

.hero__eyebrow {
  font-family: var(--font-serif);
  font-size: clamp(2.25rem, 4.8vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0 0 1rem;
  color: var(--color-text);
}

.hero__title-role {
  display: block;
  margin-top: 0.75rem;
}

.hero__body {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
}

.hero__body p {
  margin: 0 0 1rem;
}

.hero__body p:last-child {
  margin-bottom: 0;
}

.hero__bottom {
  margin-top: var(--space-lg);
}

.hero__bottom-inner {
  max-width: var(--wide-max);
  margin: 0 auto;
}

.hero__rule {
  margin: 0;
  border: none;
  border-top: 1px solid var(--color-border);
}

.hero__contact {
  margin-top: var(--space-sm);
  font-family: var(--font-sans);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.65rem;
}

.hero__contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  max-width: 100%;
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: right;
  transition: color 0.2s ease;
}

.hero__contact-link:hover {
  color: var(--color-accent-hover);
}

.hero__contact-link:hover .hero__contact-icon {
  color: var(--color-accent-hover);
}

.hero__contact-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.hero__contact-svg {
  width: 1.125rem;
  height: 1.125rem;
}

.hero__contact-text {
  min-width: 0;
  word-break: break-word;
}

.hero__figure {
  margin: 0;
  justify-self: center;
  width: min(100%, 440px);
}

@media (min-width: 960px) {
  .hero__figure {
    justify-self: end;
    width: 100%;
    max-width: 420px;
  }
}

.hero__frame {
  border-radius: 0;
  overflow: hidden;
  background: var(--color-hero-bg);
}

.hero__img {
  width: 100%;
  height: auto;
  aspect-ratio: 923 / 1024;
  object-fit: contain;
  object-position: center;
  display: block;
}
</style>
