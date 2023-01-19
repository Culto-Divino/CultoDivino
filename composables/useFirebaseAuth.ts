import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    setPersistence,
    inMemoryPersistence,
    getIdToken,
    signOut
} from 'firebase/auth'

export async function createUser (email, password){
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { error: errorMessage, errorCode: errorCode}
  });

  updateAuthState(auth.currentUser)

  await navigateTo('/escolha-de-personagem')
  return credentials
}


// const sessionCookie = useSessionCookie()

export async function signInUser (email, password) {
  const auth = getAuth();

  let idToken 

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

        await navigateTo('/escolha-de-personagem')
        if(res.error){
          console.log(res.error)
          return res.error
        }
      }))
  return { sucess:true }
}

export async function signOutUser (){
  const auth = getAuth()
  await $fetch('/api/userStateChanged', { method: 'post', body: { user: auth.currentUser }})

  const result = await auth.signOut()
  await navigateTo('/login')
}

export async function initUser () {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()

  let res = await $fetch('/api/check-auth-state', {method: 'GET'}).catch((e) => console.log(e))
  
  // AUTO REDIRECT IF LOGGED IN!
  // @ts-expect-error
  if(res.statusCode === 200){
     console.log('AUTHORIZED! REDIRECTING')
     await navigateTo('/escolha-de-personagem')
  }

  onAuthStateChanged(auth, async (user) => {
    // await updateAuthState(user);
  
  });
}


async function updateAuthState(user){

  const firebaseUser = await useFirebaseUser()
  const userCookie = await useUserCookie()

  onAuthStateChanged(auth, async (user) => {
    firebaseUser.value = user;
    //@ts-ignore
    userCookie.value = user;
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      await $fetch('/api/userStateChanged', { method: 'post', body: { user: auth.currentUser }})
      await navigateTo('/')

      console.log(firebaseUser.value)
    } else { 
      // User is signed out
      //@ts-ignore
      await navigateTo('/login')
    }
    firebaseUser.value = user;
  });
}