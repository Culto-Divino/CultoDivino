import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { error: errorMessage, errorCode: errorCode}
  });

  return credentials
}

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    return { error: errorMessage, errorCode: errorCode };
  });

  return credentials
}

export const signOutUser = async () => {
  const auth = getAuth()
  await $fetch('/api/userStateChanged', { method: 'post', body: { user: auth.currentUser }})

  const result = await auth.signOut()

  return result
}

export const initUser = async () => {
  const auth = getAuth()
  
  const firebaseUser = await useFirebaseUser()
  firebaseUser.value = auth.currentUser

  const userCookie = useCookie('userCookie');
  //@ts-ignore
  userCookie.value = auth.currentUser;

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
