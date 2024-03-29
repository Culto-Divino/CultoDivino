export default defineNuxtPlugin(() => {
  // let nuxtApp = useNuxtApp()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addRouteMiddleware('auth', async (to, from) => {
    if (process.client) {
      const { data } = await useFetch('/api/check-auth-state', {
        method: 'GET',
      })

      // @ts-expect-error, "res" sempre vai ter atributo "statusCode"
      if (!(data.value.statusCode === 200)) {
        return navigateTo('/login', { redirectCode: 301 })
      }
    }
  })
})
