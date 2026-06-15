<script setup lang="ts">
import { serviceCards } from "~/data/serviceCards";

const [cardSupporto, cardLutto, cardValutazione] = serviceCards;
</script>

<template>
  <section class="details" aria-label="Dettaglio servizi">
    <article id="dettaglio-supporto" class="detail detail--hero-band">
      <div class="detail__shell">
        <h2 class="detail__title">Aree di intervento</h2>
        <div class="detail__layout detail__layout--card-right">
          <div class="detail__prose">
            <p>
              I colloqui di supporto psicologico si svolgono in un clima di
              accoglienza, sospensione del giudizio, basato su collaborazione,
              rispetto, fiducia e riservatezza. Il sostegno è indicato in caso
              di:
            </p>
            <ul>
              <li>Stress prolungato e difficoltà nella regolazione emotiva</li>
              <li>
                Difficoltà relazionali (affettive, comunicative, sociali o
                lavorative)
              </li>
              <li>Problematiche di autostima e crescita personale</li>
              <li>
                Disturbi psicologici (ansia, attacchi di panico, fobie,
                depressione, pensieri ossessivi, disturbi del sonno)
              </li>
            </ul>
            <p>
              Ogni percorso è personalizzato, costruito sulla storia e sulle
              caratteristiche della persona. L’obiettivo è favorire una maggiore
              consapevolezza del proprio funzionamento, comprendere le cause del
              disagio e sviluppare strategie efficaci per affrontare le sfide
              quotidiane, favorendo un benessere psicologico duraturo.
            </p>
          </div>
          <ServiceCard
            class="detail__card"
            compact
            :title="cardSupporto.title"
            :text="cardSupporto.text"
            :img="cardSupporto.img"
            :img-alt="cardSupporto.imgAlt"
          />
        </div>
      </div>
    </article>

    <article id="dettaglio-lutto" class="detail detail--lutto">
      <div class="detail__shell">
        <h2 class="detail__title">Aree di intervento</h2>
        <div class="detail__layout detail__layout--card-left">
          <ServiceCard
            class="detail__card"
            compact
            surface-hero
            :title="cardLutto.title"
            :text="cardLutto.text"
            :img="cardLutto.img"
            :img-alt="cardLutto.imgAlt"
          />
          <div class="detail__prose">
            <p>
              Offro sostegno psicologico a persone che affrontano
              <b>eventi luttuosi</b>, sia nelle fasi iniziali, per favorire
              un’adeguata elaborazione, sia in momenti successivi, quando
              eventuali blocchi possono portare a una persistenza del dolore.
            </p>
            <p>
              Per lutto si intende non solo la perdita di una persona cara, ma
              anche <b>separazioni significative</b> o
              <b>importanti transizioni di vita</b>. Il supporto può essere
              rivolto anche alle <b>«perdite in vita»</b>, quando la persona è
              presente fisicamente ma la relazione cambia profondamente, come
              nel caso di malattie gravi o declino cognitivo.
            </p>
            <p>
              Il percorso mira ad aiutare la persona a <b>riconoscere</b> e
              <b>accogliere</b> le emozioni legate alla perdita,
              <b>elaborare</b> i vissuti dolorosi e sviluppare strategie
              efficaci per <b>integrare</b> il lutto nella propria storia,
              favorendo un graduale <b>recupero del benessere emotivo</b> e
              della capacità di relazione con sé e con gli altri.
            </p>
          </div>
        </div>
      </div>
    </article>

    <article id="dettaglio-valutazione" class="detail detail--hero-band">
      <div class="detail__shell">
        <h2 class="detail__title">Aree di intervento</h2>
        <div class="detail__layout detail__layout--card-right">
          <div class="detail__prose">
            <p>
              La psicodiagnostica clinica permette di comprendere in modo
              articolato le risorse e le difficoltà della persona, supportando
              la
              <b>formulazione di ipotesi diagnostiche</b> e la definizione di
              <b>strategie di intervento terapeutico personalizzate</b> e
              mirate.
            </p>
            <p>
              Attraverso il <b>colloquio clinico</b>,
              <b>test standardizzati</b> e
              <b>strumenti psicometrici</b> validati è possibile effettuare una
              valutazione e psicometrici validati è possibile effettuare una
              valutazione e un’analisi approfondita del <b>funzionamento</b>
              psicologico e cognitivo di un individuo, identificando
              caratteristiche cognitive, emotive e comportamentali.
            </p>
            <p>
              La valutazione può includere anche <b>screening cognitivi</b> e
              <b>accertamenti neuropsicologici</b>, finalizzati a delineare il
              <b>profilo cognitivo globale</b> in chi manifesta difficoltà
              cognitive iniziali nella vita quotidiana o desidera un
              monitoraggio preventivo delle proprie capacità cognitive, con
              l’obiettivo di promuovere benessere e consapevolezza in un’ottica
              di invecchiamento sano.
            </p>
          </div>
          <ServiceCard
            class="detail__card"
            compact
            :title="cardValutazione.title"
            :text="cardValutazione.text"
            :img="cardValutazione.img"
            :img-alt="cardValutazione.imgAlt"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.details {
  padding: 0;
  background: var(--color-sand);
}

.detail {
  scroll-margin-top: 5rem;
}

.detail--hero-band {
  background: var(--color-hero-bg);
  padding: var(--space-xl) var(--space-md);
}

.detail--lutto {
  background: var(--color-card-bg);
  padding: var(--space-xl) var(--space-md);
}

.detail__shell {
  max-width: var(--wide-max);
  margin-inline: auto;
}

.detail__title {
  font-family: var(--font-serif);
  font-size: clamp(1.45rem, 2.4vw, 3rem);
  font-weight: 400;
  margin: 0 0 var(--space-md);
  color: var(--color-text);
}

.detail__layout {
  display: grid;
  gap: var(--space-lg);
  align-items: center;
  width: 100%;
}

@media (min-width: 768px) {
  .detail__layout--card-right {
    grid-template-columns: minmax(0, 1.12fr) minmax(240px, 320px);
  }

  .detail__layout--card-left {
    grid-template-columns: minmax(240px, 320px) minmax(0, 1.12fr);
  }
}

.detail__prose {
  min-width: 0;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.55;
}

.detail__prose p {
  margin: 0 0 var(--space-sm);
}

.detail__prose ul {
  margin: 0 0 var(--space-sm);
  padding-left: 1.25rem;
}

.detail__prose li {
  margin-bottom: var(--space-xs);
}

.detail__prose p:last-child,
.detail__prose ul:last-child {
  margin-bottom: 0;
}

/* Narrow column on mobile; stacked image + text inside ServiceCard */
.details :deep(.detail__card) {
  width: 100%;
  max-width: 20rem;
  margin-inline: auto;
  height: auto;
}

@media (min-width: 768px) {
  .details :deep(.detail__card) {
    max-width: none;
    margin-inline: 0;
  }
}

.details :deep(.detail__card .card__body) {
  text-align: center;
  align-items: center;
}
</style>
