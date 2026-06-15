<script setup lang="ts">
const approachSrc = ref("/approccio.png");

function onApproachImgError() {
  if (approachSrc.value !== "/hero-placeholder.svg") {
    approachSrc.value = "/hero-placeholder.svg";
  }
}
</script>

<template>
  <section
    id="il-mio-approccio"
    class="section section--approach"
    aria-labelledby="approach-heading"
  >
    <div class="section__inner">
      <h2 id="approach-heading" class="section__title">Il mio approccio</h2>
      <div class="approach__grid">
        <figure class="approach__figure">
          <img
            class="approach__img"
            :src="approachSrc"
            width="819"
            height="1024"
            alt="Pila di libri su uno sfondo chiaro, simbolo di studio e ricerca"
            loading="lazy"
            decoding="async"
            @error="onApproachImgError"
          />
        </figure>
        <div class="section__prose">
          <p>
            Da sempre sono affascinata dalla complessità della mente umana e dal
            modo in cui <b>pensieri</b>, <b>emozioni</b> e
            <b>comportamenti</b> si intrecciano, influenzando il nostro
            <b>benessere</b> e la <b>qualità della vita</b>. La scelta di
            svolgere la mia pratica clinica secondo un
            <b>approccio di psicoterapia cognitivo-comportamentale</b> nasce
            dalla necessità di comprendere tali legami offrendo alle persone
            strumenti <b>concreti</b> e <b>scientificamente validati</b> per
            intervenire sui meccanismi che possono mantenere la sofferenza
            psicologica nel <b>presente</b>.
          </p>
          <p>
            Nel corso della mia carriera professionale ho maturato esperienza
            nel lavoro con <b>adulti</b> e <b>anziani</b>, offrendo supporto
            psicologico a pazienti e familiari in contesti di
            <b>malattia neurologica</b>, <b>demenza</b> e <b>lutto</b>. Questa
            formazione mi ha consentito oggi di offrire come psicologa uno
            spazio di <b>ascolto</b> e <b>supporto</b> nelle fasi di fragilità
            legate alla malattia, ai cambiamenti della vita e alle esperienze di
            perdita.
          </p>
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

.section--approach {
  background: var(--color-hero-bg);
}

.section__inner {
  max-width: var(--wide-max);
  margin: 0 auto;
}

.section__title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: 400;
  margin: 0 0 var(--space-lg);
  color: var(--color-text);
  text-align: center;
}

.approach__grid {
  display: grid;
  gap: var(--space-lg);
  align-items: center;
}

@media (min-width: 768px) {
  .approach__grid {
    grid-template-columns: minmax(320px, 520px) minmax(0, 1fr);
    gap: var(--space-xl);
  }
}

.approach__figure {
  margin: 0;
  justify-self: center;
  width: min(100%, 480px);
}

@media (min-width: 768px) {
  .approach__figure {
    justify-self: start;
    width: 100%;
  }
}

.approach__img {
  width: 100%;
  height: auto;
  aspect-ratio: 819 / 1024;
  object-fit: contain;
  object-position: center;
  display: block;
  border-radius: 1.5rem;
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

.section__prose p:last-child {
  margin-bottom: 0;
}
</style>
