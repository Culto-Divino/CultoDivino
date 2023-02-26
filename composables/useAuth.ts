import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'

export async function createUser(email, password) {
  try {
    await $fetch('api/register', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })
  } catch (e) {
    console.log(e)
    return false
  }
  return true
}

export async function signInUser(email, password) {
  try {
    await $fetch('api/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
    })
  } catch (e) {
    console.log(e)
    return false
  }
  return true
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
