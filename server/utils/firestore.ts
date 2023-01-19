import { app } from './firebase'
import {
  getFirestore, 
  getDocs, 
  collection, 
  doc, 
  addDoc, 
  deleteDoc,
  getDoc,
  updateDoc,
  setDoc, 
} from 'firebase/firestore'

const db = getFirestore(app);


// Filtrar com where, orderby, passando o objeto de query 
export const getDocsFromCollectionQuery = async (collectionPath, query) => {

  const colRef = collection(db, collectionPath)
  let result

  // @ts-ignore
  await getDocs(query, colRef)
    .then( (snapshot) => {
      let docs = snapshot.docs.map((value) => {
        //@ts-ignore
        return { ...value.data(), id:value.id }  
      })
      result = { success: true, docs: docs}

    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }

    })

    return result
}

// Requisitar sem filtro
export const getDocsFromCollection = async (collectionPath) => {

  const colRef = collection(db, collectionPath)
  let result

  await getDocs(colRef)
    .then( (snapshot) => {
      let docs = snapshot.docs.map((value) => {
        //@ts-ignore
        return { ...value.data(), id:value.id }  
      })
      result = { success: true, docs: docs}

    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }

    })

    return result
}

export const addDocToCollection = async (object, collectionPath) => {

  const colRef = collection(db, collectionPath)
  let result

  await addDoc(colRef, object)
    .then((snapshot) => {
      result =  { success: true , doc: { docRef: snapshot, id: snapshot.id } }
    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }  
    })

    return result
}

export const deleteDocFromCollection = async (id, collectionPath) => {

  const docRef = doc(db, `${collectionPath}/${id}`);
  let result;

  await deleteDoc(docRef)
    .then(() => {
      result = { success: true }
    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }
    })
    
    return result
}

export const getDocFromCollection = async (id, collectionPath) => {

  const docRef = doc(db, `${collectionPath}/${id}`);
  let result;

  await getDoc(docRef)
    .then((doc) => {
      result = { success: true, doc: { ...doc.data(), id: doc.id }  } 
    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }
    })
        return result
}

export const updateDocFromCollection = async (updatedData, id, collectionPath) => {

  
  const docRef = doc(db, `${collectionPath}/${id}`);
  let result;

  await updateDoc(docRef, updatedData)
    .then((doc) => {
      result = { success: true } 
    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }
    })
    
    return result
}

export const setDocFromCollection = async (updatedData, id, collectionPath, merge) => {

  
  const docRef = doc(db, `${collectionPath}/${id}`);
  let result;

  await setDoc(docRef, updatedData, {merge: merge})
    .then((doc) => {
      result = { success: true } 
    })
    .catch((e) => {
      console.error(e.message)
      result = { success: false, error: e.message }
    })
    
    return result
}