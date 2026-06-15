export const serviceCards = [
  {
    title: 'Colloqui di supporto psicologico',
    text:
      'Un percorso di ascolto e sostegno per stress, relazioni, autostima e disturbi dell’umore o dell’ansia.',
    href: '#dettaglio-supporto',
    img: '/servizio-supporto.png',
    imgAlt:
      'Illustrazione astratta rosa con segni blu, simbolo visivo del servizio',
  },
  {
    title: 'Elaborazione del lutto',
    text:
      'Supporto nelle perdite, nelle separazioni e nelle transizioni di vita, comprese le «perdite in vita».',
    href: '#dettaglio-lutto',
    img: '/servizio-lutto.png',
    imgAlt:
      'Illustrazione astratta blu a forma organica, simbolo visivo del servizio',
  },
  {
    title: 'Valutazione psicodiagnostica e neuropsicologica',
    text:
      'Colloquio clinico, test e strumenti validati per comprendere risorse, difficoltà e profilo cognitivo.',
    href: '#dettaglio-valutazione',
    img: '/servizio-valutazione.png',
    imgAlt:
      'Illustrazione astratta con forme ondulate viola e arancio, simbolo visivo del servizio',
  },
] as const

export type ServiceCardItem = (typeof serviceCards)[number]
