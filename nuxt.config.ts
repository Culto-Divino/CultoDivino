
// PARA AJUDA VISITE: 
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    
    modules: [
        '@nuxtjs/tailwindcss',
    ],

    typescript: {
        strict: false,
    },

    runtimeConfig: {
        public:{
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        },
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})
