import userModel from "~~/mongo/models/userModel"

export default defineEventHandler(async (event) => {

  let characters

  try {
    const { id } = event.context.sessionCookie
    const user = await userModel.findById(id)
    await user.populate('characters')
    characters = user.characters
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    event.node.res.statusCode = 500
    event.node.res.end(JSON.stringify({ message: 'Failed to fetch characters' }))
  }

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(characters))
})
