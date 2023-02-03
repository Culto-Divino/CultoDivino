import { getApps } from 'firebase-admin/app'
import { getDocsFromCollection } from '../utils/firestore'

export default defineEventHandler(async (event) => {
  const user = event.context.userCookie

  console.log(getApps())

  const characters = await getDocsFromCollection(`users/${user.uid}/characters`)

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(characters))
})
