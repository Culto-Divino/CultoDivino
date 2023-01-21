import { useUserCookie } from './useCookies';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
 


export async function createUser (email, password){
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { error: errorMessage, errorCode: errorCode}
  });

  console.log("User logged in: ", await $fetch('/api/userStateChanged', { method: 'post', body: { userId: uid }}))
  await navigateTo('/escolha-de-personagem')

  return credentials
}

export async function signInUser (email, password) {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    return { error: errorMessage, errorCode: errorCode };
  });

  console.log("User logged in: ", await $fetch('/api/userStateChanged', { method: 'post', body: { userId: uid }}))
  await navigateTo('/escolha-de-personagem')

  return credentials
}

export async function signOutUser (){
  const auth = getAuth()
  await $fetch('/api/userStateChanged', { method: 'post', body: { user: auth.currentUser.uid }})

  const result = await auth.signOut()

  await navigateTo('/login')

  return result
}

export async function initUser () {
  const auth = getAuth()
  
  onAuthStateChanged(auth, async (user) => {
    updateAuthState(user);
  
  });
}


async function updateAuthState(user){
  const firebaseUser = await useFirebaseUser()
  const userCookie = await useUserCookie()

  userCookie.value = user;
  firebaseUser.value = user;

  if (user) {
    // https://firebase.google.com/docs/reference/js/firebase.User

    const uid = user.uid;

  } else { 
    await navigateTo('/login')
  }
}
