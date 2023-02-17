import { getDocsFromCollection } from '../../mongo/utils/firestore'

export default defineEventHandler(async (event) => {
  let archetypes
  try {
    archetypes = await getDocsFromCollection('archetypes')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error fetching archetypes', e)
    return { statusCode: 500 }
  }

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(archetypes))
})
