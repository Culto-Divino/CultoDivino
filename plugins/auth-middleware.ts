export default defineNuxtPlugin(() => {
  // let nuxtApp = useNuxtApp()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addRouteMiddleware('auth', async (to, from) => {
    if (process.client) {
      const response = await fetch('/api/check-auth-state', {
        method: 'GET',
      })

      if (!(response.status === 200)) {
        return navigateTo('/login', { redirectCode: 301 })
      }
    }
  })
})
