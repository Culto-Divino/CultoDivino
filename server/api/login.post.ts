import { getAuth } from 'firebase-admin/auth'
import { getApps } from 'firebase/app'
import createUserDataObject from '../utils/user'

export default defineEventHandler(async (event) => {
  const { idToken, uid } = await readBody(event)
  const expirationTimeSeconds = 60 * 60 * 24 * 5

  const options = {
    maxAge: expirationTimeSeconds,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    // domain:
  }
  console.log(getApps().length)

  const userInfo = createUserDataObject(uid)

  // set user cookie
  // @ts-expect-error, objeto options sendo passado é considerado inválido, quando na verdade é.
  setCookie(event, 'user', JSON.stringify(userInfo), options)

  try {
    const sessionCookie = await getAuth().createSessionCookie(idToken, {
      expiresIn: expirationTimeSeconds * 1000,
    })
    // @ts-expect-error, objeto options sendo passado é considerado inválido, quando na verdade é.
    setCookie(event, 'session', JSON.stringify(sessionCookie), options)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error: ', e)
    return { statusCode: 401, error: 'UNATHORIZED REQUEST!' }
  }

  return { statusCode: 200, body: JSON.stringify({ status: 'sucess' }) }
})
