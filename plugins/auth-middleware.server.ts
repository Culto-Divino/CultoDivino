import { getCookie } from 'h3'
import { getAuth } from 'firebase-admin/auth'

export default defineNuxtPlugin(() => {
  const { ssrContext } = useNuxtApp()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addRouteMiddleware('auth', async (to, from) => {
    const sessionCookie = getCookie(ssrContext.event, 'session')
    try {
      await getAuth().verifySessionCookie(sessionCookie)
    } catch (error) {
      // console.log(error)
      return abortNavigation(
        'Ops, parece que sua sessão está inválida!\n Recarregue a página para ser direcionado para o login.'
      )
    }
  })
})