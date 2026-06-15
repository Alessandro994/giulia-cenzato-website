// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dr.ssa Giulia Cenzato — Psicologa e Psicoterapeuta',
      meta: [
        {
          name: 'description',
          content:
            'Psicologa e psicoterapeuta cognitivo-comportamentale in formazione a Mantova. Colloqui di supporto, lutto, valutazione psicodiagnostica e neuropsicologica. In presenza e online.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#fdfcf7' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
