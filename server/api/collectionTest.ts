import { fetchData } from '../utils/firestore'

export default defineEventHandler(async (event) => {
    // return { user: event.context.user } retorna um JSON

    let data = await fetchData('users/P8V73vUNlIZuhDHuSbCS/characters')

    // Retorna um objeto :)
    return { data: data } 
    // event.node.res.end(data) 
})