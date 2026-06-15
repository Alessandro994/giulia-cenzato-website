<script setup lang="ts">
const faqs = [
  {
    q: "Come si svolge il primo colloquio?",
    a: "Il primo colloquio è un incontro conoscitivo: esploriamo le tue esigenze, il motivo della richiesta di supporto e se posso essere la persona più adatta a te. Serve a definire insieme gli obiettivi e le modalità del percorso.",
  },
  {
    q: "Con quale frequenza si svolgono gli incontri?",
    a: "Lo concordiamo insieme, in base alle esigenze individuali e agli obiettivi del percorso; generalmente, in una prima fase, hanno cadenza settimanale.",
  },
  {
    q: "Qual è l'approccio terapeutico utilizzato?",
    a: "Cognitivo-comportamentale: offre strumenti concreti e scientificamente validati per comprendere i legami tra pensieri, emozioni e comportamenti e intervenire sui meccanismi che mantengono la sofferenza psicologica.",
  },
  {
    q: "Quanto costa una seduta?",
    a: "Il prezzo varia in base alla tipologia di intervento. Il compenso viene comunicato preventivamente e la prestazione è fatturata come servizio sanitario, fiscalmente detraibile.",
  },
  {
    q: "Le sedute sono riservate e confidenziali?",
    a: "Sì, tutte le informazioni condivise durante i colloqui sono trattate con la massima riservatezza e nel rispetto della normativa deontologica e sulla privacy.",
  },
  {
    q: "Quanto dura una seduta?",
    a: "50–60 minuti, mentre le valutazioni psicodiagnostiche o neuropsicologiche possono richiedere più tempo, in base agli strumenti utilizzati.",
  },
  {
    q: "Ma quindi se vado dallo psicologo sono pazzo?",
    a: "Assolutamente no! Andare dallo psicologo è un modo intelligente per affrontare le difficoltà senza farsi sopraffare.",
  },
];
</script>

<template>
  <section id="faq" class="faq" aria-labelledby="faq-heading">
    <div class="faq__inner">
      <h2 id="faq-heading" class="faq__title">Domande frequenti</h2>
      <div class="faq__list">
        <details v-for="(item, i) in faqs" :key="i" class="faq__item">
          <summary class="faq__question">{{ item.q }}</summary>
          <p class="faq__answer">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: var(--space-xl) var(--space-md) var(--space-xl);
  scroll-margin-top: 5rem;
  background: var(--color-hero-bg);
  border-top: 1px solid rgba(74, 72, 68, 0.08);
}

.faq__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.faq__title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 600;
  margin: 0 0 var(--space-md);
  color: var(--color-text);
  text-align: center;
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.faq__item {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0 var(--space-sm);
}

.faq__question {
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  padding: var(--space-sm) 0;
  position: relative;
  padding-right: 1.5rem;
}

.faq__question::-webkit-details-marker {
  display: none;
}

.faq__question::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
  transform: translateY(-60%) rotate(45deg);
  transition: transform 0.2s ease;
}

details[open] .faq__question::after {
  transform: translateY(-20%) rotate(225deg);
}

.faq__answer {
  margin: 0;
  padding: 0 0 var(--space-sm);
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-sm);
}
</style>
