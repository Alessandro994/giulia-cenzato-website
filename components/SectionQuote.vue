<script setup lang="ts">
const email = 'giuliacenzato.psicologa@gmail.com'
const year = new Date().getFullYear()
</script>

<template>
  <section class="quote" aria-label="Citazione">
    <div class="quote__wrap">
      <img
        class="quote__art"
        src="/quote-decoration.jpg"
        width="1024"
        height="328"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <blockquote class="quote__inner">
        <p>Cambia il modo in cui pensi e cambierai il modo in cui vivi</p>
      </blockquote>

      <div class="quote__divider" role="presentation" />

      <footer class="quote__foot">
        <p class="quote__contact">
          <a :href="`mailto:${email}`">{{ email }}</a>
          <span aria-hidden="true"> · </span>
          <a href="tel:+393468574736">+39 346 857 4736</a>
          <span aria-hidden="true"> · </span>
          Mantova
        </p>
        <p class="quote__legal">P.I. 02731020208</p>
        <p class="quote__copy">
          © {{ year }} Psicologa Giulia Cenzato. Tutti i diritti riservati.
        </p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.quote {
  padding: var(--space-xl) var(--space-md) var(--space-lg);
  background: var(--color-bg);
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
}

.quote__wrap {
  max-width: var(--wide-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.quote__inner {
  max-width: 52rem;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
}

.quote__inner p {
  font-family: var(--font-serif);
  font-size: clamp(1.55rem, 3.5vw, 2.35rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.38;
  margin: 0;
  text-align: center;
  text-wrap: balance;
}

.quote__art {
  display: block;
  width: min(100%, 56rem);
  height: auto;
  margin: 0 auto;
}

.quote__divider {
  width: 100%;
  max-width: min(100%, 52rem);
  height: 1px;
  margin: var(--space-sm) 0 0;
  background: var(--color-border);
  border: none;
  flex-shrink: 0;
}

.quote__foot {
  width: 100%;
  max-width: 40rem;
  margin: 0;
  padding: 0;
  text-align: center;
}

.quote__contact {
  margin: 0 0 var(--space-xs);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.quote__contact a {
  color: var(--color-text);
  text-decoration: none;
}

.quote__contact a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

.quote__legal,
.quote__copy {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--color-text-muted);
  opacity: 0.9;
}

.quote__copy {
  margin-top: var(--space-xs);
}
</style>
