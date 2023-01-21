import { setDocFromCollection } from './../utils/firestore';
import { addDocToCollection } from '../utils/firestore';
import { serverTimestamp } from 'firebase/firestore';

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const userId = body.userId

  if(!body.userId)
    return { success: false }

  
  const userDoc = {
    lastSignedIn: serverTimestamp()
  }
  
  await setDocFromCollection(userDoc, userId, 'users', true)

  return { success: true }
})