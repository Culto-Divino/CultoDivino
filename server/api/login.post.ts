import userModel from '@@/mongo/models/userModel'
import cookieOptions from '@@/cookie-options.json'
import Authenticator from '@@/mongo/auth/authenticator'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const user = await userModel.findOne({ email }).exec()

  if (!Authenticator.verifyPassword(password, user?.password)) {
    event.node.res.statusCode = 401
    event.node.res.end(JSON.stringify({ message: 'Failed to authenticate.' }))
    return
  }

  const token = Authenticator.generateUserAuthToken()

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
