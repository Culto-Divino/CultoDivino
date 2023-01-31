export default defineEventHandler((event) => {
  const options = { httpOnly: true, secure: true, sameSite: 'none' }

  // @ts-expect-error, options é valido.
  setCookie(event, 'user', JSON.stringify(undefined), options)
  // @ts-expect-error, options é valido.
  setCookie(event, 'session', JSON.stringify(undefined), options)

  return { statusCode: 200, body: JSON.stringify({ status: 'sucess' }) }
})
