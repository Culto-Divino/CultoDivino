import { getAuth } from 'firebase-admin/auth'

export default defineEventHandler(async (event) => {

    const sessionCookie = event.context.sessionCookie

    try{
        const claim = await getAuth().verifySessionCookie(sessionCookie)
        return { statusCode: 200, claim: claim }
    }catch(e){
        console.error("Error: ", e)
        return { statusCode: 401, error: 'UNATHORIZED REQUEST!'}
    }



})