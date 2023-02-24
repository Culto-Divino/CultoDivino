import Authenticator from '@@/mongo/auth/authenticator'
import userModel from '@@/mongo/models/userModel'

export default defineEventHandler(async (event) => {
  const { id, token } = event.context.sessionCookie

  console.log(id, token)

  const user = await userModel.findById(id)

  console.log(user)
  console.log(Date.now())
  try {
    if (
      !Authenticator.verifyUserAuthToken(
        token,
        user.token,
        user.tokenExpiration
      )
    ) {
      event.node.res.statusCode = 401
      event.node.res.end(JSON.stringify({ message: 'Failed to authenticate' }))
      return
    }
  } catch (error) {
    console.log(error)
  }
  event.node.res.statusCode = 200
  event.node.res.end(JSON.stringify({ message: 'User authenticated' }))
})
