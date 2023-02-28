// PARA AJUDA VISITE:
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: process.env.NITRO_PRESET,
  },

  typescript: {
    strict: false,
  },

  runtimeConfig: {
    public: {
    },

    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    TOKEN_VALIDITY_TIME_DAYS: process.env.TOKEN_VALIDITY_TIME_DAYS,
    MONGO_URI: (process.env.MONGO_URI) ? process.env.MONGO_URI : null
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  app: {
    head: {
      title: 'O Culto Divino',
    },
  },
})
