import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getAuth } from 'firebase-admin/auth'

const config = useRuntimeConfig()

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

// eslint-disable-next-line import/no-mutable-exports
let app

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}
export default app
