import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'

export function createUser(email, password) {
  const auth = getAuth()
  let idToken

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      idToken = await getIdToken(user.user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // console.log(errorMessage)
      return { error: errorMessage, errorCode }
    })
    .then(
      async () =>
        await $fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ idToken, uid: auth.currentUser.uid }),
          headers: {
            'Content-Type': 'aplication/json',
          },
        }).then(async (res) => {
          if (res.error) {
            // console.log(res.error)
            return res.error
          }
          await navigateTo('/escolha-de-personagem')
        })
    )
  return { sucess: true }
}

export function signInUser(email, password) {
  const auth = getAuth()

  let idToken

  signInWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      idToken = await getIdToken(user.user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // console.log(errorMessage)
      return { error: errorMessage, errorCode }
    })
    .then(
      async () =>
        await $fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ idToken, uid: auth.currentUser.uid }),
          headers: {
            'Content-Type': 'aplication/json',
          },
        }).then(async (res) => {
          if (res.error) {
            // console.log(res.error)
            return res.error
          }
          await navigateTo('/escolha-de-personagem')
        })
    )
  return { sucess: true }
}

export async function signOutUser() {
  await $fetch('/api/sign-out', { method: 'GET' })
  await navigateTo('/login')
}

export async function initUser() {
  // const auth = getAuth()

  const res = await $fetch('/api/check-auth-state', { method: 'GET' })

  // AUTO REDIRECT IF LOGGED IN!
  // @ts-expect-error, "res" sempre vai ter um atributo "statusCode"
  if (res.statusCode === 200) {
    // console.log('AUTHORIZED! REDIRECTING')
    await navigateTo('/escolha-de-personagem')
  }

  // Se necessário algo com o evento de mudança de autenticação!
  // onAuthStateChanged(auth, async (user) => {})
}
