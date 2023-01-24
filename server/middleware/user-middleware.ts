export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  const sessionCookie = cookies['session'];
  const userCookie = cookies['user'];


  try {
    if (!sessionCookie || !userCookie){
       throw new Error("[server/middleware/user-middleware] User is not logged in!")
    }
  } catch (error) {
    console.error(error);
    event.node.res.end()
    return
  }
  
  //Fazer o usuário disponível para qualquer chamada do servidor.
  event.context.sessionCookie = sessionCookie;
  event.context.userCookie = JSON.parse(userCookie);
})