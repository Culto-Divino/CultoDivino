import { getFirestore } from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'
// import { getAuth } from 'firebase-admin/auth'
import admin from 'firebase-admin'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const serviceAccountConfig = {
    type: config.FIREBASE_SERVICE_ACCOUNT,
    project_id: config.FIREBASE_PROJECT_ID,
    private_key_id: config.FIREBASE_PRIVATE_KEY_ID,
    private_key: config.FIREBASE_PRIVATE_KEY,
    client_email: config.FIREBASE_CLIENT_EMAIL,
    client_id: config.FIREBASE_CLIENT_ID,
    auth_uri: config.FIREBASE_AUTH_URI,
    token_uri: config.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: config.FIREBASE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: config.FIREBASE_CLIENT_CERT_URL,
  }

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    databaseURL: config.FIREBASE_DATABASE_URL,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID,
    measurementId: config.FIREBASE_MEASUREMENT_ID,
  }

  if (getApps().length === 0) {
    // Inicializando firebase
    initializeApp(firebaseConfig)
    admin.initializeApp({
      // @ts-expect-error, service account config é uma configuração válida
      credential: admin.credential.cert(serviceAccountConfig),
    })
  }
})

// const db = getFirestore()
// export { db }
