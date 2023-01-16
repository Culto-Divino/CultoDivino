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
  const result = await auth.signOut()

  return result
}

export const initUser = async () => {
  const auth = getAuth()
  
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser

  const userCookie = useCookie('userCookie');

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      await navigateTo('/')

    } else { 
      // User is signed out
      await navigateTo('/login')
    }
    firebaseUser.value = user;

    //@ts-ignore
    userCookie.value = user;
  });
}
