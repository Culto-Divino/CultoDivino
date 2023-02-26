export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  const sessionCookie = cookies.session

  // Fazer o usuário disponível para qualquer chamada do servidor.
  try {
    event.context.sessionCookie = JSON.parse(sessionCookie)
  } catch (error) {
    // console.error('Há um valor inválido no parse de userCookie!', error)
  }
})
