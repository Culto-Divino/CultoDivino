import userModel from '@@/mongo/models/userModel'
import { generatePasswordHash } from '@@/mongo/models/userModel'
import cookieOptions from '@@/cookie-options.json'

export default defineEventHandler(async (event) => {
  const { password, email } = await readBody(event)

  // Verificar se dados foram enviados corretamente
  if (!password || !email) {
    event.node.res.statusCode = 422
    event.node.res.end(
      JSON.stringify({ message: 'Incorrect body format: missing arguments!' })
    )
    return
  }

  if (await userModel.findOne({ email }).exec()) {
    event.node.res.statusCode = 400
    event.node.res.end(
      JSON.stringify({
        message: 'Failed to create user.',
      })
    )
    return
  }

  
  const user = await userModel.create({
    email,
    password: generatePasswordHash(password),
  })

  const sessionCookieValue = {
    token: user.token,
    id: user._id,
  }

  setCookie(
    event,
    'session',
    JSON.stringify(sessionCookieValue),
    // @ts-expect-error, o objeto sendo passado contém as propriedades necessárias para ser interpretado como CookieSerializeOptions
    cookieOptions
  )

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify(sessionCookieValue))
})
