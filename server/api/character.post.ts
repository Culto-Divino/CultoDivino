import userModel from "~~/mongo/models/userModel"
import characterModel from "~~/mongo/models/characterModel"

export default defineEventHandler(async (event) => {
  const { id } = event.context.sessionCookie
  const { name, age, sex, fdv, element, archetype, } = await readBody(event)
  const user = await userModel.findById(id)


  if (!name || !age || !sex || !fdv || !element || !archetype) {
    event.node.res.statusCode = 422
    event.node.res.end(JSON.stringify({ message: 'Incorrect body format: missing arguments!' }))
    return
  }

  let character

  try {
    character = await characterModel.create({
      age,
      sex,
      fdv,
      name,
      element,
      archetype
    })
    // @ts-expect-error, addCharacter é um método associado a 'user'
    user.addCharacter(character._id)
    console.log(user.characters)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    event.node.res.statusCode = 500
    event.node.res.end(JSON.stringify({ message: 'Failed to create character.' }))
    return
  }

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify({ message: 'Character created successfully', character }))
})
