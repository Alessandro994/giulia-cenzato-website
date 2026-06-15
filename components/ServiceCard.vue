<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    text?: string;
    img: string;
    imgAlt: string;
    /** If set, shows “Scopri di più” linking here */
    ctaHref?: string;
    /** Sage hero tint (#e9ebc0) instead of default card cream */
    surfaceHero?: boolean;
    /** Image and text side by side; set false for stacked layout */
    split?: boolean;
    /** Smaller title and visible subtitle for detail sections */
    compact?: boolean;
  }>(),
  { surfaceHero: false, split: false, compact: false },
);
</script>

<template>
  <div
    class="card"
    :class="{
      'card--hero-surface': surfaceHero,
      'card--split': split,
      'card--compact': compact,
    }"
  >
    <div class="card__visual">
      <img
        class="card__img"
        :src="img"
        :alt="imgAlt"
        width="804"
        height="444"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="card__body" :class="{ 'card__body--no-cta': !ctaHref }">
      <h3 class="card__title">{{ title }}</h3>
      <p v-if="text" class="card__text">{{ text }}</p>
      <a v-if="ctaHref" class="card__link" :href="ctaHref">Scopri di più</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-soft);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
  height: 100%;
}

.card:hover {
  box-shadow: 0 16px 48px rgba(74, 72, 68, 0.08);
}

.card--hero-surface {
  background: var(--color-hero-bg);
}

.card__visual {
  background: var(--color-card-bg);
  display: grid;
  place-items: center;
  width: 100%;
  height: 9.5rem;
  padding: var(--space-sm) var(--space-md);
  box-sizing: border-box;
  flex-shrink: 0;
}

.card--hero-surface .card__visual {
  background: var(--color-hero-bg);
}

.card--split {
  flex-direction: row;
  align-items: stretch;
}

.card--split .card__visual {
  width: auto;
  flex: 0 0 minmax(6.5rem, 34%);
  max-width: 42%;
  height: auto;
  min-height: 9rem;
  align-self: stretch;
}

.card--split .card__img {
  min-height: 9rem;
}

.card--split .card__body {
  min-width: 0;
  justify-content: flex-start;
}

.card--split .card__link {
  align-self: flex-start;
}

@media (min-width: 768px) {
  .card:not(.card--split) .card__visual {
    height: 11rem;
  }

  .card--split .card__visual {
    flex: 0 0 clamp(180px, 30%, 300px);
    max-width: 38%;
    min-height: 11rem;
    height: auto;
  }

  .card--split .card__img {
    min-height: 11rem;
  }

  .card--split .card__body {
    padding: var(--space-md);
  }
}

.card__img {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  object-fit: contain;
  object-position: center;
}

.card__body {
  padding: var(--space-sm) var(--space-md) var(--space-md);
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
}

.card__title {
  font-family: var(--font-serif);
  font-size: 1.28rem;
  font-weight: 400;
  margin: 0 0 var(--space-sm);
  line-height: 1.28;
  text-align: left;
  color: var(--color-text);
}

.card__text {
  margin: 0 0 var(--space-md);
  color: var(--color-text);
  flex: 1;
  font-size: 0.95rem;
  text-align: left;
}

.card__body--no-cta .card__text {
  margin-bottom: 0;
}

.card__link {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 0.65rem;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: none;
  color: var(--color-text);
  text-align: center;
  align-self: center;
}

.card__link:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

.card--compact .card__body {
  text-align: center;
  align-items: center;
}

.card--compact .card__title {
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.35;
  text-align: center;
}

.card--compact .card__text {
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: var(--color-text-muted);
}
</style>
