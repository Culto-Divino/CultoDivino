import { getDocFromCollection } from '../utils/firestore'

export default defineEventHandler(async (event) => {
  const characterId = getHeader(event, 'Character-Id')
  const uid = event.context.userCookie.uid
  let character

  try {
    character = await getDocFromCollection(
      characterId,
      `users/${uid}/characters`
    )
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error fetching character', e)
    return { statusCode: 500 }
  }

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(character))
})
