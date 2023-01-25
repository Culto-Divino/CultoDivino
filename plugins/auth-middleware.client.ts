export default defineNuxtPlugin(async () => {

    // let nuxtApp = useNuxtApp()

    addRouteMiddleware('auth',async  (to, from) => {
        
        let { data: data } = await useFetch('/api/check-auth-state', {
            method: 'GET',
        })
        
        // @ts-ignore
        if(!(data.value.statusCode == 200)) {
            return navigateTo('/login', {redirectCode: 301})
        }
    })
})