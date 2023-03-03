export default defineNuxtPlugin(() => {
    // let nuxtApp = useNuxtApp()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addRouteMiddleware('auto-login', async (to, from) => {
        if (process.client) {
            const response = await fetch('/api/check-auth-state', {
                method: 'GET',
            })

            if (response.status === 200) {
                return navigateTo('/escolha-de-personagem', { redirectCode: 301 })
            }
        }
    })
})
