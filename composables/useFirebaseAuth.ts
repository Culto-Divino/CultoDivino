import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'

export async function createUser (email, password){
const auth = getAuth();
let idToken;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      idToken = await getIdToken(user.user)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        return { error: errorMessage, errorCode: errorCode };
    })
    .then (async () => await $fetch('/api/login',
    {
      method: 'POST',
      body: JSON.stringify({ idToken: idToken, uid: auth.currentUser.uid }),
      headers: { 
        "Content-Type": "aplication/json"
      }
    })
    .then(async (res) => {
      if(res.error){
        // console.log(res.error)
        return res.error
      }
      await navigateTo('/escolha-de-personagem')

    }))
return { sucess:true }
}

export async function signInUser (email, password) {
const auth = getAuth();

let idToken;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      idToken = await getIdToken(user.user)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        return { error: errorMessage, errorCode: errorCode };
    })
    .then (async () => await $fetch('/api/login',
    {
      method: 'POST',
      body: JSON.stringify({ idToken: idToken, uid: auth.currentUser.uid }),
      headers: { 
        "Content-Type": "aplication/json"
      }
    })
    .then(async (res) => {
      if(res.error){
        // console.log(res.error)
        return res.error
      }
      await navigateTo('/escolha-de-personagem')

    }))
return { sucess:true }
}

export async function signOutUser (){

const res = await $fetch('/api/sign-out', { method: 'GET' })

await navigateTo('/login')
}

export async function initUser () {
const auth = getAuth()


let res = await $fetch('/api/check-auth-state', { method: 'GET' })
  .catch((e) => {
    //console.log(e)
  })

// AUTO REDIRECT IF LOGGED IN!
// @ts-expect-error
if(res.statusCode === 200){
   // console.log('AUTHORIZED! REDIRECTING')
   await navigateTo('/escolha-de-personagem')
}

onAuthStateChanged(auth, async (user) => {

});
}