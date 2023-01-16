export default defineEventHandler((event) => {
    const cookies = parseCookies(event);
    const userCookie = cookies.userCookie;
    
    try {
        if (!userCookie){
            throw new Error("User is not logged in!")
        }
    } catch (error) {
        console.error(error);
    }

    // Fazer o usuário disponível para qualquer chamada do servidor.
    // @ts-ignore
    event.context.user = userCookie;
})