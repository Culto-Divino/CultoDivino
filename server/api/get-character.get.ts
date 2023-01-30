import { getDocFromCollection } from '../utils/firestore'

export default defineEventHandler(async (event) => {
  const characterId = getHeader(event, 'Character-Id')
  const uid = event.context.userCookie.uid

  const character = await getDocFromCollection(
    characterId,
    `users/${uid}/characters`
  )

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(character))
})
