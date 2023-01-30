import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'

export async function createUser(email, password) {
  const auth = getAuth()

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    const idToken = await getIdToken(user.user)
    await $fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ idToken, uid: auth.currentUser.uid }),
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
  } catch (e) {
    return { error: e.code }
  }

  await navigateTo('/escolha-de-personagem')
  return { sucess: true }
}

export async function signInUser(email, password) {
  const auth = getAuth()

  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await getIdToken(user.user)
    await $fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ idToken, uid: auth.currentUser.uid }),
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
  } catch (e) {
    return { error: e.code }
  }

  await navigateTo('/escolha-de-personagem')
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
