import { getApps } from 'firebase/app'
import { getDocsFromCollection } from '../utils/firestore'

export default defineEventHandler(async (event) => {
  const user = event.context.userCookie

  console.log(getApps().length)

  const characters = await getDocsFromCollection(`users/${user.uid}/characters`)

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(characters))
})
