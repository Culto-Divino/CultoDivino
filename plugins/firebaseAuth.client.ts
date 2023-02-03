import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
  }

  // Inicializando firebase

  const app = initializeApp(firebaseConfig)

  const auth = getAuth()
  await setPersistence(auth, inMemoryPersistence)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  initUser()
})
