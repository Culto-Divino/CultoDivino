import { serverTimestamp } from 'firebase/firestore'
import { setDocFromCollection } from '../utils/firestore'

// OBSOLETE!
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = body.user

  if (!body.user) return { success: false }

  const userDoc = {
    lastSignedIn: serverTimestamp(),
  }
  await setDocFromCollection(userDoc, user.uid, 'users', true)

  return { success: true }
})
