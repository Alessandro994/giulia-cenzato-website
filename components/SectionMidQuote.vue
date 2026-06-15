<template>
  <section class="mid-quote" aria-label="Citazione sul percorso terapeutico">
    <blockquote class="mid-quote__inner">
      <p>
        I sintomi con cui arriviamo in terapia non sono errori, ma strategie
        apprese per gestire un disagio più profondo
      </p>
    </blockquote>
  </section>
</template>

<style scoped>
.mid-quote {
  padding: var(--space-lg) var(--space-md);
  background: var(--color-sand);
}

.mid-quote__inner {
  max-width: 52rem;
  margin: 0 auto;
  padding: 0;
  border: none;
}

.mid-quote__inner p {
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 2.8vw, 2rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.45;
  margin: 0;
  text-align: center;
  text-wrap: balance;
  color: var(--color-text);
}
</style>
