export default defineNuxtPlugin(() => {

    addRouteMiddleware('auth', async (to, from) => {
        const { data: res } = await useFetch('/api/check-auth-state', {
            method: 'GET',
        })
        console.log(res)

        //@ts-expect-error
        if(res.statusCode === 401) {
            console.log("USER UNAUTHORIZED!")
            return navigateTo('/login')
        }
    })
  })
  