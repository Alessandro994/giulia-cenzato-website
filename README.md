# Sito professionale — Dr.ssa Giulia Cenzato

Sito vetrina statico realizzato con [Nuxt 3](https://nuxt.com). Il contenuto riprende la struttura del sito di riferimento (sezioni, testi, contatti, FAQ).

## Immagine hero

Il componente hero prova a caricare [`public/hero.jpg`](public/hero.jpg). Se il file non c’è, viene usato [`public/hero-placeholder.svg`](public/hero-placeholder.svg). Sostituisci `hero.jpg` con una tua fotografia professionale (ritratto, luce calda) per allinearti al modello Wix.

## Sviluppo

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Build statica (SSG)

```bash
npm run generate
```

L’output si trova in `.output/public`. Adatta le route in `nuxt.config.ts` (`nitro.prerender.routes`) se aggiungi nuove pagine.

## Anteprima della build

```bash
npm run preview
```

## Deploy

- **Vercel / Netlify / Cloudflare Pages:** connetti il repository e imposta il comando di build su `npm run generate` e la directory di output su `.output/public` (o quanto indicato dal provider per Nuxt static).
- **Dominio personalizzato:** configura DNS e HTTPS dal pannello dell’hosting.

## Modulo contatti

Il modulo «Invia un messaggio» non invia dati a un server: apre il client di posta con `mailto:` e oggetto/corpo precompilati. Per un invio lato server o protezione anti-spam, puoi integrare un servizio esterno (es. [Formspree](https://formspree.io/)) o un endpoint Nitro.

## Privacy

Se aggiungi analytics o un form che invia dati a terze parti, valuta informativa privacy e cookie secondo la normativa applicabile.
