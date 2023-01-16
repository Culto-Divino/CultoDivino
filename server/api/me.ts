export default defineEventHandler((event) => {
    // return { user: event.context.user } retorna um JSON

    // Retorna um objeto :)
    event.node.res.end(event.context.user) 
})