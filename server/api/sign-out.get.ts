import { getAuth } from 'firebase-admin/auth'

export default defineEventHandler(async (event) => {
    const options = { httpOnly: true, secure: true, sameSite: 'none' }

    // @ts-expect-error
    setCookie(event, 'user', JSON.stringify(undefined), options)
    // @ts-expect-error
    setCookie(event, 'session', JSON.stringify(undefined) , options)


    return { statusCode: 200, body: JSON.stringify({ status: 'sucess' })}
})
