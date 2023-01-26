import { setDocFromCollection } from './../utils/firestore';
import { addDocToCollection } from '../utils/firestore';
import { serverTimestamp } from 'firebase/firestore';


// OBSOLETE!
export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const user = body.user

    if(!body.user)
      return { success: false }

    
    const userDoc = {
      lastSignedIn: serverTimestamp()
    }
    const userRef = await setDocFromCollection(userDoc, user.uid, 'users', true)

    return { success: true }
})