import userModel from '@@/mongo/models/userModel'
import cookieOptions from '@@/cookie-options.json'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const user = await userModel.findOne({ email })

  // @ts-expect-error, método associado a user
  if (!user.verifyPassword(password)) {
    event.node.res.statusCode = 401
    event.node.res.end(JSON.stringify({ message: 'Failed to authenticate.' }))
    return
  }
  // @ts-expect-error, generateUserAuthToken é um método associado a user
  const token = user.generateUserAuthToken()

  const sessionCookieValue = {
    token: token.token,
    id: user._id,
  }

  setCookie(
    event,
    'session',
    JSON.stringify(sessionCookieValue),
    // @ts-expect-error, o objeto sendo passado contém as propriedades necessárias para ser interpretado como CookieSerializeOptions
    cookieOptions
  )
  await user.update({ token: token.token, tokenExpiration: token.validityTime })

  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify({ message: 'Successfully logged in!' }))
})
