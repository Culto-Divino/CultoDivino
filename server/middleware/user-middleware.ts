export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  const sessionCookie = cookies.session
  const userCookie = cookies.user

  try {
    if (Object.keys(cookies).length === 0) {
      throw new Error(
        '[server/middleware/user-middleware] User is not logged in!'
      )
    }
  } catch (error) {
    // console.error(error)
    setCookie(event, 'session', undefined)
    setCookie(event, 'user', undefined)
    // event.node.res.end(JSON.stringify({ statusCode: 401, error: 'Missing cookies! This could be caused by calling the request on server-side'}))
  }

  // Fazer o usuário disponível para qualquer chamada do servidor.
  try {
    event.context.sessionCookie = sessionCookie
    event.context.userCookie = JSON.parse(userCookie)
  } catch (error) {
    // console.error('Há um valor inválido no parse de userCookie!', error)
  }
})
