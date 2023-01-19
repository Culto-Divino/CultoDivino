import { app } from './firebase'
import { initializeFirestore, getFirestore, getDocs, collection, doc } from 'firebase/firestore'



const db = getFirestore(app);

export const fetchData = async (col) => {

  const colRef = collection(db, col);
  let docs = []

  await getDocs(colRef)
    .then( (snapshot) => {
      console.log(snapshot.docs)
      docs = snapshot.docs.map((value) => {
        return { ...value.data(), id:value.id }  
      })
    })
    .catch((e) => {
      console.error(e.message)
      return null;

    })
    return docs
}
