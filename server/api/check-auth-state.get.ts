import { getAuth } from 'firebase-admin/auth'

export default defineEventHandler(async (event) => {
  const sessionCookie = event.context.sessionCookie
  let error = false

  const claim = await getAuth()
    .verifySessionCookie(sessionCookie)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      // console.log("Verification error! [server/api/check-auth-state.get]:\n",e)
      event.node.res.end(
        JSON.stringify({ statusCode: 401, error: 'UNATHORIZED REQUEST!' })
      )
      error = true
    })
  if (error) return

  event.node.res.end(JSON.stringify({ statusCode: 200, claim }))
})
