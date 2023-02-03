import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase-admin/auth'
import admin from 'firebase-admin'

const config = useRuntimeConfig()

const serviceAccountConfig = {
  type: config.FIREBASE_SERVICE_ACCOUNT,
  project_id: config.FIREBASE_PROJECT_ID,
  private_key_id: config.FIREBASE_PRIVATE_KEY_ID,
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDeaa67JvVFYu1f\naCQQFq9qQqQo0sth8HzXzJMLOxku5prRiAjIQSn1UEs+bqDWHAXXvNHVkEDf7L3C\nANNdshqddnHxykLxU3eHFCNpRNxxUYWGZmPvtDzWvmdJbJ39PYmxdYa4MADqeh3Y\nCCAGPgz47HRTDE8SY5HMQ12fjtymO1oAbqcRatOWTqvmOxSpXFehBJ5Lt3dci1NA\nBRiAQr/qgHLuJj8Y22AcRvBZgJN1BUq0LDrP7qwAE0u512zVgpfYhfZPKjReLnXE\nxEv+TGqUxdPm1NEHXtEMCdUvj3xx8vuv1FdOj6hnqmMYMDTrVNA5CpIiPwRaaWxI\nVTbWw+YdAgMBAAECggEAAMKbtkgLzpDn/st8VBG/x70yknEmAM+xnYs1dXReQarI\nHK86WHTgj9YWa8A1DIZL/tDGZtR3ZEyK2X7nOgrBzIf7G7h1Qh3m6q9G77Usi7ab\nnjn7XXZgPtunvriAUb1EGzcrnrWLS0HfmD1u3paXtMIaI66HFqkAdpJEX6c9WdQY\nePMXH2wLRfD7IO+3q4Gc3DHUyAoZ10lEJYhoIRmPT7xzTgxY9IJ8qvGDKBpy4D/Z\n6/zpeUMMDbnItBcFEna0/NCn9i3uiNdI5AI6KaJYFgpTEFJ2aSTzVoTPX6oi2DTe\nsfRRWV9JyF5K0HmkQTmdlaD39Qp4Luien8z4IJgcgQKBgQD0mQMsdDKnYTFYQWtR\n2y0uI09btqvF83lAfkoyo3NkuP3QfbCCpUSNaVJTC0ZXw/p1uS2O3JrLHqY+seBD\nFIUUz+3y467k/wS9H6nc9pC4kMPxV6+F+p867jVqXyOrKqexDkqD1wpuNNWCGuen\nxX15jfV6k3LOjsjDl3XHNdTrDwKBgQDox+tldQdgy65jvPzIQ5NQkX1JllKv0zvd\nRatItk7i2uzflW27eMxVor/tvq2vdxF+Tp0AUruEkZyPdf76WBmRS0lpUnXsM/Di\nmGWqngLfSmUx0fkG7Xp2uRbTah/Omef5sGF6raYxcr70rwxJ3yHXiCoi+b0YyrXD\no5+EsvJMEwKBgF9U79a4pzFzgS77uF9cBHzyCDEfvk1VutF3J2YbLJN6QnqrMkuJ\nLHHNNefmAhGc8ZZGiUogEzjNhk/zNgwPCFt3Oy+qq/TWrDsmByd29irpSWVcHq4i\nY0MtqqX91MIWyusIPeSqwIb5kqm14MoT//aLbLzMkTeOkRMiiiYNhiHjAoGBAJ1Q\nTlMYjc3qmIYq+CJXGL2ANU1/242bkX9uT90p55IEJcTL9YaWknDlNhPzoulL7HSR\nqCTJxJRI26dQNOr2kwDQAmK9KZhhWc+o8jwl4QcJ/e13W3ZFE1gcqcJim/BBrrXd\nb2M662/LfiVaD1H1C6ffC6rrX9HbXI9Eis9hJ8IlAoGATOOnGjrJJE5kf8mGKiTU\nvywLxg5szE67MvZFdVPq16rGshESVSEOmTsR/GgVmUNKOKxhgfLdOVUeDcFO4PHB\nJbWrrVZQDE9OqN7GwmOV27DPyxXyxnrdW8quPrIVGnAW9IBFAFlLBQgtjIj75a4a\ntHfXaQOKfJqGVpP/zcWK7cU=\n-----END PRIVATE KEY-----\n',
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

// Inicializando firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth
export const adminService = admin.initializeApp({
  // @ts-expect-error, argumento é considerado inválido quando, na verdade, é
  credential: admin.credential.cert(serviceAccountConfig),
})
