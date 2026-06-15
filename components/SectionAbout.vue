<script setup lang="ts">
const portraitSrc = ref("/chi-sono.png");

function onPortraitError() {
  if (portraitSrc.value !== "/hero-placeholder.svg") {
    portraitSrc.value = "/hero-placeholder.svg";
  }
}
</script>

<template>
  <section
    id="chi-sono"
    class="section section--about"
    aria-labelledby="about-heading"
  >
    <div class="section__inner">
      <div class="about__panel">
        <h2 id="about-heading" class="section__title">Chi sono</h2>
        <div class="about__grid">
          <figure class="about__figure">
            <div class="about__portrait">
              <img
                class="about__img"
                :src="portraitSrc"
                width="734"
                height="980"
                alt="Ritratto della Dr.ssa Giulia Cenzato, psicologa"
                loading="lazy"
                decoding="async"
                @error="onPortraitError"
              />
            </div>
          </figure>
          <div class="section__prose">
            <p>
              <b>Piacere di conoscerti!</b> Sono la Dr.ssa
              <b>Giulia Cenzato</b>, psicologa iscritta all’Ordine della Regione
              Lombardia (n. di iscrizione 26922) e specializzanda in
              <b>Psicoterapia Cognitivo – Comportamentale presso</b> la scuola
              ASIPSE di Milano.
            </p>
            <p>
              Ho conseguito con lode la laurea triennale in
              <b>Scienze Psicologiche, Cognitive e Psicobiologiche</b> e la
              laurea magistrale in <b>Psicologia Clinica presso</b> l’Università
              degli Studi di Padova. Dopo la laurea, ho approfondito lo studio
              del funzionamento cognitivo individuale, attraverso un
              <b>Master</b> dedicato alla
              <b
                >valutazione e alla riabilitazione neuropsicologica nel ciclo di
                vita</b
              >.
            </p>
            <p>
              Ho inoltre collaborato con l’Azienda Ospedaliera «Carlo Poma» di
              Mantova, all’interno della <b>Psicologia Clinica</b>, delle
              <b>Cure Palliative</b> e, attualmente, del
              <b>Dipartimento di Salute Mentale</b>.
            </p>
            <p>
              Queste esperienze mi hanno permesso di confrontarmi con contesti
              clinici e bisogni psicologici differenti e di comprendere quanto
              sia importante creare uno spazio sicuro e accogliente, dove la
              persona possa sentirsi ascoltata e supportata nei momenti di
              fragilità. Nel 2024 ho avviato la mia attività privata come
              <b>psicologa</b>.
            </p>
            <p class="about__cta-wrap">
              <a href="#il-mio-approccio" class="about__cta">Il mio approccio</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: var(--space-xl) var(--space-md);
  scroll-margin-top: 5rem;
}

.section--about {
  background: var(--color-bg);
}

.section__inner {
  max-width: var(--wide-max);
  margin: 0 auto;
}

.about__panel {
  background: #f5f2e8;
  border-radius: var(--radius-lg);
  padding: var(--space-lg) var(--space-md);
  overflow: hidden;
}

@media (min-width: 768px) {
  .about__panel {
    padding: var(--space-xl) var(--space-lg);
  }
}

.section__title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: 400;
  margin: 0 0 var(--space-lg);
  color: var(--color-text);
  text-align: center;
}

.about__grid {
  display: grid;
  gap: var(--space-lg);
  align-items: start;
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: minmax(280px, 400px) minmax(0, 1fr);
    gap: var(--space-xl);
    align-items: center;
  }
}

.about__figure {
  --portrait-mat: 24px;
  margin: 0;
  justify-self: center;
  width: min(100%, 360px);
}

@media (min-width: 768px) {
  .about__figure {
    justify-self: start;
    width: 100%;
  }
}

/* White mat via padding; same corner radius as .about__panel */
.about__portrait {
  background: #fff;
  padding: var(--portrait-mat);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-sizing: border-box;
}

.about__img {
  width: 100%;
  height: auto;
  aspect-ratio: 734 / 980;
  object-fit: contain;
  object-position: center top;
  display: block;
  border-radius: var(--radius-lg);
}

.section__prose {
  max-width: var(--content-max);
  color: var(--color-text);
  font-size: 1.125rem;
  line-height: 1.7;
}

.section__prose p {
  margin: 0 0 var(--space-sm);
}

.section__prose p:last-child:not(.about__cta-wrap) {
  margin-bottom: 0;
}

.about__cta-wrap {
  margin-top: var(--space-md);
  margin-bottom: 0;
}

.about__cta {
  display: inline-block;
  padding: 0.85rem 1.6rem;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: var(--radius);
  background: var(--color-text);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.about__cta:hover {
  color: #fff;
  background: var(--color-accent-hover);
  text-decoration: none;
}
</style>
