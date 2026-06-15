<script setup lang="ts">
import { serviceCards } from "~/data/serviceCards";
</script>

<template>
  <section
    id="servizi"
    class="section section--white"
    aria-labelledby="services-heading"
  >
    <div class="section__inner">
      <h2 id="services-heading" class="section__title">Aree di intervento</h2>
      <ul class="cards">
        <li v-for="item in serviceCards" :key="item.href" class="cards__item">
          <ServiceCard
            :title="item.title"
            :img="item.img"
            :img-alt="item.imgAlt"
            :cta-href="item.href"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: var(--space-xl) var(--space-md);
  scroll-margin-top: 5rem;
}

.section--white {
  background: var(--color-bg);
}

.section__inner {
  max-width: var(--wide-max);
  margin: 0 auto;
}

.section__title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: 400;
  margin: 0 0 var(--space-sm);
  color: var(--color-text);
  text-align: left;
}

.section--white .section__lead {
  margin-left: auto;
  margin-right: auto;
}

.section__lead {
  margin: 0 0 var(--space-lg);
  color: var(--color-text-muted);
  max-width: 36rem;
  text-align: center;
}

.cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-md);
}

.cards__item {
  min-width: 0;
  display: flex;
}

.cards__item :deep(.card) {
  width: 100%;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}

.cards :deep(.card__body) {
  align-items: center;
  text-align: center;
  flex: 1;
}

.cards :deep(.card__title) {
  font-size: clamp(1.35rem, 2.2vw, 1.65rem);
  font-weight: 600;
  text-align: center;
  width: 100%;
  flex: 1 1 auto;
  margin-bottom: var(--space-md);
}

.cards :deep(.card__link) {
  display: inline-block;
  align-self: center;
  flex-shrink: 0;
  margin-top: auto;
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

.cards :deep(.card__link:hover) {
  color: #fff;
  background: var(--color-accent-hover);
  text-decoration: none;
}
</style>
